/*
 * Licensed to the Kassenärztliche Bundesvereinigung (KBV) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The KBV licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Diese Conceptmap verknüpft die Codes für die Titerbezeichnungen mit deutschen Bezeichnern

import { ConceptMap } from "../../../../Interfaces";
const VaccinationLabImmuneReactionTestPresenceGerman: ConceptMap = [
    {
        source: "http://loinc.org",
        target:
            "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_Lab_ImmuneReaction_Test_Presence_German",
        element: [
            {
                code: "22600-1",
                display: "Varicella zoster virus Ab [Presence] in Serum",
                target: [
                    {
                        code: "Varizellen-Antikoerpernachweis",
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
                        code: "Tetanus-Antikoerpernachweis",
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
                        code: "Polio-Antikoerpernachweis",
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
                        code: "Pertussis-Antikoerpernachweis",
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
                        code: "Mumps-Antikoerpernachweis",
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
                        code: "Meningokokken-Antikoerpernachweis",
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
                        code: "Masern-Antikoerpernachweis",
                        display: "Masern Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "43429-0",
                display: "Haemophilus influenzae B Ag [Presence] in Serum",
                target: [
                    {
                        code: "Haemophilus-influenzae-B-Antikoerpernachweis",
                        display: "Haemophilus influenzae B Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "5195-3",
                display: "Hepatitis B virus surface Ag [Presence] in Serum",
                target: [
                    {
                        code: "Hepatitis-B-Antikoerpernachweis",
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
                        code: "Hepatitis-A-Antikoerpernachweis",
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
                        code: "Diphtherie-Antikoerpernachweis",
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
                        code: "Röteln-Antikoerpernachweis",
                        display: "Röteln Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    },
    {
        source: "http://snomed.info/sct",
        target:
            "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_Lab_ImmuneReaction_Test_Presence_German",
        element: [
            {
                code: "268376005",
                display: "Mantoux: positive (finding)",
                target: [
                    {
                        code: "Tuberkulose-Mendel-Mantoux-Test-positiv",
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
                        code: "Tuberkulose-Mendel-Mantoux-Test-negativ",
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
                        code: "Tuberkulose-Interferon-gamma-assay-positiv",
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
                        code: "Tuberkulose-Interferon-gamma-assay-negativ",
                        display: "Tuberkulose - Interferon gamma assay negativ",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code:
                    "363787002:370134009=123029007,246093002=259833005,370132008=117363000,704319004=50863008,704318007=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Component (attribute) = Varicella-zoster virus antibody (substance) , Time aspect (attribute) = Single point in time (qualifier value) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Plasma (substance) , Property type (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)",
                target: [
                    {
                        code: "Varizellen-Antikoerpernachweis",
                        display: "Varizellen Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code:
                    "363787002:370134009=123029007,246093002=259833005,370132008=117363000,704319004=50863008,704318007=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Time aspect (attribute) = Single point in time (qualifier value) , Component (attribute) = Clostridium tetani toxoid antibody (substance) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Plasma (substance) , Property type (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)",
                target: [
                    {
                        code: "Tetanus-Antikoerpernachweis",
                        display: "Tetanus Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code:
                    "363787002:370134009=123029007,246093002=120856009,370132008=117363000,704319004=50863008,704318007=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Time aspect (attribute) = Single point in time (qualifier value) , Component (attribute) = Human poliovirus 1 antibody (substance) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Plasma (substance) , Property type (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)",
                target: [
                    {
                        code: "Polio-Antikoerpernachweis",
                        display: "Polio Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code:
                    "363787002:246093002=120662001,370134009=123029007,370132008=117363000,704319004=50863008,704318007=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity): Component (attribute) = Bordetella pertussis antibody (substance) , Time aspect (attribute) = Single point in time (qualifier value) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Plasma (substance) , Property type (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)",
                target: [
                    {
                        code: "Pertussis-Antikoerpernachweis",
                        display: "Pertussis Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code:
                    "363787002:246093002=120721000,370134009=123029007,370132008=117363000,704319004=50863008,704318007=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity): Component (attribute) = Mumps virus antibody (substance) , Time aspect (attribute) = Single point in time (qualifier value) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Plasma (substance) , Property type (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)",
                target: [
                    {
                        code: "Mumps-Antikoerpernachweis",
                        display: "Mumps Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code:
                    "363787002:370134009=123029007,246093002=120871008,370132008=117363000,704319004=50863008,704318007=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Time aspect (attribute) = Single point in time (qualifier value) , Component (attribute) = Neisseria meningitidis antibody (substance) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Plasma (substance) , Property type (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)",
                target: [
                    {
                        code: "Meningokokken-Antikoerpernachweis",
                        display: "Meningokokken Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code:
                    "363787002:370134009=123029007,246093002=120969007,370132008=117363000,704319004=50863008,704318007=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Time aspect (attribute) = Single point in time (qualifier value) , Component (attribute) = Measles virus antibody (substance) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Plasma (substance) , Property type (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)",
                target: [
                    {
                        code: "Masern-Antikoerpernachweis",
                        display: "Masern Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code:
                    "363787002:246093002=120975003,370134009=123029007,370132008=117363000,704319004=50863008,704318007=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity): Component (attribute) = Antigen of Haemophilus influenzae type B (substance) , Time aspect (attribute) = Single point in time (qualifier value) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Plasma (substance) , Property type (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)",
                target: [
                    {
                        code: "Haemophilus-influenzae-B-Antikoerpernachweis",
                        display: "Haemophilus influenzae B Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code:
                    "363787002:370134009=123029007,370132008=117363000,704319004=50863008,246093002=22290004,704318007=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Time aspect (attribute) = Single point in time (qualifier value) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Plasma (substance) , Component (attribute) = Surface antigen of Hepatitis B virus (substance) ,Property type (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)",
                target: [
                    {
                        code: "Hepatitis-B-Antikoerpernachweis",
                        display: "Hepatitis B Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code:
                    "363787002:370134009=123029007,246093002=32609007,370132008=117363000,704319004=50863008,704318007=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Time aspect (attribute) = Single point in time (qualifier value) , Component (attribute) = Antibody to hepatitis A virus (substance) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Plasma (substance) , Property type (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)",
                target: [
                    {
                        code: "Hepatitis-A-Antikoerpernachweis",
                        display: "Hepatitis A Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code:
                    "363787002:370134009=123029007,370132008=117363000,704319004=50863008,246093002=259834004,704318007=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Time aspect (attribute) = Single point in time (qualifier value) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Plasma (substance) , Component (attribute) = Corynebacterium diphtheriae toxoid antibody (substance) , Property type (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)",
                target: [
                    {
                        code: "Diphtherie-Antikoerpernachweis",
                        display: "Diphtherie Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code:
                    "363787002:246093002=120737006,370134009=123029007,370132008=117363000,704319004=50863008,704318007=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity): Component (attribute) = Rubella virus antibody (substance) , Time aspect (attribute) = Single point in time (qualifier value) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Plasma (substance) , Property type (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)",
                target: [
                    {
                        code: "Röteln-Antikoerpernachweis",
                        display: "Röteln Antikörpernachweis",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default VaccinationLabImmuneReactionTestPresenceGerman;
