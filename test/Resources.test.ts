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

import { defineResourceMeta } from "../src/Resources";
import { VersionNumber } from "../src";
import { HasMeta } from "../src/Interfaces/AppInternals";

describe("Resources", () => {
    test("VersionNumber", (done) => {
        const values: { in: string; out: string }[] = [
            { in: "1.00.000", out: "1.0.0" },
            { in: "5.01.2", out: "5.1.2" },
            { in: "1.0", out: "1.0" },
            { in: "0.0.0025", out: "0.0.25" },
            { in: "0", out: "0" },
            { in: "7", out: "7" },
            { in: "", out: "" }
        ];

        values.forEach((value) => {
            expect(new VersionNumber(value.in).toString()).toEqual(value.out);
        });

        done();
    });

    test("defineResourceType", (done) => {
        const values: { in: HasMeta; out: { profile: string; version: string } }[] = [
            {
                in: {
                    meta: {
                        profile: [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Bundle_Entry|1.00.000"
                        ]
                    }
                },
                out: {
                    profile:
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Bundle_Entry",
                    version: "1.0.0"
                }
            },
            {
                in: {
                    meta: {
                        profile: [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Bundle_Entry|1.0.00"
                        ]
                    }
                },
                out: {
                    profile:
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Bundle_Entry",
                    version: "1.0.0"
                }
            },
            {
                in: {
                    meta: {
                        profile: [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Bundle_Entry|1.0.0"
                        ]
                    }
                },
                out: {
                    profile:
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Bundle_Entry",
                    version: "1.0.0"
                }
            },
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
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Provenance",
                    version: ""
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
            const result = defineResourceMeta(value.in);
            expect(result.isEqual(value.out.profile, value.out.version)).toBeTruthy();
        });

        done();
    });
});
