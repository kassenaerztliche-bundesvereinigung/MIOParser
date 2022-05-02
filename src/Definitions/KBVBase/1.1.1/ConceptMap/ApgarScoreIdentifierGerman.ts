// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_Base_Apgar_Score_Identifier_German
// Copyright © [2020], Kassenärztliche Bundesvereinigung (KBV). All rights reserved.

// Diese Conceptmap verknüpft die Codes für den Apgarscore-Zeitpunkt mit deutschen Bezeichnungen

import { ConceptMap } from "../../../Interfaces";

const ApgarScoreIdentifierGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_Apgar_Score_Identifier_German",
        element: [
            {
                code: "169909004",
                display: "Apgar score at 5 minutes (observable entity)",
                target: [
                    {
                        code: "ApgarzumZeitpunkt5MinnachGeburt",
                        display: "Apgar zum Zeitpunkt 5 Min. nach Geburt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "169922007",
                display: "Apgar score at 10 minutes (observable entity)",
                target: [
                    {
                        code: "ApgarzumZeitpunkt10MinnachGeburt",
                        display: "Apgar zum Zeitpunkt 10 Min. nach Geburt",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    },
    {
        source: "http://loinc.org",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_Apgar_Score_Identifier_German",
        element: [
            {
                code: "9274-2",
                display: "5 minute Apgar Score",
                target: [
                    {
                        code: "ApgarzumZeitpunkt5MinnachGeburt",
                        display: "Apgar zum Zeitpunkt 5 Min. nach Geburt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "9271-8",
                display: "10 minute Apgar Score",
                target: [
                    {
                        code: "ApgarzumZeitpunkt10MinnachGeburt",
                        display: "Apgar zum Zeitpunkt 10 Min. nach Geburt",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default ApgarScoreIdentifierGerman;
