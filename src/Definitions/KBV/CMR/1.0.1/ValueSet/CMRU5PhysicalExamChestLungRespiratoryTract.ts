import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU5PhysicalExamChestLungRespiratoryTractGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU5PhysicalExamChestLungRespiratoryTractGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U5_Physical_Exam_Chest_Lung_Respiratory_Tract

type CMRU5PhysicalExamChestLungRespiratoryTract =
    | "301272007"
    | "301273002"
    | "17077006"
    | "67909005"
    | "298706004";

const CMRU5PhysicalExamChestLungRespiratoryTract: t.Type<CMRU5PhysicalExamChestLungRespiratoryTract> =
    t.union(
        [
            t.literal("301272007"),
            t.literal("301273002"),
            t.literal("17077006"),
            t.literal("67909005"),
            t.literal("298706004")
        ],
        "CMRU5PhysicalExamChestLungRespiratoryTract"
    );

export const CMRU5PhysicalExamChestLungRespiratoryTractArray: string[] = [
    "301272007",
    "301273002",
    "17077006",
    "67909005",
    "298706004"
];

export const CMRU5PhysicalExamChestLungRespiratoryTractValueSet: ValueSet = [
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
            }
        ]
    }
];

export { CMRU5PhysicalExamChestLungRespiratoryTractGerman as ConceptMap };

export default CMRU5PhysicalExamChestLungRespiratoryTract;
