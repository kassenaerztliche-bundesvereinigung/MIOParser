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
import CMRPulseOxymetryScreeningDataAbsentReasonGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRPulseOxymetryScreeningDataAbsentReasonGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Pulse_Oxymetry_Screening_Data_Absent_Reason

type CMRPulseOxymetryScreeningDataAbsentReason =
    | "428119001:{363589002=250554003,408730004=410534003}"
    | "183948000:363589002=250554003";

const CMRPulseOxymetryScreeningDataAbsentReason: t.Type<CMRPulseOxymetryScreeningDataAbsentReason> =
    t.union(
        [
            t.literal("428119001:{363589002=250554003,408730004=410534003}"),
            t.literal("183948000:363589002=250554003")
        ],
        "CMRPulseOxymetryScreeningDataAbsentReason"
    );

export const CMRPulseOxymetryScreeningDataAbsentReasonArray: string[] = [
    "428119001:{363589002=250554003,408730004=410534003}",
    "183948000:363589002=250554003"
];

export const CMRPulseOxymetryScreeningDataAbsentReasonValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "428119001:{363589002=250554003,408730004=410534003}",
                display:
                    "Procedure not indicated (situation) : { Associated procedure (attribute) = Measurement of oxygen saturation at periphery (procedure) , Procedure context (attribute) = Not indicated (qualifier value) }"
            },
            {
                code: "183948000:363589002=250554003",
                display:
                    "Refused procedure - parent's wish (situation) : Associated procedure (attribute) = Measurement of oxygen saturation at periphery (procedure)"
            }
        ]
    }
];

export { CMRPulseOxymetryScreeningDataAbsentReasonGerman as ConceptMap };

export default CMRPulseOxymetryScreeningDataAbsentReason;
