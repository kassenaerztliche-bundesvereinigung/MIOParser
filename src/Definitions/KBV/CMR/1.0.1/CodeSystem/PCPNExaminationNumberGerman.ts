import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_PC_PN_Examination_Number_German
type PCPNExaminationNumberGerman =
    | "U2310Lebenstag"
    | "U345Lebenswoche"
    | "U434Lebensmonat"
    | "U567Lebensmonat"
    | "U61012Lebensmonat"
    | "U72124Lebensmonat"
    | "U7a3436Lebensmonat"
    | "U84648Lebensmonat"
    | "U96064Lebensmonat";

const PCPNExaminationNumberGerman: t.Type<PCPNExaminationNumberGerman> = t.union([
    t.literal("U2310Lebenstag"),
    t.literal("U345Lebenswoche"),
    t.literal("U434Lebensmonat"),
    t.literal("U567Lebensmonat"),
    t.literal("U61012Lebensmonat"),
    t.literal("U72124Lebensmonat"),
    t.literal("U7a3436Lebensmonat"),
    t.literal("U84648Lebensmonat"),
    t.literal("U96064Lebensmonat")
]);

export const PCPNExaminationNumberGermanArray: string[] = [
    "U2310Lebenstag",
    "U345Lebenswoche",
    "U434Lebensmonat",
    "U567Lebensmonat",
    "U61012Lebensmonat",
    "U72124Lebensmonat",
    "U7a3436Lebensmonat",
    "U84648Lebensmonat",
    "U96064Lebensmonat"
];

export default PCPNExaminationNumberGerman;
