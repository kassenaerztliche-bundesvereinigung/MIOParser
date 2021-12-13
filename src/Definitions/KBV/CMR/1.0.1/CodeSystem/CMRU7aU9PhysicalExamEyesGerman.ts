import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U7a_U9_Physical_Exam_Eyes_German
type CMRU7aU9PhysicalExamEyesGerman =
    | "InspektionmorphologischeAuffaelligkeiten"
    | "InspektionNystagmus"
    | "HornhautreflexbildchenauffaelligStrabismus"
    | "InspektionKopffehlhaltung"
    | "Pupillenstatusauffaellig"
    | "StereoTestauffaellig"
    | "SehtestmonokularePruefungSehschwaechelinks"
    | "SehtestmonokularePruefungSehschwaecherechts"
    | "SehtestmonokularePruefungRechtsLinksDifferenz";

const CMRU7aU9PhysicalExamEyesGerman: t.Type<CMRU7aU9PhysicalExamEyesGerman> = t.union([
    t.literal("InspektionmorphologischeAuffaelligkeiten"),
    t.literal("InspektionNystagmus"),
    t.literal("HornhautreflexbildchenauffaelligStrabismus"),
    t.literal("InspektionKopffehlhaltung"),
    t.literal("Pupillenstatusauffaellig"),
    t.literal("StereoTestauffaellig"),
    t.literal("SehtestmonokularePruefungSehschwaechelinks"),
    t.literal("SehtestmonokularePruefungSehschwaecherechts"),
    t.literal("SehtestmonokularePruefungRechtsLinksDifferenz")
]);

export const CMRU7aU9PhysicalExamEyesGermanArray: string[] = [
    "InspektionmorphologischeAuffaelligkeiten",
    "InspektionNystagmus",
    "HornhautreflexbildchenauffaelligStrabismus",
    "InspektionKopffehlhaltung",
    "Pupillenstatusauffaellig",
    "StereoTestauffaellig",
    "SehtestmonokularePruefungSehschwaechelinks",
    "SehtestmonokularePruefungSehschwaecherechts",
    "SehtestmonokularePruefungRechtsLinksDifferenz"
];

export default CMRU7aU9PhysicalExamEyesGerman;
