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
import { ValueSet } from "../../../../Interfaces";
import NFDxDPEContactPointGerman from "../../../../../Definitions/KBV/PKA/1.0.0/ConceptMap/NFDxDPEContactPointGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_NFDxDPE_Contact_Point

type NFDxDPEContactPoint = "fax" | "email";

type NFDxDPEContactPointType = t.KeyofC<{ fax: null; email: null }>;

const NFDxDPEContactPoint: NFDxDPEContactPointType = t.keyof({
    fax: null,
    email: null
});
export const NFDxDPEContactPointArray: string[] = ["fax", "email"];

export const NFDxDPEContactPointValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/contact-point-system",
        concept: [
            {
                code: "fax",
                display: "Fax"
            },
            {
                code: "email",
                display: "Email"
            }
        ]
    }
];

export { NFDxDPEContactPointGerman as ConceptMap };

export default NFDxDPEContactPoint;
