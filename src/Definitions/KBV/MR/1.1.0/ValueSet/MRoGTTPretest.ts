import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRoGTTPretestGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRoGTTPretestGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_oGTT_Pretest

type MRoGTTPretest =
    | "404684003:{363714003=442260000,363713009=394844007}"
    | "404684003:{363714003=442260000,363713009=281301001}";

const MRoGTTPretest: t.Type<MRoGTTPretest> = t.union(
    [
        t.literal("404684003:{363714003=442260000,363713009=394844007}"),
        t.literal("404684003:{363714003=442260000,363713009=281301001}")
    ],
    "MRoGTTPretest"
);

export const MRoGTTPretestArray: string[] = [
    "404684003:{363714003=442260000,363713009=394844007}",
    "404684003:{363714003=442260000,363713009=281301001}"
];

export const MRoGTTPretestValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "404684003:{363714003=442260000,363713009=394844007}",
                display:
                    "Clinical finding (finding) : {Interprets (attribute) = Measurement of glucose 1 hour after glucose challenge for glucose tolerance test (procedure), Has interpretation (attribute) = Outside reference range (qualifier value)}"
            },
            {
                code: "404684003:{363714003=442260000,363713009=281301001}",
                display:
                    "Clinical finding (finding) : {Interprets (attribute) = Measurement of glucose 1 hour after glucose challenge for glucose tolerance test (procedure), Has interpretation (attribute) = Within reference range (qualifier value)}"
            }
        ]
    }
];

export { MRoGTTPretestGerman as ConceptMap };

export default MRoGTTPretest;
