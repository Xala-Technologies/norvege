import type { IProject } from "./types";

export const projects: IProject[] = [
  {
    slug: "snoefjell",
    name: "Snøfjell Mines",
    name_no: "Snøfjell Gruver",
    region: "Norway",
    country: "Norway",
    stage: "Advanced Exploration",
    licenses: 27,
    area: "270 km²",
    minerals: ["Beryllium", "Rubidium", "Niobium", "Zirconium", "Yttrium", "Uranium", "Light REEs"],
    priority: "High",
    description:
      "45 drill cores document 350,000 tonnes of ore in 5 meters thickness, with an average of 1.8% Beryllium. Contains significant values for Light Rare Earth Elements (LREEs) including Rubidium (Rb), Niobium (Nb), Zirconium (Zr), Uranium (U), and Yttrium (Y).",
    description_no:
      "45 borkjerner dokumenterer 350 000 tonn malm med 5 meters mektighet, med et gjennomsnitt på 1,8 % beryllium. Inneholder betydelige verdier for lette sjeldne jordarter (LREE) inkludert rubidium (Rb), niob (Nb), zirkonium (Zr), uran (U) og yttrium (Y).",
    overview:
      "Snøfjell Deposit represents one of the most significant Rare Earth Element discoveries in Norway. 45 drill cores document 350,000 tonnes of ore in 5 meters thickness, with an average of 1.8% Beryllium content. The deposit shows exceptional concentrations of Light Rare Earth Elements.",
    overview_no:
      "Snøfjell-forekomsten representerer et av de mest betydelige funnene av sjeldne jordarter i Norge. 45 borkjerner dokumenterer 350 000 tonn malm med 5 meters mektighet, med et gjennomsnittlig berylliuminnhold på 1,8 %. Forekomsten viser eksepsjonelle konsentrasjoner av lette sjeldne jordarter.",
    geology:
      "The deposit contains exceptional concentrations of Beryllium (1.8% average) along with significant Light Rare Earth Elements. Element analysis shows: Nb (36-293 ppm), Zr (360-7,733 ppm), Y (64-644 ppm), Rb (387-1,026 ppm), Ce (142-346 ppm), La (54-107 ppm), U (18-149 ppm), Th (37-278 ppm), and other trace elements.",
    geology_no:
      "Forekomsten inneholder eksepsjonelle konsentrasjoner av beryllium (1,8 % gjennomsnitt) sammen med betydelige lette sjeldne jordarter. Elementanalyse viser: Nb (36-293 ppm), Zr (360-7 733 ppm), Y (64-644 ppm), Rb (387-1 026 ppm), Ce (142-346 ppm), La (54-107 ppm), U (18-149 ppm), Th (37-278 ppm) og andre sporelementer.",
    exploration:
      "Proven in-situ value of $5.4 Billion USD (5,400 MUSD). The deposit represents a strategic resource for Europe's green transition and technological independence. Estimated value: 4,849 MUSD.",
    exploration_no:
      "Bevist in-situ verdi på 5,4 milliarder USD (5 400 MUSD). Forekomsten representerer en strategisk ressurs for Europas grønne omstilling og teknologiske uavhengighet. Estimert verdi: 4 849 MUSD.",
    coverage: "350,000 Tonnes Ore Documented | 270 km² Licensed Area",
    coverage_no: "350 000 tonn malm dokumentert | 270 km² lisensiert område",
  },
  {
    slug: "malm-fosdalen",
    name: "Malm Mines",
    name_no: "Malm Gruver",
    region: "Fosdalen",
    country: "Norway",
    stage: "Resource Definition",
    licenses: 4,
    area: "40 km²",
    minerals: ["Cerium", "Gold", "Zinc", "Copper", "Cobalt", "Nickel", "Iron"],
    priority: "High",
    description:
      "Historic mining district (1906-1997) producing iron, copper, and sulfur. Home to the innovative Mine Water Resource Project. We have identified viable deposits of Cerium at unprecedented levels in Norway, along with Gold, Zinc, Copper, Nickel, and Cobalt.",
    description_no:
      "Historisk gruvedistrikt (1906-1997) som produserte jern, kobber og svovel. Hjemsted for det innovative gruvevannsressursprosjektet. Vi har identifisert drivverdige forekomster av cerium på nivåer som aldri før er observert i Norge, sammen med gull, sink, kobber, nikkel og kobolt.",
    overview:
      "The Malm Mine District represents 20,000 man-years of mining history dating back to 1906. Originally operated by Fosdalens Bergverks A/S, the mines produced over 35 million tonnes of ore during 1906-1997, yielding nearly 16 million tonnes of magnetite concentrate. The district is now the site of our innovative Mine Water Resource Project, revolutionizing mineral extraction.",
    overview_no:
      "Malm gruvedistrikt representerer 20 000 årsverk med gruvehistorie som går tilbake til 1906. Opprinnelig drevet av Fosdalens Bergverks A/S, produserte gruvene over 35 millioner tonn malm i perioden 1906-1997, noe som ga nesten 16 millioner tonn magnetittkonsentrat. Distriktet er nå stedet for vårt innovative gruvevannsressursprosjekt, som revolusjonerer mineralutvinning.",
    geology:
      "The district hosts multiple deposit types including Cerium (at unprecedented levels in Norway), Gold, Zinc, Copper, Nickel, and Cobalt. The flooded mines contain 7–10 million m³ of ion-rich mine water at 26°C. Historical production included magnetite (50-70% in ore) and cobaltiferous pyrite (~3% with 0.25% Co grades).",
    geology_no:
      "Distriktet huser flere forekomsttyper inkludert cerium (på nivåer uten sidestykke i Norge), gull, sink, kobber, nikkel og kobolt. De oversvømte gruvene inneholder 7–10 millioner m³ ionerikt gruvevann ved 26°C. Historisk produksjon inkluderte magnetitt (50-70 % i malm) og koboltholdig svovelkis (~3 % med 0,25 % Co-gehalter).",
    exploration:
      "Our innovative extraction method utilizes Selective Ion Exchange (IX) and Electrolysis to extract valuable metals from mine water without new excavation. The project is 60% viable with JORC/PERK reporting. Pumping mine water ensures low emissions, low energy consumption, minimal area requirement and natural impact. Mine water is cleaned of heavy metals. Project maturity: Stage 3.",
    exploration_no:
      "Vår innovative utvinningsmetode bruker selektiv ionebytting (IX) og elektrolyse for å utvinne verdifulle metaller fra gruvevann uten ny utgraving. Prosjektet er 60 % levedyktig med JORC/PERK-rapportering. Pumping av gruvevann sikrer lave utslipp, lavt energiforbruk, minimalt arealkrav og naturinngrep. Gruvevann renses for tungmetaller. Prosjektmodenhet: Fase 3.",
    coverage: "147 Billion NOK Est. Mineral Value",
    coverage_no: "147 milliarder NOK est. mineralverdi",
  },
  {
    slug: "killingdal",
    name: "Killingdal Mines",
    name_no: "Killingdal Gruver",
    region: "Killingdal-Holtålen",
    country: "Norway",
    stage: "Resource Definition",
    licenses: 1,
    area: "~10 km²",
    minerals: ["Copper", "Zinc", "Silver", "Gold", "Lead", "Sulphur"],
    priority: "High",
    description:
      "Onshore VMS system and deep-sea analogue. Validated cost-effective exploration target with existing infrastructure.",
    description_no:
      "Landbasert VMS-system og dyphavsanalog. Validert kostnadseffektivt leteområde med eksisterende infrastruktur.",
    overview:
      "Killingdal is a proven VMS (Volcanic Massive Sulphide) system that produced approximately 2.96 million tonnes of Cu-Zn ore between 1972 and 1986. As a brownfield restart, it benefits from existing underground access, grid power, roads and proximity to Nordic smelters. Mineralisation remains open at depth and along strike.",
    overview_no:
      "Killingdal er et bevist VMS-system (vulkanogen massiv sulfid) som produserte ca. 2,96 millioner tonn Cu-Zn-malm mellom 1972 og 1986. Som et brownfield-prosjekt drar det nytte av eksisterende underjordisk tilgang, strømnett, veier og nærhet til nordiske smelteverk. Mineraliseringen er åpen i dybden og langs strøk.",
    geology:
      "Cu-Zn polymetallic VMS deposit with historic assays of Cu, Zn, Ag, Au and Pb. NGU datasets cover ~70 boreholes and 3.7 km of drilling. Conceptual remaining tonnage of 34–41 Mt across an economically proven system open at depth.",
    geology_no:
      "Cu-Zn polymetallisk VMS-forekomst med historiske analyser av Cu, Zn, Ag, Au og Pb. NGU-data dekker ~70 borehull og 3,7 km boring. Konseptuell gjenværende tonnasje på 34–41 Mt i et økonomisk bevist system som er åpent i dybden.",
    exploration:
      "JORC-aligned drilling and data validation underway toward maiden resource definition. The staged programme targets Year 1 restart feasibility, Year 2 resource growth and Year 3 district-scale demonstration, leveraging extensive NGU datasets and existing infrastructure.",
    exploration_no:
      "JORC-justert boring og datavalidering pågår mot første ressursdefinisjon. Det trinnvise programmet sikter mot gjennomførbarhet for omstart i år 1, ressursvekst i år 2 og demonstrasjon av distriktspotensial i år 3, med bruk av omfattende NGU-data og eksisterende infrastruktur.",
    coverage: "Licence No.: 0726/2225 – Killingdal 1 | ~10 km² | Awarded: 07 May 2025",
    coverage_no: "Lisens nr.: 0726/2225 – Killingdal 1 | ~10 km² | Tildelt: 07. mai 2025",
    timeline: [
      {
        year: "1972-1986",
        title: "Historic Production",
        description:
          "Approximately 2.96 million tonnes of Cu-Zn sulphide ore produced (Source: NGU Malmdatabasen)",
      },
      {
        year: "2025",
        title: "Licence Awarded",
        description: "Licence No. 0726/2225 – Killingdal 1 awarded on 07 May 2025, covering 10 km²",
      },
      {
        year: "2026 H1",
        title: "Data & Target Confidence",
        description: "Historical data QA/QC, target ranking, and validation drilling",
      },
      {
        year: "2026 H2",
        title: "JORC Alignment & Validation",
        description: "JORC-aligned drilling, QA/QC, and maiden resource definition",
      },
      {
        year: "2027",
        title: "Resource & Value Inflection",
        description: "Resource growth confirmation and district potential demonstration",
      },
    ],
    timeline_no: [
      {
        year: "1972-1986",
        title: "Historisk produksjon",
        description:
          "Omtrent 2,96 millioner tonn Cu-Zn sulfidmalm produsert (Kilde: NGU Malmdatabasen)",
      },
      {
        year: "2025",
        title: "Lisens tildelt",
        description: "Lisens nr. 0726/2225 – Killingdal 1 tildelt 07. mai 2025, dekker 10 km²",
      },
      {
        year: "2026 H1",
        title: "Data- og målsikkerhet",
        description: "QA/QC av historiske data, rangering av mål og valideringsboring",
      },
      {
        year: "2026 H2",
        title: "JORC-justering og validering",
        description: "JORC-justert boring, QA/QC og definisjon av jomfruressurs",
      },
      {
        year: "2027",
        title: "Ressurs- og verdiøkning",
        description: "Bekreftelse av ressursvekst og demonstrasjon av distriktspotensial",
      },
    ],
  },
  {
    slug: "naustdal",
    name: "Naustdal Mines",
    name_no: "Naustdal Gruver",
    region: "Norway",
    country: "Norway",
    stage: "Early Exploration",
    licenses: 0,
    area: "TBD",
    minerals: ["REE", "Monazite", "Fergusonite"],
    priority: "High",
    description: "Update soon",
    description_no: "Oppdateres snart",
    overview: "Update soon",
    overview_no: "Oppdateres snart",
    geology: "Update soon",
    geology_no: "Oppdateres snart",
    exploration: "Update soon",
    exploration_no: "Oppdateres snart",
    coverage: "Update soon",
    coverage_no: "Oppdateres snart",
  },
  {
    slug: "lergruvbakken",
    name: "Lergruvbakken",
    name_no: "Lergruvbakken",
    region: "Røros Mining District",
    country: "Norway",
    stage: "Active Exploration",
    licenses: 1,
    area: "10 km²",
    minerals: ["Zinc", "Copper", "Lead", "Silver", "Pyrite"],
    priority: "High",
    description:
      "A Pyrite-Zinc deposit with original reserves of ~940,000 tonnes. Primary commodities include Zinc (5.5%), Copper (0.45%), Lead (0.25%), and Silver (10 ppm). Mining took place in the 1970s and ceased in 1977.",
    description_no:
      "En svovelkis-sink-forekomst med opprinnelige reserver på ~940 000 tonn. Primære råvarer inkluderer sink (5,5 %), kobber (0,45 %), bly (0,25 %) og sølv (10 ppm). Gruvedrift fant sted på 1970-tallet og opphørte i 1977.",
    overview:
      "Lergruvbakken is part of the historic Røros mining district and was one of the later small underground mines. Mining at Lergruvbakken took place in the 1970s and ceased when the company went into bankruptcy in 1977. The deposit is described in NGU records as a pyrite-zinc type deposit, with zinc as the primary commodity.",
    overview_no:
      "Lergruvbakken er en del av det historiske Røros gruvedistrikt og var en av de senere små underjordiske gruvene. Gruvedrift ved Lergruvbakken fant sted på 1970-tallet og opphørte da selskapet gikk konkurs i 1977. Forekomsten er beskrevet i NGU-arkiver som en svovelkis-sink-type forekomst, med sink som primær råvare.",
    geology:
      "The deposit consists of several thin ore plates (~0.6 m thick) covering an area roughly 850 × 100–300 m, with stope heights historically assumed ~1.7 m. Original reserve estimate records ~940,000 tonnes of ore, whereof 450,000 tonnes were produced, leaving 490,000 tonnes of ore remaining. Pyrite (Fe-sulphide) is the dominant sulphide gangue/mineral.",
    geology_no:
      "Forekomsten består av flere tynne malmplater (~0,6 m tykke) som dekker et område på omtrent 850 × 100–300 m, med strossehøyder historisk antatt til ~1,7 m. Opprinnelig reserveestimat registrerer ~940 000 tonn malm, hvorav 450 000 tonn ble produsert, noe som etterlater 490 000 tonn gjenværende malm. Svovelkis (Fe-sulfid) er det dominerende sulfidmineralet.",
    exploration:
      "Indicated in-situ value: $376 Million USD (376 MUSD). Regulated industrial area for mining: 52,200 m². Gravimetric and magnetic methods indicate significantly larger volumes than the original reserve estimate. The deposit benefits from the region's extensive mining history and established infrastructure.",
    exploration_no:
      "Indikert in-situ verdi: 376 millioner USD (376 MUSD). Regulert industriområde for gruvedrift: 52 200 m². Gravimetriske og magnetiske metoder indikerer betydelig større volumer enn det opprinnelige reserveestimatet. Forekomsten drar nytte av regionens omfattende gruvehistorie og etablerte infrastruktur.",
    coverage: "$376 Million USD Indicated Value | 52,200 m² Regulated Area",
    coverage_no: "376 millioner USD indikert verdi | 52 200 m² regulert område",
  },
];

export function getProjectBySlug(slug: string): IProject | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
