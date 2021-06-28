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

import MIOParser from "./dist";

const zbBundle = {
    resourceType: "Bundle",
    id: "0edd23bb-fbba-41e1-a66a-b6fa02375ef0",
    meta: {
        profile: ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Bundle|1.1.0"]
    },
    identifier: {
        system: "urn:ietf:rfc:3986",
        value: "0edd23bb-fbba-41e1-a66a-b6fa02375ef0"
    },
    type: "document",
    timestamp: "2019-12-23T12:30:02Z",
    entry: [
        {
            fullUrl:
                "http://pvs.praxis-topp-gluecklich.local/fhir/Composition/2c3a4aa6-cbea-4ac1-a6e5-865b93424e0a",
            resource: {
                resourceType: "Composition",
                id: "2c3a4aa6-cbea-4ac1-a6e5-865b93424e0a",
                meta: {
                    profile: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Composition|1.1.0"
                    ]
                },
                text: {
                    status: "extensions",
                    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>TBD</p></div>'
                },
                status: "final",
                type: {
                    coding: [
                        {
                            system: "http://snomed.info/sct",
                            version:
                                "http://snomed.info/sct/900000000000207008/version/20210131",
                            code: "371525003",
                            display: "Clinical procedure report (record artifact)"
                        }
                    ]
                },
                subject: {
                    reference: "urn:uuid:ba5f36ef-84e9-4a83-852b-e74dac4014ed"
                },
                date: "2018-07-01T12:30:02Z",
                author: [
                    {
                        reference: "d6259485-ec02-43a9-a476-dc1b7baa05bf"
                    }
                ],
                title: "Bonushefteintrag",
                section: [
                    {
                        entry: [
                            {
                                reference: "urn:uuid:321c66be-ea2e-4559-9e3d-b6f2326f2dcf"
                            },
                            {
                                reference: "urn:uuid:2071b7f6-6574-46c1-b3a9-e4ef8a93500e"
                            }
                        ]
                    }
                ]
            }
        },
        {
            fullUrl:
                "http://pvs.praxis-topp-gluecklich.local/fhir/Patient/ba5f36ef-84e9-4a83-852b-e74dac4014ed",
            resource: {
                resourceType: "Patient",
                id: "ba5f36ef-84e9-4a83-852b-e74dac4014ed",
                meta: {
                    profile: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Patient|1.1.0"
                    ]
                },
                text: {
                    status: "extensions",
                    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>TBD</p></div>'
                },
                identifier: [
                    {
                        type: {
                            coding: [
                                {
                                    system:
                                        "http://fhir.de/CodeSystem/identifier-type-de-basis",
                                    code: "GKV"
                                }
                            ]
                        },
                        system: "http://fhir.de/NamingSystem/gkv/kvid-10",
                        value: "1234567890"
                    }
                ],
                name: [
                    {
                        use: "official",
                        text: "Ludger Graf von Königsstein",
                        family: "Graf von Königsstein",
                        _family: {
                            extension: [
                                {
                                    url:
                                        "http://fhir.de/StructureDefinition/humanname-namenszusatz",
                                    valueString: "Graf"
                                },
                                {
                                    url:
                                        "http://hl7.org/fhir/StructureDefinition/humanname-own-name",
                                    valueString: "Königsstein"
                                },
                                {
                                    url:
                                        "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix",
                                    valueString: "von"
                                }
                            ]
                        },
                        given: ["Ludger"]
                    }
                ],
                birthDate: "1935-06-22",
                address: [
                    {
                        extension: [
                            {
                                url:
                                    "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct",
                                valueString: "Mitte"
                            }
                        ],
                        type: "both",
                        line: ["Musterweg 42", "Mitte"],
                        _line: [
                            {
                                extension: [
                                    {
                                        url:
                                            "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName",
                                        valueString: "Musterweg"
                                    },
                                    {
                                        url:
                                            "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber",
                                        valueString: "42"
                                    },
                                    {
                                        url:
                                            "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator",
                                        valueString: "Hinterhof"
                                    }
                                ]
                            }
                        ],
                        city: "Berlin",
                        postalCode: "10787",
                        country: "D"
                    }
                ]
            }
        },
        {
            fullUrl:
                "http://pvs.praxis-topp-gluecklich.local/fhir/Organization/d6259485-ec02-43a9-a476-dc1b7baa05bf",
            resource: {
                resourceType: "Organization",
                id: "d6259485-ec02-43a9-a476-dc1b7baa05bf",
                meta: {
                    profile: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Organization|1.1.0"
                    ]
                },
                text: {
                    status: "extensions",
                    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>TBD</p></div>'
                },
                identifier: [
                    {
                        type: {
                            coding: [
                                {
                                    system:
                                        "http://terminology.hl7.org/CodeSystem/v2-0203",
                                    code: "XX"
                                }
                            ]
                        },
                        system: "http://fhir.de/NamingSystem/arge-ik/iknr",
                        value: "12345678"
                    }
                ],
                name: "Dr. med. Hans Topp-Glücklich",
                address: [
                    {
                        type: "both",
                        text: "Musterweg 1, 10787 Berlin, Deutschland",
                        line: ["Musterweg 1"],
                        _line: [
                            {
                                extension: [
                                    {
                                        url:
                                            "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName",
                                        valueString: "Musterweg"
                                    },
                                    {
                                        url:
                                            "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber",
                                        valueString: "1"
                                    }
                                ]
                            }
                        ],
                        city: "Berlin",
                        postalCode: "10787",
                        country: "D"
                    }
                ]
            }
        },
        {
            fullUrl:
                "http://pvs.praxis-topp-gluecklich.local/fhir/Observation/321c66be-ea2e-4559-9e3d-b6f2326f2dcf",
            resource: {
                resourceType: "Observation",
                id: "321c66be-ea2e-4559-9e3d-b6f2326f2dcf",
                meta: {
                    profile: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Observation_Dental_Check_Up|1.1.0"
                    ]
                },
                text: {
                    status: "extensions",
                    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>TBD</p></div>'
                },
                status: "final",
                code: {
                    coding: [
                        {
                            system: "http://snomed.info/sct",
                            version:
                                "http://snomed.info/sct/900000000000207008/version/20210131",
                            code: "63963009",
                            display: "Dental prophylaxis, adult (procedure)"
                        }
                    ],
                    text: "Individualprophylaxe"
                },
                subject: {
                    reference: "urn:uuid:ba5f36ef-84e9-4a83-852b-e74dac4014ed"
                },
                effectiveDateTime: "2020-01-02",
                valueBoolean: true
            }
        },
        {
            fullUrl:
                "http://pvs.praxis-topp-gluecklich.local/fhir/Observation/2071b7f6-6574-46c1-b3a9-e4ef8a93500e",
            resource: {
                resourceType: "Observation",
                id: "2071b7f6-6574-46c1-b3a9-e4ef8a93500e",
                meta: {
                    profile: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Observation_Gapless_Documentation|1.1.0"
                    ]
                },
                text: {
                    status: "extensions",
                    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>TBD</p></div>'
                },
                extension: [
                    {
                        url:
                            "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_ZAEB_Disclaimer",
                        valueString:
                            "Die Vertragsparteien sind sich einig, dass der Zahnarzt im Nachhinein für eine falsche Jahresangabe nicht haftbar gemacht werden kann, wenn die Krankenkasse bei der Prüfung eines Heil- und Kostenplanes keinen Bonus oder eine andere Bonusstufe feststellt."
                    }
                ],
                status: "final",
                code: {
                    text:
                        "Datum, seit dem eine lückenlose Dokumentation in dem Papier-Zahnbonusheft nachweislich vorliegt."
                },
                subject: {
                    reference: "urn:uuid:ba5f36ef-84e9-4a83-852b-e74dac4014ed"
                },
                valueDateTime: "2015-01-02"
            }
        }
    ]
};
const mioparser = new MIOParser();

mioparser.parseString(JSON.stringify(zbBundle)).then((result) => {
    console.log(result.errors);
});
