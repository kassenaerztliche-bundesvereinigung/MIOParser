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
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Gender_Birth

type CMRGenderBirth = "703118005" | "703117000" | "394744001";

const CMRGenderBirth: t.Type<CMRGenderBirth> = t.union(
    [t.literal("703118005"), t.literal("703117000"), t.literal("394744001")],
    "CMRGenderBirth"
);

export const CMRGenderBirthArray: string[] = ["703118005", "703117000", "394744001"];

export const CMRGenderBirthValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "703118005",
                display: "Feminine gender (finding)"
            },
            {
                code: "703117000",
                display: "Masculine gender (finding)"
            },
            {
                code: "394744001",
                display: "Gender unspecified (finding)"
            }
        ]
    }
];

export default CMRGenderBirth;
