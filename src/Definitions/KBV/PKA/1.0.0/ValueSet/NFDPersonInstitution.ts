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
import NFDPersonInstitutionGerman from "../../../../../Definitions/KBV/PKA/1.0.0/ConceptMap/NFDPersonInstitutionGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_NFD_Person_Institution

type NFDPersonInstitution = "158965000" | "257585005";

type NFDPersonInstitutionType = t.KeyofC<{ "158965000": null; "257585005": null }>;

const NFDPersonInstitution: NFDPersonInstitutionType = t.keyof({
    "158965000": null,
    "257585005": null
});
export const NFDPersonInstitutionArray: string[] = ["158965000", "257585005"];

export const NFDPersonInstitutionValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "158965000",
                display: "Medical practitioner (occupation)"
            },
            {
                code: "257585005",
                display: "Clinic (environment)"
            }
        ]
    }
];

export { NFDPersonInstitutionGerman as ConceptMap };

export default NFDPersonInstitution;
