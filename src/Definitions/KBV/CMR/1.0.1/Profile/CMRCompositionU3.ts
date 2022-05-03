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
import {
    Literal,
    Excess,
    MaxArray,
    MinMaxArray,
    ReqArray,
    CustomReference,
    ExtensibleCheck
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import SCALARXhtml from "../../../../../Definitions/FHIR/4.0.1/Scalar/Xhtml";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

import ResourcetypesVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Resourcetypes";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U3"

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "313199003";
    display: "Antenatal screening finding (observable entity)";
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeSnomed: t.Type<CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeSnomed> =
    t.recursion(
        "CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeSnomed",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: Literal(
                            "http://snomed.info/sct/900000000000207008/version/20210131"
                        ),
                        code: Literal("313199003"),
                        display: Literal(
                            "Antenatal screening finding (observable entity)"
                        )
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "57078-8";
    display: "Antenatal testing and surveillance Narrative";
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeLoinc: t.Type<CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeLoinc> =
    t.recursion(
        "CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeLoinc",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://loinc.org"),
                        version: Literal("2.69"),
                        code: Literal("57078-8"),
                        display: Literal("Antenatal testing and surveillance Narrative")
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3GeburtsanamneseBaseExcessCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "363787002:370134009=123029007,704319004=12499000,118598001=118556004,370132008=30766002,704327008=703430008,246093002=68615006,246501002=723208001";
    display: "Base excess (finding)";
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseBaseExcessCodeCodeSnomed: t.Type<CMRCompositionU3GeburtsanamneseBaseExcessCodeCodeSnomed> =
    t.recursion("CMRCompositionU3GeburtsanamneseBaseExcessCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal(
                        "363787002:370134009=123029007,704319004=12499000,118598001=118556004,370132008=30766002,704327008=703430008,246093002=68615006,246501002=723208001"
                    ),
                    display: Literal("Base excess (finding)")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3GeburtsanamneseBaseExcessCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "28638-5";
    display: "Base excess in Arterial cord blood by calculation";
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseBaseExcessCodeCodeLoinc: t.Type<CMRCompositionU3GeburtsanamneseBaseExcessCodeCodeLoinc> =
    t.recursion("CMRCompositionU3GeburtsanamneseBaseExcessCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.69"),
                    code: Literal("28638-5"),
                    display: Literal("Base excess in Arterial cord blood by calculation")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3GeburtsanamnesePhWertCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "363787002:370134009=123029007,704319004=12499000,246093002=89177007,704318007=702700007,370132008=30766002,704327008=703430008";
    display: "Observable entity (observable entity) : Time aspect (attribute) = Single point in time (qualifier value) , Inheres in (attribute) = Cord blood (substance) , Component (attribute) = Proton (substance) , Property type (attribute) = Logarithmic substance concentration (property) (qualifier value) , Scale type (attribute) = Quantitative (qualifier value) , Direct site (attribute) = Arterial cord blood specimen (specimen)";
    id?: string;
}

export const CMRCompositionU3GeburtsanamnesePhWertCodeCodeSnomed: t.Type<CMRCompositionU3GeburtsanamnesePhWertCodeCodeSnomed> =
    t.recursion("CMRCompositionU3GeburtsanamnesePhWertCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal(
                        "363787002:370134009=123029007,704319004=12499000,246093002=89177007,704318007=702700007,370132008=30766002,704327008=703430008"
                    ),
                    display: Literal(
                        "Observable entity (observable entity) : Time aspect (attribute) = Single point in time (qualifier value) , Inheres in (attribute) = Cord blood (substance) , Component (attribute) = Proton (substance) , Property type (attribute) = Logarithmic substance concentration (property) (qualifier value) , Scale type (attribute) = Quantitative (qualifier value) , Direct site (attribute) = Arterial cord blood specimen (specimen)"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3GeburtsanamnesePhWertCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "28646-8";
    display: "pH of Arterial cord blood";
    id?: string;
}

export const CMRCompositionU3GeburtsanamnesePhWertCodeCodeLoinc: t.Type<CMRCompositionU3GeburtsanamnesePhWertCodeCodeLoinc> =
    t.recursion("CMRCompositionU3GeburtsanamnesePhWertCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.69"),
                    code: Literal("28646-8"),
                    display: Literal("pH of Arterial cord blood")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3GeburtsanamneseGeschlechtCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "263495000";
    display: "Gender (observable entity)";
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseGeschlechtCodeCoding: t.Type<CMRCompositionU3GeburtsanamneseGeschlechtCodeCoding> =
    t.recursion("CMRCompositionU3GeburtsanamneseGeschlechtCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("263495000"),
                    display: Literal("Gender (observable entity)")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3GeburtsanamneseKindslageCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364607000";
    display: "Position of fetus (observable entity)";
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseKindslageCodeCoding: t.Type<CMRCompositionU3GeburtsanamneseKindslageCodeCoding> =
    t.recursion("CMRCompositionU3GeburtsanamneseKindslageCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("364607000"),
                    display: Literal("Position of fetus (observable entity)")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3GeburtsanamneseGeburtsmodusCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "394698008";
    display: "Birth history (situation)";
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseGeburtsmodusCodeCoding: t.Type<CMRCompositionU3GeburtsanamneseGeburtsmodusCodeCoding> =
    t.recursion("CMRCompositionU3GeburtsanamneseGeburtsmodusCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("394698008"),
                    display: Literal("Birth history (situation)")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeitCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "184099003+397836004";
    display: "Date of birth (observable entity) + Time of delivery (observable entity)";
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeitCodeCoding: t.Type<CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeitCodeCoding> =
    t.recursion("CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeitCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("184099003+397836004"),
                    display: Literal(
                        "Date of birth (observable entity) + Time of delivery (observable entity)"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTageCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "412726003";
    display: "Length of gestation at birth (observable entity)";
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTageCodeCoding: t.Type<CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTageCodeCoding> =
    t.recursion(
        "CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTageCodeCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: Literal(
                            "http://snomed.info/sct/900000000000207008/version/20210131"
                        ),
                        code: Literal("412726003"),
                        display: Literal(
                            "Length of gestation at birth (observable entity)"
                        )
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU3GeburtsanamneseGeschlechtCode {
    coding: Array<CMRCompositionU3GeburtsanamneseGeschlechtCodeCoding>;
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseGeschlechtCode: t.Type<CMRCompositionU3GeburtsanamneseGeschlechtCode> =
    t.recursion("CMRCompositionU3GeburtsanamneseGeschlechtCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3GeburtsanamneseGeschlechtCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface CMRCompositionU3GeburtsanamneseGeschlechtEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseGeschlechtEntry: t.Type<CMRCompositionU3GeburtsanamneseGeschlechtEntry> =
    t.recursion("CMRCompositionU3GeburtsanamneseGeschlechtEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Gender_Birth_History|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikCode {
    coding: Array<
        | CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeSnomed
        | CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeLoinc
    >;
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikCode: t.Type<CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikCode> =
    t.recursion("CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeSnomed>,
                                t.Type<CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeSnomed,
                            CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
                            }
                        ],
                        ["2", "2"]
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikEntry: t.Type<CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikEntry> =
    t.recursion("CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Prenatal_Finding|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU3GeburtsanamneseBaseExcessCode {
    coding: Array<
        | CMRCompositionU3GeburtsanamneseBaseExcessCodeCodeSnomed
        | CMRCompositionU3GeburtsanamneseBaseExcessCodeCodeLoinc
    >;
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseBaseExcessCode: t.Type<CMRCompositionU3GeburtsanamneseBaseExcessCode> =
    t.recursion("CMRCompositionU3GeburtsanamneseBaseExcessCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRCompositionU3GeburtsanamneseBaseExcessCodeCodeSnomed>,
                                t.Type<CMRCompositionU3GeburtsanamneseBaseExcessCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRCompositionU3GeburtsanamneseBaseExcessCodeCodeSnomed,
                            CMRCompositionU3GeburtsanamneseBaseExcessCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRCompositionU3GeburtsanamneseBaseExcessCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRCompositionU3GeburtsanamneseBaseExcessCodeCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
                            }
                        ],
                        ["2", "2"]
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface CMRCompositionU3GeburtsanamneseBaseExcessEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseBaseExcessEntry: t.Type<CMRCompositionU3GeburtsanamneseBaseExcessEntry> =
    t.recursion("CMRCompositionU3GeburtsanamneseBaseExcessEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Base_Excess|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU3GeburtsanamnesePhWertCode {
    coding: Array<
        | CMRCompositionU3GeburtsanamnesePhWertCodeCodeSnomed
        | CMRCompositionU3GeburtsanamnesePhWertCodeCodeLoinc
    >;
    id?: string;
}

export const CMRCompositionU3GeburtsanamnesePhWertCode: t.Type<CMRCompositionU3GeburtsanamnesePhWertCode> =
    t.recursion("CMRCompositionU3GeburtsanamnesePhWertCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRCompositionU3GeburtsanamnesePhWertCodeCodeSnomed>,
                                t.Type<CMRCompositionU3GeburtsanamnesePhWertCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRCompositionU3GeburtsanamnesePhWertCodeCodeSnomed,
                            CMRCompositionU3GeburtsanamnesePhWertCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRCompositionU3GeburtsanamnesePhWertCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRCompositionU3GeburtsanamnesePhWertCodeCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
                            }
                        ],
                        ["2", "2"]
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface CMRCompositionU3GeburtsanamnesePhWertEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU3GeburtsanamnesePhWertEntry: t.Type<CMRCompositionU3GeburtsanamnesePhWertEntry> =
    t.recursion("CMRCompositionU3GeburtsanamnesePhWertEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_pH_Value|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU3GeburtsanamneseKindslageCode {
    coding: Array<CMRCompositionU3GeburtsanamneseKindslageCodeCoding>;
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseKindslageCode: t.Type<CMRCompositionU3GeburtsanamneseKindslageCode> =
    t.recursion("CMRCompositionU3GeburtsanamneseKindslageCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3GeburtsanamneseKindslageCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface CMRCompositionU3GeburtsanamneseKindslageEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseKindslageEntry: t.Type<CMRCompositionU3GeburtsanamneseKindslageEntry> =
    t.recursion("CMRCompositionU3GeburtsanamneseKindslageEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Foetal_Position|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Different_Foetal_Position|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU3GeburtsanamneseGeburtsmodusCode {
    coding: Array<CMRCompositionU3GeburtsanamneseGeburtsmodusCodeCoding>;
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseGeburtsmodusCode: t.Type<CMRCompositionU3GeburtsanamneseGeburtsmodusCode> =
    t.recursion("CMRCompositionU3GeburtsanamneseGeburtsmodusCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3GeburtsanamneseGeburtsmodusCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface CMRCompositionU3GeburtsanamneseGeburtsmodusEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseGeburtsmodusEntry: t.Type<CMRCompositionU3GeburtsanamneseGeburtsmodusEntry> =
    t.recursion("CMRCompositionU3GeburtsanamneseGeburtsmodusEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Birthmode|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeitCode {
    coding: Array<CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeitCodeCoding>;
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeitCode: t.Type<CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeitCode> =
    t.recursion("CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeitCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeitCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeitEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeitEntry: t.Type<CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeitEntry> =
    t.recursion("CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeitEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Date_Time_of_Birth|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTageCode {
    coding: Array<CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTageCodeCoding>;
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTageCode: t.Type<CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTageCode> =
    t.recursion("CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTageCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTageCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTageEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTageEntry: t.Type<CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTageEntry> =
    t.recursion("CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTageEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Length_Gestation_At_Birth|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU3ErgebnisseSectionPruefungAufklaerungHinweis {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "- Erweitertes Neugeborenen-Screening - Screening auf Mukoviszidose - Screening auf Hüftgelenksdysplasie und -luxation - Neugeborenen-Hörscreening";
    id?: string;
}

export const CMRCompositionU3ErgebnisseSectionPruefungAufklaerungHinweis: t.Type<CMRCompositionU3ErgebnisseSectionPruefungAufklaerungHinweis> =
    t.recursion("CMRCompositionU3ErgebnisseSectionPruefungAufklaerungHinweis", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                    ),
                    valueString: Literal(
                        "- Erweitertes Neugeborenen-Screening - Screening auf Mukoviszidose - Screening auf Hüftgelenksdysplasie und -luxation - Neugeborenen-Hörscreening"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3HoerscreeningCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "252957005";
    display: "Children's hearing test (procedure)";
    id?: string;
}

export const CMRCompositionU3HoerscreeningCodeCodeSnomed: t.Type<CMRCompositionU3HoerscreeningCodeCodeSnomed> =
    t.recursion("CMRCompositionU3HoerscreeningCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("252957005"),
                    display: Literal("Children's hearing test (procedure)")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3HoerscreeningCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "54111-0";
    display: "Newborn hearing screening panel";
    id?: string;
}

export const CMRCompositionU3HoerscreeningCodeCodeLoinc: t.Type<CMRCompositionU3HoerscreeningCodeCodeLoinc> =
    t.recursion("CMRCompositionU3HoerscreeningCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.69"),
                    code: Literal("54111-0"),
                    display: Literal("Newborn hearing screening panel")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3ScreeningHueftgelenksdysplasieCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "171241003";
    display: "Congenital dislocation of the hip screening (procedure)";
    id?: string;
}

export const CMRCompositionU3ScreeningHueftgelenksdysplasieCodeCodeSnomed: t.Type<CMRCompositionU3ScreeningHueftgelenksdysplasieCodeCodeSnomed> =
    t.recursion("CMRCompositionU3ScreeningHueftgelenksdysplasieCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("171241003"),
                    display: Literal(
                        "Congenital dislocation of the hip screening (procedure)"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3ScreeningHueftgelenksdysplasieCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "30711-6";
    display: "US Hip developmental joint assessment";
    id?: string;
}

export const CMRCompositionU3ScreeningHueftgelenksdysplasieCodeCodeLoinc: t.Type<CMRCompositionU3ScreeningHueftgelenksdysplasieCodeCodeLoinc> =
    t.recursion("CMRCompositionU3ScreeningHueftgelenksdysplasieCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.69"),
                    code: Literal("30711-6"),
                    display: Literal("US Hip developmental joint assessment")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU3SchwangerschaftsanamneseAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU3SchwangerschaftsanamneseAnamneseAnweisung: t.Type<CMRCompositionU3SchwangerschaftsanamneseAnamneseAnweisung> =
    t.recursion("CMRCompositionU3SchwangerschaftsanamneseAnamneseAnweisung", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                    ),
                    valueString: Literal("Zutreffendes bitte ankreuzen!")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3SchwangerschaftsanamneseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "160427003";
    display: "Family history with explicit context pertaining to mother (situation)";
    id?: string;
}

export const CMRCompositionU3SchwangerschaftsanamneseCodeCoding: t.Type<CMRCompositionU3SchwangerschaftsanamneseCodeCoding> =
    t.recursion("CMRCompositionU3SchwangerschaftsanamneseCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("160427003"),
                    display: Literal(
                        "Family history with explicit context pertaining to mother (situation)"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3SchwangerschaftsanamneseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU3SchwangerschaftsanamneseEmptyReasonCoding: t.Type<CMRCompositionU3SchwangerschaftsanamneseEmptyReasonCoding> =
    t.recursion("CMRCompositionU3SchwangerschaftsanamneseEmptyReasonCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/list-empty-reason"
                    ),
                    version: Literal("4.0.1"),
                    code: Literal("closed"),
                    display: Literal("Closed")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU3GeburtsanamneseAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseAnamneseAnweisung: t.Type<CMRCompositionU3GeburtsanamneseAnamneseAnweisung> =
    t.recursion("CMRCompositionU3GeburtsanamneseAnamneseAnweisung", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                    ),
                    valueString: Literal("Zutreffendes bitte ankreuzen!")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3GeburtsanamneseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364319003";
    display: "Pregnancy, childbirth / puerperium observable (observable entity)";
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseCodeCoding: t.Type<CMRCompositionU3GeburtsanamneseCodeCoding> =
    t.recursion("CMRCompositionU3GeburtsanamneseCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("364319003"),
                    display: Literal(
                        "Pregnancy, childbirth / puerperium observable (observable entity)"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3GeburtsanamneseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseEmptyReasonCoding: t.Type<CMRCompositionU3GeburtsanamneseEmptyReasonCoding> =
    t.recursion("CMRCompositionU3GeburtsanamneseEmptyReasonCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/list-empty-reason"
                    ),
                    version: Literal("4.0.1"),
                    code: Literal("closed"),
                    display: Literal("Closed")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A nested sub-section within this section.
 */
export interface CMRCompositionU3GeburtsanamneseGeschlecht {
    title: "Geschlecht";
    code: CMRCompositionU3GeburtsanamneseGeschlechtCode;
    entry: Array<CMRCompositionU3GeburtsanamneseGeschlechtEntry>;
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseGeschlecht: t.Type<CMRCompositionU3GeburtsanamneseGeschlecht> =
    t.recursion("CMRCompositionU3GeburtsanamneseGeschlecht", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Geschlecht"),
                    code: CMRCompositionU3GeburtsanamneseGeschlechtCode,
                    entry: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3GeburtsanamneseGeschlechtEntry
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A nested sub-section within this section.
 */
export interface CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostik {
    title: "Soweit vorhanden, Befunde einer pränatalen Diagnostik:";
    code: CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikCode;
    entry: Array<CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikEntry>;
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostik: t.Type<CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostik> =
    t.recursion("CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostik", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal(
                        "Soweit vorhanden, Befunde einer pränatalen Diagnostik:"
                    ),
                    code: CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikCode,
                    entry: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostikEntry
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A nested sub-section within this section.
 */
export interface CMRCompositionU3GeburtsanamneseBaseExcess {
    title: "Base excess";
    code: CMRCompositionU3GeburtsanamneseBaseExcessCode;
    entry: Array<CMRCompositionU3GeburtsanamneseBaseExcessEntry>;
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseBaseExcess: t.Type<CMRCompositionU3GeburtsanamneseBaseExcess> =
    t.recursion("CMRCompositionU3GeburtsanamneseBaseExcess", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Base excess"),
                    code: CMRCompositionU3GeburtsanamneseBaseExcessCode,
                    entry: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3GeburtsanamneseBaseExcessEntry
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A nested sub-section within this section.
 */
export interface CMRCompositionU3GeburtsanamnesePhWert {
    title: "pH-Wert (Nabelarterie)";
    code: CMRCompositionU3GeburtsanamnesePhWertCode;
    entry: Array<CMRCompositionU3GeburtsanamnesePhWertEntry>;
    id?: string;
}

export const CMRCompositionU3GeburtsanamnesePhWert: t.Type<CMRCompositionU3GeburtsanamnesePhWert> =
    t.recursion("CMRCompositionU3GeburtsanamnesePhWert", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("pH-Wert (Nabelarterie)"),
                    code: CMRCompositionU3GeburtsanamnesePhWertCode,
                    entry: MinMaxArray(1, 1, CMRCompositionU3GeburtsanamnesePhWertEntry)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A nested sub-section within this section.
 */
export interface CMRCompositionU3GeburtsanamneseKindslage {
    title: "Kindslage";
    code: CMRCompositionU3GeburtsanamneseKindslageCode;
    entry: Array<CMRCompositionU3GeburtsanamneseKindslageEntry>;
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseKindslage: t.Type<CMRCompositionU3GeburtsanamneseKindslage> =
    t.recursion("CMRCompositionU3GeburtsanamneseKindslage", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Kindslage"),
                    code: CMRCompositionU3GeburtsanamneseKindslageCode,
                    entry: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3GeburtsanamneseKindslageEntry
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A nested sub-section within this section.
 */
export interface CMRCompositionU3GeburtsanamneseGeburtsmodus {
    title: "Geburtsmodus";
    code: CMRCompositionU3GeburtsanamneseGeburtsmodusCode;
    entry: Array<CMRCompositionU3GeburtsanamneseGeburtsmodusEntry>;
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseGeburtsmodus: t.Type<CMRCompositionU3GeburtsanamneseGeburtsmodus> =
    t.recursion("CMRCompositionU3GeburtsanamneseGeburtsmodus", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Geburtsmodus"),
                    code: CMRCompositionU3GeburtsanamneseGeburtsmodusCode,
                    entry: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3GeburtsanamneseGeburtsmodusEntry
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A nested sub-section within this section.
 */
export interface CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeit {
    title: "Geburtsdatum";
    code: CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeitCode;
    entry: Array<CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeitEntry>;
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeit: t.Type<CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeit> =
    t.recursion("CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeit", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Geburtsdatum"),
                    code: CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeitCode,
                    entry: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeitEntry
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A nested sub-section within this section.
 */
export interface CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTage {
    title: "SSW (Wochen+Tage)";
    code: CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTageCode;
    entry: Array<CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTageEntry>;
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTage: t.Type<CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTage> =
    t.recursion("CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTage", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("SSW (Wochen+Tage)"),
                    code: CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTageCode,
                    entry: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTageEntry
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU3AktuelleAnamneseDesKindesAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU3AktuelleAnamneseDesKindesAnamneseAnweisung: t.Type<CMRCompositionU3AktuelleAnamneseDesKindesAnamneseAnweisung> =
    t.recursion("CMRCompositionU3AktuelleAnamneseDesKindesAnamneseAnweisung", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                    ),
                    valueString: Literal("Zutreffendes bitte ankreuzen!")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU3AktuelleAnamneseDesKindesHinweisNachtragen {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "Schwangerschafts- und Geburtsanamnese: Erhebung und Dokumentation in der U1 prüfen und ggf. nachtragen.";
    id?: string;
}

export const CMRCompositionU3AktuelleAnamneseDesKindesHinweisNachtragen: t.Type<CMRCompositionU3AktuelleAnamneseDesKindesHinweisNachtragen> =
    t.recursion("CMRCompositionU3AktuelleAnamneseDesKindesHinweisNachtragen", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                    ),
                    valueString: Literal(
                        "Schwangerschafts- und Geburtsanamnese: Erhebung und Dokumentation in der U1 prüfen und ggf. nachtragen."
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3AktuelleAnamneseDesKindesCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "423374008";
    display: "Review of systems section (record artifact)";
    id?: string;
}

export const CMRCompositionU3AktuelleAnamneseDesKindesCodeCoding: t.Type<CMRCompositionU3AktuelleAnamneseDesKindesCodeCoding> =
    t.recursion("CMRCompositionU3AktuelleAnamneseDesKindesCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("423374008"),
                    display: Literal("Review of systems section (record artifact)")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3AktuelleAnamneseDesKindesEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU3AktuelleAnamneseDesKindesEmptyReasonCoding: t.Type<CMRCompositionU3AktuelleAnamneseDesKindesEmptyReasonCoding> =
    t.recursion("CMRCompositionU3AktuelleAnamneseDesKindesEmptyReasonCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/list-empty-reason"
                    ),
                    version: Literal("4.0.1"),
                    code: Literal("closed"),
                    display: Literal("Closed")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU3FamilienanamneseAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU3FamilienanamneseAnamneseAnweisung: t.Type<CMRCompositionU3FamilienanamneseAnamneseAnweisung> =
    t.recursion("CMRCompositionU3FamilienanamneseAnamneseAnweisung", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                    ),
                    valueString: Literal("Zutreffendes bitte ankreuzen!")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU3FamilienanamneseHinweisNachtragen {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "Schwangerschafts- und Geburtsanamnese: Erhebung und Dokumentation in der U1 prüfen und ggf. nachtragen.";
    id?: string;
}

export const CMRCompositionU3FamilienanamneseHinweisNachtragen: t.Type<CMRCompositionU3FamilienanamneseHinweisNachtragen> =
    t.recursion("CMRCompositionU3FamilienanamneseHinweisNachtragen", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                    ),
                    valueString: Literal(
                        "Schwangerschafts- und Geburtsanamnese: Erhebung und Dokumentation in der U1 prüfen und ggf. nachtragen."
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3FamilienanamneseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "422432008";
    display: "Family history section (record artifact)";
    id?: string;
}

export const CMRCompositionU3FamilienanamneseCodeCoding: t.Type<CMRCompositionU3FamilienanamneseCodeCoding> =
    t.recursion("CMRCompositionU3FamilienanamneseCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("422432008"),
                    display: Literal("Family history section (record artifact)")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3FamilienanamneseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU3FamilienanamneseEmptyReasonCoding: t.Type<CMRCompositionU3FamilienanamneseEmptyReasonCoding> =
    t.recursion("CMRCompositionU3FamilienanamneseEmptyReasonCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/list-empty-reason"
                    ),
                    version: Literal("4.0.1"),
                    code: Literal("closed"),
                    display: Literal("Closed")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU3SozialanamneseAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU3SozialanamneseAnamneseAnweisung: t.Type<CMRCompositionU3SozialanamneseAnamneseAnweisung> =
    t.recursion("CMRCompositionU3SozialanamneseAnamneseAnweisung", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                    ),
                    valueString: Literal("Zutreffendes bitte ankreuzen!")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU3SozialanamneseHinweisNachtragen {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "Schwangerschafts- und Geburtsanamnese: Erhebung und Dokumentation in der U1 prüfen und ggf. nachtragen.";
    id?: string;
}

export const CMRCompositionU3SozialanamneseHinweisNachtragen: t.Type<CMRCompositionU3SozialanamneseHinweisNachtragen> =
    t.recursion("CMRCompositionU3SozialanamneseHinweisNachtragen", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                    ),
                    valueString: Literal(
                        "Schwangerschafts- und Geburtsanamnese: Erhebung und Dokumentation in der U1 prüfen und ggf. nachtragen."
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3SozialanamneseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "281575007";
    display: "Family social history (situation)";
    id?: string;
}

export const CMRCompositionU3SozialanamneseCodeCoding: t.Type<CMRCompositionU3SozialanamneseCodeCoding> =
    t.recursion("CMRCompositionU3SozialanamneseCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("281575007"),
                    display: Literal("Family social history (situation)")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3SozialanamneseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU3SozialanamneseEmptyReasonCoding: t.Type<CMRCompositionU3SozialanamneseEmptyReasonCoding> =
    t.recursion("CMRCompositionU3SozialanamneseEmptyReasonCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/list-empty-reason"
                    ),
                    version: Literal("4.0.1"),
                    code: Literal("closed"),
                    display: Literal("Closed")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU3UntersuchungUntersuchungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Nur Auffälligkeiten ankreuzen!";
    id?: string;
}

export const CMRCompositionU3UntersuchungUntersuchungAnweisung: t.Type<CMRCompositionU3UntersuchungUntersuchungAnweisung> =
    t.recursion("CMRCompositionU3UntersuchungUntersuchungAnweisung", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                    ),
                    valueString: Literal("Nur Auffälligkeiten ankreuzen!")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3UntersuchungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "425044008";
    display: "Physical exam section (record artifact)";
    id?: string;
}

export const CMRCompositionU3UntersuchungCodeCoding: t.Type<CMRCompositionU3UntersuchungCodeCoding> =
    t.recursion("CMRCompositionU3UntersuchungCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("425044008"),
                    display: Literal("Physical exam section (record artifact)")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3UntersuchungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU3UntersuchungEmptyReasonCoding: t.Type<CMRCompositionU3UntersuchungEmptyReasonCoding> =
    t.recursion("CMRCompositionU3UntersuchungEmptyReasonCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/list-empty-reason"
                    ),
                    version: Literal("4.0.1"),
                    code: Literal("closed"),
                    display: Literal("Closed")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU3BeratungBeratungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Bei erweitertem Beratungsbedarf bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU3BeratungBeratungAnweisung: t.Type<CMRCompositionU3BeratungBeratungAnweisung> =
    t.recursion("CMRCompositionU3BeratungBeratungAnweisung", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                    ),
                    valueString: Literal(
                        "Bei erweitertem Beratungsbedarf bitte ankreuzen!"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU3BeratungBeratungHinweis {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "Beratung vor allem zu folgenden Themen:";
    id?: string;
}

export const CMRCompositionU3BeratungBeratungHinweis: t.Type<CMRCompositionU3BeratungBeratungHinweis> =
    t.recursion("CMRCompositionU3BeratungBeratungHinweis", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                    ),
                    valueString: Literal("Beratung vor allem zu folgenden Themen:")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3BeratungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "409066002";
    display: "Education, guidance and counseling (procedure)";
    id?: string;
}

export const CMRCompositionU3BeratungCodeCoding: t.Type<CMRCompositionU3BeratungCodeCoding> =
    t.recursion("CMRCompositionU3BeratungCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("409066002"),
                    display: Literal("Education, guidance and counseling (procedure)")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3BeratungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU3BeratungEmptyReasonCoding: t.Type<CMRCompositionU3BeratungEmptyReasonCoding> =
    t.recursion("CMRCompositionU3BeratungEmptyReasonCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/list-empty-reason"
                    ),
                    version: Literal("4.0.1"),
                    code: Literal("closed"),
                    display: Literal("Closed")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3ErgebnisseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "423100009";
    display: "Results section (record artifact)";
    id?: string;
}

export const CMRCompositionU3ErgebnisseCodeCoding: t.Type<CMRCompositionU3ErgebnisseCodeCoding> =
    t.recursion("CMRCompositionU3ErgebnisseCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("423100009"),
                    display: Literal("Results section (record artifact)")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3ErgebnisseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU3ErgebnisseEmptyReasonCoding: t.Type<CMRCompositionU3ErgebnisseEmptyReasonCoding> =
    t.recursion("CMRCompositionU3ErgebnisseEmptyReasonCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/list-empty-reason"
                    ),
                    version: Literal("4.0.1"),
                    code: Literal("closed"),
                    display: Literal("Closed")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface CMRCompositionU3ErgebnisseSectionEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU3ErgebnisseSectionEntry: t.Type<CMRCompositionU3ErgebnisseSectionEntry> =
    t.recursion("CMRCompositionU3ErgebnisseSectionEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Medication_Statement_Vitamine_K_Prophylaxis|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3HoerscreeningEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU3HoerscreeningEmptyReasonCoding: t.Type<CMRCompositionU3HoerscreeningEmptyReasonCoding> =
    t.recursion("CMRCompositionU3HoerscreeningEmptyReasonCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/list-empty-reason"
                    ),
                    version: Literal("4.0.1"),
                    code: Literal("closed"),
                    display: Literal("Closed")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3ErweitertesNeugeborenenscreeningCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "738796001:363702006=428447008";
    display: "Collection of dried blood spot specimen (procedure) : Has focus (attribute) = Newborn blood spot screening (procedure)";
    id?: string;
}

export const CMRCompositionU3ErweitertesNeugeborenenscreeningCodeCoding: t.Type<CMRCompositionU3ErweitertesNeugeborenenscreeningCodeCoding> =
    t.recursion("CMRCompositionU3ErweitertesNeugeborenenscreeningCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("738796001:363702006=428447008"),
                    display: Literal(
                        "Collection of dried blood spot specimen (procedure) : Has focus (attribute) = Newborn blood spot screening (procedure)"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3ErweitertesNeugeborenenscreeningEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU3ErweitertesNeugeborenenscreeningEmptyReasonCoding: t.Type<CMRCompositionU3ErweitertesNeugeborenenscreeningEmptyReasonCoding> =
    t.recursion("CMRCompositionU3ErweitertesNeugeborenenscreeningEmptyReasonCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/list-empty-reason"
                    ),
                    version: Literal("4.0.1"),
                    code: Literal("closed"),
                    display: Literal("Closed")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3MukoviszidoseScreeningCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "738796001:363702006=171191008";
    display: "Collection of dried blood spot specimen (procedure) : Has focus (attribute) = Cystic fibrosis screening (procedure)";
    id?: string;
}

export const CMRCompositionU3MukoviszidoseScreeningCodeCoding: t.Type<CMRCompositionU3MukoviszidoseScreeningCodeCoding> =
    t.recursion("CMRCompositionU3MukoviszidoseScreeningCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("738796001:363702006=171191008"),
                    display: Literal(
                        "Collection of dried blood spot specimen (procedure) : Has focus (attribute) = Cystic fibrosis screening (procedure)"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3MukoviszidoseScreeningEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU3MukoviszidoseScreeningEmptyReasonCoding: t.Type<CMRCompositionU3MukoviszidoseScreeningEmptyReasonCoding> =
    t.recursion("CMRCompositionU3MukoviszidoseScreeningEmptyReasonCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/list-empty-reason"
                    ),
                    version: Literal("4.0.1"),
                    code: Literal("closed"),
                    display: Literal("Closed")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU3OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Nur ankreuzen, wenn die Items NICHT erfüllt werden!";
    id?: string;
}

export const CMRCompositionU3OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung: t.Type<CMRCompositionU3OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung> =
    t.recursion(
        "CMRCompositionU3OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                        ),
                        valueString: Literal(
                            "Nur ankreuzen, wenn die Items NICHT erfüllt werden!"
                        )
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU3OrientierendeBeurteilungDerEntwicklungInteraktionHinweis {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "Beobachtung der Interaktion Insbesondere die folgenden Reaktionen des Kindes können der Ärztin oder dem Arzt als Hinweise zur Einschätzung von Stimmung, Kommunikations- und Regulationsmöglichkeiten des Kindes im Kontakt mit seiner primären Bezugsperson und als weitere Grundlage für das Ärztin- oder Arzt-Elterngespräch dienen:";
    id?: string;
}

export const CMRCompositionU3OrientierendeBeurteilungDerEntwicklungInteraktionHinweis: t.Type<CMRCompositionU3OrientierendeBeurteilungDerEntwicklungInteraktionHinweis> =
    t.recursion(
        "CMRCompositionU3OrientierendeBeurteilungDerEntwicklungInteraktionHinweis",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                        ),
                        valueString: Literal(
                            "Beobachtung der Interaktion Insbesondere die folgenden Reaktionen des Kindes können der Ärztin oder dem Arzt als Hinweise zur Einschätzung von Stimmung, Kommunikations- und Regulationsmöglichkeiten des Kindes im Kontakt mit seiner primären Bezugsperson und als weitere Grundlage für das Ärztin- oder Arzt-Elterngespräch dienen:"
                        )
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3OrientierendeBeurteilungDerEntwicklungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "406207000";
    display: "Child development by age (observable entity)";
    id?: string;
}

export const CMRCompositionU3OrientierendeBeurteilungDerEntwicklungCodeCoding: t.Type<CMRCompositionU3OrientierendeBeurteilungDerEntwicklungCodeCoding> =
    t.recursion("CMRCompositionU3OrientierendeBeurteilungDerEntwicklungCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("406207000"),
                    display: Literal("Child development by age (observable entity)")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU3OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding: t.Type<CMRCompositionU3OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding> =
    t.recursion(
        "CMRCompositionU3OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal(
                            "http://terminology.hl7.org/CodeSystem/list-empty-reason"
                        ),
                        version: Literal("4.0.1"),
                        code: Literal("closed"),
                        display: Literal("Closed")
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3ScreeningHueftgelenksdysplasieEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU3ScreeningHueftgelenksdysplasieEmptyReasonCoding: t.Type<CMRCompositionU3ScreeningHueftgelenksdysplasieEmptyReasonCoding> =
    t.recursion("CMRCompositionU3ScreeningHueftgelenksdysplasieEmptyReasonCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/list-empty-reason"
                    ),
                    version: Literal("4.0.1"),
                    code: Literal("closed"),
                    display: Literal("Closed")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3PerzentilkurvenCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "129822005";
    display: "Childhood growth AND/OR development finding (finding)";
    id?: string;
}

export const CMRCompositionU3PerzentilkurvenCodeCoding: t.Type<CMRCompositionU3PerzentilkurvenCodeCoding> =
    t.recursion("CMRCompositionU3PerzentilkurvenCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("129822005"),
                    display: Literal(
                        "Childhood growth AND/OR development finding (finding)"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3PerzentilkurvenEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU3PerzentilkurvenEmptyReasonCoding: t.Type<CMRCompositionU3PerzentilkurvenEmptyReasonCoding> =
    t.recursion("CMRCompositionU3PerzentilkurvenEmptyReasonCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/list-empty-reason"
                    ),
                    version: Literal("4.0.1"),
                    code: Literal("closed"),
                    display: Literal("Closed")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU3SchwangerschaftsanamneseCode {
    coding: Array<CMRCompositionU3SchwangerschaftsanamneseCodeCoding>;
    id?: string;
}

export const CMRCompositionU3SchwangerschaftsanamneseCode: t.Type<CMRCompositionU3SchwangerschaftsanamneseCode> =
    t.recursion("CMRCompositionU3SchwangerschaftsanamneseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3SchwangerschaftsanamneseCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * In diesem Element ist mindestens der Titel der Section anzugeben. Zusätzliche Informationen können angegeben werden.
 */
export interface CMRCompositionU3SchwangerschaftsanamneseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU3SchwangerschaftsanamneseText: t.Type<CMRCompositionU3SchwangerschaftsanamneseText> =
    t.recursion("CMRCompositionU3SchwangerschaftsanamneseText", () =>
        Excess(
            t.intersection([
                t.type({
                    status: Literal("generated"),
                    div: SCALARXhtml
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface CMRCompositionU3SchwangerschaftsanamneseEntry {
    reference: string;
    id?: string;
    type?: ResourcetypesVS;
}

export const CMRCompositionU3SchwangerschaftsanamneseEntry: t.Type<CMRCompositionU3SchwangerschaftsanamneseEntry> =
    t.recursion("CMRCompositionU3SchwangerschaftsanamneseEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Pregnancy_History|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString,
                    type: ExtensibleCheck<t.Type<ResourcetypesVS>>(ResourcetypesVS)
                })
            ])
        )
    );

/**
 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
 */
export interface CMRCompositionU3SchwangerschaftsanamneseEmptyReason {
    coding: Array<CMRCompositionU3SchwangerschaftsanamneseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU3SchwangerschaftsanamneseEmptyReason: t.Type<CMRCompositionU3SchwangerschaftsanamneseEmptyReason> =
    t.recursion("CMRCompositionU3SchwangerschaftsanamneseEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3SchwangerschaftsanamneseEmptyReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU3GeburtsanamneseCode {
    coding: Array<CMRCompositionU3GeburtsanamneseCodeCoding>;
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseCode: t.Type<CMRCompositionU3GeburtsanamneseCode> =
    t.recursion("CMRCompositionU3GeburtsanamneseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU3GeburtsanamneseCodeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * In diesem Element ist mindestens der Titel der Section anzugeben. Zusätzliche Informationen können angegeben werden.
 */
export interface CMRCompositionU3GeburtsanamneseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseText: t.Type<CMRCompositionU3GeburtsanamneseText> =
    t.recursion("CMRCompositionU3GeburtsanamneseText", () =>
        Excess(
            t.intersection([
                t.type({
                    status: Literal("generated"),
                    div: SCALARXhtml
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
 */
export interface CMRCompositionU3GeburtsanamneseEmptyReason {
    coding: Array<CMRCompositionU3GeburtsanamneseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU3GeburtsanamneseEmptyReason: t.Type<CMRCompositionU3GeburtsanamneseEmptyReason> =
    t.recursion("CMRCompositionU3GeburtsanamneseEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3GeburtsanamneseEmptyReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU3AktuelleAnamneseDesKindesCode {
    coding: Array<CMRCompositionU3AktuelleAnamneseDesKindesCodeCoding>;
    id?: string;
}

export const CMRCompositionU3AktuelleAnamneseDesKindesCode: t.Type<CMRCompositionU3AktuelleAnamneseDesKindesCode> =
    t.recursion("CMRCompositionU3AktuelleAnamneseDesKindesCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3AktuelleAnamneseDesKindesCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * In diesem Element ist mindestens der Titel der Section anzugeben. Zusätzliche Informationen können angegeben werden.
 */
export interface CMRCompositionU3AktuelleAnamneseDesKindesText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU3AktuelleAnamneseDesKindesText: t.Type<CMRCompositionU3AktuelleAnamneseDesKindesText> =
    t.recursion("CMRCompositionU3AktuelleAnamneseDesKindesText", () =>
        Excess(
            t.intersection([
                t.type({
                    status: Literal("generated"),
                    div: SCALARXhtml
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface CMRCompositionU3AktuelleAnamneseDesKindesEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU3AktuelleAnamneseDesKindesEntry: t.Type<CMRCompositionU3AktuelleAnamneseDesKindesEntry> =
    t.recursion("CMRCompositionU3AktuelleAnamneseDesKindesEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_Current_Child_History|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
 */
export interface CMRCompositionU3AktuelleAnamneseDesKindesEmptyReason {
    coding: Array<CMRCompositionU3AktuelleAnamneseDesKindesEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU3AktuelleAnamneseDesKindesEmptyReason: t.Type<CMRCompositionU3AktuelleAnamneseDesKindesEmptyReason> =
    t.recursion("CMRCompositionU3AktuelleAnamneseDesKindesEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3AktuelleAnamneseDesKindesEmptyReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU3FamilienanamneseCode {
    coding: Array<CMRCompositionU3FamilienanamneseCodeCoding>;
    id?: string;
}

export const CMRCompositionU3FamilienanamneseCode: t.Type<CMRCompositionU3FamilienanamneseCode> =
    t.recursion("CMRCompositionU3FamilienanamneseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU3FamilienanamneseCodeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * In diesem Element ist mindestens der Titel der Section anzugeben. Zusätzliche Informationen können angegeben werden.
 */
export interface CMRCompositionU3FamilienanamneseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU3FamilienanamneseText: t.Type<CMRCompositionU3FamilienanamneseText> =
    t.recursion("CMRCompositionU3FamilienanamneseText", () =>
        Excess(
            t.intersection([
                t.type({
                    status: Literal("generated"),
                    div: SCALARXhtml
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface CMRCompositionU3FamilienanamneseEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU3FamilienanamneseEntry: t.Type<CMRCompositionU3FamilienanamneseEntry> =
    t.recursion("CMRCompositionU3FamilienanamneseEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_Family_History|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
 */
export interface CMRCompositionU3FamilienanamneseEmptyReason {
    coding: Array<CMRCompositionU3FamilienanamneseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU3FamilienanamneseEmptyReason: t.Type<CMRCompositionU3FamilienanamneseEmptyReason> =
    t.recursion("CMRCompositionU3FamilienanamneseEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3FamilienanamneseEmptyReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU3SozialanamneseCode {
    coding: Array<CMRCompositionU3SozialanamneseCodeCoding>;
    id?: string;
}

export const CMRCompositionU3SozialanamneseCode: t.Type<CMRCompositionU3SozialanamneseCode> =
    t.recursion("CMRCompositionU3SozialanamneseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU3SozialanamneseCodeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * In diesem Element ist mindestens der Titel der Section anzugeben. Zusätzliche Informationen können angegeben werden.
 */
export interface CMRCompositionU3SozialanamneseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU3SozialanamneseText: t.Type<CMRCompositionU3SozialanamneseText> =
    t.recursion("CMRCompositionU3SozialanamneseText", () =>
        Excess(
            t.intersection([
                t.type({
                    status: Literal("generated"),
                    div: SCALARXhtml
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface CMRCompositionU3SozialanamneseEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU3SozialanamneseEntry: t.Type<CMRCompositionU3SozialanamneseEntry> =
    t.recursion("CMRCompositionU3SozialanamneseEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Social_History|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
 */
export interface CMRCompositionU3SozialanamneseEmptyReason {
    coding: Array<CMRCompositionU3SozialanamneseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU3SozialanamneseEmptyReason: t.Type<CMRCompositionU3SozialanamneseEmptyReason> =
    t.recursion("CMRCompositionU3SozialanamneseEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3SozialanamneseEmptyReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU3UntersuchungCode {
    coding: Array<CMRCompositionU3UntersuchungCodeCoding>;
    id?: string;
}

export const CMRCompositionU3UntersuchungCode: t.Type<CMRCompositionU3UntersuchungCode> =
    t.recursion("CMRCompositionU3UntersuchungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU3UntersuchungCodeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * In diesem Element ist mindestens der Titel der Section anzugeben. Zusätzliche Informationen können angegeben werden.
 */
export interface CMRCompositionU3UntersuchungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU3UntersuchungText: t.Type<CMRCompositionU3UntersuchungText> =
    t.recursion("CMRCompositionU3UntersuchungText", () =>
        Excess(
            t.intersection([
                t.type({
                    status: Literal("generated"),
                    div: SCALARXhtml
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface CMRCompositionU3UntersuchungEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU3UntersuchungEntry: t.Type<CMRCompositionU3UntersuchungEntry> =
    t.recursion("CMRCompositionU3UntersuchungEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_U4_Physical_Exam_Skin|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U4_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U3_Physical_Exam_Abdomen_Genitals|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U6_Physical_Exam_Heart_Blood_Circulation|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U3_Physical_Exam_Ears|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_Physical_Exam_Musculoskeletal_System|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_Physical_Exam_Head|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_U4_Physical_Exam_Mouth_Nose|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U3_Physical_Exam_Eyes|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Physical_Exam_Parental_Assessment|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
 */
export interface CMRCompositionU3UntersuchungEmptyReason {
    coding: Array<CMRCompositionU3UntersuchungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU3UntersuchungEmptyReason: t.Type<CMRCompositionU3UntersuchungEmptyReason> =
    t.recursion("CMRCompositionU3UntersuchungEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3UntersuchungEmptyReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU3BeratungCode {
    coding: Array<CMRCompositionU3BeratungCodeCoding>;
    id?: string;
}

export const CMRCompositionU3BeratungCode: t.Type<CMRCompositionU3BeratungCode> =
    t.recursion("CMRCompositionU3BeratungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU3BeratungCodeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * In diesem Element ist mindestens der Titel der Section anzugeben. Zusätzliche Informationen können angegeben werden.
 */
export interface CMRCompositionU3BeratungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU3BeratungText: t.Type<CMRCompositionU3BeratungText> =
    t.recursion("CMRCompositionU3BeratungText", () =>
        Excess(
            t.intersection([
                t.type({
                    status: Literal("generated"),
                    div: SCALARXhtml
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface CMRCompositionU3BeratungEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU3BeratungEntry: t.Type<CMRCompositionU3BeratungEntry> =
    t.recursion("CMRCompositionU3BeratungEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U3_Consultation|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_Consultation_Annotation|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
 */
export interface CMRCompositionU3BeratungEmptyReason {
    coding: Array<CMRCompositionU3BeratungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU3BeratungEmptyReason: t.Type<CMRCompositionU3BeratungEmptyReason> =
    t.recursion("CMRCompositionU3BeratungEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU3BeratungEmptyReasonCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU3ErgebnisseCode {
    coding: Array<CMRCompositionU3ErgebnisseCodeCoding>;
    id?: string;
}

export const CMRCompositionU3ErgebnisseCode: t.Type<CMRCompositionU3ErgebnisseCode> =
    t.recursion("CMRCompositionU3ErgebnisseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU3ErgebnisseCodeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * In diesem Element ist mindestens der Titel der Section anzugeben. Zusätzliche Informationen können angegeben werden.
 */
export interface CMRCompositionU3ErgebnisseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU3ErgebnisseText: t.Type<CMRCompositionU3ErgebnisseText> =
    t.recursion("CMRCompositionU3ErgebnisseText", () =>
        Excess(
            t.intersection([
                t.type({
                    status: Literal("generated"),
                    div: SCALARXhtml
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface CMRCompositionU3ErgebnisseEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU3ErgebnisseEntry: t.Type<CMRCompositionU3ErgebnisseEntry> =
    t.recursion("CMRCompositionU3ErgebnisseEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_Relevant_History_Results|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_No_Abnormality_Detected|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U6_Body_Measures|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Comments|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Age_Appropriate_Development|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Appointment|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Immunization_Appointment|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Care_Plan_U2_U9_Result|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
 */
export interface CMRCompositionU3ErgebnisseEmptyReason {
    coding: Array<CMRCompositionU3ErgebnisseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU3ErgebnisseEmptyReason: t.Type<CMRCompositionU3ErgebnisseEmptyReason> =
    t.recursion("CMRCompositionU3ErgebnisseEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU3ErgebnisseEmptyReasonCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A nested sub-section within this section.
 */
export interface CMRCompositionU3ErgebnisseSection {
    title: "Prüfung, Aufklärung und ggf. Veranlassung der Durchführung von:";
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU3ErgebnisseSectionPruefungAufklaerungHinweis
    )[];
    entry?: Array<CMRCompositionU3ErgebnisseSectionEntry>;
}

export const CMRCompositionU3ErgebnisseSection: t.Type<CMRCompositionU3ErgebnisseSection> =
    t.recursion("CMRCompositionU3ErgebnisseSection", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal(
                        "Prüfung, Aufklärung und ggf. Veranlassung der Durchführung von:"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU3ErgebnisseSectionPruefungAufklaerungHinweis>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU3ErgebnisseSectionPruefungAufklaerungHinweis
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU3ErgebnisseSectionPruefungAufklaerungHinweis,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: MaxArray(1, CMRCompositionU3ErgebnisseSectionEntry)
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU3HoerscreeningCode {
    coding: Array<
        | CMRCompositionU3HoerscreeningCodeCodeSnomed
        | CMRCompositionU3HoerscreeningCodeCodeLoinc
    >;
    id?: string;
}

export const CMRCompositionU3HoerscreeningCode: t.Type<CMRCompositionU3HoerscreeningCode> =
    t.recursion("CMRCompositionU3HoerscreeningCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRCompositionU3HoerscreeningCodeCodeSnomed>,
                                t.Type<CMRCompositionU3HoerscreeningCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRCompositionU3HoerscreeningCodeCodeSnomed,
                            CMRCompositionU3HoerscreeningCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRCompositionU3HoerscreeningCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRCompositionU3HoerscreeningCodeCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
                            }
                        ],
                        ["2", "2"]
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * In diesem Element ist mindestens der Titel der Section anzugeben. Zusätzliche Informationen können angegeben werden.
 */
export interface CMRCompositionU3HoerscreeningText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU3HoerscreeningText: t.Type<CMRCompositionU3HoerscreeningText> =
    t.recursion("CMRCompositionU3HoerscreeningText", () =>
        Excess(
            t.intersection([
                t.type({
                    status: Literal("generated"),
                    div: SCALARXhtml
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface CMRCompositionU3HoerscreeningEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU3HoerscreeningEntry: t.Type<CMRCompositionU3HoerscreeningEntry> =
    t.recursion("CMRCompositionU3HoerscreeningEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U5_Neonatal_Hearscreening|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_U1_U5_Referral_Pediatric_Audiology_Service|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U5_Pediatric_Diagnostic_Audiology_Service|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
 */
export interface CMRCompositionU3HoerscreeningEmptyReason {
    coding: Array<CMRCompositionU3HoerscreeningEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU3HoerscreeningEmptyReason: t.Type<CMRCompositionU3HoerscreeningEmptyReason> =
    t.recursion("CMRCompositionU3HoerscreeningEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3HoerscreeningEmptyReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU3ErweitertesNeugeborenenscreeningCode {
    coding: Array<CMRCompositionU3ErweitertesNeugeborenenscreeningCodeCoding>;
    id?: string;
}

export const CMRCompositionU3ErweitertesNeugeborenenscreeningCode: t.Type<CMRCompositionU3ErweitertesNeugeborenenscreeningCode> =
    t.recursion("CMRCompositionU3ErweitertesNeugeborenenscreeningCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3ErweitertesNeugeborenenscreeningCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * In diesem Element ist mindestens der Titel der Section anzugeben. Zusätzliche Informationen können angegeben werden.
 */
export interface CMRCompositionU3ErweitertesNeugeborenenscreeningText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU3ErweitertesNeugeborenenscreeningText: t.Type<CMRCompositionU3ErweitertesNeugeborenenscreeningText> =
    t.recursion("CMRCompositionU3ErweitertesNeugeborenenscreeningText", () =>
        Excess(
            t.intersection([
                t.type({
                    status: Literal("generated"),
                    div: SCALARXhtml
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface CMRCompositionU3ErweitertesNeugeborenenscreeningEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU3ErweitertesNeugeborenenscreeningEntry: t.Type<CMRCompositionU3ErweitertesNeugeborenenscreeningEntry> =
    t.recursion("CMRCompositionU3ErweitertesNeugeborenenscreeningEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U1_U3_Newborn_Blood_Spot_Screening|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
 */
export interface CMRCompositionU3ErweitertesNeugeborenenscreeningEmptyReason {
    coding: Array<CMRCompositionU3ErweitertesNeugeborenenscreeningEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU3ErweitertesNeugeborenenscreeningEmptyReason: t.Type<CMRCompositionU3ErweitertesNeugeborenenscreeningEmptyReason> =
    t.recursion("CMRCompositionU3ErweitertesNeugeborenenscreeningEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3ErweitertesNeugeborenenscreeningEmptyReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU3MukoviszidoseScreeningCode {
    coding: Array<CMRCompositionU3MukoviszidoseScreeningCodeCoding>;
    id?: string;
}

export const CMRCompositionU3MukoviszidoseScreeningCode: t.Type<CMRCompositionU3MukoviszidoseScreeningCode> =
    t.recursion("CMRCompositionU3MukoviszidoseScreeningCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3MukoviszidoseScreeningCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * In diesem Element ist mindestens der Titel der Section anzugeben. Zusätzliche Informationen können angegeben werden.
 */
export interface CMRCompositionU3MukoviszidoseScreeningText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU3MukoviszidoseScreeningText: t.Type<CMRCompositionU3MukoviszidoseScreeningText> =
    t.recursion("CMRCompositionU3MukoviszidoseScreeningText", () =>
        Excess(
            t.intersection([
                t.type({
                    status: Literal("generated"),
                    div: SCALARXhtml
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface CMRCompositionU3MukoviszidoseScreeningEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU3MukoviszidoseScreeningEntry: t.Type<CMRCompositionU3MukoviszidoseScreeningEntry> =
    t.recursion("CMRCompositionU3MukoviszidoseScreeningEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U1_U3_Cystic_Fibrosis_Screening|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
 */
export interface CMRCompositionU3MukoviszidoseScreeningEmptyReason {
    coding: Array<CMRCompositionU3MukoviszidoseScreeningEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU3MukoviszidoseScreeningEmptyReason: t.Type<CMRCompositionU3MukoviszidoseScreeningEmptyReason> =
    t.recursion("CMRCompositionU3MukoviszidoseScreeningEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3MukoviszidoseScreeningEmptyReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU3OrientierendeBeurteilungDerEntwicklungCode {
    coding: Array<CMRCompositionU3OrientierendeBeurteilungDerEntwicklungCodeCoding>;
    id?: string;
}

export const CMRCompositionU3OrientierendeBeurteilungDerEntwicklungCode: t.Type<CMRCompositionU3OrientierendeBeurteilungDerEntwicklungCode> =
    t.recursion("CMRCompositionU3OrientierendeBeurteilungDerEntwicklungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3OrientierendeBeurteilungDerEntwicklungCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * In diesem Element ist mindestens der Titel der Section anzugeben. Zusätzliche Informationen können angegeben werden.
 */
export interface CMRCompositionU3OrientierendeBeurteilungDerEntwicklungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU3OrientierendeBeurteilungDerEntwicklungText: t.Type<CMRCompositionU3OrientierendeBeurteilungDerEntwicklungText> =
    t.recursion("CMRCompositionU3OrientierendeBeurteilungDerEntwicklungText", () =>
        Excess(
            t.intersection([
                t.type({
                    status: Literal("generated"),
                    div: SCALARXhtml
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface CMRCompositionU3OrientierendeBeurteilungDerEntwicklungEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU3OrientierendeBeurteilungDerEntwicklungEntry: t.Type<CMRCompositionU3OrientierendeBeurteilungDerEntwicklungEntry> =
    t.recursion("CMRCompositionU3OrientierendeBeurteilungDerEntwicklungEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_Development_Assessment|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U6_Indication_for_Abnormality|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
 */
export interface CMRCompositionU3OrientierendeBeurteilungDerEntwicklungEmptyReason {
    coding: Array<CMRCompositionU3OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU3OrientierendeBeurteilungDerEntwicklungEmptyReason: t.Type<CMRCompositionU3OrientierendeBeurteilungDerEntwicklungEmptyReason> =
    t.recursion("CMRCompositionU3OrientierendeBeurteilungDerEntwicklungEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU3ScreeningHueftgelenksdysplasieCode {
    coding: Array<
        | CMRCompositionU3ScreeningHueftgelenksdysplasieCodeCodeSnomed
        | CMRCompositionU3ScreeningHueftgelenksdysplasieCodeCodeLoinc
    >;
    id?: string;
}

export const CMRCompositionU3ScreeningHueftgelenksdysplasieCode: t.Type<CMRCompositionU3ScreeningHueftgelenksdysplasieCode> =
    t.recursion("CMRCompositionU3ScreeningHueftgelenksdysplasieCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRCompositionU3ScreeningHueftgelenksdysplasieCodeCodeSnomed>,
                                t.Type<CMRCompositionU3ScreeningHueftgelenksdysplasieCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRCompositionU3ScreeningHueftgelenksdysplasieCodeCodeSnomed,
                            CMRCompositionU3ScreeningHueftgelenksdysplasieCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRCompositionU3ScreeningHueftgelenksdysplasieCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRCompositionU3ScreeningHueftgelenksdysplasieCodeCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
                            }
                        ],
                        ["2", "2"]
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface CMRCompositionU3ScreeningHueftgelenksdysplasieEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU3ScreeningHueftgelenksdysplasieEntry: t.Type<CMRCompositionU3ScreeningHueftgelenksdysplasieEntry> =
    t.recursion("CMRCompositionU3ScreeningHueftgelenksdysplasieEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U4_Hip_Screening_History|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Care_Plan_U3_U4_Hip_Screening_Plan|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_U4_Hip_Screening|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
 */
export interface CMRCompositionU3ScreeningHueftgelenksdysplasieEmptyReason {
    coding: Array<CMRCompositionU3ScreeningHueftgelenksdysplasieEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU3ScreeningHueftgelenksdysplasieEmptyReason: t.Type<CMRCompositionU3ScreeningHueftgelenksdysplasieEmptyReason> =
    t.recursion("CMRCompositionU3ScreeningHueftgelenksdysplasieEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3ScreeningHueftgelenksdysplasieEmptyReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU3PerzentilkurvenCode {
    coding: Array<CMRCompositionU3PerzentilkurvenCodeCoding>;
    id?: string;
}

export const CMRCompositionU3PerzentilkurvenCode: t.Type<CMRCompositionU3PerzentilkurvenCode> =
    t.recursion("CMRCompositionU3PerzentilkurvenCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU3PerzentilkurvenCodeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A human-readable narrative that contains the attested content of the section, used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative.
 */
export interface CMRCompositionU3PerzentilkurvenText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU3PerzentilkurvenText: t.Type<CMRCompositionU3PerzentilkurvenText> =
    t.recursion("CMRCompositionU3PerzentilkurvenText", () =>
        Excess(
            t.intersection([
                t.type({
                    status: Literal("generated"),
                    div: SCALARXhtml
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface CMRCompositionU3PerzentilkurvenEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU3PerzentilkurvenEntry: t.Type<CMRCompositionU3PerzentilkurvenEntry> =
    t.recursion("CMRCompositionU3PerzentilkurvenEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_Percentile_Values|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
 */
export interface CMRCompositionU3PerzentilkurvenEmptyReason {
    coding: Array<CMRCompositionU3PerzentilkurvenEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU3PerzentilkurvenEmptyReason: t.Type<CMRCompositionU3PerzentilkurvenEmptyReason> =
    t.recursion("CMRCompositionU3PerzentilkurvenEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU3PerzentilkurvenEmptyReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU3U3Einleitung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "U3 Elterninformation zur Untersuchung von der 4. bis zur 5. Lebenswoche Ihr Baby ist jetzt etwa einen Monat alt. Die meisten Babys können von der dritten Woche an den Kopf zu Geräuschquellen hinwenden. Sie schauen lieber farbige als graue Flächen an und haben einen ausgeprägten Saug- und Greifreflex. Ein wichtiges Ziel der U3 und aller weiteren Untersuchungen ist es, Entwicklungsauffälligkeiten möglichst frühzeitig zu erkennen. Bei der U3 achtet die Ärztin oder der Arzt beispielsweise darauf, ob Ihr Baby schon in Bauchlage den Kopf halten kann, die Hände spontan öffnet oder aufmerksam in nahe Gesichter schaut. Neben einer gründlichen körperlichen Untersuchung werden zusätzlich mit Ultraschall die Hüftgelenke Ihres Babys überprüft, um eventuelle Fehlstellungen rechtzeitig behandeln zu können. Die Ultraschalluntersuchung der Hüftgelenke sollten Sie nutzen, da Sie Ihrem Baby dadurch schwerwiegende, lebenslange Beschwerden ersparen können. Wie bei der U1 und U2 wird die Ärztin oder der Arzt nochmals darauf achten, ob Ihr Baby eine behandlungsbedürftige Gelbsucht hat, die zum Beispiel ein Hinweis auf einen Verschluss der Gallengänge sein kann. Sie werden gefragt, ob es Auffälligkeiten beim Schlafen, Trinken, bei der Verdauung oder im sonstigen Verhalten Ihres Babys gibt. Zur Vorbeugung gegen die Knochenerkrankung Rachitis wird Vitamin D sowie Fluorid für die spätere Zahnhärtung empfohlen. Sie werden erneut zum Thema Stillen und Ernährung beraten sowie über Maßnahmen, die das Risiko eines plötzlichen Kindstodes mindern. Zudem geht es allgemein um Unfallverhütung und um Gefahren für Ihr Baby durch Abhängigkeit und Sucht in der Familie. Falls die Tests auf angeborene Stoffwechselstörungen und/oder Mukoviszidose sowie der Neugeborenen-Hörtest noch nicht stattgefunden haben, sollten sie umgehend erfolgen, da es für einige Erkrankungen wichtig ist, dass die Diagnose schnell gestellt werden kann.";
    id?: string;
}

export const CMRCompositionU3U3Einleitung: t.Type<CMRCompositionU3U3Einleitung> =
    t.recursion("CMRCompositionU3U3Einleitung", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                    ),
                    valueString: Literal(
                        "U3 Elterninformation zur Untersuchung von der 4. bis zur 5. Lebenswoche Ihr Baby ist jetzt etwa einen Monat alt. Die meisten Babys können von der dritten Woche an den Kopf zu Geräuschquellen hinwenden. Sie schauen lieber farbige als graue Flächen an und haben einen ausgeprägten Saug- und Greifreflex. Ein wichtiges Ziel der U3 und aller weiteren Untersuchungen ist es, Entwicklungsauffälligkeiten möglichst frühzeitig zu erkennen. Bei der U3 achtet die Ärztin oder der Arzt beispielsweise darauf, ob Ihr Baby schon in Bauchlage den Kopf halten kann, die Hände spontan öffnet oder aufmerksam in nahe Gesichter schaut. Neben einer gründlichen körperlichen Untersuchung werden zusätzlich mit Ultraschall die Hüftgelenke Ihres Babys überprüft, um eventuelle Fehlstellungen rechtzeitig behandeln zu können. Die Ultraschalluntersuchung der Hüftgelenke sollten Sie nutzen, da Sie Ihrem Baby dadurch schwerwiegende, lebenslange Beschwerden ersparen können. Wie bei der U1 und U2 wird die Ärztin oder der Arzt nochmals darauf achten, ob Ihr Baby eine behandlungsbedürftige Gelbsucht hat, die zum Beispiel ein Hinweis auf einen Verschluss der Gallengänge sein kann. Sie werden gefragt, ob es Auffälligkeiten beim Schlafen, Trinken, bei der Verdauung oder im sonstigen Verhalten Ihres Babys gibt. Zur Vorbeugung gegen die Knochenerkrankung Rachitis wird Vitamin D sowie Fluorid für die spätere Zahnhärtung empfohlen. Sie werden erneut zum Thema Stillen und Ernährung beraten sowie über Maßnahmen, die das Risiko eines plötzlichen Kindstodes mindern. Zudem geht es allgemein um Unfallverhütung und um Gefahren für Ihr Baby durch Abhängigkeit und Sucht in der Familie. Falls die Tests auf angeborene Stoffwechselstörungen und/oder Mukoviszidose sowie der Neugeborenen-Hörtest noch nicht stattgefunden haben, sollten sie umgehend erfolgen, da es für einige Erkrankungen wichtig ist, dass die Diagnose schnell gestellt werden kann."
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3TypeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "243788004:370131001=133931009";
    display: "Child examination (procedure) : Recipient category = Infant (person)";
    id?: string;
}

export const CMRCompositionU3TypeCoding: t.Type<CMRCompositionU3TypeCoding> = t.recursion(
    "CMRCompositionU3TypeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("243788004:370131001=133931009"),
                    display: Literal(
                        "Child examination (procedure) : Recipient category = Infant (person)"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU3CategoryCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "243788004";
    display: "Child examination (procedure)";
    id?: string;
}

export const CMRCompositionU3CategoryCoding: t.Type<CMRCompositionU3CategoryCoding> =
    t.recursion("CMRCompositionU3CategoryCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("243788004"),
                    display: Literal("Child examination (procedure)")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU3Schwangerschaftsanamnese {
    title: "Schwangerschaftsanamnese";
    code: CMRCompositionU3SchwangerschaftsanamneseCode;
    text: CMRCompositionU3SchwangerschaftsanamneseText;
    id?: string;
    extension?: (Extension | CMRCompositionU3SchwangerschaftsanamneseAnamneseAnweisung)[];
    entry?: CMRCompositionU3SchwangerschaftsanamneseEntry[];
    emptyReason?: CMRCompositionU3SchwangerschaftsanamneseEmptyReason;
}

export const CMRCompositionU3Schwangerschaftsanamnese: t.Type<CMRCompositionU3Schwangerschaftsanamnese> =
    t.recursion("CMRCompositionU3Schwangerschaftsanamnese", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Schwangerschaftsanamnese"),
                    code: CMRCompositionU3SchwangerschaftsanamneseCode,
                    text: CMRCompositionU3SchwangerschaftsanamneseText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU3SchwangerschaftsanamneseAnamneseAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU3SchwangerschaftsanamneseAnamneseAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU3SchwangerschaftsanamneseAnamneseAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU3SchwangerschaftsanamneseEntry),
                    emptyReason: CMRCompositionU3SchwangerschaftsanamneseEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU3Geburtsanamnese {
    title: "Geburtsanamnese";
    code: CMRCompositionU3GeburtsanamneseCode;
    text: CMRCompositionU3GeburtsanamneseText;
    id?: string;
    extension?: (Extension | CMRCompositionU3GeburtsanamneseAnamneseAnweisung)[];
    emptyReason?: CMRCompositionU3GeburtsanamneseEmptyReason;
    section?: (
        | CMRCompositionU3GeburtsanamneseGeschlecht
        | CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostik
        | CMRCompositionU3GeburtsanamneseBaseExcess
        | CMRCompositionU3GeburtsanamnesePhWert
        | CMRCompositionU3GeburtsanamneseKindslage
        | CMRCompositionU3GeburtsanamneseGeburtsmodus
        | CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeit
        | CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTage
    )[];
}

export const CMRCompositionU3Geburtsanamnese: t.Type<CMRCompositionU3Geburtsanamnese> =
    t.recursion("CMRCompositionU3Geburtsanamnese", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Geburtsanamnese"),
                    code: CMRCompositionU3GeburtsanamneseCode,
                    text: CMRCompositionU3GeburtsanamneseText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU3GeburtsanamneseAnamneseAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU3GeburtsanamneseAnamneseAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU3GeburtsanamneseAnamneseAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    emptyReason: CMRCompositionU3GeburtsanamneseEmptyReason,
                    section: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRCompositionU3GeburtsanamneseGeschlecht>,
                                t.Type<CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostik>,
                                t.Type<CMRCompositionU3GeburtsanamneseBaseExcess>,
                                t.Type<CMRCompositionU3GeburtsanamnesePhWert>,
                                t.Type<CMRCompositionU3GeburtsanamneseKindslage>,
                                t.Type<CMRCompositionU3GeburtsanamneseGeburtsmodus>,
                                t.Type<CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeit>,
                                t.Type<CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTage>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRCompositionU3GeburtsanamneseGeschlecht,
                            CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostik,
                            CMRCompositionU3GeburtsanamneseBaseExcess,
                            CMRCompositionU3GeburtsanamnesePhWert,
                            CMRCompositionU3GeburtsanamneseKindslage,
                            CMRCompositionU3GeburtsanamneseGeburtsmodus,
                            CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeit,
                            CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTage
                        ]),
                        [
                            {
                                codec: CMRCompositionU3GeburtsanamneseGeschlecht,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "Geschlecht" }
                            },
                            {
                                codec: CMRCompositionU3GeburtsanamneseBefundePraenatalerDiagnostik,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "title",
                                    value: "Soweit vorhanden, Befunde einer pränatalen Diagnostik:"
                                }
                            },
                            {
                                codec: CMRCompositionU3GeburtsanamneseBaseExcess,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "Base excess" }
                            },
                            {
                                codec: CMRCompositionU3GeburtsanamnesePhWert,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "title",
                                    value: "pH-Wert (Nabelarterie)"
                                }
                            },
                            {
                                codec: CMRCompositionU3GeburtsanamneseKindslage,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "Kindslage" }
                            },
                            {
                                codec: CMRCompositionU3GeburtsanamneseGeburtsmodus,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "Geburtsmodus" }
                            },
                            {
                                codec: CMRCompositionU3GeburtsanamneseGeburtsdatumUhrzeit,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "Geburtsdatum" }
                            },
                            {
                                codec: CMRCompositionU3GeburtsanamneseSchwangerschaftswocheTage,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "SSW (Wochen+Tage)" }
                            }
                        ],
                        ["0", "*"]
                    )
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU3AktuelleAnamneseDesKindes {
    title: "Aktuelle Anamnese des Kindes";
    code: CMRCompositionU3AktuelleAnamneseDesKindesCode;
    text: CMRCompositionU3AktuelleAnamneseDesKindesText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU3AktuelleAnamneseDesKindesAnamneseAnweisung
        | CMRCompositionU3AktuelleAnamneseDesKindesHinweisNachtragen
    )[];
    entry?: CMRCompositionU3AktuelleAnamneseDesKindesEntry[];
    emptyReason?: CMRCompositionU3AktuelleAnamneseDesKindesEmptyReason;
}

export const CMRCompositionU3AktuelleAnamneseDesKindes: t.Type<CMRCompositionU3AktuelleAnamneseDesKindes> =
    t.recursion("CMRCompositionU3AktuelleAnamneseDesKindes", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Aktuelle Anamnese des Kindes"),
                    code: CMRCompositionU3AktuelleAnamneseDesKindesCode,
                    text: CMRCompositionU3AktuelleAnamneseDesKindesText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU3AktuelleAnamneseDesKindesAnamneseAnweisung>,
                                t.Type<CMRCompositionU3AktuelleAnamneseDesKindesHinweisNachtragen>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU3AktuelleAnamneseDesKindesAnamneseAnweisung,
                            CMRCompositionU3AktuelleAnamneseDesKindesHinweisNachtragen
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU3AktuelleAnamneseDesKindesAnamneseAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            },
                            {
                                codec: CMRCompositionU3AktuelleAnamneseDesKindesHinweisNachtragen,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU3AktuelleAnamneseDesKindesEntry),
                    emptyReason: CMRCompositionU3AktuelleAnamneseDesKindesEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU3Familienanamnese {
    title: "Familienanamnese";
    code: CMRCompositionU3FamilienanamneseCode;
    text: CMRCompositionU3FamilienanamneseText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU3FamilienanamneseAnamneseAnweisung
        | CMRCompositionU3FamilienanamneseHinweisNachtragen
    )[];
    entry?: Array<CMRCompositionU3FamilienanamneseEntry>;
    emptyReason?: CMRCompositionU3FamilienanamneseEmptyReason;
}

export const CMRCompositionU3Familienanamnese: t.Type<CMRCompositionU3Familienanamnese> =
    t.recursion("CMRCompositionU3Familienanamnese", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Familienanamnese"),
                    code: CMRCompositionU3FamilienanamneseCode,
                    text: CMRCompositionU3FamilienanamneseText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU3FamilienanamneseAnamneseAnweisung>,
                                t.Type<CMRCompositionU3FamilienanamneseHinweisNachtragen>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU3FamilienanamneseAnamneseAnweisung,
                            CMRCompositionU3FamilienanamneseHinweisNachtragen
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU3FamilienanamneseAnamneseAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            },
                            {
                                codec: CMRCompositionU3FamilienanamneseHinweisNachtragen,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: MaxArray(1, CMRCompositionU3FamilienanamneseEntry),
                    emptyReason: CMRCompositionU3FamilienanamneseEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU3Sozialanamnese {
    title: "Sozialanamnese";
    code: CMRCompositionU3SozialanamneseCode;
    text: CMRCompositionU3SozialanamneseText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU3SozialanamneseAnamneseAnweisung
        | CMRCompositionU3SozialanamneseHinweisNachtragen
    )[];
    entry?: CMRCompositionU3SozialanamneseEntry[];
    emptyReason?: CMRCompositionU3SozialanamneseEmptyReason;
}

export const CMRCompositionU3Sozialanamnese: t.Type<CMRCompositionU3Sozialanamnese> =
    t.recursion("CMRCompositionU3Sozialanamnese", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Sozialanamnese"),
                    code: CMRCompositionU3SozialanamneseCode,
                    text: CMRCompositionU3SozialanamneseText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU3SozialanamneseAnamneseAnweisung>,
                                t.Type<CMRCompositionU3SozialanamneseHinweisNachtragen>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU3SozialanamneseAnamneseAnweisung,
                            CMRCompositionU3SozialanamneseHinweisNachtragen
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU3SozialanamneseAnamneseAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            },
                            {
                                codec: CMRCompositionU3SozialanamneseHinweisNachtragen,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU3SozialanamneseEntry),
                    emptyReason: CMRCompositionU3SozialanamneseEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU3Untersuchung {
    title: "Körperliche Untersuchung";
    code: CMRCompositionU3UntersuchungCode;
    text: CMRCompositionU3UntersuchungText;
    id?: string;
    extension?: (Extension | CMRCompositionU3UntersuchungUntersuchungAnweisung)[];
    entry?: CMRCompositionU3UntersuchungEntry[];
    emptyReason?: CMRCompositionU3UntersuchungEmptyReason;
}

export const CMRCompositionU3Untersuchung: t.Type<CMRCompositionU3Untersuchung> =
    t.recursion("CMRCompositionU3Untersuchung", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Körperliche Untersuchung"),
                    code: CMRCompositionU3UntersuchungCode,
                    text: CMRCompositionU3UntersuchungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU3UntersuchungUntersuchungAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU3UntersuchungUntersuchungAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU3UntersuchungUntersuchungAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU3UntersuchungEntry),
                    emptyReason: CMRCompositionU3UntersuchungEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU3Beratung {
    title: "Beratung";
    code: CMRCompositionU3BeratungCode;
    text: CMRCompositionU3BeratungText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU3BeratungBeratungAnweisung
        | CMRCompositionU3BeratungBeratungHinweis
    )[];
    entry?: CMRCompositionU3BeratungEntry[];
    emptyReason?: CMRCompositionU3BeratungEmptyReason;
}

export const CMRCompositionU3Beratung: t.Type<CMRCompositionU3Beratung> = t.recursion(
    "CMRCompositionU3Beratung",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Beratung"),
                    code: CMRCompositionU3BeratungCode,
                    text: CMRCompositionU3BeratungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU3BeratungBeratungAnweisung>,
                                t.Type<CMRCompositionU3BeratungBeratungHinweis>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU3BeratungBeratungAnweisung,
                            CMRCompositionU3BeratungBeratungHinweis
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU3BeratungBeratungAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            },
                            {
                                codec: CMRCompositionU3BeratungBeratungHinweis,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU3BeratungEntry),
                    emptyReason: CMRCompositionU3BeratungEmptyReason
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU3Ergebnisse {
    title: "Ergebnisse";
    code: CMRCompositionU3ErgebnisseCode;
    text: CMRCompositionU3ErgebnisseText;
    section: Array<CMRCompositionU3ErgebnisseSection>;
    id?: string;
    entry?: CMRCompositionU3ErgebnisseEntry[];
    emptyReason?: CMRCompositionU3ErgebnisseEmptyReason;
}

export const CMRCompositionU3Ergebnisse: t.Type<CMRCompositionU3Ergebnisse> = t.recursion(
    "CMRCompositionU3Ergebnisse",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Ergebnisse"),
                    code: CMRCompositionU3ErgebnisseCode,
                    text: CMRCompositionU3ErgebnisseText,
                    section: MinMaxArray(1, 1, CMRCompositionU3ErgebnisseSection)
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(CMRCompositionU3ErgebnisseEntry),
                    emptyReason: CMRCompositionU3ErgebnisseEmptyReason
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU3Hoerscreening {
    title: "Neugeborenen-Hörscreening";
    code: CMRCompositionU3HoerscreeningCode;
    text: CMRCompositionU3HoerscreeningText;
    id?: string;
    entry?: CMRCompositionU3HoerscreeningEntry[];
    emptyReason?: CMRCompositionU3HoerscreeningEmptyReason;
}

export const CMRCompositionU3Hoerscreening: t.Type<CMRCompositionU3Hoerscreening> =
    t.recursion("CMRCompositionU3Hoerscreening", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Neugeborenen-Hörscreening"),
                    code: CMRCompositionU3HoerscreeningCode,
                    text: CMRCompositionU3HoerscreeningText
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(CMRCompositionU3HoerscreeningEntry),
                    emptyReason: CMRCompositionU3HoerscreeningEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU3ErweitertesNeugeborenenscreening {
    title: "Erweitertes Neugeborenen-Screening";
    code: CMRCompositionU3ErweitertesNeugeborenenscreeningCode;
    text: CMRCompositionU3ErweitertesNeugeborenenscreeningText;
    id?: string;
    entry?: Array<CMRCompositionU3ErweitertesNeugeborenenscreeningEntry>;
    emptyReason?: CMRCompositionU3ErweitertesNeugeborenenscreeningEmptyReason;
}

export const CMRCompositionU3ErweitertesNeugeborenenscreening: t.Type<CMRCompositionU3ErweitertesNeugeborenenscreening> =
    t.recursion("CMRCompositionU3ErweitertesNeugeborenenscreening", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Erweitertes Neugeborenen-Screening"),
                    code: CMRCompositionU3ErweitertesNeugeborenenscreeningCode,
                    text: CMRCompositionU3ErweitertesNeugeborenenscreeningText
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(
                        1,
                        CMRCompositionU3ErweitertesNeugeborenenscreeningEntry
                    ),
                    emptyReason:
                        CMRCompositionU3ErweitertesNeugeborenenscreeningEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU3MukoviszidoseScreening {
    title: "Screening auf Mukoviszidose";
    code: CMRCompositionU3MukoviszidoseScreeningCode;
    text: CMRCompositionU3MukoviszidoseScreeningText;
    id?: string;
    entry?: CMRCompositionU3MukoviszidoseScreeningEntry[];
    emptyReason?: CMRCompositionU3MukoviszidoseScreeningEmptyReason;
}

export const CMRCompositionU3MukoviszidoseScreening: t.Type<CMRCompositionU3MukoviszidoseScreening> =
    t.recursion("CMRCompositionU3MukoviszidoseScreening", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Screening auf Mukoviszidose"),
                    code: CMRCompositionU3MukoviszidoseScreeningCode,
                    text: CMRCompositionU3MukoviszidoseScreeningText
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(CMRCompositionU3MukoviszidoseScreeningEntry),
                    emptyReason: CMRCompositionU3MukoviszidoseScreeningEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU3OrientierendeBeurteilungDerEntwicklung {
    title: "Orientierende Beurteilung der Entwicklung";
    code: CMRCompositionU3OrientierendeBeurteilungDerEntwicklungCode;
    text: CMRCompositionU3OrientierendeBeurteilungDerEntwicklungText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU3OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung
        | CMRCompositionU3OrientierendeBeurteilungDerEntwicklungInteraktionHinweis
    )[];
    entry?: CMRCompositionU3OrientierendeBeurteilungDerEntwicklungEntry[];
    emptyReason?: CMRCompositionU3OrientierendeBeurteilungDerEntwicklungEmptyReason;
}

export const CMRCompositionU3OrientierendeBeurteilungDerEntwicklung: t.Type<CMRCompositionU3OrientierendeBeurteilungDerEntwicklung> =
    t.recursion("CMRCompositionU3OrientierendeBeurteilungDerEntwicklung", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Orientierende Beurteilung der Entwicklung"),
                    code: CMRCompositionU3OrientierendeBeurteilungDerEntwicklungCode,
                    text: CMRCompositionU3OrientierendeBeurteilungDerEntwicklungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU3OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung>,
                                t.Type<CMRCompositionU3OrientierendeBeurteilungDerEntwicklungInteraktionHinweis>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU3OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung,
                            CMRCompositionU3OrientierendeBeurteilungDerEntwicklungInteraktionHinweis
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU3OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            },
                            {
                                codec: CMRCompositionU3OrientierendeBeurteilungDerEntwicklungInteraktionHinweis,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(
                        CMRCompositionU3OrientierendeBeurteilungDerEntwicklungEntry
                    ),
                    emptyReason:
                        CMRCompositionU3OrientierendeBeurteilungDerEntwicklungEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU3ScreeningHueftgelenksdysplasie {
    title: "Screening auf Hüftgelenksdysplasie und -luxation";
    code: CMRCompositionU3ScreeningHueftgelenksdysplasieCode;
    text: Narrative;
    id?: string;
    entry?: CMRCompositionU3ScreeningHueftgelenksdysplasieEntry[];
    emptyReason?: CMRCompositionU3ScreeningHueftgelenksdysplasieEmptyReason;
}

export const CMRCompositionU3ScreeningHueftgelenksdysplasie: t.Type<CMRCompositionU3ScreeningHueftgelenksdysplasie> =
    t.recursion("CMRCompositionU3ScreeningHueftgelenksdysplasie", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Screening auf Hüftgelenksdysplasie und -luxation"),
                    code: CMRCompositionU3ScreeningHueftgelenksdysplasieCode,
                    text: Narrative
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(CMRCompositionU3ScreeningHueftgelenksdysplasieEntry),
                    emptyReason: CMRCompositionU3ScreeningHueftgelenksdysplasieEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU3Perzentilkurven {
    title: "Perzentilkurven";
    code: CMRCompositionU3PerzentilkurvenCode;
    text: CMRCompositionU3PerzentilkurvenText;
    id?: string;
    entry?: Array<CMRCompositionU3PerzentilkurvenEntry>;
    emptyReason?: CMRCompositionU3PerzentilkurvenEmptyReason;
}

export const CMRCompositionU3Perzentilkurven: t.Type<CMRCompositionU3Perzentilkurven> =
    t.recursion("CMRCompositionU3Perzentilkurven", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Perzentilkurven"),
                    code: CMRCompositionU3PerzentilkurvenCode,
                    text: CMRCompositionU3PerzentilkurvenText
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(1, CMRCompositionU3PerzentilkurvenEntry),
                    emptyReason: CMRCompositionU3PerzentilkurvenEmptyReason
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRCompositionU3Meta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U3|1.0.1">;
    id?: string;
}

export const CMRCompositionU3Meta: t.Type<CMRCompositionU3Meta> = t.recursion(
    "CMRCompositionU3Meta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U3|1.0.1"
                        )
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Specifies the particular kind of composition (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the composition.
 */
export interface CMRCompositionU3Type {
    coding: Array<CMRCompositionU3TypeCoding>;
    id?: string;
}

export const CMRCompositionU3Type: t.Type<CMRCompositionU3Type> = t.recursion(
    "CMRCompositionU3Type",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU3TypeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * A categorization for the type of the composition - helps for indexing and searching. This may be implied by or derived from the code specified in the Composition Type.
 */
export interface CMRCompositionU3Category {
    coding: Array<CMRCompositionU3CategoryCoding>;
    id?: string;
}

export const CMRCompositionU3Category: t.Type<CMRCompositionU3Category> = t.recursion(
    "CMRCompositionU3Category",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU3CategoryCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Who or what the composition is about. The composition can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure).
 */
export interface CMRCompositionU3Subject {
    reference: string;
    id?: string;
}

export const CMRCompositionU3Subject: t.Type<CMRCompositionU3Subject> = t.recursion(
    "CMRCompositionU3Subject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Describes the clinical encounter or type of care this documentation is associated with.
 */
export interface CMRCompositionU3Encounter {
    reference: string;
    id?: string;
}

export const CMRCompositionU3Encounter: t.Type<CMRCompositionU3Encounter> = t.recursion(
    "CMRCompositionU3Encounter",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Encounter|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Identifies who is responsible for the information in the composition, not necessarily who typed it in.
 */
export interface CMRCompositionU3Author {
    reference: string;
    id?: string;
}

export const CMRCompositionU3Author: t.Type<CMRCompositionU3Author> = t.recursion(
    "CMRCompositionU3Author",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Organization|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface CMRCompositionU3 {
    resourceType: "Composition";
    meta: CMRCompositionU3Meta;
    status: "final";
    type: CMRCompositionU3Type;
    category: Array<CMRCompositionU3Category>;
    subject: CMRCompositionU3Subject;
    encounter: CMRCompositionU3Encounter;
    date: string;
    author: Array<CMRCompositionU3Author>;
    title: "U3";
    id?: string;
    text?: Narrative;
    extension?: (Extension | CMRCompositionU3U3Einleitung)[];
    section?: (
        | CMRCompositionU3Schwangerschaftsanamnese
        | CMRCompositionU3Geburtsanamnese
        | CMRCompositionU3AktuelleAnamneseDesKindes
        | CMRCompositionU3Familienanamnese
        | CMRCompositionU3Sozialanamnese
        | CMRCompositionU3Untersuchung
        | CMRCompositionU3Beratung
        | CMRCompositionU3Ergebnisse
        | CMRCompositionU3Hoerscreening
        | CMRCompositionU3ErweitertesNeugeborenenscreening
        | CMRCompositionU3MukoviszidoseScreening
        | CMRCompositionU3OrientierendeBeurteilungDerEntwicklung
        | CMRCompositionU3ScreeningHueftgelenksdysplasie
        | CMRCompositionU3Perzentilkurven
    )[];
}

const CMRCompositionU3: t.Type<CMRCompositionU3> = t.recursion("CMRCompositionU3", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Composition"),
                meta: CMRCompositionU3Meta,
                status: Literal("final"),
                type: CMRCompositionU3Type,
                category: MinMaxArray(1, 1, CMRCompositionU3Category),
                subject: CMRCompositionU3Subject,
                encounter: CMRCompositionU3Encounter,
                date: SCALARDateTime,
                author: MinMaxArray(1, 2, CMRCompositionU3Author),
                title: Literal("U3")
            }),
            t.partial({
                id: SCALARString,
                text: Narrative,
                extension: ReqArray<
                    t.UnionC<[t.Type<Extension>, t.Type<CMRCompositionU3U3Einleitung>]>,
                    t.Any
                >(
                    t.union([Extension, CMRCompositionU3U3Einleitung]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRCompositionU3U3Einleitung,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                section: ReqArray<
                    t.UnionC<
                        [
                            t.Type<CMRCompositionU3Schwangerschaftsanamnese>,
                            t.Type<CMRCompositionU3Geburtsanamnese>,
                            t.Type<CMRCompositionU3AktuelleAnamneseDesKindes>,
                            t.Type<CMRCompositionU3Familienanamnese>,
                            t.Type<CMRCompositionU3Sozialanamnese>,
                            t.Type<CMRCompositionU3Untersuchung>,
                            t.Type<CMRCompositionU3Beratung>,
                            t.Type<CMRCompositionU3Ergebnisse>,
                            t.Type<CMRCompositionU3Hoerscreening>,
                            t.Type<CMRCompositionU3ErweitertesNeugeborenenscreening>,
                            t.Type<CMRCompositionU3MukoviszidoseScreening>,
                            t.Type<CMRCompositionU3OrientierendeBeurteilungDerEntwicklung>,
                            t.Type<CMRCompositionU3ScreeningHueftgelenksdysplasie>,
                            t.Type<CMRCompositionU3Perzentilkurven>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        CMRCompositionU3Schwangerschaftsanamnese,
                        CMRCompositionU3Geburtsanamnese,
                        CMRCompositionU3AktuelleAnamneseDesKindes,
                        CMRCompositionU3Familienanamnese,
                        CMRCompositionU3Sozialanamnese,
                        CMRCompositionU3Untersuchung,
                        CMRCompositionU3Beratung,
                        CMRCompositionU3Ergebnisse,
                        CMRCompositionU3Hoerscreening,
                        CMRCompositionU3ErweitertesNeugeborenenscreening,
                        CMRCompositionU3MukoviszidoseScreening,
                        CMRCompositionU3OrientierendeBeurteilungDerEntwicklung,
                        CMRCompositionU3ScreeningHueftgelenksdysplasie,
                        CMRCompositionU3Perzentilkurven
                    ]),
                    [
                        {
                            codec: CMRCompositionU3Schwangerschaftsanamnese,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "title", value: "Schwangerschaftsanamnese" }
                        },
                        {
                            codec: CMRCompositionU3Geburtsanamnese,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "title", value: "Geburtsanamnese" }
                        },
                        {
                            codec: CMRCompositionU3AktuelleAnamneseDesKindes,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Aktuelle Anamnese des Kindes"
                            }
                        },
                        {
                            codec: CMRCompositionU3Familienanamnese,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Familienanamnese" }
                        },
                        {
                            codec: CMRCompositionU3Sozialanamnese,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Sozialanamnese" }
                        },
                        {
                            codec: CMRCompositionU3Untersuchung,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Körperliche Untersuchung" }
                        },
                        {
                            codec: CMRCompositionU3Beratung,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Beratung" }
                        },
                        {
                            codec: CMRCompositionU3Ergebnisse,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Ergebnisse" }
                        },
                        {
                            codec: CMRCompositionU3Hoerscreening,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "title", value: "Neugeborenen-Hörscreening" }
                        },
                        {
                            codec: CMRCompositionU3ErweitertesNeugeborenenscreening,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Erweitertes Neugeborenen-Screening"
                            }
                        },
                        {
                            codec: CMRCompositionU3MukoviszidoseScreening,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Screening auf Mukoviszidose"
                            }
                        },
                        {
                            codec: CMRCompositionU3OrientierendeBeurteilungDerEntwicklung,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Orientierende Beurteilung der Entwicklung"
                            }
                        },
                        {
                            codec: CMRCompositionU3ScreeningHueftgelenksdysplasie,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Screening auf Hüftgelenksdysplasie und -luxation"
                            }
                        },
                        {
                            codec: CMRCompositionU3Perzentilkurven,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "title", value: "Perzentilkurven" }
                        }
                    ],
                    ["0", "*"]
                )
            })
        ])
    )
);

export default CMRCompositionU3;
