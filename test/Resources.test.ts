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

import { defineResourceType, HasMeta } from "../src/Resources";
import { ResourceType } from "../src";

describe("Resources", () => {
    test("defineResourceType", (done) => {
        const values: { in: HasMeta; out: ResourceType }[] = [
            {
                in: {
                    meta: {
                        profile: [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Provenance"
                        ]
                    }
                },
                out: {
                    profile:
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Provenance"
                }
            },
            {
                in: {
                    meta: {
                        profile: [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Provenance|1.0"
                        ]
                    }
                },
                out: {
                    profile:
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Provenance",
                    version: "1.0"
                }
            },
            {
                in: {
                    meta: {
                        profile: [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Provenance|1.0",
                            "B"
                        ]
                    }
                },
                out: {
                    profile:
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Provenance",
                    version: "1.0"
                }
            }
        ];

        values.forEach((value) => {
            const result = defineResourceType(value.in);
            expect(result).toEqual(value.out);
        });

        done();
    });
});
