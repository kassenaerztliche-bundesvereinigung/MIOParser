import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU2U4PhysicalExamChestLungRespiratoryTractGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU2U4PhysicalExamChestLungRespiratoryTractGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U2_U4_Physical_Exam_Chest_Lung_Respiratory_Tract

type CMRU2U4PhysicalExamChestLungRespiratoryTract =
    | "301272007"
    | "301273002"
    | "17077006"
    | "67909005"
    | "298706004"
    | "298761006";

const CMRU2U4PhysicalExamChestLungRespiratoryTract: t.Type<CMRU2U4PhysicalExamChestLungRespiratoryTract> =
    t.union(
        [
            t.literal("301272007"),
            t.literal("301273002"),
            t.literal("17077006"),
            t.literal("67909005"),
            t.literal("298706004"),
            t.literal("298761006")
        ],
        "CMRU2U4PhysicalExamChestLungRespiratoryTract"
    );

export const CMRU2U4PhysicalExamChestLungRespiratoryTractArray: string[] = [
    "301272007",
    "301273002",
    "17077006",
    "67909005",
    "298706004",
    "298761006"
];

export const CMRU2U4PhysicalExamChestLungRespiratoryTractValueSet: ValueSet = [
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
                code: "298761006",
                display: "Finding of clavicle structure (finding)"
            }
        ]
    }
];

export { CMRU2U4PhysicalExamChestLungRespiratoryTractGerman as ConceptMap };

export default CMRU2U4PhysicalExamChestLungRespiratoryTract;
