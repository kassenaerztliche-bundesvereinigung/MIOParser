import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU6U7PhysicalExamChestLungRespiratoryTractGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU6U7PhysicalExamChestLungRespiratoryTractGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U6_U7_Physical_Exam_Chest_Lung_Respiratory_Tract

type CMRU6U7PhysicalExamChestLungRespiratoryTract =
    | "301272007"
    | "301273002"
    | "17077006"
    | "67909005"
    | "298706004"
    | "423230008";

const CMRU6U7PhysicalExamChestLungRespiratoryTract: t.Type<CMRU6U7PhysicalExamChestLungRespiratoryTract> =
    t.union(
        [
            t.literal("301272007"),
            t.literal("301273002"),
            t.literal("17077006"),
            t.literal("67909005"),
            t.literal("298706004"),
            t.literal("423230008")
        ],
        "CMRU6U7PhysicalExamChestLungRespiratoryTract"
    );

export const CMRU6U7PhysicalExamChestLungRespiratoryTractArray: string[] = [
    "301272007",
    "301273002",
    "17077006",
    "67909005",
    "298706004",
    "423230008"
];

export const CMRU6U7PhysicalExamChestLungRespiratoryTractValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "301272007",
                display: "Chest auscultation finding (finding)"
            },
            {
                code: "301273002",
                display: "Abnormal breath sounds (finding)"
            },
            {
                code: "17077006",
                display: "Abnormal respiratory rate (finding)"
            },
            {
                code: "67909005",
                display: "Chest wall retraction (finding)"
            },
            {
                code: "298706004",
                display: "Finding of appearance of thorax (finding)"
            },
            {
                code: "423230008",
                display: "Wide spaced nipples (finding)"
            }
        ]
    }
];

export { CMRU6U7PhysicalExamChestLungRespiratoryTractGerman as ConceptMap };

export default CMRU6U7PhysicalExamChestLungRespiratoryTract;
