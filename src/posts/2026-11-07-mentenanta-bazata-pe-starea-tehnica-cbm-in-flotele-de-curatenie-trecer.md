---
title: "Mentenanța bazată pe starea tehnică (CBM) în flotele de curățenie: Trecerea de la revizii calendaristice la diagnoză pe parametri critici"
dek: "Cum permite monitorizarea în timp real a sarcinii electrice, a vibrațiilor și a profilului termic eliminarea opririlor neplanificate și prelungirea ciclului de viață al utilajelor."
category: "Tendințe"
author: "Redacția Cleaning Journal"
date: 2026-11-07
tags:
  - "mentenanță echipamente"
  - "CBM"
  - "facility management"
  - "flote utilaje"
---

În industria de facility management și curățenie comercială, paradigma clasică de întreținere a echipamentelor se împarte, de regulă, între două extreme: intervenția reactivă (reparația după defectare) și mentenanța preventivă programată la intervale calendaristice sau la un număr fix de ore de funcționare. Deși a doua variantă este net superioară primei, ambele modele generează ineficiențe economice majore. 

Uzura componentelor mecanice și electrice ale unui utilaj de curățenie nu este liniară; ea depinde de rugozitatea suprafeței, chimia utilizată, presiunea aplicată de operator și calitatea alimentării electrice. În acest context, tendința dominantă la nivel european este adoptarea **mentenanței bazate pe starea tehnică** (*Condition-Based Maintenance – CBM*). Această abordare presupune monitorizarea parametrilor fizici și electrici în timpul operării pentru a interveni exclusiv atunci când indicatorii de performanță semnalează începutul degradării unei componente.

## Limitele reviziilor standard și argumentul pentru CBM

Mentenanța la interval fix (de exemplu, revizia generală la fiecare 250 de ore de funcționare a unei mașini de spălat-aspirat) presupune înlocuirea unor piese care pot fi încă în stare optimă sau, dimpotrivă, ignoră degradările accelerate cauzate de o exploatare defectuoasă între ciclurile de service. 

În practică, un utilaj exploatat pe o pardoseală din beton elicopterizat cu reziduuri abrazive va solicita motoarele de perie și racleta de două ori mai rapid decât același echipament operat pe rășină epoxidică netedă. CBM elimină presupunerile și introduce decizia bazată pe măsurători continue.

## Parametrii critici monitorizați în arhitectura CBM

Implementarea CBM pe mașinile de spălat-aspirat industriale și pe aspiratoarele profesionale se concentrează pe patru subsisteme esențiale:

1. **Semnătura de curent a motoarelor de perii (Motor Current Signature Analysis - MCSA):**
Creșterea consumului de amperi la turație constantă, fără modificarea tipului de pardoseală sau a setării de presiune, indică fie uzura lagărelor/rulmenților, fie o aliniere defectuoasă a transmisiei sau frecarea mecanică internă. O creștere susținută cu 15-20% peste valoarea nominală anunță o defecțiune iminentă cu zeci de ore înainte de blocarea completă a motorului.

2. **Profilul termic și căderea de depresiune a turbinelor de vacuum:**
Senzorii de temperatură montați pe carcasa motorului de aspirație, corelați cu monitorizarea diferențială a presiunii (depresiunii), detectează imediat gâtuirile de debit (filtre colmatate, furtunuri parțial obturate) sau pătrunderea umidității în compartimentul electric. O creștere a temperaturii de operare peste pragul critic de 65°C determină degradarea izolației bobinajului, generând scurtcircuite costisitoare.

3. **Telemetria avansată a sistemelor de stocare a energiei (BMS):**
Tranziția accelerată către bateriile Litiu-Fier-Fosfat (LiFePO4) permite extragerea parametrilor detaliați prin magistrala CAN (Controller Area Network): tensiunea individuală a celulelor, rezistența internă și ciclurile de descărcare profundă. Monitorizarea dezechilibrului de tensiune între celule (delta > 30 mV) semnalează necesitatea unei calibrări sau a înlocuirii unui modul înainte ca întregul banc de baterii să cedeze.

4. **Monitorizarea debitului și a electrovalvelor de soluție:**
Blocarea parțială a duzelor sau calcifierea electrovalvei de dozare crește contrapresiunea în instalație și reduce debitul real livrat pe perii. Monitorizarea debitului volumic previne spălarea ineficientă și risipa de chimicale.

## Comparație strategică între modelele de mentenanță

| Criteriu de evaluare | Mentenanță Reactivă | Mentenanță Preventivă (Ore/Calendar) | Mentenanță Bazată pe Stare (CBM) |
| :--- | :--- | :--- | :--- |
| **Cost direct piese** | Foarte ridicat (daune colaterale) | Moderat (înlocuiri premature) | Optimizat (doar piese degradate) |
| **Timp de nefuncționare (Downtime)** | Neplanificat, durată mare | Planificat, frecvență fixă | Minim, planificat țintit |
| **Resurse umane service** | Puse sub presiune, intervenții de urgență | Suprasolicitate cu verificări de rutină | Eficiente, ghidate de datele de diagnoză |
| **Durată de viață utilaj (TCO)** | Redusă semnificativ (-30-40%) | Standard (conform specificației OEM) | Extinsă (+20-35%) |

## Protocol de integrare a diagnozei pe parametri în operațiunile de FM

Pentru companiile de curățenie și departamentele de facility management care gestionează flote medii și mari (peste 15-20 de echipamente), tranziția la CBM nu necesită înlocuirea completă a parcului de utilaje, ci adaptarea treptată a procedurilor:

* **Faza 1 – Colectarea liniilor de referință (Baselines):** Înregistrarea curenților de mers în gol și în sarcină, a nivelului de vibrații și a temperaturilor de funcționare imediat după livrarea echipamentului nou sau după o revizie capitală. Aceste valori devin reperul de comparație.
* **Faza 2 – Integrarea datelor telemetrice:** Utilizarea dongle-urilor IoT conectate la porturile de diagnoză ale utilajelor de generație nouă. Datele transmise în cloud (alerte de suprasarcină, coduri de eroare interne ale controllerului) sunt mapate automat în platforma CAFM/CMMS a prestatorului.
* **Faza 3 – Echiparea tehnicienilor interni cu unelte de diagnostic de precizie:** Furnizarea de clești ampermetrici True-RMS, termometre în infraroșu și manometre diferențiale portabile pentru verificarea echipamentelor la fiecare inspecție vizuală.
* **Faza 4 – Definirea pragurilor de intervenție timpurie:** Stabilirea unor proceduri clare: de exemplu, dacă tensiunea de încărcare scade sub pragul critic sau vibrația la axul periei depășește toleranța admisă, echipamentul este programat la atelier în termen de 48 de ore, evitându-se distrugerea reductorului.

Mentenanța bazată pe starea tehnică redefinește managementul activelor în curățenia industrială. Trecerea de la reparații oarbe la decizii analitice protejează marjele financiare ale contractelor, securizează nivelurile de servicii (SLA) asumate în fața beneficiarului și transformă departamentul tehnic dintr-un centru de costuri într-un pilon de eficiență operațională.
