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
import { Literal, ReqArray } from "../../../CustomTypes";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARPositiveInt from "../../../../Definitions/FHIR/4.0.1/Scalar/PositiveInt";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";

import ContactpointuseVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointuse";
import Extension from "../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Period from "../../../../Definitions/FHIR/4.0.1/Profile/Period";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Datatype_Contactpoint"

/**
 * Content in other Language.
 */
export interface DatatypeContactpointSystemAnzeigenameCodeContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const DatatypeContactpointSystemAnzeigenameCodeContent: t.Type<DatatypeContactpointSystemAnzeigenameCodeContent> =
    t.recursion("DatatypeContactpointSystemAnzeigenameCodeContent", () =>
        t.intersection([
            t.type({
                url: Literal("content"),
                valueString: SCALARString
            }),
            t.partial({
                id: SCALARString
            })
        ])
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap oder ein vorgegebener fixed Value erwähnt werden.
 */
export interface DatatypeContactpointSystemAnzeigenameCode {
    extension: Array<Extension | DatatypeContactpointSystemAnzeigenameCodeContent>;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const DatatypeContactpointSystemAnzeigenameCode: t.Type<DatatypeContactpointSystemAnzeigenameCode> =
    t.recursion("DatatypeContactpointSystemAnzeigenameCode", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<DatatypeContactpointSystemAnzeigenameCodeContent>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        DatatypeContactpointSystemAnzeigenameCodeContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: DatatypeContactpointSystemAnzeigenameCodeContent,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "url", value: "content" }
                        }
                    ],
                    ["1", "*"]
                ),
                url: Literal(
                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                )
            }),
            t.partial({
                id: SCALARString
            })
        ])
    );

/**
 * Telecommunications form for contact point - what communications system is required to make use of the contact.
 */
export interface DatatypeContactpointSystem {
    id?: string;
    extension?: (Extension | DatatypeContactpointSystemAnzeigenameCode)[];
    value?: string;
}

export const DatatypeContactpointSystem: t.Type<DatatypeContactpointSystem> = t.recursion(
    "DatatypeContactpointSystem",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [t.Type<Extension>, t.Type<DatatypeContactpointSystemAnzeigenameCode>]
                >,
                t.Any
            >(
                t.union([Extension, DatatypeContactpointSystemAnzeigenameCode]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: DatatypeContactpointSystemAnzeigenameCode,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                        }
                    }
                ],
                ["0", "*"]
            ),
            value: SCALARString
        })
);

interface DatatypeContactpoint {
    value: string;
    id?: string;
    _system?: DatatypeContactpointSystem;
    system?: string;
    use?: ContactpointuseVS;
    rank?: number;
    period?: Period;
}

const DatatypeContactpoint: t.Type<DatatypeContactpoint> = t.recursion(
    "DatatypeContactpoint",
    () =>
        t.intersection([
            t.type({
                value: SCALARString
            }),
            t.partial({
                id: SCALARString,
                _system: DatatypeContactpointSystem,
                system: SCALARCode,
                use: ContactpointuseVS,
                rank: SCALARPositiveInt,
                period: Period
            })
        ])
);

export default DatatypeContactpoint;
