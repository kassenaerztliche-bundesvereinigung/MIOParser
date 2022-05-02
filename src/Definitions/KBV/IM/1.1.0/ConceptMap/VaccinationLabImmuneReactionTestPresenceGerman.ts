// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_Vaccination_Lab_ImmuneReaction_Test_Presence_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at â€‹http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap dient dem Mapping der Loinc-Codes zur Art der Immunreaktion auf die deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const VaccinationLabImmuneReactionTestPresenceGerman: ConceptMap = [
    {
        source: "http://loinc.org",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_Lab_ImmuneReaction_Test_Presence_German",
        element: [
            {
                code: "22600-1",
                display: "Varicella zoster virus Ab [Presence] in Serum",
                target: [
                    {
                        code: "VarizellenAntikoerpernachweis",
                        display: "Varizellen Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "26643-7",
                display: "Clostridium tetani toxoid Ab [Presence] in Serum",
                target: [
                    {
                        code: "TetanusAntikoerpernachweis",
                        display: "Tetanus Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "30546-6",
                display: "Polio virus 1 Ab [Presence] in Serum",
                target: [
                    {
                        code: "PolioAntikoerpernachweis",
                        display: "Polio Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "31998-8",
                display: "Bordetella pertussis Ab [Presence] in Serum",
                target: [
                    {
                        code: "PertussisAntikoerpernachweis",
                        display: "Pertussis Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "31503-6",
                display: "Mumps virus Ab [Presence] in Serum",
                target: [
                    {
                        code: "MumpsAntikoerpernachweis",
                        display: "Mumps Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "17322-9",
                display: "Neisseria meningitidis Ab [Presence] in Serum",
                target: [
                    {
                        code: "MeningokokkenAntikoerpernachweis",
                        display: "Meningokokken Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "46197-0",
                display: "Measles virus Ab [Presence] in Serum",
                target: [
                    {
                        code: "MasernAntikoerpernachweis",
                        display: "Masern Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "22322-2",
                display: "Hepatitis B virus surface Ab [Presence] in Serum",
                target: [
                    {
                        code: "HepatitisBAntikoerpernachweis",
                        display: "Hepatitis B Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "20575-7",
                display: "Hepatitis A virus Ab [Presence] in Serum",
                target: [
                    {
                        code: "HepatitisAAntikoerpernachweis",
                        display: "Hepatitis A Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "26630-4",
                display: "Corynebacterium diphtheriae toxin Ab [Presence] in Serum",
                target: [
                    {
                        code: "DiphtherieAntikoerpernachweis",
                        display: "Diphtherie Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "22496-4",
                display: "Rubella virus Ab [Presence] in Serum",
                target: [
                    {
                        code: "RoetelnAntikoerpernachweis",
                        display: "Röteln Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "30553-2",
                display: "Rabies virus Ab [Presence] in Serum",
                target: [
                    {
                        code: "TollwutAntikoerperbestimmung",
                        display: "Tollwut Antikörperbestimmung",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    },
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_Lab_ImmuneReaction_Test_Presence_German",
        element: [
            {
                code: "268376005",
                display: "Mantoux: positive (finding)",
                target: [
                    {
                        code: "TuberkuloseMendelMantouxTestpositiv",
                        display: "Tuberkulose - Mendel-Mantoux-Test positiv",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "268375009",
                display: "Mantoux: negative (finding)",
                target: [
                    {
                        code: "TuberkuloseMendelMantouxTestnegativ",
                        display: "Tuberkulose - Mendel-Mantoux-Test negativ",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "440662009",
                display: "Interferon gamma assay positive (finding)",
                target: [
                    {
                        code: "TuberkuloseInterferongammaassaypositiv",
                        display: "Tuberkulose - Interferon gamma assay positiv",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "440661002",
                display: "Interferon gamma assay negative (finding)",
                target: [
                    {
                        code: "TuberkuloseInterferongammaassaynegativ",
                        display: "Tuberkulose - Interferon gamma assay negativ",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:246093002=259858000,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Component (attribute) = Varicella-zoster virus antibody (substance) , Time aspect (attribute) = Single point in time (qualifier value) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Plasma (substance) , Property (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)",
                target: [
                    {
                        code: "VarizellenAntikoerpernachweis",
                        display: "Varizellen Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:370134009=123029007,246093002=259833005,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity):Time aspect (attribute)=Single point in time (qualifier value),Component (attribute)=Clostridium tetani toxoid antibody (substance),Scale type (attribute)=Ordinal value (qualifier value),Inheres in (attribute)=Plasma (substance),Property (attribute)=Presence (property) (qualifier value),Direct site (attribute)=Serum specimen (specimen)",
                target: [
                    {
                        code: "TetanusAntikoerpernachweis",
                        display: "Tetanus Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:370134009=123029007,246093002=120856009,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity):Time aspect (attribute)=Single point in time (qualifier value),Component (attribute)=Human poliovirus 1 antibody (substance),Scale type (attribute)=Ordinal value (qualifier value),Inheres in (attribute)=Plasma (substance),Property (attribute)=Presence (property) (qualifier value),Direct site (attribute)=Serum specimen (specimen)",
                target: [
                    {
                        code: "PolioAntikoerpernachweis",
                        display: "Polio Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:246093002=120662001,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity):Component (attribute)=Bordetella pertussis antibody (substance),Time aspect (attribute)=Single point in time (qualifier value),Scale type (attribute)=Ordinal value (qualifier value),Inheres in (attribute)=Plasma (substance),Property (attribute)=Presence (property) (qualifier value),Direct site (attribute)=Serum specimen (specimen)",
                target: [
                    {
                        code: "PertussisAntikoerpernachweis",
                        display: "Pertussis Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:246093002=120721000,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity):Component (attribute)=Mumps virus antibody (substance),Time aspect (attribute)=Single point in time (qualifier value),Scale type (attribute)=Ordinal value (qualifier value),Inheres in (attribute)=Plasma (substance),Property (attribute)=Presence (property) (qualifier value),Direct site (attribute)=Serum specimen (specimen)",
                target: [
                    {
                        code: "MumpsAntikoerpernachweis",
                        display: "Mumps Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:370134009=123029007,246093002=120871008,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity):Time aspect (attribute)=Single point in time (qualifier value),Component (attribute)=Neisseria meningitidis antibody (substance),Scale type (attribute)=Ordinal value (qualifier value),Inheres in (attribute)=Plasma (substance),Property (attribute)=Presence (property) (qualifier value),Direct site (attribute)=Serum specimen (specimen)",
                target: [
                    {
                        code: "MeningokokkenAntikoerpernachweis",
                        display: "Meningokokken Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:370134009=123029007,246093002=120969007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity):Time aspect (attribute)=Single point in time (qualifier value),Component (attribute)=Measles virus antibody (substance),Scale type (attribute)=Ordinal value (qualifier value),Inheres in (attribute)=Plasma (substance),Property (attribute)=Presence (property) (qualifier value),Direct site (attribute)=Serum specimen (specimen)",
                target: [
                    {
                        code: "MasernAntikoerpernachweis",
                        display: "Masern Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:246093002=120886002,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity): Component (attribute) = Haemophilus influenzae type B antibody (substance) , Time aspect (attribute) = Single point in time (qualifier value) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Plasma (substance) , Property (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)",
                target: [
                    {
                        code: "HaemophilusinfluenzaeBAntikoerpernachweis",
                        display: "Haemophilus influenzae B Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:370134009=123029007,246093002=122450004,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Time aspect (attribute) = Single point in time (qualifier value) , Component (attribute) = Antibody to hepatitis B virus (substance) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Plasma (substance) , Property (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)",
                target: [
                    {
                        code: "HepatitisBAntikoerpernachweis",
                        display: "Hepatitis B Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:370134009=123029007,246093002=32609007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity):Time aspect (attribute)=Single point in time (qualifier value),Component (attribute)=Antibody to hepatitis A virus (substance),Scale type (attribute)=Ordinal value (qualifier value),Inheres in (attribute)=Plasma (substance),Property (attribute)=Presence (property) (qualifier value),Direct site (attribute)=Serum specimen (specimen)",
                target: [
                    {
                        code: "HepatitisAAntikoerpernachweis",
                        display: "Hepatitis A Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:370134009=123029007,370132008=117363000,704319004=50863008,246093002=259834004,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity):Time aspect (attribute)=Single point in time (qualifier value),Scale type (attribute)=Ordinal value (qualifier value),Inheres in (attribute)=Plasma (substance),Component (attribute)=Corynebacterium diphtheriae toxoid antibody (substance),Property (attribute)=Presence (property) (qualifier value),Direct site (attribute)=Serum specimen (specimen)",
                target: [
                    {
                        code: "DiphtherieAntikoerpernachweis",
                        display: "Diphtherie Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:246093002=120737006,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity):Component (attribute)=Rubella virus antibody (substance),Time aspect (attribute)=Single point in time (qualifier value),Scale type (attribute)=Ordinal value (qualifier value),Inheres in (attribute)=Plasma (substance),Property (attribute)=Presence (property) (qualifier value),Direct site (attribute)=Serum specimen (specimen)",
                target: [
                    {
                        code: "RoetelnAntikoerpernachweis",
                        display: "Röteln Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:370134009=123029007,246093002=120850003,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Time aspect (attribute) = Single point in time (qualifier value) , Component (attribute) = Rabies virus antibody (substance) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Plasma (substance) , Property (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)",
                target: [
                    {
                        code: "TollwutAntikoerperbestimmung",
                        display: "Tollwut Antikörperbestimmung",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default VaccinationLabImmuneReactionTestPresenceGerman;
