// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_MR_Catalogue_A_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap verknüpft die Codes für die Anamneseerhebung bei Erstuntersuchung mit deutschen Bezeichnungen.

import { ConceptMap } from "../../../../Interfaces";

const MRCatalogueAGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Catalogue_A_German",
        element: [
            {
                code: "416471007",
                display: "Family history of clinical finding (situation)",
                target: [
                    {
                        code: "FamiliaereBelastungzBDiabetesHypertonieFehlbildungengenetischeKrankheitenpsychischeKrankheiten",
                        display:
                            "(1) Familiäre Belastung (z.B. Diabetes, Hypertonie, Fehlbildungen, genetische Krankheiten, psychische Krankheiten)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "312850006",
                display: "History of disorder (situation)",
                target: [
                    {
                        code: "FruehereeigeneschwereErkrankungenzBHerzLungeLeberNierenZNSPsyche",
                        display:
                            "(2) Frühere eigene schwere Erkrankungen (z.B. Herz, Lunge, Leber, Nieren, ZNS, Psyche)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "161460007",
                display: "History of coagulation defect (situation)",
                target: [
                    {
                        code: "BlutungsThromboseneigung",
                        display: "(3) Blutungs-/Thromboseneigung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "609328004",
                display: "Allergic disposition (finding)",
                target: [
                    {
                        code: "AllergiezBgegenMedikamente",
                        display: "(4) Allergie, z.B. gegen Medikamente",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "161664006",
                display: "History of blood transfusion (situation)",
                target: [
                    {
                        code: "FruehereBluttransfusionen",
                        display: "(5) Frühere Bluttransfusionen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "271596009",
                display: "Mental distress (finding)",
                target: [
                    {
                        code: "BesonderepsychischeBelastungzBfamiliaereoderberufliche",
                        display:
                            "(6) Besondere psychische Belastung (z.B. familiäre oder berufliche)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "161152002",
                display: "Social problem (finding)",
                target: [
                    {
                        code: "BesonderesozialeBelastungzBIntegrationsproblemewirtschaftlicheProbleme",
                        display:
                            "(7) Besondere soziale Belastung (z.B. Integrationsprobleme, wirtschaftliche Probleme)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "1156098006",
                display:
                    "History of Rhesus isoimmunization affecting pregnancy (situation)",
                target: [
                    {
                        code: "RhesusInkompatibilitaetbeivorangegangenenSchwangerschaften",
                        display:
                            "(8) Rhesus-Inkompatibilität (bei vorangegangenen Schwangerschaften)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "73211009",
                display: "Diabetes mellitus (disorder)",
                target: [
                    {
                        code: "Diabetesmellitus",
                        display: "(9) Diabetes mellitus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "414916001",
                display: "Obesity (disorder)",
                target: [
                    {
                        code: "Adipositas",
                        display: "(10) Adipositas",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "237837007",
                display: "Primordial dwarfism (disorder)",
                target: [
                    {
                        code: "Kleinwuchs",
                        display: "(11) Kleinwuchs",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "8447006",
                display: "Congenital anomaly of skeletal bone (disorder)",
                target: [
                    {
                        code: "Skelettanomalien",
                        display: "(12) Skelettanomalien",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "237240001",
                display: "Teenage pregnancy (finding)",
                target: [
                    {
                        code: "SchwangereunterJahren",
                        display: "(13) Schwangere unter 18 Jahren",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "416413003",
                display: "Advanced maternal age gravida (finding)",
                target: [
                    {
                        code: "SchwangereueberJahren",
                        display: "(14) Schwangere über 35 Jahren",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "18656007",
                display: "Grand multipara (finding)",
                target: [
                    {
                        code: "VielgebaerendemehralsKinder",
                        display: "(15) Vielgebärende (mehr als 4 Kinder)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "134521000119104",
                display: "Fertility preservation procedure done (situation)",
                target: [
                    {
                        code: "ZustandnachSterilitaetsbehandlung",
                        display: "(16) Zustand nach Sterilitätsbehandlung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "161765003",
                display: "History of premature delivery (situation)",
                target: [
                    {
                        code: "ZustandnachFruehgeburtvorEndederSSW",
                        display: "(17) Zustand nach Frühgeburt (vor Ende der 37. SSW)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "726565008",
                display: "Past history of small for gestational age baby (situation)",
                target: [
                    {
                        code: "ZustandnachMangelgeburt",
                        display: "(18) Zustand nach Mangelgeburt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "713651007",
                display: "History of pregnancy with abortive outcome (situation)",
                target: [
                    {
                        code: "ZustandnachodermehrFehlgeburtenAbbruechen",
                        display: "(19) Zustand nach 2 oder mehr Fehlgeburten/Abbrüchen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "161743003",
                display: "History of stillbirth (situation)",
                target: [
                    {
                        code: "TotesgeschaedigtesKindinderAnamnese",
                        display: "(20) Totes/geschädigtes Kind in der Anamnese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "1156096005",
                display:
                    "History of complication occurring during labor and delivery (situation)",
                target: [
                    {
                        code: "KomplikationenbeivorausgegangenenEntbindungen",
                        display: "(21) Komplikationen bei vorausgegangenen Entbindungen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "1156097001",
                display: "History of complication of puerperium (situation)",
                target: [
                    {
                        code: "Komplikationenpostpartum",
                        display: "(22) Komplikationen post partum",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "161805006",
                display: "History of cesarean section (situation)",
                target: [
                    {
                        code: "ZustandnachSectio",
                        display: "(23) Zustand nach Sectio",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "1156095009",
                display: "History of operation on uterus (situation)",
                target: [
                    {
                        code: "ZustandnachanderenUterusoperationen",
                        display: "(24) Zustand nach anderen Uterusoperationen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "60001007:263502005=424572001",
                display:
                    "Not pregnant (finding) : Clinical course (attribute) =  Clinical course with short duration (qualifier value)",
                target: [
                    {
                        code: "RascheSchwangerschaftsfolgewenigeralsJahr",
                        display: "(25) Rasche Schwangerschaftsfolge (weniger als 1 Jahr)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "418138009",
                display: "Patient condition finding (finding)",
                target: [
                    {
                        code: "AndereBesonderheiten",
                        display: "(26) Andere Besonderheiten",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default MRCatalogueAGerman;
