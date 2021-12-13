// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_Base_Apgar_Score_Value_German
// Copyright © [2020], Kassenärztliche Bundesvereinigung (KBV). All rights reserved.

// Diese Conceptmap verknüpft die Codes für den AgpgarSore-Wert mit deutschen Bezeichnungen

import { ConceptMap } from "../../../Interfaces";

const ApgarScoreValueGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_Apgar_Score_Value_German",
        element: [
            {
                code: "77714001",
                display: "Apgar score 0 (finding)",
                target: [
                    {
                        code: "Apgar0",
                        display: "Apgar 0",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "43610007",
                display: "Apgar score 1 (finding)",
                target: [
                    {
                        code: "Apgar1",
                        display: "Apgar 1",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "39910003",
                display: "Apgar score 2 (finding)",
                target: [
                    {
                        code: "Apgar2",
                        display: "Apgar 2",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "26635001",
                display: "Apgar score 3 (finding)",
                target: [
                    {
                        code: "Apgar3",
                        display: "Apgar 3",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "38107004",
                display: "Apgar score 4 (finding)",
                target: [
                    {
                        code: "Apgar4",
                        display: "Apgar 4",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "24388001",
                display: "Apgar score 5 (finding)",
                target: [
                    {
                        code: "Apgar5",
                        display: "Apgar 5",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "10318004",
                display: "Apgar score 6 (finding)",
                target: [
                    {
                        code: "Apgar6",
                        display: "Apgar 6",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "13323003",
                display: "Apgar score 7 (finding)",
                target: [
                    {
                        code: "Apgar7",
                        display: "Apgar 7",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "12431004",
                display: "Apgar score 8 (finding)",
                target: [
                    {
                        code: "Apgar8",
                        display: "Apgar 8",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "64198003",
                display: "Apgar score 9 (finding)",
                target: [
                    {
                        code: "Apgar9",
                        display: "Apgar 9",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "49544001",
                display: "Apgar score 10 (finding)",
                target: [
                    {
                        code: "Apgar10",
                        display: "Apgar 10",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default ApgarScoreValueGerman;
