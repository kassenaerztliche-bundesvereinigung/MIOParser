import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU1U3BirthmodeGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU1U3BirthmodeGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U1_U3_Birthmode

type CMRU1U3Birthmode = "395683001" | "394699000" | "407614003" | "395681004";

const CMRU1U3Birthmode: t.Type<CMRU1U3Birthmode> = t.union(
    [
        t.literal("395683001"),
        t.literal("394699000"),
        t.literal("407614003"),
        t.literal("395681004")
    ],
    "CMRU1U3Birthmode"
);

export const CMRU1U3BirthmodeArray: string[] = [
    "395683001",
    "394699000",
    "407614003",
    "395681004"
];

export const CMRU1U3BirthmodeValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "395683001",
                display: "Born by normal vaginal delivery (situation)"
            },
            {
                code: "394699000",
                display: "Born by cesarean section (situation)"
            },
            {
                code: "407614003",
                display: "Born by ventouse delivery (situation)"
            },
            {
                code: "395681004",
                display: "Born by forceps delivery (situation)"
            }
        ]
    }
];

export { CMRU1U3BirthmodeGerman as ConceptMap };

export default CMRU1U3Birthmode;
