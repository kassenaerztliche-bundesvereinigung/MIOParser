import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRAB0SystemFirstExaminationAfterChildbirthGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRAB0SystemFirstExaminationAfterChildbirthGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_AB0_System_First_Examination_After_Childbirth

type MRAB0SystemFirstExaminationAfterChildbirth =
    | "112144000"
    | "112149005"
    | "165743006"
    | "58460004";

const MRAB0SystemFirstExaminationAfterChildbirth: t.Type<MRAB0SystemFirstExaminationAfterChildbirth> =
    t.union(
        [
            t.literal("112144000"),
            t.literal("112149005"),
            t.literal("165743006"),
            t.literal("58460004")
        ],
        "MRAB0SystemFirstExaminationAfterChildbirth"
    );

export const MRAB0SystemFirstExaminationAfterChildbirthArray: string[] = [
    "112144000",
    "112149005",
    "165743006",
    "58460004"
];

export const MRAB0SystemFirstExaminationAfterChildbirthValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "112144000",
                display: "Blood group A (finding)"
            },
            {
                code: "112149005",
                display: "Blood group B (finding)"
            },
            {
                code: "165743006",
                display: "Blood group AB (finding)"
            },
            {
                code: "58460004",
                display: "Blood group O (finding)"
            }
        ]
    }
];

export { MRAB0SystemFirstExaminationAfterChildbirthGerman as ConceptMap };

export default MRAB0SystemFirstExaminationAfterChildbirth;
