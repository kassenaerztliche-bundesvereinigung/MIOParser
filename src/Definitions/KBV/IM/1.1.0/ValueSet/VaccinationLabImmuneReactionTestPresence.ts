import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import VaccinationLabImmuneReactionTestPresenceGerman from "../../../../../Definitions/KBV/IM/1.1.0/ConceptMap/VaccinationLabImmuneReactionTestPresenceGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Lab_ImmuneReaction_Test_Presence

type VaccinationLabImmuneReactionTestPresence =
    | "22600-1"
    | "26643-7"
    | "30546-6"
    | "31998-8"
    | "31503-6"
    | "17322-9"
    | "46197-0"
    | "22322-2"
    | "20575-7"
    | "26630-4"
    | "22496-4"
    | "30553-2";

const VaccinationLabImmuneReactionTestPresence: t.Type<VaccinationLabImmuneReactionTestPresence> =
    t.union(
        [
            t.literal("22600-1"),
            t.literal("26643-7"),
            t.literal("30546-6"),
            t.literal("31998-8"),
            t.literal("31503-6"),
            t.literal("17322-9"),
            t.literal("46197-0"),
            t.literal("22322-2"),
            t.literal("20575-7"),
            t.literal("26630-4"),
            t.literal("22496-4"),
            t.literal("30553-2")
        ],
        "VaccinationLabImmuneReactionTestPresence"
    );

export const VaccinationLabImmuneReactionTestPresenceArray: string[] = [
    "22600-1",
    "26643-7",
    "30546-6",
    "31998-8",
    "31503-6",
    "17322-9",
    "46197-0",
    "22322-2",
    "20575-7",
    "26630-4",
    "22496-4",
    "30553-2"
];

export const VaccinationLabImmuneReactionTestPresenceValueSet: ValueSet = [
    {
        system: "http://loinc.org",
        concept: [
            {
                code: "22600-1",
                display: "Varicella zoster virus Ab [Presence] in Serum"
            },
            {
                code: "26643-7",
                display: "Clostridium tetani toxoid Ab [Presence] in Serum"
            },
            {
                code: "30546-6",
                display: "Polio virus 1 Ab [Presence] in Serum"
            },
            {
                code: "31998-8",
                display: "Bordetella pertussis Ab [Presence] in Serum"
            },
            {
                code: "31503-6",
                display: "Mumps virus Ab [Presence] in Serum"
            },
            {
                code: "17322-9",
                display: "Neisseria meningitidis Ab [Presence] in Serum"
            },
            {
                code: "46197-0",
                display: "Measles virus Ab [Presence] in Serum"
            },
            {
                code: "22322-2",
                display: "Hepatitis B virus surface Ab [Presence] in Serum"
            },
            {
                code: "20575-7",
                display: "Hepatitis A virus Ab [Presence] in Serum"
            },
            {
                code: "26630-4",
                display: "Corynebacterium diphtheriae toxin Ab [Presence] in Serum"
            },
            {
                code: "22496-4",
                display: "Rubella virus Ab [Presence] in Serum"
            },
            {
                code: "30553-2",
                display: "Rabies virus Ab [Presence] in Serum"
            }
        ]
    }
];

export { VaccinationLabImmuneReactionTestPresenceGerman as ConceptMap };

export default VaccinationLabImmuneReactionTestPresence;
