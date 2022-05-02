// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_MR_Biometrics_II_III_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap verknüpft die Codes für die Biometrie II und III mit deutschen Bezeichnungen.

import { ConceptMap } from "../../../../Interfaces";

const MRBiometricsIIIIIGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Biometrics_II_III_German",
        element: [
            {
                code: "281688001",
                display: "Biparietal diameter (observable entity)",
                target: [
                    {
                        code: "BPDBiparietalerDurchmesser",
                        display: "BPD (Biparietaler Durchmesser)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363812007",
                display: "Head circumference (observable entity)",
                target: [
                    {
                        code: "KUKopfumfang",
                        display: "KU (Kopfumfang)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "1156893001",
                display: "Occipitofrontal diameter of fetal head (observable entity)",
                target: [
                    {
                        code: "FODFrontookzipitalerDurchmesser",
                        display: "FOD (Fronto-okzipitaler Durchmesser)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "439984002:704327008=302553009",
                display:
                    "Diameter of structure by imaging measurement (observable entity):Direct site (attribute)=Entire abdomen (body structure)",
                target: [
                    {
                        code: "ATDAbdomenThoraxquerDurchmesser",
                        display: "ATD (Abdomen/Thorax-quer-Durchmesser)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "249676004",
                display: "Anteroposterior diameter of chest (observable entity)",
                target: [
                    {
                        code: "APDAbdomenThoraxapDurchmesser",
                        display: "APD (Abdomen/Thorax-a. p.-Durchmesser)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "1156896009",
                display: "Thoracoabdominal circumference of fetus (observable entity)",
                target: [
                    {
                        code: "AUAbdomenThoraxUmfang",
                        display: "AU (Abdomen/Thorax-Umfang)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "396551005",
                display: "Femur length (observable entity)",
                target: [
                    {
                        code: "FLFemurlaenge",
                        display: "FL (Femurlänge)",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default MRBiometricsIIIIIGerman;
