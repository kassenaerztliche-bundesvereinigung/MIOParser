import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRoGTTDiagnosistestGerman from "../../../../../Definitions/KBV/MR/1.0.0/ConceptMap/MRoGTTDiagnosistestGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_oGTT_Diagnosistest

type MRoGTTDiagnosistest = "372048000" | "166926006";

const MRoGTTDiagnosistest: t.Type<MRoGTTDiagnosistest> = t.union(
    [t.literal("372048000"), t.literal("166926006")],
    "MRoGTTDiagnosistest"
);

export const MRoGTTDiagnosistestArray: string[] = ["372048000", "166926006"];

export const MRoGTTDiagnosistestValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "372048000",
                display: "Pregnancy with abnormal glucose tolerance test (finding)"
            },
            {
                code: "166926006",
                display: "Glucose tolerance test normal (finding)"
            }
        ]
    }
];

export { MRoGTTDiagnosistestGerman as ConceptMap };

export default MRoGTTDiagnosistest;
