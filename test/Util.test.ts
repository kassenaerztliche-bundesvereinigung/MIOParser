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

import MIOParser, { ParserUtil, KBVBundleResource, Vaccination, ZAEB, MR } from "../src";
import fs from "fs";
import * as TestUtil from "miotestdata";
import { ConceptMap } from "../src/Interfaces/Util";
import { AnyType } from "../src/";

async function getMIOAs<T extends KBVBundleResource>(
    T: AnyType,
    filePath: string
): Promise<T | undefined> {
    const bundleFile = fs.readFileSync(filePath);

    const mioParser = new MIOParser();
    const result = await mioParser.parseFile(new Blob([bundleFile]));

    expect(result.errors.length).toBe(0);
    expect(result.value).toBeDefined();
    expect(T.is(result.value)).toBeTruthy();

    return result ? (result.value as T) : undefined;
}

describe("Parser Util", () => {
    const mioParser = new MIOParser();

    type GetEntry = {
        bundleType: any; // eslint-disable-line
        todos: {
            profile: AnyType;
            result: boolean;
        }[];
    } & TestUtil.HasMioString;
    const getEntryList: GetEntry[] = [
        {
            bundleType: Vaccination.V1_00_000.Profile.BundleEntry,
            mioString: "IM",
            todos: [
                {
                    profile: Vaccination.V1_00_000.Profile.Patient,
                    result: true
                },
                {
                    profile: ZAEB.V1_00_000.Profile.Observation,
                    result: false
                }
            ]
        },
        {
            bundleType: ZAEB.V1_00_000.Profile.Bundle,
            mioString: "ZB",
            todos: [
                {
                    profile: ZAEB.V1_00_000.Profile.Patient,
                    result: true
                },
                {
                    profile: ZAEB.V1_00_000.Profile.Organization,
                    result: true
                },
                {
                    profile: ZAEB.V1_00_000.Profile.Composition,
                    result: true
                }
            ]
        },
        {
            bundleType: MR.V1_00_000.Profile.Bundle,
            mioString: "MR",
            todos: [
                {
                    profile: MR.V1_00_000.Profile.PatientMother,
                    result: true
                }
            ]
        }
    ];

    TestUtil.runAllFiles<GetEntry>(
        "getEntry",
        getEntryList,
        (file, value) => {
            describe(`${value.bundleType.name} "${file}"`, () => {
                value.todos.forEach((todo) => {
                    test(`${todo.profile.name} to be ${todo.result}`, async (done) => {
                        const mio = await getMIOAs<typeof value.bundleType>(
                            value.bundleType,
                            file
                        );
                        if (mio) {
                            const p = ParserUtil.getEntry<typeof todo.profile>(mio, [
                                todo.profile
                            ]);

                            if (todo.result) {
                                expect(p).toBeDefined();
                                if (p) {
                                    expect(todo.profile.is(p.resource)).toBeTruthy();
                                }
                            } else {
                                expect(p).toBeUndefined();
                            }
                        }
                        done();
                    });
                });
            });
        },
        "Bundles",
        true
    );

    type GetEntries = {
        bundleType: any[]; // eslint-disable-line
        todos: {
            profiles: AnyType[];
            result: number;
        }[];
    } & TestUtil.HasMioString;

    const getEntriesList: GetEntries[] = [
        {
            bundleType: [Vaccination.V1_00_000.Profile.BundleEntry],
            mioString: "IM",
            todos: [
                {
                    profiles: [
                        Vaccination.V1_00_000.Profile.Patient,
                        Vaccination.V1_00_000.Profile.Organization
                    ],
                    result: 1
                },
                {
                    profiles: [
                        Vaccination.V1_00_000.Profile.CompositionPrime,
                        Vaccination.V1_00_000.Profile.CompositionAddendum
                    ],
                    result: 1
                }
            ]
        },
        {
            bundleType: [ZAEB.V1_00_000.Profile.Bundle],
            mioString: "ZB",
            todos: [
                {
                    profiles: [ZAEB.V1_00_000.Profile.Composition],
                    result: 1
                },
                {
                    profiles: [
                        ZAEB.V1_00_000.Profile.Patient,
                        ZAEB.V1_00_000.Profile.Organization
                    ],
                    result: 2
                },
                {
                    profiles: [
                        ZAEB.V1_00_000.Profile.Observation,
                        ZAEB.V1_00_000.Profile.GaplessDocumentation
                    ],
                    result: 1
                }
            ]
        },
        {
            bundleType: [MR.V1_00_000.Profile.Bundle],
            mioString: "MR",
            todos: [
                {
                    profiles: [MR.V1_00_000.Profile.Composition],
                    result: 1
                },
                {
                    profiles: [MR.V1_00_000.Profile.PatientMother],
                    result: 1
                }
            ]
        }
    ];

    TestUtil.runAllFiles<GetEntries>(
        "getEntries",
        getEntriesList,
        (file, value) => {
            value.todos.forEach((todo) => {
                test(`${todo.profiles.map((profile) => profile.name).join(", ")}: to be ${
                    todo.result
                }`, async (done) => {
                    let mio = undefined;
                    value.bundleType.some(async (bundleType) => {
                        mio = await getMIOAs<typeof bundleType>(bundleType, file);
                        return !!mio;
                    });

                    if (mio) {
                        // eslint-disable-next-line
                        const PROFILES = (<T extends any[]>(...o: T): T => o)(
                            todo.profiles
                        );
                        const p = ParserUtil.getEntries<typeof PROFILES[number]>(
                            mio,
                            todo.profiles
                        );
                        expect(p.length).toBeGreaterThan(todo.result - 1);
                    }
                    done();
                });
            });
        },
        "Bundles",
        true
    );

    type GetSlice = {
        bundleType: any; // eslint-disable-line
        todos: {
            profile: any; // eslint-disable-line
            slices: {
                type: any; // eslint-disable-line
                field: string;
            }[];
        }[];
    } & TestUtil.HasMioString;

    const getSliceList: GetSlice[] = [
        {
            bundleType: Vaccination.V1_00_000.Profile.BundleEntry,
            mioString: "IM",
            todos: [
                {
                    profile: Vaccination.V1_00_000.Profile.Patient,
                    slices: [
                        {
                            type: Vaccination.V1_00_000.Profile.PatientName,
                            field: "name"
                        }
                    ]
                }
            ]
        },
        {
            bundleType: ZAEB.V1_00_000.Profile.Bundle,
            mioString: "ZB",
            todos: [
                {
                    profile: ZAEB.V1_00_000.Profile.Patient,
                    slices: [
                        {
                            type: ZAEB.V1_00_000.Profile.PatientName,
                            field: "name"
                        }
                    ]
                },
                {
                    profile: ZAEB.V1_00_000.Profile.Organization,
                    slices: [
                        {
                            type: ZAEB.V1_00_000.Profile.OrganizationStrassenanschrift,
                            field: "address"
                        }
                    ]
                }
            ]
        },
        {
            bundleType: MR.V1_00_000.Profile.Bundle,
            mioString: "MR",
            todos: [
                {
                    profile: MR.V1_00_000.Profile.PatientMother,
                    slices: [
                        {
                            type: MR.V1_00_000.Profile.PatientMotherName,
                            field: "name"
                        }
                    ]
                }
            ]
        }
    ];

    TestUtil.runAllFiles<GetSlice>(
        "getSlice",
        getSliceList,
        (file, value) => {
            value.todos.forEach((todo) => {
                const slices = todo.slices.map((slice) => slice.type.name).join(", ");
                test(`Get ${slices} from ${todo.profile.name} "${file}"`, async (done) => {
                    const mio = await getMIOAs<typeof value.bundleType>(
                        value.bundleType,
                        file
                    );
                    if (mio) {
                        const p = ParserUtil.getEntry<typeof todo.profile>(mio, [
                            todo.profile
                        ]);

                        expect(p).toBeDefined();
                        if (p) {
                            expect(todo.profile.is(p.resource)).toBeTruthy();
                            todo.slices.forEach((slice) => {
                                const result = ParserUtil.getSlice<typeof slice.type>(
                                    slice.type,
                                    p.resource[slice.field]
                                );
                                expect(result).toBeTruthy();
                            });
                        }
                    }
                    done();
                });
            });
        },
        "Bundles",
        true
    );

    test("getSlice (no value)", (done) => {
        expect(
            ParserUtil.getSlice<Vaccination.V1_00_000.Profile.PatientPid>(
                [Vaccination.V1_00_000.Profile.PatientPid],
                undefined
            )
        ).toEqual(undefined);
        expect(
            ParserUtil.getSlice<Vaccination.V1_00_000.Profile.PatientPid>(
                [Vaccination.V1_00_000.Profile.PatientPid],
                []
            )
        ).toEqual(undefined);

        done();
    });

    type GetSlices = {
        bundleType: any; // eslint-disable-line
        todos: {
            profile: any; // eslint-disable-line
            slice: {
                types: AnyType[];
                field: string;
                min: number;
            };
        }[];
    } & TestUtil.HasMioString;

    const getSlicesList: GetSlices[] = [
        {
            bundleType: Vaccination.V1_00_000.Profile.BundleEntry,
            mioString: "IM",
            todos: [
                {
                    profile: Vaccination.V1_00_000.Profile.Patient,
                    slice: {
                        types: [
                            Vaccination.V1_00_000.Profile.PatientVersichertenIdGKV,
                            Vaccination.V1_00_000.Profile.PatientVersichertennummerpkv,
                            Vaccination.V1_00_000.Profile.PatientVersichertennummerkvk,
                            Vaccination.V1_00_000.Profile.PatientReisepassnummer,
                            Vaccination.V1_00_000.Profile.PatientPid
                        ],
                        field: "identifier",
                        min: 1
                    }
                }
            ]
        }
    ];

    TestUtil.runAllFiles<GetSlices>(
        "getSlices",
        getSlicesList,
        (file, value) => {
            value.todos.forEach((todo) => {
                const slices = todo.slice.types.map((type) => type.name).join(", ");
                test(`Get ${slices} from ${todo.profile.name} to be at least ${todo.slice.min} `, async (done) => {
                    const mio = await getMIOAs<typeof value.bundleType>(
                        value.bundleType,
                        file
                    );
                    if (mio) {
                        const p = ParserUtil.getEntry<typeof todo.profile>(mio, [
                            todo.profile
                        ]);

                        expect(p).toBeDefined();
                        if (p) {
                            expect(todo.profile.is(p.resource)).toBeTruthy();
                            // eslint-disable-next-line
                            const PROFILES = (<T extends any[]>(...o: T): T => o)(
                                todo.slice.types
                            );
                            const result = ParserUtil.getSlices<typeof PROFILES[number]>(
                                todo.slice.types,
                                p.resource[todo.slice.field]
                            );
                            expect(result.length).toBeGreaterThan(todo.slice.min - 1);
                        }
                    }
                    done();
                });
            });
        },
        "Bundles",
        true
    );

    test("getSlices (no value)", (done) => {
        expect(
            ParserUtil.getSlices<Vaccination.V1_00_000.Profile.PatientPid>(
                [Vaccination.V1_00_000.Profile.PatientPid],
                undefined
            )
        ).toEqual([]);
        done();
    });

    const testByProfile = (file: string): void => {
        it(file, async () => {
            const blob = new Blob([fs.readFileSync(file)]);
            const result = await mioParser.parseFile(blob);
            const bundle = result.value as KBVBundleResource;

            const patient = ParserUtil.findEntryByProfile(
                bundle,
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Patient|1.00.000"
            );
            expect(patient).toBeDefined();
            expect(Vaccination.V1_00_000.Profile.Patient.is(patient)).toBeTruthy();

            const practitioner = ParserUtil.findEntryByProfiles(bundle, [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitioner|1.00.000",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitioner_Addendum|1.00.000"
            ]);
            expect(practitioner).toBeDefined();
            expect(
                Vaccination.V1_00_000.Profile.Practitioner.is(practitioner) ||
                    Vaccination.V1_00_000.Profile.PractitionerAddendum.is(practitioner)
            ).toBeTruthy();

            const entry = ParserUtil.findEntryByProfiles(bundle, [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Condition|1.00.000",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Observation_Immunization_Status|1.00.000",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Record_Addendum|1.00.000",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Record_Prime|1.00.000"
            ]);
            expect(entry).toBeDefined();
            expect(
                Vaccination.V1_00_000.Profile.Condition.is(entry) ||
                    Vaccination.V1_00_000.Profile.ObservationImmunizationStatus.is(
                        entry
                    ) ||
                    Vaccination.V1_00_000.Profile.RecordAddendum.is(entry) ||
                    Vaccination.V1_00_000.Profile.RecordPrime.is(entry)
            ).toBeTruthy();
        });
    };

    TestUtil.runAllFiles(
        "findEntryByProfile",
        [{ mioString: "IM" }],
        testByProfile,
        "Bundles"
    );

    test("findEntryByProfile (no value)", (done) => {
        expect(ParserUtil.findEntryByProfile(undefined, "fullUrl")).toEqual(undefined);
        done();
    });

    test("findEntryByProfile (entry no meta)", (done) => {
        expect(
            ParserUtil.findEntryByProfile(
                {
                    entry: [{ resource: {} }]
                } as KBVBundleResource,
                "fullUrl"
            )
        ).toEqual(undefined);
        done();
    });

    const testByProfiles = (file: string): void => {
        it(file, async () => {
            const blob = new Blob([fs.readFileSync(file)]);
            const result = await mioParser.parseFile(blob);
            const bundle = result.value as KBVBundleResource;

            const composition = ParserUtil.findEntryByProfiles(bundle, [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Composition_Prime|1.00.000",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Composition_Addendum|1.00.000"
            ]);
            expect(composition).toBeDefined();
        });
    };

    TestUtil.runAllFiles(
        "findEntryByProfiles",
        [{ mioString: "IM" }],
        testByProfiles,
        "Bundles"
    );

    test("findEntryByProfiles (no value)", (done) => {
        expect(ParserUtil.findEntryByProfiles(undefined, ["fullUrl"])).toEqual(undefined);
        done();
    });

    test("findEntryByProfiles (entry with no meta)", (done) => {
        expect(
            ParserUtil.findEntryByProfiles(
                {
                    entry: [{ resource: {} }]
                } as KBVBundleResource,
                ["fullUrl"]
            )
        ).toEqual(undefined);
        done();
    });

    test("getUuid", (done) => {
        const values: { in: string; out: string }[] = [
            {
                in: "A",
                out: "A"
            },
            {
                in: "urn:uuid:6d92d417-8a0d-42b9-959f-567ab2f4650f",
                out: "6d92d417-8a0d-42b9-959f-567ab2f4650f"
            },
            {
                in: "uuid:A",
                out: "A"
            },
            {
                in: "url:https://www:A",
                out: "A"
            },
            {
                in: "no-uuid",
                out: "no-uuid"
            }
        ];

        values.forEach((value) => {
            expect(ParserUtil.getUuid(value.in)).toEqual(value.out);
        });

        expect(ParserUtil.getUuid("", "")).toEqual("");
        done();
    });

    test("getUuidFromBundle", (done) => {
        // eslint-disable-next-line
        const values: { in: any; out: string }[] = [
            {
                in: { identifier: { value: "A" } },
                out: "A"
            },
            {
                in: {
                    identifier: {
                        value: "urn:uuid:6d92d417-8a0d-42b9-959f-567ab2f4650f"
                    }
                },
                out: "6d92d417-8a0d-42b9-959f-567ab2f4650f"
            }
        ];

        values.forEach((value) => {
            expect(ParserUtil.getUuidFromBundle(value.in as KBVBundleResource)).toEqual(
                value.out
            );
        });
        done();
    });

    type FindEntryByFullUrl = {
        profile: AnyType;
    } & TestUtil.HasMioString;

    const findEntryByFullUrlList: FindEntryByFullUrl[] = [
        {
            mioString: "IM",
            profile: Vaccination.V1_00_000.Profile.Patient
        },
        {
            mioString: "ZB",
            profile: ZAEB.V1_00_000.Profile.Patient
        },
        {
            mioString: "MR",
            profile: MR.V1_00_000.Profile.PatientMother
        }
    ];

    const findEntryByFullUrlTest = (file: string, value: FindEntryByFullUrl): void => {
        it(file, async (done) => {
            const blob = new Blob([fs.readFileSync(file)]);
            const result = await mioParser.parseFile(blob);
            const bundle = result.value as KBVBundleResource;

            const patient = ParserUtil.getEntry<typeof value.profile>(bundle, [
                value.profile
            ]);

            expect(patient).toBeDefined();
            if (patient) {
                const fullUrl = patient.fullUrl;
                expect(fullUrl).toBeDefined();

                const result = ParserUtil.findEntryByFullUrl(bundle, fullUrl);
                expect(result).toEqual(patient);
            }
            done();
        });
    };

    TestUtil.runAllFiles(
        "findEntryByFullUrl",
        findEntryByFullUrlList,
        findEntryByFullUrlTest,
        "Bundles"
    );

    test("findEntryByFullUrl (no value)", (done) => {
        expect(ParserUtil.findEntryByFullUrl(undefined, "fullUrl")).toEqual(undefined);
        done();
    });

    test("findEntryByFullUrl (entry false fullUrl)", (done) => {
        expect(
            ParserUtil.findEntryByFullUrl(
                {
                    entry: [{ fullUrl: "0", resource: {} }]
                } as KBVBundleResource,
                "fullUrl"
            )
        ).toEqual(undefined);
        done();
    });

    type GetEntryWithRef = {
        profile: AnyType;
    } & TestUtil.HasMioString;

    const getEntryWithRefList: GetEntryWithRef[] = [
        {
            mioString: "IM",
            profile: Vaccination.V1_00_000.Profile.Patient
        },
        {
            mioString: "ZB",
            profile: ZAEB.V1_00_000.Profile.Patient
        },
        {
            mioString: "MR",
            profile: MR.V1_00_000.Profile.PatientMother
        }
    ];

    const getEntryWithRefTest = (file: string, value: GetEntryWithRef): void => {
        it(file, async (done) => {
            const blob = new Blob([fs.readFileSync(file)]);
            const result = await mioParser.parseFile(blob);
            const bundle = result.value as KBVBundleResource;

            const patient = ParserUtil.getEntry<typeof value.profile>(bundle, [
                value.profile
            ]);

            expect(patient).toBeDefined();
            if (patient) {
                const ref = ParserUtil.getUuid(patient.fullUrl);
                expect(ref).toBeDefined();

                const result = ParserUtil.getEntryWithRef<typeof value.profile>(
                    bundle,
                    [value.profile],
                    ref
                );
                expect(result).toEqual(patient);

                const noResult = ParserUtil.getEntryWithRef<typeof value.profile>(
                    bundle,
                    [value.profile],
                    "-"
                );
                expect(noResult).toBeUndefined();
            }
            done();
        });
    };

    TestUtil.runAllFiles(
        "getEntryWithRef",
        getEntryWithRefList,
        getEntryWithRefTest,
        "Bundles"
    );

    test("translateCode", (done) => {
        const values: {
            in: { code: string; translation: ConceptMap };
            out: string[];
            outSnomed: string[];
        }[] = [
            {
                in: {
                    code: "01234",
                    translation: [
                        {
                            source: "source",
                            target: "http://snomed.info/sct",
                            element: []
                        }
                    ]
                },
                out: ["01234"],
                outSnomed: ["01234"]
            },
            {
                in: {
                    code: "01234",
                    translation: [
                        {
                            source: "source",
                            target: "http://snomed.info/sct",
                            element: [
                                {
                                    code: "01234",
                                    display: "Code",
                                    target: [
                                        {
                                            code: "56789",
                                            display: "Translated",
                                            equivalence: "equal"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                out: ["Translated"],
                outSnomed: ["01234"]
            },
            {
                in: {
                    code: "01234",
                    translation: [
                        {
                            source: "source",
                            target: "http://special.code/",
                            element: [
                                {
                                    code: "01234",
                                    display: "Code",
                                    target: [
                                        {
                                            code: "56789",
                                            display: "Translated",
                                            equivalence: "equal"
                                        }
                                    ]
                                },
                                {
                                    code: "6",
                                    display: "Six",
                                    target: [
                                        {
                                            code: "7",
                                            display: "Seven",
                                            equivalence: "equal"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                out: ["01234"],
                outSnomed: ["Translated"]
            }
        ];

        values.forEach((value) => {
            const result = ParserUtil.translateCode(
                value.in.code,
                value.in.translation,
                "http://special.code/"
            );
            expect(result).toEqual(value.out);

            const resultSnomed = ParserUtil.translateCode(
                value.in.code,
                value.in.translation
            );
            expect(resultSnomed).toEqual(value.outSnomed);
        });

        done();
    });
});
