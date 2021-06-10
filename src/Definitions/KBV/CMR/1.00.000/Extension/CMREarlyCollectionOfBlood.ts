/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2021 under one
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
import { Literal, Excess, MinMaxArray } from "../../../../CustomTypes";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Early_Collection_Of_Blood"

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMREarlyCollectionOfBloodValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "738796001:363702006=395507008";
    display: "Collection of dried blood spot specimen (procedure) : Has focus (attribute) = Premature infant (finding)";
    id?: string;
    userSelected?: boolean;
}

export const CMREarlyCollectionOfBloodValueCodeableConceptCoding: t.Type<CMREarlyCollectionOfBloodValueCodeableConceptCoding> = t.recursion(
    "CMREarlyCollectionOfBloodValueCodeableConceptCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("738796001:363702006=395507008"),
                    display: Literal(
                        "Collection of dried blood spot specimen (procedure) : Has focus (attribute) = Premature infant (finding)"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
);

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface CMREarlyCollectionOfBloodValueCodeableConcept {
    coding: Array<CMREarlyCollectionOfBloodValueCodeableConceptCoding>;
    id?: string;
    text?: string;
}

export const CMREarlyCollectionOfBloodValueCodeableConcept: t.Type<CMREarlyCollectionOfBloodValueCodeableConcept> = t.recursion(
    "CMREarlyCollectionOfBloodValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMREarlyCollectionOfBloodValueCodeableConceptCoding
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString
                })
            ])
        )
);

interface CMREarlyCollectionOfBlood {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Early_Collection_Of_Blood";
    valueCodeableConcept: CMREarlyCollectionOfBloodValueCodeableConcept;
    id?: string;
}

const CMREarlyCollectionOfBlood: t.Type<CMREarlyCollectionOfBlood> = t.recursion(
    "CMREarlyCollectionOfBlood",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Early_Collection_Of_Blood"
                    ),
                    valueCodeableConcept: CMREarlyCollectionOfBloodValueCodeableConcept
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

export default CMREarlyCollectionOfBlood;
