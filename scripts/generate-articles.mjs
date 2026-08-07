// Generează automat articole pentru Cleaning Journal folosind Google Gemini (nivel gratuit).
// Rulează în GitHub Actions. Necesită variabila de mediu GEMINI_API_KEY.
// Scrie fișiere Markdown în src/posts/ ; commit-ul îl face workflow-ul.

import fs from "node:fs";
import path from "node:path";

const API_KEY = process.env.GEMINI_API_KEY;
const COUNT = parseInt(process.env.ARTICLES_PER_RUN || "6", 10);
const POSTS_DIR = "src/posts";

// Listă de modele candidate (nivel gratuit). Scriptul le încearcă în ordine
// și trece automat la următorul dacă unul nu e disponibil (404 / not available).
// Poți forța un model prin variabila GEMINI_MODEL (îl punem primul în listă).
const MODEL_CANDIDATES = [
  ...(process.env.GEMINI_MODEL ? [process.env.GEMINI_MODEL] : []),
  "gemini-flash-latest",
  "gemini-2.5-flash-lite",
  "gemini-flash-lite-latest",
  "gemini-2.5-flash",
  "gemini-2.0-flash",
];
let modelIndex = 0;
function currentModel() { return MODEL_CANDIDATES[modelIndex]; }
function isModelUnavailable(status, text) {
  if (status !== 404 && status !== 400 && status !== 403) return false;
  return /not available|no longer available|not found|is not supported|unavailable|does not exist/i.test(text || "");
}

if (!API_KEY) {
  console.error("Lipsește GEMINI_API_KEY.");
  process.exit(1);
}

const CATEGORIES = [
  "Echipamente",
  "Produse",
  "Metode de lucru",
  "Facility management",
  "Igienă",
  "Sustenabilitate",
  "Studii de caz",
  "Tendințe",
];

// Zone tematice care ghidează varietatea (pentru un public B2B din curățenia profesională)
const THEMES = [
  "mașini de spălat-aspirat pardoseli (scrubber-dryer) și productivitate",
  "aspiratoare industriale și filtrare",
  "monodiscuri și tratamente pardoseli",
  "detergenți, pH și dozare corectă",
  "dezinfectanți și protocoale sanitare",
  "microfibră și consumabile profesionale",
  "coduri de culori și proceduri anti-contaminare",
  "curățenie în HoReCa, spitale, spații comerciale, birouri",
  "dimensionarea echipelor și costuri pe contract",
  "curățenie sustenabilă și reducerea consumului",
  "mentenanța echipamentelor și service",
  "tendințe și tehnologii noi în curățenia profesională",
];

function slugify(s) {
  return String(s)
    .toLowerCase()
    .replace(/ă/g, "a").replace(/â/g, "a").replace(/î/g, "i")
    .replace(/ș/g, "s").replace(/ş/g, "s").replace(/ț/g, "t").replace(/ţ/g, "t")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70);
}

function existingTitles() {
  try {
    return fs.readdirSync(POSTS_DIR)
      .filter((f) => f.endsWith(".md"))
      .map((f) => {
        const m = fs.readFileSync(path.join(POSTS_DIR, f), "utf8").match(/title:\s*"?([^"\n]+)"?/);
        return m ? m[1].trim() : "";
      })
      .filter(Boolean);
  } catch {
    return [];
  }
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

