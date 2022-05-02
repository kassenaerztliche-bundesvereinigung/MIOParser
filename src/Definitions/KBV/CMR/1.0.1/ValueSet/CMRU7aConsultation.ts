import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU7aConsultationGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU7aConsultationGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U7a_Consultation

type CMRU7aConsultation =
    | "409059003"
    | "424308004"
    | "441041000124100"
    | "304507003"
    | "709135003"
    | "410263001"
    | "702971000"
    | "274410002";

const CMRU7aConsultation: t.Type<CMRU7aConsultation> = t.union(
    [
        t.literal("409059003"),
        t.literal("424308004"),
        t.literal("441041000124100"),
        t.literal("304507003"),
        t.literal("709135003"),
        t.literal("410263001"),
        t.literal("702971000"),
        t.literal("274410002")
    ],
    "CMRU7aConsultation"
);

export const CMRU7aConsultationArray: string[] = [
    "409059003",
    "424308004",
    "441041000124100",
    "304507003",
    "709135003",
    "410263001",
    "702971000",
    "274410002"
];

export const CMRU7aConsultationValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "409059003",
                display: "Safety education, guidance, and counseling (procedure)"
            },
            {
                code: "424308004",
                display:
                    "Speech and language therapy education, guidance, and counseling (procedure)"
            },
            {
                code: "441041000124100",
                display: "Counseling about nutrition (procedure)"
            },
            {
                code: "304507003",
                display: "Exercise education (procedure)"
            },
            {
                code: "709135003",
                display: "Video screen time education (procedure)"
            },
            {
                code: "410263001",
                display:
                    "Medical/dental care education, guidance, and counseling (procedure)"
            },
            {
                code: "702971000",
                display: "Counseling for childhood immunization (procedure)"
            },
            {
                code: "274410002",
                display: "Dental referral - child (procedure)"
            }
        ]
    }
];

export { CMRU7aConsultationGerman as ConceptMap };

export default CMRU7aConsultation;
