import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU6ConsultationGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU6ConsultationGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U6_Consultation

type CMRU6Consultation =
    | "441041000124100"
    | "409066002:{363702006=444069008,363702006=426482000}"
    | "424673000"
    | "409059003"
    | "702971000"
    | "243085009"
    | "424308004"
    | "274410002"
    | "408935001";

const CMRU6Consultation: t.Type<CMRU6Consultation> = t.union(
    [
        t.literal("441041000124100"),
        t.literal("409066002:{363702006=444069008,363702006=426482000}"),
        t.literal("424673000"),
        t.literal("409059003"),
        t.literal("702971000"),
        t.literal("243085009"),
        t.literal("424308004"),
        t.literal("274410002"),
        t.literal("408935001")
    ],
    "CMRU6Consultation"
);

export const CMRU6ConsultationArray: string[] = [
    "441041000124100",
    "409066002:{363702006=444069008,363702006=426482000}",
    "424673000",
    "409059003",
    "702971000",
    "243085009",
    "424308004",
    "274410002",
    "408935001"
];

export const CMRU6ConsultationValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "441041000124100",
                display: "Counseling about nutrition (procedure)"
            },
            {
                code: "409066002:{363702006=444069008,363702006=426482000}",
                display:
                    "Education, guidance and counseling (procedure) : Has focus (attribute) = Administration of Vitamin D supplement (procedure) , Has focus (attribute) = Prevention of dental caries (procedure) }"
            },
            {
                code: "424673000",
                display:
                    "Community resources education, guidance and counseling (procedure)"
            },
            {
                code: "409059003",
                display: "Safety education, guidance, and counseling (procedure)"
            },
            {
                code: "702971000",
                display: "Counseling for childhood immunization (procedure)"
            },
            {
                code: "243085009",
                display: "Oral health education (procedure)"
            },
            {
                code: "424308004",
                display:
                    "Speech and language therapy education, guidance, and counseling (procedure)"
            },
            {
                code: "274410002",
                display: "Dental referral - child (procedure)"
            },
            {
                code: "408935001",
                display: "Substance abuse prevention education (procedure)"
            }
        ]
    }
];

export { CMRU6ConsultationGerman as ConceptMap };

export default CMRU6Consultation;
