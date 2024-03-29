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
import { Literal } from "../../../CustomTypes";
import SCALARBoolean from "../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import KBVVSSFHIRICDSEITENLOKALISATIONVS from "../../../../Definitions/ST/1.0.0/ValueSet/KBVVSSFHIRICDSEITENLOKALISATION";

// Definition for URL: "http://fhir.de/StructureDefinition/seitenlokalisation"

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface SeitenlokalisationValueCoding {
    system: string;
    code: KBVVSSFHIRICDSEITENLOKALISATIONVS;
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const SeitenlokalisationValueCoding: t.Type<SeitenlokalisationValueCoding> =
    t.recursion("SeitenlokalisationValueCoding", () =>
        t.intersection([
            t.type({
                system: SCALARUri,
                code: KBVVSSFHIRICDSEITENLOKALISATIONVS
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

interface Seitenlokalisation {
    url: "http://fhir.de/StructureDefinition/seitenlokalisation";
    valueCoding: SeitenlokalisationValueCoding;
    id?: string;
}

const Seitenlokalisation: t.Type<Seitenlokalisation> = t.recursion(
    "Seitenlokalisation",
    () =>
        t.intersection([
            t.type({
                url: Literal("http://fhir.de/StructureDefinition/seitenlokalisation"),
                valueCoding: SeitenlokalisationValueCoding
            }),
            t.partial({
                id: SCALARString
            })
        ])
);

export default Seitenlokalisation;
