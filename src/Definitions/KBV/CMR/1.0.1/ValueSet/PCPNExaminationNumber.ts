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
import PCPNExaminationNumberGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/PCPNExaminationNumberGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_PC_PN_Examination_Number

type PCPNExaminationNumber =
    | "170107008"
    | "243788004:370131001=133931009"
    | "170250008"
    | "170263002"
    | "170254004"
    | "401140000"
    | "170281004"
    | "410635005"
    | "243788004:370131001=410602000";

type PCPNExaminationNumberType = t.KeyofC<{
    "170107008": null;
    "243788004:370131001=133931009": null;
    "170250008": null;
    "170263002": null;
    "170254004": null;
    "401140000": null;
    "170281004": null;
    "410635005": null;
    "243788004:370131001=410602000": null;
}>;

const PCPNExaminationNumber: PCPNExaminationNumberType = t.keyof({
    "170107008": null,
    "243788004:370131001=133931009": null,
    "170250008": null,
    "170263002": null,
    "170254004": null,
    "401140000": null,
    "170281004": null,
    "410635005": null,
    "243788004:370131001=410602000": null
});
export const PCPNExaminationNumberArray: string[] = [
    "170107008",
    "243788004:370131001=133931009",
    "170250008",
    "170263002",
    "170254004",
    "401140000",
    "170281004",
    "410635005",
    "243788004:370131001=410602000"
];

export const PCPNExaminationNumberValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "170107008",
                display: "Child examination - 10 days (procedure)"
            },
            {
                code: "243788004:370131001=133931009",
                display:
                    "Child examination (procedure) : Recipient category =  Infant (person)"
            },
            {
                code: "170250008",
                display: "Child 3 month examination (procedure)"
            },
            {
                code: "170263002",
                display: "Child 6 month examination (procedure)"
            },
            {
                code: "170254004",
                display: "Child 1 year examination (procedure)"
            },
            {
                code: "401140000",
                display: "Child 2 year examination (procedure)"
            },
            {
                code: "170281004",
                display: "Child 3 year examination (procedure)"
            },
            {
                code: "410635005",
                display: "Child 4 year examination (procedure)"
            },
            {
                code: "243788004:370131001=410602000",
                display:
                    "Child examination (procedure) : Recipient category (attribute) =  Preschool child (person)"
            }
        ]
    }
];

export { PCPNExaminationNumberGerman as ConceptMap };

export default PCPNExaminationNumber;
