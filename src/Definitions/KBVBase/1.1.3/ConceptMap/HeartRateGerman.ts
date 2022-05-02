// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_Base_Heart_Rate_German
// undefined

// Diese Conceptmap verknüpft die Codes des Herzfrequenz mit deutschen Bezeichnungen

import { ConceptMap } from "../../../Interfaces";

const HeartRateGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_Heart_Rate_Snomed_German",
        element: [
            {
                code: "364075005",
                display: "Heart rate (observable entity)",
                target: [
                    {
                        code: "Herzfrequenz",
                        display: "Herzfrequenz",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "78564009",
                display: "Heart rate measured at systemic artery (observable entity)",
                target: [
                    {
                        code: "HerzfrequenzAnArterieGemessen",
                        display: "Herzfrequenz an Arterie gemessen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "249043002",
                display: "Fetal heart rate (observable entity)",
                target: [
                    {
                        code: "FetaleHerzfrequenz",
                        display: "fetale Herzfrequenz",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default HeartRateGerman;
