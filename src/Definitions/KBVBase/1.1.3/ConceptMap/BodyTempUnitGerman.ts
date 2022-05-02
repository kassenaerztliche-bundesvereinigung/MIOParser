// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_Base_Body_Temp_Unit_German
// undefined

// Diese Conceptmap verknüpft die Ucum Codes zur Messung der Körpertemperatur mit deutschen Bezeichnungen.

import { ConceptMap } from "../../../Interfaces";

const BodyTempUnitGerman: ConceptMap = [
    {
        source: "http://unitsofmeasure.org",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_Body_Temp_Unit_German",
        element: [
            {
                code: "Cel",
                display: "undefined",
                target: [
                    {
                        code: "Celsius",
                        display: "Celsius",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "[degF]",
                display: "undefined",
                target: [
                    {
                        code: "Fahrenheit",
                        display: "Fahrenheit",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default BodyTempUnitGerman;
