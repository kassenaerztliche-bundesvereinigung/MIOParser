import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/observation-interpretation

type Observationinterpretation =
    | "_GeneticObservationInterpretation"
    | "CAR"
    | "Carrier"
    | "_ObservationInterpretationChange"
    | "B"
    | "D"
    | "U"
    | "W"
    | "_ObservationInterpretationExceptions"
    | "<"
    | ">"
    | "AC"
    | "IE"
    | "QCF"
    | "TOX"
    | "_ObservationInterpretationNormality"
    | "A"
    | "AA"
    | "HH"
    | "LL"
    | "H"
    | "H>"
    | "HU"
    | "L"
    | "L<"
    | "LU"
    | "N"
    | "_ObservationInterpretationSusceptibility"
    | "I"
    | "MS"
    | "NCL"
    | "NS"
    | "R"
    | "SYN-R"
    | "S"
    | "SDD"
    | "SYN-S"
    | "VS"
    | "EX"
    | "HX"
    | "LX"
    | "HM"
    | "ObservationInterpretationDetection"
    | "IND"
    | "E"
    | "NEG"
    | "ND"
    | "POS"
    | "DET"
    | "ObservationInterpretationExpectation"
    | "EXP"
    | "UNE"
    | "OBX"
    | "ReactivityObservationInterpretation"
    | "NR"
    | "RR"
    | "WR";

const Observationinterpretation: t.Type<Observationinterpretation> = t.union(
    [
        t.literal("_GeneticObservationInterpretation"),
        t.literal("CAR"),
        t.literal("Carrier"),
        t.literal("_ObservationInterpretationChange"),
        t.literal("B"),
        t.literal("D"),
        t.literal("U"),
        t.literal("W"),
        t.literal("_ObservationInterpretationExceptions"),
        t.literal("<"),
        t.literal(">"),
        t.literal("AC"),
        t.literal("IE"),
        t.literal("QCF"),
        t.literal("TOX"),
        t.literal("_ObservationInterpretationNormality"),
        t.literal("A"),
        t.literal("AA"),
        t.literal("HH"),
        t.literal("LL"),
        t.literal("H"),
        t.literal("H>"),
        t.literal("HU"),
        t.literal("L"),
        t.literal("L<"),
        t.literal("LU"),
        t.literal("N"),
        t.literal("_ObservationInterpretationSusceptibility"),
        t.literal("I"),
        t.literal("MS"),
        t.literal("NCL"),
        t.literal("NS"),
        t.literal("R"),
        t.literal("SYN-R"),
        t.literal("S"),
        t.literal("SDD"),
        t.literal("SYN-S"),
        t.literal("VS"),
        t.literal("EX"),
        t.literal("HX"),
        t.literal("LX"),
        t.literal("HM"),
        t.literal("ObservationInterpretationDetection"),
        t.literal("IND"),
        t.literal("E"),
        t.literal("NEG"),
        t.literal("ND"),
        t.literal("POS"),
        t.literal("DET"),
        t.literal("ObservationInterpretationExpectation"),
        t.literal("EXP"),
        t.literal("UNE"),
        t.literal("OBX"),
        t.literal("ReactivityObservationInterpretation"),
        t.literal("NR"),
        t.literal("RR"),
        t.literal("WR")
    ],
    "Observationinterpretation"
);

export const ObservationinterpretationArray: string[] = [
    "_GeneticObservationInterpretation",
    "CAR",
    "Carrier",
    "_ObservationInterpretationChange",
    "B",
    "D",
    "U",
    "W",
    "_ObservationInterpretationExceptions",
    "<",
    ">",
    "AC",
    "IE",
    "QCF",
    "TOX",
    "_ObservationInterpretationNormality",
    "A",
    "AA",
    "HH",
    "LL",
    "H",
    "H>",
    "HU",
    "L",
    "L<",
    "LU",
    "N",
    "_ObservationInterpretationSusceptibility",
    "I",
    "MS",
    "NCL",
    "NS",
    "R",
    "SYN-R",
    "S",
    "SDD",
    "SYN-S",
    "VS",
    "EX",
    "HX",
    "LX",
    "HM",
    "ObservationInterpretationDetection",
    "IND",
    "E",
    "NEG",
    "ND",
    "POS",
    "DET",
    "ObservationInterpretationExpectation",
    "EXP",
    "UNE",
    "OBX",
    "ReactivityObservationInterpretation",
    "NR",
    "RR",
    "WR"
];

