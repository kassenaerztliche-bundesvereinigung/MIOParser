/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2022 under one
 *  or more contributor license agreements. See the NOTICE file
 *  distributed with this work for additional information
 *  regarding copyright ownership. The KBV licenses this file
 *  to you under the Apache License, Version 2.0 (the
 *  "License"); you may not use this file except in compliance
 *  with the License. You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied. See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 *
 */

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

type ObservationinterpretationType = t.KeyofC<{
    _GeneticObservationInterpretation: null;
    CAR: null;
    Carrier: null;
    _ObservationInterpretationChange: null;
    B: null;
    D: null;
    U: null;
    W: null;
    _ObservationInterpretationExceptions: null;
    "<": null;
    ">": null;
    AC: null;
    IE: null;
    QCF: null;
    TOX: null;
    _ObservationInterpretationNormality: null;
    A: null;
    AA: null;
    HH: null;
    LL: null;
    H: null;
    "H>": null;
    HU: null;
    L: null;
    "L<": null;
    LU: null;
    N: null;
    _ObservationInterpretationSusceptibility: null;
    I: null;
    MS: null;
    NCL: null;
    NS: null;
    R: null;
    "SYN-R": null;
    S: null;
    SDD: null;
    "SYN-S": null;
    VS: null;
    EX: null;
    HX: null;
    LX: null;
    HM: null;
    ObservationInterpretationDetection: null;
    IND: null;
    E: null;
    NEG: null;
    ND: null;
    POS: null;
    DET: null;
    ObservationInterpretationExpectation: null;
    EXP: null;
    UNE: null;
    OBX: null;
    ReactivityObservationInterpretation: null;
    NR: null;
    RR: null;
    WR: null;
}>;

const Observationinterpretation: ObservationinterpretationType = t.keyof({
    _GeneticObservationInterpretation: null,
    CAR: null,
    Carrier: null,
    _ObservationInterpretationChange: null,
    B: null,
    D: null,
    U: null,
    W: null,
    _ObservationInterpretationExceptions: null,
    "<": null,
    ">": null,
    AC: null,
    IE: null,
    QCF: null,
    TOX: null,
    _ObservationInterpretationNormality: null,
    A: null,
    AA: null,
    HH: null,
    LL: null,
    H: null,
    "H>": null,
    HU: null,
    L: null,
    "L<": null,
    LU: null,
    N: null,
    _ObservationInterpretationSusceptibility: null,
    I: null,
    MS: null,
    NCL: null,
    NS: null,
    R: null,
    "SYN-R": null,
    S: null,
    SDD: null,
    "SYN-S": null,
    VS: null,
    EX: null,
    HX: null,
    LX: null,
    HM: null,
    ObservationInterpretationDetection: null,
    IND: null,
    E: null,
    NEG: null,
    ND: null,
    POS: null,
    DET: null,
    ObservationInterpretationExpectation: null,
    EXP: null,
    UNE: null,
    OBX: null,
    ReactivityObservationInterpretation: null,
    NR: null,
    RR: null,
    WR: null
});
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
