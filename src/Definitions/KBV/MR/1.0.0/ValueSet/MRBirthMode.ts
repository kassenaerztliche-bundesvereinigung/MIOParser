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
import MRBirthModeGerman from "../../../../../Definitions/KBV/MR/1.0.0/ConceptMap/MRBirthModeGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Birth_Mode

type MRBirthMode =
    | "129125009:{363589002=236974004,408730004=398166005}"
    | "200144004"
    | "169961004";

type MRBirthModeType = t.KeyofC<{
    "129125009:{363589002=236974004,408730004=398166005}": null;
    "200144004": null;
    "169961004": null;
}>;

const MRBirthMode: MRBirthModeType = t.keyof({
    "129125009:{363589002=236974004,408730004=398166005}": null,
    "200144004": null,
    "169961004": null
});
export const MRBirthModeArray: string[] = [
    "129125009:{363589002=236974004,408730004=398166005}",
    "200144004",
    "169961004"
];

export const MRBirthModeValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "129125009:{363589002=236974004,408730004=398166005}",
                display:
                    "Procedure with explicit context (situation):{Associated procedure (attribute)=Instrumental delivery (procedure),Procedure context (attribute)=Performed (qualifier value)}"
            },
            {
                code: "200144004",
                display: "Deliveries by cesarean (finding)"
            },
            {
                code: "169961004",
                display: "Normal birth (finding)"
            }
        ]
    }
];

export { MRBirthModeGerman as ConceptMap };

export default MRBirthMode;
