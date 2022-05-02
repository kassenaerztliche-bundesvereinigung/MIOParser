import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU7aandU9PhysicalExamChestLungRespiratoryTractGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU7aandU9PhysicalExamChestLungRespiratoryTractGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U7a_and_U9_Physical_Exam_Chest_Lung_Respiratory_Tract

type CMRU7aandU9PhysicalExamChestLungRespiratoryTract =
    | "301272007"
    | "301273002"
    | "17077006"
    | "298706004"
    | "423230008";

const CMRU7aandU9PhysicalExamChestLungRespiratoryTract: t.Type<CMRU7aandU9PhysicalExamChestLungRespiratoryTract> =
    t.union(
        [
            t.literal("301272007"),
            t.literal("301273002"),
            t.literal("17077006"),
            t.literal("298706004"),
            t.literal("423230008")
        ],
        "CMRU7aandU9PhysicalExamChestLungRespiratoryTract"
    );

export const CMRU7aandU9PhysicalExamChestLungRespiratoryTractArray: string[] = [
    "301272007",
    "301273002",
    "17077006",
    "298706004",
    "423230008"
];

export const CMRU7aandU9PhysicalExamChestLungRespiratoryTractValueSet: ValueSet = [
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

export { CMRU7aandU9PhysicalExamChestLungRespiratoryTractGerman as ConceptMap };

export default CMRU7aandU9PhysicalExamChestLungRespiratoryTract;
