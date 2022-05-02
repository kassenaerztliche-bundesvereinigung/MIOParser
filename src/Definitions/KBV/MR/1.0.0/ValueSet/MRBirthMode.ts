import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRBirthModeGerman from "../../../../../Definitions/KBV/MR/1.0.0/ConceptMap/MRBirthModeGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Birth_Mode

type MRBirthMode =
    | "129125009:{363589002=236974004,408730004=398166005}"
    | "200144004"
    | "169961004";

const MRBirthMode: t.Type<MRBirthMode> = t.union(
    [
        t.literal("129125009:{363589002=236974004,408730004=398166005}"),
        t.literal("200144004"),
        t.literal("169961004")
    ],
    "MRBirthMode"
);

export const MRBirthModeArray: string[] = [
    "129125009:{363589002=236974004,408730004=398166005}",
    "200144004",
    "169961004"
];

export const MRBirthModeValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "129125009:{363589002=236974004,408730004=398166005}",
                display:
                    "Procedure with explicit context (situation):{Associated procedure (attribute)=Instrumental delivery (procedure),Procedure context (attribute)=Performed (qualifier value)}"
            },
            {
                code: "200144004",
                display: "Deliveries by cesarean (finding)"
            },
            {
                code: "169961004",
                display: "Normal birth (finding)"
            }
        ]
    }
];

export { MRBirthModeGerman as ConceptMap };

export default MRBirthMode;
