import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Examination_Loinc

type MRExaminationLoinc =
    | "30954-2"
    | "890-4"
    | "15343-7"
    | "22496-4"
    | "8013-5"
    | "22497-2"
    | "6357-8"
    | "5195-3"
    | "718-7"
    | "26453-1";

const MRExaminationLoinc: t.Type<MRExaminationLoinc> = t.union(
    [
        t.literal("30954-2"),
        t.literal("890-4"),
        t.literal("15343-7"),
        t.literal("22496-4"),
        t.literal("8013-5"),
        t.literal("22497-2"),
        t.literal("6357-8"),
        t.literal("5195-3"),
        t.literal("718-7"),
        t.literal("26453-1")
    ],
    "MRExaminationLoinc"
);

export const MRExaminationLoincArray: string[] = [
    "30954-2",
    "890-4",
    "15343-7",
    "22496-4",
    "8013-5",
    "22497-2",
    "6357-8",
    "5195-3",
    "718-7",
    "26453-1"
];

export const MRExaminationLoincValueSet: ValueSet = [
    {
        system: "http://loinc.org",
        concept: [
            {
                code: "30954-2",
                display: "Relevant diagnostic tests/laboratory data Narrative"
            },
            {
                code: "890-4",
                display: "Blood group antibody screen [Presence] in Serum or Plasma"
            },
            {
                code: "15343-7",
                display: "Blood group antibody screen [Titer] in Serum or Plasma"
            },
            {
                code: "22496-4",
                display: "Rubella virus Ab [Presence] in Serum"
            },
            {
                code: "8013-5",
                display: "Rubella virus Ab [Units/volume] in Serum"
            },
            {
                code: "22497-2",
                display: "Rubella virus Ab [Titer] in Serum"
            },
            {
                code: "6357-8",
                display:
                    "Chlamydia trachomatis DNA [Presence] in Urine by NAA with probe detection"
            },
            {
                code: "5195-3",
                display: "Hepatitis B virus surface Ag [Presence] in Serum"
            },
            {
                code: "718-7",
                display: "Hemoglobin [Mass/volume] in Blood"
            },
            {
                code: "26453-1",
                display: "Erythrocytes [#/volume] in Blood"
            }
        ]
    }
];

export default MRExaminationLoinc;
