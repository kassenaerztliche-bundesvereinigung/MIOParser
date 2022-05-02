import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U2_U6_Physical_Exam_Heart_Blood_Circulation_German
type CMRU2U6PhysicalExamHeartBloodCirculationGerman =
    | "Herzfrequenz"
    | "Herzrhythmus"
    | "Herztoene"
    | "Herznebengeraeusche"
    | "Femoralispulse";

const CMRU2U6PhysicalExamHeartBloodCirculationGerman: t.Type<CMRU2U6PhysicalExamHeartBloodCirculationGerman> =
    t.union([
        t.literal("Herzfrequenz"),
        t.literal("Herzrhythmus"),
        t.literal("Herztoene"),
        t.literal("Herznebengeraeusche"),
        t.literal("Femoralispulse")
    ]);

export const CMRU2U6PhysicalExamHeartBloodCirculationGermanArray: string[] = [
    "Herzfrequenz",
    "Herzrhythmus",
    "Herztoene",
    "Herznebengeraeusche",
    "Femoralispulse"
];

export default CMRU2U6PhysicalExamHeartBloodCirculationGerman;
