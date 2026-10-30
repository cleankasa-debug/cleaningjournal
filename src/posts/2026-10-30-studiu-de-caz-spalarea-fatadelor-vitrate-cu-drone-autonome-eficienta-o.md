---
title: "Studiu de caz: Spălarea fațadelor vitrate cu drone autonome – Eficiență operațională și reducerea riscului de muncă la înălțime"
dek: "Cum a redus un operator FM timpul de execuție cu 62% și a eliminat expunerea la risc SSM la o clădire de birouri clasa A prin adoptarea tehnologiei tethered-drone cu apă purificată."
category: "Studii de caz"
author: "Redacția Cleaning Journal"
date: 2026-10-30
tags:
  - "drone curatenie"
  - "spalare fatade"
  - "apa pura deionizata"
  - "facility management"
  - "tehnologii noi"
---

## Contextul proiectului și provocările mentenanței clasice

Mentenanța exterioară a fațadelor vitrate de mari dimensiuni rămâne una dintre cele mai costisitoare și riscante activități din portofoliul unui furnizor de Facility Management. La un complex de birouri de clasa A (suprafață vitrată totală de 14.500 m², regim de înălțime 2S+P+10E), prestatorul de servicii se confrunta cu blocaje operaționale recurente generate de utilizarea exclusivă a alpiniștilor utilitari și a nacelelor suspendate:

- **Expunere ridicată SSM:** Ore numeroase de lucru la înălțime și timpi lungi de avizare a planurilor de securitate.
- **Dependență meteo pronunțată:** Nacelele suspendate trebuiau oprite la rafale de vânt ce depășeau 7-8 m/s, generând întârzieri de până la 3 săptămâni per ciclu sezonier.
- **Perturbarea activității chiriașilor:** Blocarea trotuarelor perimetrale pentru delimitarea zonelor de siguranță terestră.
- **Costuri indirecte mari:** Inspecțiile anuale ale punctelor de ancorare, amortizarea echipamentelor de acces și costul polițelor de asigurare pentru munca la înălțime.

Pentru a reduce durata de execuție și a optimiza TCO-ul (Total Cost of Ownership) pe acest serviciu, operatorul a implementat un proiect-pilot: spălarea robotizată prin dronă conectată terestru (tethered drone).

## Soluția tehnologică: Arhitectura sistemului dronă-sol

Sistemul implementat este compus dintr-o unitate aeriană multi-rotor de clasă industrială conectată printr-un cordon ombilical (*tether*) la o stație mobilă de sol montată pe o autoutilitară tehnică.

```
[Stație terestră: Rețea apă] 
       │
       ▼
[Filtrare 4 trepte (Sedimente + Carbon + Osmoză + DI)] -> Rezultat: TDS < 5 ppm
       │
       ▼
[Pompă înaltă presiune (ajustată la 12-15 bar la duză)]
       │
       ▼ (Furtun ultra-ușor + Cablu alimentare 230V integrate în cordon)
[Dronă tethered cu senzori LiDAR și duză evantai cu unghi reglabil]
```

1. **Producția apei deionizate (Pure Water Technology):** Apa trece printr-o stație mobilă de osmoză inversă și pat de rășină deionizatoare (DI), ajungând la o conductivitate sub 5 ppm TDS (Total Dissolved Solids). Acest lucru elimină necesitatea utilizării detergenților și uscării manuale cu racleta; apa se evaporă complet fără urme sau depuneri de calcar.
2. **Alimentarea continuă:** Cordonul hibrid conține conductori electrici de înaltă tensiune (care alimentează neîntrerupt motoarele dronei) și un furtun de presiune de 8 mm din polimer ramforsat cu kevlar. Autonomia de zbor nu este limitată de baterii, permițând cicluri de lucru continue de 4-6 ore.
3. **Ghidaj și siguranță:** Drona folosește senzori de distanță LiDAR și camere optice de flux pentru a menține o distanță constantă de 0,8 metri față de sticlă, indiferent de curenții de aer generați de profilul clădirii.

## Protocolul operațional și calibrarea parametrilor de lucru

