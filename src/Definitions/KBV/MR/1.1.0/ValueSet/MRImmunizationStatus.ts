import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRImmunizationStatusGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRImmunizationStatusGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Immunization_Status

type MRImmunizationStatus =
    | "425457005:{363589002=170433008,408730004=385658003,408731000=410513005,408732007=410604004}"
    | "73701000119109"
    | "132751000119107";

const MRImmunizationStatus: t.Type<MRImmunizationStatus> = t.union(
    [
        t.literal(
            "425457005:{363589002=170433008,408730004=385658003,408731000=410513005,408732007=410604004}"
        ),
        t.literal("73701000119109"),
        t.literal("132751000119107")
    ],
    "MRImmunizationStatus"
);

export const MRImmunizationStatusArray: string[] = [
    "425457005:{363589002=170433008,408730004=385658003,408731000=410513005,408732007=410604004}",
    "73701000119109",
    "132751000119107"
];

export const MRImmunizationStatusValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "425457005:{363589002=170433008,408730004=385658003,408731000=410513005,408732007=410604004}",
                display:
                    "History of vaccination (situation) : { Associated procedure (attribute) = Administration of second dose of vaccine product containing only Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (procedure) , Procedure context (attribute) = Done (qualifier value) , Temporal context (attribute) = In the past (qualifier value) , Subject relationship context (attribute) = Subject of record (person) }"
            },
            {
                code: "73701000119109",
                display: "Influenza vaccination given (situation)"
            },
            {
                code: "132751000119107",
                display:
                    "Diphtheria, tetanus and acellular pertussis vaccination given (situation)"
            }
        ]
    }
];

export { MRImmunizationStatusGerman as ConceptMap };

export default MRImmunizationStatus;