export const ObservationinterpretationValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        concept: [
            {
                code: "_GeneticObservationInterpretation",
                display: "GeneticObservationInterpretation"
            },
            {
                code: "CAR",
                display: "Carrier"
            },
            {
                code: "Carrier",
                display: "Carrier"
            },
            {
                code: "_ObservationInterpretationChange",
                display: "ObservationInterpretationChange"
            },
            {
                code: "B",
                display: "Better"
            },
            {
                code: "D",
                display: "Significant change down"
            },
            {
                code: "U",
                display: "Significant change up"
            },
            {
                code: "W",
                display: "Worse"
            },
            {
                code: "_ObservationInterpretationExceptions",
                display: "ObservationInterpretationExceptions"
            },
            {
                code: "<",
                display: "Off scale low"
            },
            {
                code: ">",
                display: "Off scale high"
            },
            {
                code: "AC",
                display: "Anti-complementary substances present"
            },
            {
                code: "IE",
                display: "Insufficient evidence"
            },
            {
                code: "QCF",
                display: "Quality control failure"
            },
            {
                code: "TOX",
                display: "Cytotoxic substance present"
            },
            {
                code: "_ObservationInterpretationNormality",
                display: "ObservationInterpretationNormality"
            },
            {
                code: "A",
                display: "Abnormal"
            },
            {
                code: "AA",
                display: "Critical abnormal"
            },
            {
                code: "HH",
                display: "Critical high"
            },
            {
                code: "LL",
                display: "Critical low"
            },
            {
                code: "H",
                display: "High"
            },
            {
                code: "H>",
                display: "Significantly high"
            },
            {
                code: "HU",
                display: "Significantly high"
            },
            {
                code: "L",
                display: "Low"
            },
            {
                code: "L<",
                display: "Significantly low"
            },
            {
                code: "LU",
                display: "Significantly low"
            },
            {
                code: "N",
                display: "Normal"
            },
            {
                code: "_ObservationInterpretationSusceptibility",
                display: "ObservationInterpretationSusceptibility"
            },
            {
                code: "I",
                display: "Intermediate"
            },
            {
                code: "MS",
                display: "moderately susceptible"
            },
            {
                code: "NCL",
                display: "No CLSI defined breakpoint"
            },
            {
                code: "NS",
                display: "Non-susceptible"
            },
            {
                code: "R",
                display: "Resistant"
            },
            {
                code: "SYN-R",
                display: "Synergy - resistant"
            },
            {
                code: "S",
                display: "Susceptible"
            },
            {
                code: "SDD",
                display: "Susceptible-dose dependent"
            },
            {
                code: "SYN-S",
                display: "Synergy - susceptible"
            },
            {
                code: "VS",
                display: "very susceptible"
            },
            {
                code: "EX",
                display: "outside threshold"
            },
            {
                code: "HX",
                display: "above high threshold"
            },
            {
                code: "LX",
                display: "below low threshold"
            },
            {
                code: "HM",
                display: "Hold for Medical Review"
            },
            {
                code: "ObservationInterpretationDetection",
                display: "ObservationInterpretationDetection"
            },
            {
                code: "IND",
                display: "Indeterminate"
            },
            {
                code: "E",
                display: "Equivocal"
            },
            {
                code: "NEG",
                display: "Negative"
            },
            {
                code: "ND",
                display: "Not detected"
            },
            {
                code: "POS",
                display: "Positive"
            },
            {
                code: "DET",
                display: "Detected"
            },
            {
                code: "ObservationInterpretationExpectation",
                display: "ObservationInterpretationExpectation"
            },
            {
                code: "EXP",
                display: "Expected"
            },
            {
                code: "UNE",
                display: "Unexpected"
            },
            {
                code: "OBX",
                display: "Interpretation qualifiers in separate OBX segments"
            },
            {
                code: "ReactivityObservationInterpretation",
                display: "ReactivityObservationInterpretation"
            },
            {
                code: "NR",
                display: "Non-reactive"
            },
            {
                code: "RR",
                display: "Reactive"
            },
            {
                code: "WR",
                display: "Weakly reactive"
            }
        ]
    }
];

export default Observationinterpretation;