async function generateOne(theme, category, avoid) {
  const prompt = `Ești redactor la „Cleaning Journal", o revistă online B2B în limba română dedicată industriei de curățenie profesională (public: firme de curățenie, facility management, administratori de clădiri).

Scrie UN articol original, util și practic, în limba română, pe tema: „${theme}", potrivit categoriei „${category}".

Cerințe:
- Ton profesionist, clar, fără marketing gol; informație aplicabilă în practică.
- 600–1000 de cuvinte.
- Structură cu subtitluri Markdown (##). Poți include o listă sau un tabel Markdown unde ajută.
- NU folosi titlul H1 în corp (titlul e separat).
- Evită subiecte deja tratate (nu repeta aceste titluri): ${avoid.slice(0, 40).join("; ") || "—"}.

Răspunde DOAR cu un obiect JSON valid, fără text în plus, cu exact cheile:
{"title": "...", "dek": "un subtitlu scurt de 1 propoziție", "tags": ["3-5 etichete scurte"], "body": "conținutul articolului în Markdown"}`;

  const payload = JSON.stringify({
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.9,
      maxOutputTokens: 8192,
      responseMimeType: "application/json",
      // Modelele „flash" 2.5 au „thinking" activ implicit, care consumă bugetul de tokeni
      // și lasă răspunsul JSON trunchiat. Îl dezactivăm ca să rămână tokeni pentru articol.
      thinkingConfig: { thinkingBudget: 0 },
    },
  });

  let res, lastText = "";
  for (let attempt = 0; attempt < 8; attempt++) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${currentModel()}:generateContent?key=${API_KEY}`;
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
    });
    if (res.ok) break;
    lastText = await res.text();
    // Model indisponibil pentru acest cont → trecem la următorul model din listă
    if (isModelUnavailable(res.status, lastText) && modelIndex < MODEL_CANDIDATES.length - 1) {
      console.log(`  Model „${currentModel()}" indisponibil (HTTP ${res.status}); încerc „${MODEL_CANDIDATES[modelIndex + 1]}".`);
      modelIndex++;
      continue;
    }
    if (res.status === 429 || res.status >= 500) {
      // limită de rată / eroare temporară — așteaptă și reîncearcă
      let wait = 20000;
      const m = lastText.match(/"retryDelay":\s*"(\d+)s"/);
      if (m) wait = (parseInt(m[1], 10) + 2) * 1000;
      wait = Math.min(wait, 65000);
      console.log(`  HTTP ${res.status}; reîncerc în ${Math.round(wait / 1000)}s (încercarea ${attempt + 1}/8) [model: ${currentModel()}]`);
      await new Promise((r) => setTimeout(r, wait));
      continue;
    }
    throw new Error(`Gemini HTTP ${res.status}: ${lastText}`);
  }
  if (!res.ok) throw new Error(`Gemini HTTP ${res.status} după reîncercări: ${lastText}`);
  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
  if (!text.trim()) {
    const fr = data?.candidates?.[0]?.finishReason || "necunoscut";
    throw new Error(`Răspuns gol de la Gemini (finishReason: ${fr}).`);
  }
  let jsonStr = text.trim().replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```$/i, "").trim();
  let obj;
  try {
    obj = JSON.parse(jsonStr);
  } catch {
    const s = jsonStr.indexOf("{"), e = jsonStr.lastIndexOf("}");
    obj = JSON.parse(jsonStr.slice(s, e + 1));
  }
  if (!obj.title || !obj.body) throw new Error("Răspuns incomplet de la Gemini.");
  return obj;
}

async function main() {
  if (!fs.existsSync(POSTS_DIR)) fs.mkdirSync(POSTS_DIR, { recursive: true });
  const avoid = existingTitles();
  const themes = shuffle(THEMES);
  const cats = shuffle(CATEGORIES);
  const date = todayISO();
  let written = 0;
  console.log(`Modele candidate: ${MODEL_CANDIDATES.join(", ")}`);

  for (let i = 0; i < COUNT; i++) {
    const theme = themes[i % themes.length];
    const category = cats[i % cats.length];
    try {
      const art = await generateOne(theme, category, avoid);
      avoid.push(art.title);
      let slug = slugify(art.title) || `articol-${i}`;
      let file = path.join(POSTS_DIR, `${date}-${slug}.md`);
      let n = 2;
      while (fs.existsSync(file)) { file = path.join(POSTS_DIR, `${date}-${slug}-${n++}.md`); }

      const tags = Array.isArray(art.tags) ? art.tags : [];
      const fm =
`---
title: ${JSON.stringify(art.title)}
dek: ${JSON.stringify(art.dek || "")}
category: ${JSON.stringify(category)}
author: "Redacția Cleaning Journal"
date: ${date}
tags:
${tags.map((t) => `  - ${JSON.stringify(String(t))}`).join("\n") || "  - curățenie profesională"}
---

${String(art.body).trim()}
`;
      fs.writeFileSync(file, fm, "utf8");
      console.log("Scris:", file);
      written++;
    } catch (e) {
      console.error(`Articol ${i + 1} eșuat:`, e.message);
    }
    await new Promise((r) => setTimeout(r, 5000)); // respectă limitele nivelului gratuit
  }

  console.log(`Gata. Articole scrise: ${written}/${COUNT}`);
  if (written === 0) process.exit(1);
}

main().catch((e) => { console.error(e); process.exit(1); });
