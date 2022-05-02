import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U7_U9_Physical_Exam_Heart_Blood_Circulation_German
type CMRU7U9PhysicalExamHeartBloodCirculationGerman =
    | "Herzfrequenz"
    | "Herzrhythmus"
    | "Herztoene"
    | "Herznebengeraeusche";

const CMRU7U9PhysicalExamHeartBloodCirculationGerman: t.Type<CMRU7U9PhysicalExamHeartBloodCirculationGerman> =
    t.union([
        t.literal("Herzfrequenz"),
        t.literal("Herzrhythmus"),
        t.literal("Herztoene"),
        t.literal("Herznebengeraeusche")
    ]);

export const CMRU7U9PhysicalExamHeartBloodCirculationGermanArray: string[] = [
    "Herzfrequenz",
    "Herzrhythmus",
    "Herztoene",
    "Herznebengeraeusche"
];

export default CMRU7U9PhysicalExamHeartBloodCirculationGerman;
