import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Lab_ImmuneReaction_Test_Presence_Tuberculin

type VaccinationLabImmuneReactionTestPresenceTuberculin =
    | "268376005"
    | "268375009"
    | "440662009"
    | "440661002";

const VaccinationLabImmuneReactionTestPresenceTuberculin: t.Type<VaccinationLabImmuneReactionTestPresenceTuberculin> =
    t.union(
        [
            t.literal("268376005"),
            t.literal("268375009"),
            t.literal("440662009"),
            t.literal("440661002")
        ],
        "VaccinationLabImmuneReactionTestPresenceTuberculin"
    );

export const VaccinationLabImmuneReactionTestPresenceTuberculinArray: string[] = [
    "268376005",
    "268375009",
    "440662009",
    "440661002"
];

export const VaccinationLabImmuneReactionTestPresenceTuberculinValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "268376005",
                display: "Mantoux: positive (finding)"
            },
            {
                code: "268375009",
                display: "Mantoux: negative (finding)"
            },
            {
                code: "440662009",
                display: "Interferon gamma assay positive (finding)"
            },
            {
                code: "440661002",
                display: "Interferon gamma assay negative (finding)"
            }
        ]
    }
];

export default VaccinationLabImmuneReactionTestPresenceTuberculin;
