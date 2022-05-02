// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_MR_Examination_Snomed_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap verknüpft die Codes für Laboruntersuchungen mit deutschen Bezeichnungen.

import { ConceptMap } from "../../../../Interfaces";

const MRExaminationSnomedGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Examination_Snomed_German",
        element: [
            {
                code: "15220000",
                display: "Laboratory test (procedure)",
                target: [
                    {
                        code: "Laboruntersuchungunspezifisch",
                        display: "Laboruntersuchung (unspezifisch)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:370134009=123029007,704327008=122592007,246093002=19830006,370132008=117363000,704319004=50863008,370130000=705057003",
                display:
                    "Observable entity (observable entity) : Time aspect (attribute) = Single point in time (qualifier value) , Direct site (attribute) = Acellular blood (serum or plasma) specimen (specimen) , Component (attribute) = Blood group antibody (substance) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Plasma (substance) , Property (attribute) = Presence (property) (qualifier value)",
                target: [
                    {
                        code: "BlutgruppenAntikoerperSuchtestimSerumPlasmaNachweis",
                        display:
                            "Blutgruppen Antikörper-Suchtest im Serum/Plasma, Nachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:370130000=118590008,370134009=123029007,704327008=122592007,370132008=30766002,246093002=19830006,704319004=50863008",
                display:
                    "Observable entity (observable entity) : Property (attribute) = Dilution factor expressed as titer (property) (qualifier value) , Time aspect (attribute) = Single point in time (qualifier value) , Direct site (attribute) = Acellular blood (serum or plasma) specimen (specimen) , Scale type (attribute) = Quantitative (qualifier value) , Component (attribute) = Blood group antibody (substance) , Inheres in (attribute) = Blood group antibody (substance)",
                target: [
                    {
                        code: "BlutgruppenAntikoerperSuchtestimSerumPlasmaTiter",
                        display: "Blutgruppen Antikörper-Suchtest im Serum/Plasma, Titer",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:246093002=120737006,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Component (attribute) = Rubella virus antibody (substance) , Time aspect (attribute) = Single point in time (qualifier value) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Blood group antibody (substance) , Property (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)",
                target: [
                    {
                        code: "RoetelnVirusAntikoerperimSerumNachweis",
                        display: "Röteln Virus Antikörper im Serum, Nachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:246093002=120737006,370134009=123029007,370132008=30766002,370130000=118569000,704319004=50863008,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Component (attribute) = Rubella virus antibody (substance) , Time aspect (attribute) = Single point in time (qualifier value) , Scale type (attribute) = Quantitative (qualifier value) , Property (attribute) = Arbitrary concentration (property) (qualifier value) , Inheres in (attribute) = Blood group antibody (substance) , Direct site (attribute) = Serum specimen (specimen)",
                target: [
                    {
                        code: "RoetelnVirusAntikoerperimSerumKonzentrationIEproVolumen",
                        display:
                            "Röteln Virus Antikörper im Serum, Konzentration IE pro Volumen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:246093002=120737006,370130000=118590008,370134009=123029007,370132008=30766002,704319004=50863008,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Component (attribute) = Rubella virus antibody (substance) , Property (attribute) = Dilution factor expressed as titer (property) (qualifier value) , Time aspect (attribute) = Single point in time (qualifier value) , Scale type (attribute) = Quantitative (qualifier value) , Inheres in (attribute) = Blood group antibody (substance) , Direct site (attribute) = Serum specimen (specimen)",
                target: [
                    {
                        code: "RoetelnVirusAntikoerperimSerumTiter",
                        display: "Röteln Virus Antikörper im Serum, Titer",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:246093002=121181000,370134009=123029007,704327008=122575003,246501002=702675006,370132008=117363000,370130000=705057003,704319004=78014005",
                display:
                    "Observable entity (observable entity) : Component (attribute) =  Deoxyribonucleic acid of Chlamydia trachomatis (substance) , Time aspect (attribute) = Single point in time (qualifier value) , Direct site (attribute) = Urine specimen (specimen) , Technique (attribute) = Probe with target amplification technique (qualifier value) , Scale type (attribute) = Ordinal value (qualifier value) , Property (attribute) = Presence (property) (qualifier value) , Inheres in (attribute) =  Urine (substance)",
                target: [
                    {
                        code: "ChlamydiatrachomatisDNAauseinerUrinprobemittelsNukleinsaeureamplifizierendemTestNATNachweis",
                        display:
                            "Chlamydia trachomatis DNA aus einer Urinprobe mittels Nukleinsäure-amplifizierendem Test (NAT), Nachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:370134009=123029007,370132008=117363000,704319004=50863008,246093002=22290004,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Time aspect (attribute) = Single point in time (qualifier value) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Blood group antibody (substance) , Component (attribute) = Antigen of Hepatitis B virus surface protein (substance) , Property (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)",
                target: [
                    {
                        code: "HBsAntigenimSerumNachweis",
                        display: "HBs-Antigen im Serum, Nachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:704319004=87612001,370130000=118539007,704327008=119297000,370134009=123029007,246093002=38082009,370132008=30766002",
                display:
                    "Observable entity (observable entity) : Inheres in (attribute) = Blood (substance) , Property (attribute) = Mass concentration (property) (qualifier value) , Direct site (attribute) = Blood specimen (specimen) , Time aspect (attribute) = Single point in time (qualifier value) , Component (attribute) = Hemoglobin (substance) , Scale type (attribute) = Quantitative (qualifier value)",
                target: [
                    {
                        code: "HaemoglobinimBlutMasseproVolumen",
                        display: "Hämoglobin im Blut, Masse pro Volumen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:704319004=87612001,704327008=119297000,370134009=123029007,246093002=703062004,370132008=30766002,370130000=118550005",
                display:
                    "Observable entity (observable entity) : Inheres in (attribute) = Blood (substance) , Direct site (attribute) = Blood specimen (specimen) , Time aspect (attribute) = Single point in time (qualifier value) , Component (attribute) = Population of all erythrocytes in portion of fluid (body structure) , Scale type (attribute) = Quantitative (qualifier value) , Property (attribute) = Number concentration (property) (qualifier value)",
                target: [
                    {
                        code: "ErythrozytenimBlutAnzahlproVolumen",
                        display: "Erythrozyten im Blut, Anzahl pro Volumen",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default MRExaminationSnomedGerman;
