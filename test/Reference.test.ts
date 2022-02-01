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

import Reference from "../src/Interfaces/Reference";

describe("Reference", () => {
    test("absolute", (done) => {
        const values: { ref: string; result: boolean; valid?: boolean }[] = [
            {
                ref: "Patient/1",
                result: false
            },
            {
                ref: "urn:",
                result: false
            },
            {
                ref: "urn:uuid:xyz",
                result: true
            },
            {
                ref: "urn:uuid:2c3a4aa6-cbea-4ac1-a6e5-865b93424e0a",
                result: true
            }
        ];

        values.forEach((v) => {
            const reference = new Reference(v.ref);
            console.log(v.ref);
            expect(reference.absolute).toBe(v.result);
        });

        done();
    });

    test("root", (done) => {
        const values: {
            fullUrl: string;
            root: string;
        }[] = [
            {
                fullUrl: "Patient/1",
                root: ""
            },
            {
                fullUrl: "urn:uuid:2c3a4aa6-cbea-4ac1-a6e5-865b93424e0a",
                root: ""
            },
            {
                fullUrl: "http://pvs.praxis-topp-gluecklich.local/fhir/Composition/1",
                root: "http://pvs.praxis-topp-gluecklich.local/fhir/"
            },
            {
                fullUrl:
                    "http://pvs.praxis-topp-gluecklich.local/fhir/Composition/2c3a4aa6-cbea-4ac1-a6e5-865b93424e0a",
                root: "http://pvs.praxis-topp-gluecklich.local/fhir/"
            },
            {
                fullUrl:
                    "http://pvs.praxis-topp-gluecklich.local/fhir/2c3a4aa6-cbea-4ac1-a6e5-865b93424e0a",
                root: "" // Type is mandatory
            },
            {
                fullUrl: "https://juti.de/Patient23cd",
                root: "" // Type is mandatory
            },
            {
                fullUrl: "https://juti.de/fhir/Patient/23cd",
                root: "https://juti.de/fhir/"
            },
            {
                fullUrl: "https://juti.de/Patient/23cd",
                root: "https://juti.de/"
            }
        ];

        values.forEach((v) => {
            const result = new Reference("Patient/1", v.fullUrl);
            expect(result.root).toBe(v.root);
        });

        done();
    });

    test("resolveReference", (done) => {
        const values: {
            reference: string;
            fullUrl?: string;
            toResolve: string;
            result: boolean;
        }[] = [
            {
                reference: "Patient/1",
                toResolve: "Patient/1",
                result: true
            },
            {
                reference: "Patient/1",
                fullUrl: "https://juti.de/fhir/Observation/1",
                toResolve: "https://juti.de/fhir/Patient/1",
                result: true
            },
            {
                reference: "Patient/1",
                toResolve: "Patient/2",
                result: false
            },
            {
                reference: "Patient/1",
                fullUrl: "https://juti.de/fhir/Observation/1",
                toResolve: "Patient/1",
                result: false
            },
            {
                reference: "Patient/abc",
                toResolve: "abc",
                result: false
            },
            {
                reference: "urn:uuid:abc",
                toResolve: "abc",
                result: false
            },
            {
                reference: "abc",
                toResolve: "urn:uuid:abc",
                result: false
            },
            {
                reference: "urn:uuid:2c3a4aa6-cbea-4ac1-a6e5-865b93424e0a",
                toResolve: "urn:uuid:2c3a4aa6-cbea-4ac1-a6e5-865b93424e0a",
                result: true
            },
            {
                reference: "Composition/1",
                fullUrl: "http://pvs.praxis-topp-gluecklich.local/fhir/Bundle/1",
                toResolve: "http://pvs.praxis-topp-gluecklich.local/fhir/Composition/1",
                result: true
            },
            {
                reference:
                    "http://pvs.praxis-topp-gluecklich.local/fhir/Composition/2c3a4aa6-cbea-4ac1-a6e5-865b93424e0a",
                fullUrl: "http://pvs.praxis-topp-gluecklich.local/fhir/Bundle/1",
                toResolve: "Composition/2c3a4aa6-cbea-4ac1-a6e5-865b93424e0a",
                result: false
            },
            {
                reference:
                    "http://pvs.praxis-topp-gluecklich.local/fhir/2c3a4aa6-cbea-4ac1-a6e5-865b93424e0a",
                fullUrl: "http://pvs.praxis-topp-gluecklich.local/fhir/Bundle/1",
                toResolve: "2c3a4aa6-cbea-4ac1-a6e5-865b93424e0a",
                result: false
            },
            {
                reference: "2c3a4aa6-cbea-4ac1-a6e5-865b93424e0a",
                fullUrl: "http://pvs.praxis-topp-gluecklich.local/fhir/Bundle/1",
                toResolve:
                    "http://pvs.praxis-topp-gluecklich.local/fhir/2c3a4aa6-cbea-4ac1-a6e5-865b93424e0a",
                result: false // Type muss immer angegeben sein
            },
            {
                reference: "23cd",
                fullUrl: "https://juti.de/fhir/Observation/1",
                toResolve: "https://juti.de/fhir/Patient/23cd",
                result: false
            },
            {
                reference: "",
                fullUrl: "https://juti.de/fhir/Observation/1",
                toResolve: "https://juti.de/fhir/Patient/",
                result: false
            },
            {
                reference: "https://juti.de/fhir/Patient/1",
                fullUrl: "https://juti.de/fhir/Observation/1",
                toResolve: "https://juti.de/fhir/Patient1",
                result: false
            }
        ];

        values.forEach((v) => {
            const ref = new Reference(v.reference, v.fullUrl);
            console.log(v.reference, v.fullUrl);
            expect(ref.resolve(v.toResolve)).toBe(v.result);
        });

        done();
    });
});
