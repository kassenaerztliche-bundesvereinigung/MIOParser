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
import CMRFoetalPositionGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRFoetalPositionGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Foetal_Position

type CMRFoetalPosition =
    | "394698008:246090004=70028003"
    | "407613009"
    | "394698008:246090004=199362007";

type CMRFoetalPositionType = t.KeyofC<{
    "394698008:246090004=70028003": null;
    "407613009": null;
    "394698008:246090004=199362007": null;
}>;

const CMRFoetalPosition: CMRFoetalPositionType = t.keyof({
    "394698008:246090004=70028003": null,
    "407613009": null,
    "394698008:246090004=199362007": null
});
export const CMRFoetalPositionArray: string[] = [
    "394698008:246090004=70028003",
    "407613009",
    "394698008:246090004=199362007"
];

export const CMRFoetalPositionValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "394698008:246090004=70028003",
                display:
                    "Birth history (situation) : Associated finding (attribute) = Vertex presentation (finding)"
            },
            {
                code: "407613009",
                display: "Born by breech delivery (situation)"
            },
            {
                code: "394698008:246090004=199362007",
                display:
                    "Birth history (situation) : Associated finding (attribute) = Transverse lie - delivered (disorder)"
            }
        ]
    }
];

export { CMRFoetalPositionGerman as ConceptMap };

export default CMRFoetalPosition;
