# Cleaning Journal

Revistă online de curățenie profesională — site static (Eleventy) cu panou de editare **Decap CMS**.
Găzduire gratuită (Netlify / Cloudflare Pages), domeniu propriu `cleaningjournal.com`, publicare automată zilnică prin git.

## Structură

```
src/
  _data/        → configurări (site.js, categorii.js)
  _includes/    → layout-uri (base.njk, post.njk)
  posts/        → articolele (fișiere .md) ← aici se adaugă conținut
  admin/        → panoul Decap CMS (/admin)
  assets/       → CSS, imagini, logo, favicon
  index.njk     → prima pagină
  categorie.njk → paginile de categorie (generate automat)
  despre.njk    → pagina Despre
_site/          → site-ul generat (nu se editează manual)
```

## Rulare locală

```bash
npm install
npm run build      # generează site-ul în _site/
npm run dev        # server local cu auto-reload: http://localhost:8080
```

Pentru a testa și panoul de editare local, într-un al doilea terminal:
```bash
npm run cms        # pornește decap-server pentru backend local
```
apoi deschide http://localhost:8080/admin/

---

## Punere online (gratuit) — pași

### 1. Cont GitHub + repository
1. Creează un cont gratuit pe github.com (dacă nu ai).
2. Creează un repository nou, ex. `cleaningjournal`.
3. Încarcă conținutul acestui folder în repo (fără `node_modules` și `_site`).

### 2. Deploy pe Netlify (recomandat)
1. Creează cont gratuit pe netlify.com și alege **Add new site → Import from GitHub**.
2. Selectează repo-ul. Netlify citește `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `_site`
3. Apasă **Deploy**. În ~1 minut ai site-ul live pe un subdomeniu `nume.netlify.app`.

### 3. Domeniul cleaningjournal.com
1. În Netlify: **Domain settings → Add custom domain** → `cleaningjournal.com`.
2. La furnizorul unde e domeniul, modifică DNS-ul conform indicațiilor Netlify
   (de obicei un record `A`/`CNAME` sau schimbarea nameserver-elor). **Nu e nevoie de hostingul tău.**
3. Netlify activează automat certificatul SSL (https) gratuit.

### 4. Panoul de editare (Decap CMS)
Varianta cea mai simplă, cu Netlify:
1. Netlify → **Integrations / Identity** → activează **Identity**.
2. Activează **Git Gateway** (Identity → Services → Git Gateway).
3. Identity → **Invite users** → invită-ți adresa de email.
4. Intră pe `cleaningjournal.com/admin/`, acceptă invitația și te loghezi.

> Alternativ, se poate folosi backend-ul GitHub direct (vezi comentariile din `src/admin/config.yml`).

### 5. Publicare automată zilnică
Articolele noi apar ca fișiere `.md` în `src/posts/`. Orice fișier nou „împins" în repo
declanșează automat un build Netlify și publicarea. Scriptul de generare zilnică
(`scripts/genereaza-articol.js`, livrat separat) face exact asta prin git.

---

## Cum adaugi manual un articol
Creează un fișier nou în `src/posts/`, ex. `titlul-articolului.md`:

```markdown
---
title: "Titlul articolului"
dek: "Un subtitlu scurt care apare sub titlu."
category: "Echipamente"
author: "Redacția Cleaning Journal"
date: 2026-08-07
tags:
  - eticheta1
  - eticheta2
---

Conținutul articolului în Markdown...
```

Categorii disponibile: Echipamente, Produse, Metode de lucru, Facility management, Igienă, Sustenabilitate, Studii de caz, Tendințe.
