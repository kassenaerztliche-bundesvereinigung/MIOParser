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
import VaccinationImmunizationOriginCodesGerman from "../../../../../Definitions/KBV/IM/1.1.0/ConceptMap/VaccinationImmunizationOriginCodesGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_ImmunizationOriginCodes

type VaccinationImmunizationOriginCodes = "recall" | "record" | "provider";

const VaccinationImmunizationOriginCodes: t.Type<VaccinationImmunizationOriginCodes> =
    t.union(
        [t.literal("recall"), t.literal("record"), t.literal("provider")],
        "VaccinationImmunizationOriginCodes"
    );

export const VaccinationImmunizationOriginCodesArray: string[] = [
    "recall",
    "record",
    "provider"
];

export const VaccinationImmunizationOriginCodesValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/immunization-origin",
        concept: [
            {
                code: "recall",
                display: "Parent/Guardian/Patient Recall"
            },
            {
                code: "record",
                display: "Written Record"
            },
            {
                code: "provider",
                display: "Other Provider"
            }
        ]
    }
];

export { VaccinationImmunizationOriginCodesGerman as ConceptMap };

export default VaccinationImmunizationOriginCodes;
