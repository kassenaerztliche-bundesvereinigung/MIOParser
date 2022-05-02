import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU3ConsultationGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU3ConsultationGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U3_Consultation

type CMRU3Consultation =
    | "438650006"
    | "408433001"
    | "409066002:363702006=698350008"
    | "409066002:{363702006=444069008,363702006=426482000}"
    | "424673000"
    | "409059003"
    | "702971000"
    | "409066002:363702006=162214009";

const CMRU3Consultation: t.Type<CMRU3Consultation> = t.union(
    [
        t.literal("438650006"),
        t.literal("408433001"),
        t.literal("409066002:363702006=698350008"),
        t.literal("409066002:{363702006=444069008,363702006=426482000}"),
        t.literal("424673000"),
        t.literal("409059003"),
        t.literal("702971000"),
        t.literal("409066002:363702006=162214009")
    ],
    "CMRU3Consultation"
);

export const CMRU3ConsultationArray: string[] = [
    "438650006",
    "408433001",
    "409066002:363702006=698350008",
    "409066002:{363702006=444069008,363702006=426482000}",
    "424673000",
    "409059003",
    "702971000",
    "409066002:363702006=162214009"
];

export const CMRU3ConsultationValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "438650006",
                display: "Dietary education for breast feeding (procedure)"
            },
            {
                code: "408433001",
                display:
                    "Recommendation to caregiver regarding prevention of sudden infant death syndrome (procedure)"
            },
            {
                code: "409066002:363702006=698350008",
                display:
                    "Education, guidance and counseling (procedure) : Has focus (attribute) = Administration of vitamin K1 via oral route (procedure)"
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
                code: "409066002:363702006=162214009",
                display:
                    "Education, guidance and counseling (procedure) : Has focus (attribute) = Crying infant (finding)"
            }
        ]
    }
];

export { CMRU3ConsultationGerman as ConceptMap };

export default CMRU3Consultation;
