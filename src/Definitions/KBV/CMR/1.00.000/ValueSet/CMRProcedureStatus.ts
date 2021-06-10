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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Procedure_Status

type CMRProcedureStatus = "completed" | "not-done";

const CMRProcedureStatus: t.Type<CMRProcedureStatus> = t.union(
    [t.literal("completed"), t.literal("not-done")],
    "CMRProcedureStatus"
);

export const CMRProcedureStatusArray: string[] = ["completed", "not-done"];

export const CMRProcedureStatusValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/event-status",
        concept: [
            {
                code: "completed",
                display: "Completed"
            },
            {
                code: "not-done",
                display: "Not Done"
            }
        ]
    }
];

export default CMRProcedureStatus;