În faza de calibrare, s-a stabilit că presiunea aplicată la nivelul duzei nu trebuie să depășească 16 bar. O presiune superioară riscă să deterioreze garniturile de etanșare EPDM ale tâmplăriei de aluminiu sau să forțeze infiltrarea apei în sistemul de ventilație a fațadei ventilate.

Fluxul de lucru a fost structurat astfel:
- **Scanarea și maparea inițială:** Drona parcurge fațada în mod manual asistat pentru a identifica obstacolele arhitecturale (parasolare, logii adânci, deflectoare).
- **Traseul automatizat:** Algoritmul trasează linii de zbor verticale suprapuse cu 20% lățime de bandă. Viteza verticală a fost calibrată la 0,35 m/s pentru a permite jetului de apă să disloce praful urban și depunerile atmosferice.
- **Echipa de operare:** A fost redusă la doar două persoane per schimb: un pilot autorizat (la consola de monitorizare) și un tehnician de sol (care gestionează stația de osmoză, cablul ombilical și delimitarea zonei de lucru).

## Rezultate comparative: Cifrele tranziției tehnologice

După finalizarea primelor două cicluri complete de curățare a anvelopei clădirii, rezultatele obținute au fost comparate cu media istorică a ultimilor trei ani (metoda tradițională cu alpiniști):

| Indicator de performanță (KPI) | Metoda clasică (Alpiniști utilitari) | Tehnologia cu dronă tethered | Variație | Observații operaționale |
| :--- | :--- | :--- | :--- | :--- |
| **Durată totală de execuție** | 16 zile lucrătoare | 6 zile lucrătoare | **-62.5%** | Fără timpi morți de montaj linii de viață |
| **Ore lucrate la înălțime (SSM)** | 256 ore-om | 14 ore-om | **-94.5%** | Alpiniștii au intervenit doar pe zonele inaccesibile dronei |
| **Consum chimicale** | 45 L concentrat biodegradabil | 0 L (doar apă deionizată pură) | **-100%** | Conformitate completă cu cerințele ESG |
| **Cost operațional total/ciclu** | 12.800 EUR | 7.950 EUR | **-37.9%** | Reducere costuri forță de muncă și asigurări SSM |
| **Consum specific de apă** | 0,65 L / m² | 0,82 L / m² | **+26.1%** | Compensat de lipsa agenților chimici de curățare |

## Lecții învățate și limite operaționale în teren

Deși saltul de eficiență este semnificativ, proiectul a scos în evidență câteva limitări clare care trebuie evaluate de orice operator FM înainte de achiziția sau subcontractarea unui astfel de sistem:

1. **Sensibilitatea la vânt:** Peste pragul de 9,5 m/s, drona începe să consume prea multă energie pentru menținerea poziției, iar jetul de apă este dispersat înainte de impactul optim cu suprafața vitrată. Totuși, reluarea lucrului după oprire este instantanee, spre deosebire de nacelă, care necesită proceduri complexe de ancorare.
2. **Elemente constructive complexe:** În cazul clădirilor cu geometrie neregulată, balcoane adânci sau copertine pronunțate, drona nu poate curăța intrândurile fără riscul de a atinge structura. Pentru acest imobil, 5,5% din suprafața totală vitrată (logiile retrase ale etajului 10) a necesitat în continuare finisare manuală de către o echipă redusă de alpiniști.
3. **Calitatea apei de alimentare:** Stația mobilă de osmoză necesită o monitorizare strictă a presiunii din rețeaua clădirii. Dacă presiunea scade sub 2,5 bar la intrare, debitul de ieșire al apei pure scade, ceea ce impune utilizarea unui rezervor-tampon de minim 500 litri amplasat la sol.

Implementarea a demonstrat că tehnologia cu dronă și apă deionizată nu elimină complet intervenția umană specializată, dar transformă curățenia de fațadă dintr-un proiect de risc ridicat într-o operațiune tehnologizată, repetabilă și măsurabilă, cu o amortizare rapidă a investiției pentru parcurile de birouri de talie medie și mare.
