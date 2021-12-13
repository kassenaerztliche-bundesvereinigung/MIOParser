import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU8PhysicalExamChestLungRespiratoryTractGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU8PhysicalExamChestLungRespiratoryTractGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U8_Physical_Exam_Chest_Lung_Respiratory_Tract

type CMRU8PhysicalExamChestLungRespiratoryTract =
    | "301272007"
    | "301273002"
    | "17077006"
    | "298706004"
    | "423230008"
    | "404684003:{47429007=41345002,363698007=731726001}";

const CMRU8PhysicalExamChestLungRespiratoryTract: t.Type<CMRU8PhysicalExamChestLungRespiratoryTract> =
    t.union(
        [
            t.literal("301272007"),
            t.literal("301273002"),
            t.literal("17077006"),
            t.literal("298706004"),
            t.literal("423230008"),
            t.literal("404684003:{47429007=41345002,363698007=731726001}")
        ],
        "CMRU8PhysicalExamChestLungRespiratoryTract"
    );

export const CMRU8PhysicalExamChestLungRespiratoryTractArray: string[] = [
    "301272007",
    "301273002",
    "17077006",
    "298706004",
    "423230008",
    "404684003:{47429007=41345002,363698007=731726001}"
];

export const CMRU8PhysicalExamChestLungRespiratoryTractValueSet: ValueSet = [
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
            },
            {
                code: "404684003:{47429007=41345002,363698007=731726001}",
                display:
                    "Clinical finding (finding) : { Associated with (attribute) = Rickets (disorder), Finding site (attribute) = Entire bone of thorax (body structure) }"
            }
        ]
    }
];

export { CMRU8PhysicalExamChestLungRespiratoryTractGerman as ConceptMap };

export default CMRU8PhysicalExamChestLungRespiratoryTract;
