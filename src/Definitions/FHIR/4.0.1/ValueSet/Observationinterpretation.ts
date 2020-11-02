/*
 * Licensed to the Kassenärztliche Bundesvereinigung (KBV) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The KBV licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/observation-interpretation

type Observationinterpretation =
    | "CAR"
    | "Carrier"
    | "_GeneticObservationInterpretation"
    | "B"
    | "D"
    | "U"
    | "W"
    | "_ObservationInterpretationChange"
    | "<"
    | ">"
    | "AC"
    | "IE"
    | "QCF"
    | "TOX"
    | "_ObservationInterpretationExceptions"
    | "HH"
    | "LL"
    | "AA"
    | "H>"
    | "HU"
    | "H"
    | "L<"
    | "LU"
    | "L"
    | "A"
    | "N"
    | "_ObservationInterpretationNormality"
    | "I"
    | "MS"
    | "NCL"
    | "NS"
    | "SYN-R"
    | "R"
    | "SDD"
    | "SYN-S"
    | "S"
    | "VS"
    | "_ObservationInterpretationSusceptibility"
    | "HX"
    | "LX"
    | "EX"
    | "HM"
    | "E"
    | "IND"
    | "ND"
    | "NEG"
    | "DET"
    | "POS"
    | "ObservationInterpretationDetection"
    | "EXP"
    | "UNE"
    | "ObservationInterpretationExpectation"
    | "OBX"
    | "NR"
    | "WR"
    | "RR"
    | "ReactivityObservationInterpretation";

const Observationinterpretation: t.Type<Observationinterpretation> = t.union(
    [
        t.literal("CAR"),
        t.literal("Carrier"),
        t.literal("_GeneticObservationInterpretation"),
        t.literal("B"),
        t.literal("D"),
        t.literal("U"),
        t.literal("W"),
        t.literal("_ObservationInterpretationChange"),
        t.literal("<"),
        t.literal(">"),
        t.literal("AC"),
        t.literal("IE"),
        t.literal("QCF"),
        t.literal("TOX"),
        t.literal("_ObservationInterpretationExceptions"),
        t.literal("HH"),
        t.literal("LL"),
        t.literal("AA"),
        t.literal("H>"),
        t.literal("HU"),
        t.literal("H"),
        t.literal("L<"),
        t.literal("LU"),
        t.literal("L"),
        t.literal("A"),
        t.literal("N"),
        t.literal("_ObservationInterpretationNormality"),
        t.literal("I"),
        t.literal("MS"),
        t.literal("NCL"),
        t.literal("NS"),
        t.literal("SYN-R"),
        t.literal("R"),
        t.literal("SDD"),
        t.literal("SYN-S"),
        t.literal("S"),
        t.literal("VS"),
        t.literal("_ObservationInterpretationSusceptibility"),
        t.literal("HX"),
        t.literal("LX"),
        t.literal("EX"),
        t.literal("HM"),
        t.literal("E"),
        t.literal("IND"),
        t.literal("ND"),
        t.literal("NEG"),
        t.literal("DET"),
        t.literal("POS"),
        t.literal("ObservationInterpretationDetection"),
        t.literal("EXP"),
        t.literal("UNE"),
        t.literal("ObservationInterpretationExpectation"),
        t.literal("OBX"),
        t.literal("NR"),
        t.literal("WR"),
        t.literal("RR"),
        t.literal("ReactivityObservationInterpretation")
    ],
    "Observationinterpretation"
);

export const ObservationinterpretationArray: string[] = [
    "CAR",
    "Carrier",
    "_GeneticObservationInterpretation",
    "B",
    "D",
    "U",
    "W",
    "_ObservationInterpretationChange",
    "<",
    ">",
    "AC",
    "IE",
    "QCF",
    "TOX",
    "_ObservationInterpretationExceptions",
    "HH",
    "LL",
    "AA",
    "H>",
    "HU",
    "H",
    "L<",
    "LU",
    "L",
    "A",
    "N",
    "_ObservationInterpretationNormality",
    "I",
    "MS",
    "NCL",
    "NS",
    "SYN-R",
    "R",
    "SDD",
    "SYN-S",
    "S",
    "VS",
    "_ObservationInterpretationSusceptibility",
    "HX",
    "LX",
    "EX",
    "HM",
    "E",
    "IND",
    "ND",
    "NEG",
    "DET",
    "POS",
    "ObservationInterpretationDetection",
    "EXP",
    "UNE",
    "ObservationInterpretationExpectation",
    "OBX",
    "NR",
    "WR",
    "RR",
    "ReactivityObservationInterpretation"
];

export const ObservationinterpretationValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        concept: []
    }
];

export default Observationinterpretation;
