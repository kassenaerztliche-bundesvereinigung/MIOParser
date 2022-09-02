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
import MRGeneralInformationGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRGeneralInformationGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_General_Information

type MRGeneralInformation = "1157306001" | "249045009";

type MRGeneralInformationType = t.KeyofC<{ "1157306001": null; "249045009": null }>;

const MRGeneralInformation: MRGeneralInformationType = t.keyof({
    "1157306001": null,
    "249045009": null
});
export const MRGeneralInformationArray: string[] = ["1157306001", "249045009"];

export const MRGeneralInformationValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "1157306001",
                display: "Embryo present in utero (finding)"
            },
            {
                code: "249045009",
                display: "Fetal heart sounds present (finding)"
            }
        ]
    }
];

export { MRGeneralInformationGerman as ConceptMap };

export default MRGeneralInformation;
