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
import { Literal, Excess } from "../../../../CustomTypes";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"

interface CMRNote {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: string;
    id?: string;
}

const CMRNote: t.Type<CMRNote> = t.recursion("CMRNote", () =>
    Excess(
        t.intersection([
            t.type({
                url: Literal(
                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                ),
                valueString: SCALARString
            }),
            t.partial({
                id: SCALARString
            })
        ])
    )
);

export default CMRNote;
