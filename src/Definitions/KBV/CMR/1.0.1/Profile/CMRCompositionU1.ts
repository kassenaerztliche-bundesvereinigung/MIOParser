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
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import SCALARXhtml from "../../../../../Definitions/FHIR/4.0.1/Scalar/Xhtml";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U1"

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "313199003";
    display: "Antenatal screening finding (observable entity)";
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeSnomed: t.Type<CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeSnomed> =
    t.recursion(
        "CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeSnomed",
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
export interface CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "57078-8";
    display: "Antenatal testing and surveillance Narrative";
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeLoinc: t.Type<CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeLoinc> =
    t.recursion(
        "CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeLoinc",
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
export interface CMRCompositionU1GeburtsanamneseBaseExcessCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "363787002:370134009=123029007,704319004=12499000,118598001=118556004,370132008=30766002,704327008=703430008,246093002=68615006,246501002=723208001";
    display: "Observable entity (observable entity) : Time aspect (attribute) = Single point in time (qualifier value) , Inheres in (attribute) = Cord blood (substance) , Property (attribute) = Substance concentration (property) (qualifier value) , Scale type (attribute) = Quantitative (qualifier value) , Direct site (attribute) = Arterial cord blood specimen (specimen) , Component (attribute) = Bicarbonate (substance) , Technique (attribute) = Base excess calculation technique (qualifier value)";
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseBaseExcessCodeCodeSnomed: t.Type<CMRCompositionU1GeburtsanamneseBaseExcessCodeCodeSnomed> =
    t.recursion("CMRCompositionU1GeburtsanamneseBaseExcessCodeCodeSnomed", () =>
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
                    display: Literal(
                        "Observable entity (observable entity) : Time aspect (attribute) = Single point in time (qualifier value) , Inheres in (attribute) = Cord blood (substance) , Property (attribute) = Substance concentration (property) (qualifier value) , Scale type (attribute) = Quantitative (qualifier value) , Direct site (attribute) = Arterial cord blood specimen (specimen) , Component (attribute) = Bicarbonate (substance) , Technique (attribute) = Base excess calculation technique (qualifier value)"
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
export interface CMRCompositionU1GeburtsanamneseBaseExcessCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "28638-5";
    display: "Base excess in Arterial cord blood by calculation";
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseBaseExcessCodeCodeLoinc: t.Type<CMRCompositionU1GeburtsanamneseBaseExcessCodeCodeLoinc> =
    t.recursion("CMRCompositionU1GeburtsanamneseBaseExcessCodeCodeLoinc", () =>
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
export interface CMRCompositionU1GeburtsanamnesePhWertCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "363787002:370134009=123029007,704319004=12499000,246093002=89177007,704318007=702700007,370132008=30766002,704327008=703430008";
    display: "Observable entity (observable entity) : Time aspect (attribute) = Single point in time (qualifier value) , Inheres in (attribute) = Cord blood (substance) , Component (attribute) = Proton (substance) , Property type (attribute) = Logarithmic substance concentration (property) (qualifier value) , Scale type (attribute) = Quantitative (qualifier value) , Direct site (attribute) = Arterial cord blood specimen (specimen)";
    id?: string;
}

export const CMRCompositionU1GeburtsanamnesePhWertCodeCodeSnomed: t.Type<CMRCompositionU1GeburtsanamnesePhWertCodeCodeSnomed> =
    t.recursion("CMRCompositionU1GeburtsanamnesePhWertCodeCodeSnomed", () =>
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
export interface CMRCompositionU1GeburtsanamnesePhWertCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "28646-8";
    display: "pH of Arterial cord blood";
    id?: string;
}

export const CMRCompositionU1GeburtsanamnesePhWertCodeCodeLoinc: t.Type<CMRCompositionU1GeburtsanamnesePhWertCodeCodeLoinc> =
    t.recursion("CMRCompositionU1GeburtsanamnesePhWertCodeCodeLoinc", () =>
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
export interface CMRCompositionU1GeburtsanamneseGeschlechtCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "263495000";
    display: "Gender (observable entity)";
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseGeschlechtCodeCoding: t.Type<CMRCompositionU1GeburtsanamneseGeschlechtCodeCoding> =
    t.recursion("CMRCompositionU1GeburtsanamneseGeschlechtCodeCoding", () =>
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
export interface CMRCompositionU1GeburtsanamneseKindslageCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364607000";
    display: "Position of fetus (observable entity)";
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseKindslageCodeCoding: t.Type<CMRCompositionU1GeburtsanamneseKindslageCodeCoding> =
    t.recursion("CMRCompositionU1GeburtsanamneseKindslageCodeCoding", () =>
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
export interface CMRCompositionU1GeburtsanamneseGeburtsmodusCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "394698008";
    display: "Birth history (situation)";
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseGeburtsmodusCodeCoding: t.Type<CMRCompositionU1GeburtsanamneseGeburtsmodusCodeCoding> =
    t.recursion("CMRCompositionU1GeburtsanamneseGeburtsmodusCodeCoding", () =>
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
export interface CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeitCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "184099003+397836004";
    display: "Date of birth (observable entity) + Time of delivery (observable entity)";
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeitCodeCoding: t.Type<CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeitCodeCoding> =
    t.recursion("CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeitCodeCoding", () =>
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
export interface CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTageCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "412726003";
    display: "Length of gestation at birth (observable entity)";
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTageCodeCoding: t.Type<CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTageCodeCoding> =
    t.recursion(
        "CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTageCodeCoding",
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
export interface CMRCompositionU1GeburtsanamneseGeschlechtCode {
    coding: Array<CMRCompositionU1GeburtsanamneseGeschlechtCodeCoding>;
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseGeschlechtCode: t.Type<CMRCompositionU1GeburtsanamneseGeschlechtCode> =
    t.recursion("CMRCompositionU1GeburtsanamneseGeschlechtCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1GeburtsanamneseGeschlechtCodeCoding
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
export interface CMRCompositionU1GeburtsanamneseGeschlechtEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseGeschlechtEntryReference: t.Type<CMRCompositionU1GeburtsanamneseGeschlechtEntryReference> =
    t.recursion("CMRCompositionU1GeburtsanamneseGeschlechtEntryReference", () =>
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
export interface CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikCode {
    coding: Array<
        | CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeSnomed
        | CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeLoinc
    >;
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikCode: t.Type<CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikCode> =
    t.recursion("CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeSnomed>,
                                t.Type<CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeSnomed,
                            CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeLoinc,
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
export interface CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikEntryReference: t.Type<CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikEntryReference> =
    t.recursion(
        "CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikEntryReference",
        () =>
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
export interface CMRCompositionU1GeburtsanamneseBaseExcessCode {
    coding: Array<
        | CMRCompositionU1GeburtsanamneseBaseExcessCodeCodeSnomed
        | CMRCompositionU1GeburtsanamneseBaseExcessCodeCodeLoinc
    >;
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseBaseExcessCode: t.Type<CMRCompositionU1GeburtsanamneseBaseExcessCode> =
    t.recursion("CMRCompositionU1GeburtsanamneseBaseExcessCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRCompositionU1GeburtsanamneseBaseExcessCodeCodeSnomed>,
                                t.Type<CMRCompositionU1GeburtsanamneseBaseExcessCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRCompositionU1GeburtsanamneseBaseExcessCodeCodeSnomed,
                            CMRCompositionU1GeburtsanamneseBaseExcessCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRCompositionU1GeburtsanamneseBaseExcessCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRCompositionU1GeburtsanamneseBaseExcessCodeCodeLoinc,
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
export interface CMRCompositionU1GeburtsanamneseBaseExcessEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseBaseExcessEntryReference: t.Type<CMRCompositionU1GeburtsanamneseBaseExcessEntryReference> =
    t.recursion("CMRCompositionU1GeburtsanamneseBaseExcessEntryReference", () =>
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
export interface CMRCompositionU1GeburtsanamnesePhWertCode {
    coding: Array<
        | CMRCompositionU1GeburtsanamnesePhWertCodeCodeSnomed
        | CMRCompositionU1GeburtsanamnesePhWertCodeCodeLoinc
    >;
    id?: string;
}

export const CMRCompositionU1GeburtsanamnesePhWertCode: t.Type<CMRCompositionU1GeburtsanamnesePhWertCode> =
    t.recursion("CMRCompositionU1GeburtsanamnesePhWertCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRCompositionU1GeburtsanamnesePhWertCodeCodeSnomed>,
                                t.Type<CMRCompositionU1GeburtsanamnesePhWertCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRCompositionU1GeburtsanamnesePhWertCodeCodeSnomed,
                            CMRCompositionU1GeburtsanamnesePhWertCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRCompositionU1GeburtsanamnesePhWertCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRCompositionU1GeburtsanamnesePhWertCodeCodeLoinc,
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
export interface CMRCompositionU1GeburtsanamnesePhWertEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU1GeburtsanamnesePhWertEntryReference: t.Type<CMRCompositionU1GeburtsanamnesePhWertEntryReference> =
    t.recursion("CMRCompositionU1GeburtsanamnesePhWertEntryReference", () =>
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
export interface CMRCompositionU1GeburtsanamneseKindslageCode {
    coding: Array<CMRCompositionU1GeburtsanamneseKindslageCodeCoding>;
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseKindslageCode: t.Type<CMRCompositionU1GeburtsanamneseKindslageCode> =
    t.recursion("CMRCompositionU1GeburtsanamneseKindslageCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1GeburtsanamneseKindslageCodeCoding
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
export interface CMRCompositionU1GeburtsanamneseKindslageEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseKindslageEntryReference: t.Type<CMRCompositionU1GeburtsanamneseKindslageEntryReference> =
    t.recursion("CMRCompositionU1GeburtsanamneseKindslageEntryReference", () =>
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
export interface CMRCompositionU1GeburtsanamneseGeburtsmodusCode {
    coding: Array<CMRCompositionU1GeburtsanamneseGeburtsmodusCodeCoding>;
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseGeburtsmodusCode: t.Type<CMRCompositionU1GeburtsanamneseGeburtsmodusCode> =
    t.recursion("CMRCompositionU1GeburtsanamneseGeburtsmodusCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1GeburtsanamneseGeburtsmodusCodeCoding
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
export interface CMRCompositionU1GeburtsanamneseGeburtsmodusEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseGeburtsmodusEntryReference: t.Type<CMRCompositionU1GeburtsanamneseGeburtsmodusEntryReference> =
    t.recursion("CMRCompositionU1GeburtsanamneseGeburtsmodusEntryReference", () =>
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
export interface CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeitCode {
    coding: Array<CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeitCodeCoding>;
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeitCode: t.Type<CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeitCode> =
    t.recursion("CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeitCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeitCodeCoding
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
export interface CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeitEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeitEntryReference: t.Type<CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeitEntryReference> =
    t.recursion("CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeitEntryReference", () =>
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
export interface CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTageCode {
    coding: Array<CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTageCodeCoding>;
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTageCode: t.Type<CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTageCode> =
    t.recursion("CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTageCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTageCodeCoding
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
export interface CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTageEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTageEntryReference: t.Type<CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTageEntryReference> =
    t.recursion(
        "CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTageEntryReference",
        () =>
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
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU1HoerscreeningCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "252957005";
    display: "Children's hearing test (procedure)";
    id?: string;
}

export const CMRCompositionU1HoerscreeningCodeCodeSnomed: t.Type<CMRCompositionU1HoerscreeningCodeCodeSnomed> =
    t.recursion("CMRCompositionU1HoerscreeningCodeCodeSnomed", () =>
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
export interface CMRCompositionU1HoerscreeningCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "54111-0";
    display: "Newborn hearing screening panel";
    id?: string;
}

export const CMRCompositionU1HoerscreeningCodeCodeLoinc: t.Type<CMRCompositionU1HoerscreeningCodeCodeLoinc> =
    t.recursion("CMRCompositionU1HoerscreeningCodeCodeLoinc", () =>
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
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU1SchwangerschaftsanamneseAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU1SchwangerschaftsanamneseAnamneseAnweisung: t.Type<CMRCompositionU1SchwangerschaftsanamneseAnamneseAnweisung> =
    t.recursion("CMRCompositionU1SchwangerschaftsanamneseAnamneseAnweisung", () =>
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
export interface CMRCompositionU1SchwangerschaftsanamneseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "160427003";
    display: "Family history with explicit context pertaining to mother (situation)";
    id?: string;
}

export const CMRCompositionU1SchwangerschaftsanamneseCodeCoding: t.Type<CMRCompositionU1SchwangerschaftsanamneseCodeCoding> =
    t.recursion("CMRCompositionU1SchwangerschaftsanamneseCodeCoding", () =>
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
export interface CMRCompositionU1SchwangerschaftsanamneseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU1SchwangerschaftsanamneseEmptyReasonCoding: t.Type<CMRCompositionU1SchwangerschaftsanamneseEmptyReasonCoding> =
    t.recursion("CMRCompositionU1SchwangerschaftsanamneseEmptyReasonCoding", () =>
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
export interface CMRCompositionU1GeburtsanamneseAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseAnamneseAnweisung: t.Type<CMRCompositionU1GeburtsanamneseAnamneseAnweisung> =
    t.recursion("CMRCompositionU1GeburtsanamneseAnamneseAnweisung", () =>
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
export interface CMRCompositionU1GeburtsanamneseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364319003";
    display: "Pregnancy, childbirth / puerperium observable (observable entity)";
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseCodeCoding: t.Type<CMRCompositionU1GeburtsanamneseCodeCoding> =
    t.recursion("CMRCompositionU1GeburtsanamneseCodeCoding", () =>
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
export interface CMRCompositionU1GeburtsanamneseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseEmptyReasonCoding: t.Type<CMRCompositionU1GeburtsanamneseEmptyReasonCoding> =
    t.recursion("CMRCompositionU1GeburtsanamneseEmptyReasonCoding", () =>
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
export interface CMRCompositionU1GeburtsanamneseGeschlecht {
    title: "Geschlecht";
    code: CMRCompositionU1GeburtsanamneseGeschlechtCode;
    entry: Array<CMRCompositionU1GeburtsanamneseGeschlechtEntryReference>;
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseGeschlecht: t.Type<CMRCompositionU1GeburtsanamneseGeschlecht> =
    t.recursion("CMRCompositionU1GeburtsanamneseGeschlecht", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Geschlecht"),
                    code: CMRCompositionU1GeburtsanamneseGeschlechtCode,
                    entry: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1GeburtsanamneseGeschlechtEntryReference
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
export interface CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostik {
    title: "Soweit vorhanden, Befunde einer pränatalen Diagnostik:";
    code: CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikCode;
    entry: Array<CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikEntryReference>;
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostik: t.Type<CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostik> =
    t.recursion("CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostik", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal(
                        "Soweit vorhanden, Befunde einer pränatalen Diagnostik:"
                    ),
                    code: CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikCode,
                    entry: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostikEntryReference
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
export interface CMRCompositionU1GeburtsanamneseBaseExcess {
    title: "Base excess";
    code: CMRCompositionU1GeburtsanamneseBaseExcessCode;
    entry: Array<CMRCompositionU1GeburtsanamneseBaseExcessEntryReference>;
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseBaseExcess: t.Type<CMRCompositionU1GeburtsanamneseBaseExcess> =
    t.recursion("CMRCompositionU1GeburtsanamneseBaseExcess", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Base excess"),
                    code: CMRCompositionU1GeburtsanamneseBaseExcessCode,
                    entry: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1GeburtsanamneseBaseExcessEntryReference
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
export interface CMRCompositionU1GeburtsanamnesePhWert {
    title: "pH-Wert (Nabelarterie)";
    code: CMRCompositionU1GeburtsanamnesePhWertCode;
    entry: Array<CMRCompositionU1GeburtsanamnesePhWertEntryReference>;
    id?: string;
}

export const CMRCompositionU1GeburtsanamnesePhWert: t.Type<CMRCompositionU1GeburtsanamnesePhWert> =
    t.recursion("CMRCompositionU1GeburtsanamnesePhWert", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("pH-Wert (Nabelarterie)"),
                    code: CMRCompositionU1GeburtsanamnesePhWertCode,
                    entry: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1GeburtsanamnesePhWertEntryReference
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
export interface CMRCompositionU1GeburtsanamneseKindslage {
    title: "Kindslage";
    code: CMRCompositionU1GeburtsanamneseKindslageCode;
    entry: Array<CMRCompositionU1GeburtsanamneseKindslageEntryReference>;
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseKindslage: t.Type<CMRCompositionU1GeburtsanamneseKindslage> =
    t.recursion("CMRCompositionU1GeburtsanamneseKindslage", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Kindslage"),
                    code: CMRCompositionU1GeburtsanamneseKindslageCode,
                    entry: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1GeburtsanamneseKindslageEntryReference
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
export interface CMRCompositionU1GeburtsanamneseGeburtsmodus {
    title: "Geburtsmodus";
    code: CMRCompositionU1GeburtsanamneseGeburtsmodusCode;
    entry: Array<CMRCompositionU1GeburtsanamneseGeburtsmodusEntryReference>;
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseGeburtsmodus: t.Type<CMRCompositionU1GeburtsanamneseGeburtsmodus> =
    t.recursion("CMRCompositionU1GeburtsanamneseGeburtsmodus", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Geburtsmodus"),
                    code: CMRCompositionU1GeburtsanamneseGeburtsmodusCode,
                    entry: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1GeburtsanamneseGeburtsmodusEntryReference
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
export interface CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeit {
    title: "Geburtsdatum";
    code: CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeitCode;
    entry: Array<CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeitEntryReference>;
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeit: t.Type<CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeit> =
    t.recursion("CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeit", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Geburtsdatum"),
                    code: CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeitCode,
                    entry: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeitEntryReference
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
export interface CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTage {
    title: "SSW (Wochen+Tage)";
    code: CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTageCode;
    entry: Array<CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTageEntryReference>;
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTage: t.Type<CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTage> =
    t.recursion("CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTage", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("SSW (Wochen+Tage)"),
                    code: CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTageCode,
                    entry: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTageEntryReference
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
export interface CMRCompositionU1FamilienanamneseAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU1FamilienanamneseAnamneseAnweisung: t.Type<CMRCompositionU1FamilienanamneseAnamneseAnweisung> =
    t.recursion("CMRCompositionU1FamilienanamneseAnamneseAnweisung", () =>
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
export interface CMRCompositionU1FamilienanamneseFamilienanamneseHinweis {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "(u.a. behandlungsbedürftige Hyperbilirubinämie bei einem vorausgegangenen Kind)";
    id?: string;
}

export const CMRCompositionU1FamilienanamneseFamilienanamneseHinweis: t.Type<CMRCompositionU1FamilienanamneseFamilienanamneseHinweis> =
    t.recursion("CMRCompositionU1FamilienanamneseFamilienanamneseHinweis", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                    ),
                    valueString: Literal(
                        "(u.a. behandlungsbedürftige Hyperbilirubinämie bei einem vorausgegangenen Kind)"
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
export interface CMRCompositionU1FamilienanamneseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "422432008";
    display: "Family history section (record artifact)";
    id?: string;
}

export const CMRCompositionU1FamilienanamneseCodeCoding: t.Type<CMRCompositionU1FamilienanamneseCodeCoding> =
    t.recursion("CMRCompositionU1FamilienanamneseCodeCoding", () =>
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
export interface CMRCompositionU1FamilienanamneseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU1FamilienanamneseEmptyReasonCoding: t.Type<CMRCompositionU1FamilienanamneseEmptyReasonCoding> =
    t.recursion("CMRCompositionU1FamilienanamneseEmptyReasonCoding", () =>
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
export interface CMRCompositionU1UntersuchungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "425044008";
    display: "Physical exam section (record artifact)";
    id?: string;
}

export const CMRCompositionU1UntersuchungCodeCoding: t.Type<CMRCompositionU1UntersuchungCodeCoding> =
    t.recursion("CMRCompositionU1UntersuchungCodeCoding", () =>
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
export interface CMRCompositionU1UntersuchungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU1UntersuchungEmptyReasonCoding: t.Type<CMRCompositionU1UntersuchungEmptyReasonCoding> =
    t.recursion("CMRCompositionU1UntersuchungEmptyReasonCoding", () =>
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
export interface CMRCompositionU1SonstigesCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "129125009:363589002=386359008";
    display: "Procedure with explicit context (situation) : Associated procedure (attribute) =  Administration of drug or medicament via oral route (procedure)";
    id?: string;
}

export const CMRCompositionU1SonstigesCodeCoding: t.Type<CMRCompositionU1SonstigesCodeCoding> =
    t.recursion("CMRCompositionU1SonstigesCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("129125009:363589002=386359008"),
                    display: Literal(
                        "Procedure with explicit context (situation) : Associated procedure (attribute) =  Administration of drug or medicament via oral route (procedure)"
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
export interface CMRCompositionU1SonstigesEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU1SonstigesEmptyReasonCoding: t.Type<CMRCompositionU1SonstigesEmptyReasonCoding> =
    t.recursion("CMRCompositionU1SonstigesEmptyReasonCoding", () =>
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
export interface CMRCompositionU1PulsoxymetrieScreeningCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "252465000:405813007=56459004";
    display: "Pulse oximetry (procedure) : Procedure site - Direct (attribute) = Foot structure (body structure)";
    id?: string;
}

export const CMRCompositionU1PulsoxymetrieScreeningCodeCoding: t.Type<CMRCompositionU1PulsoxymetrieScreeningCodeCoding> =
    t.recursion("CMRCompositionU1PulsoxymetrieScreeningCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("252465000:405813007=56459004"),
                    display: Literal(
                        "Pulse oximetry (procedure) : Procedure site - Direct (attribute) = Foot structure (body structure)"
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
export interface CMRCompositionU1PulsoxymetrieScreeningEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU1PulsoxymetrieScreeningEmptyReasonCoding: t.Type<CMRCompositionU1PulsoxymetrieScreeningEmptyReasonCoding> =
    t.recursion("CMRCompositionU1PulsoxymetrieScreeningEmptyReasonCoding", () =>
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
export interface CMRCompositionU1HoerscreeningEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU1HoerscreeningEmptyReasonCoding: t.Type<CMRCompositionU1HoerscreeningEmptyReasonCoding> =
    t.recursion("CMRCompositionU1HoerscreeningEmptyReasonCoding", () =>
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
export interface CMRCompositionU1ErweitertesNeugeborenenscreeningCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "738796001:363702006=428447008";
    display: "Collection of dried blood spot specimen (procedure) : Has focus (attribute) = Newborn blood spot screening (procedure)";
    id?: string;
}

export const CMRCompositionU1ErweitertesNeugeborenenscreeningCodeCoding: t.Type<CMRCompositionU1ErweitertesNeugeborenenscreeningCodeCoding> =
    t.recursion("CMRCompositionU1ErweitertesNeugeborenenscreeningCodeCoding", () =>
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
export interface CMRCompositionU1ErweitertesNeugeborenenscreeningEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU1ErweitertesNeugeborenenscreeningEmptyReasonCoding: t.Type<CMRCompositionU1ErweitertesNeugeborenenscreeningEmptyReasonCoding> =
    t.recursion("CMRCompositionU1ErweitertesNeugeborenenscreeningEmptyReasonCoding", () =>
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
export interface CMRCompositionU1MukoviszidoseScreeningCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "738796001:363702006=171191008";
    display: "Collection of dried blood spot specimen (procedure) : Has focus (attribute) = Cystic fibrosis screening (procedure)";
    id?: string;
}

export const CMRCompositionU1MukoviszidoseScreeningCodeCoding: t.Type<CMRCompositionU1MukoviszidoseScreeningCodeCoding> =
    t.recursion("CMRCompositionU1MukoviszidoseScreeningCodeCoding", () =>
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
export interface CMRCompositionU1MukoviszidoseScreeningEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU1MukoviszidoseScreeningEmptyReasonCoding: t.Type<CMRCompositionU1MukoviszidoseScreeningEmptyReasonCoding> =
    t.recursion("CMRCompositionU1MukoviszidoseScreeningEmptyReasonCoding", () =>
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
export interface CMRCompositionU1UntersuchungsGrenzenCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "185353001";
    display: "Appointment date (finding)";
    id?: string;
}

export const CMRCompositionU1UntersuchungsGrenzenCodeCoding: t.Type<CMRCompositionU1UntersuchungsGrenzenCodeCoding> =
    t.recursion("CMRCompositionU1UntersuchungsGrenzenCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("185353001"),
                    display: Literal("Appointment date (finding)")
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
export interface CMRCompositionU1UntersuchungsGrenzenEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU1UntersuchungsGrenzenEmptyReasonCoding: t.Type<CMRCompositionU1UntersuchungsGrenzenEmptyReasonCoding> =
    t.recursion("CMRCompositionU1UntersuchungsGrenzenEmptyReasonCoding", () =>
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
export interface CMRCompositionU1PerzentilkurvenCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "129822005";
    display: "Childhood growth AND/OR development finding (finding)";
    id?: string;
}

export const CMRCompositionU1PerzentilkurvenCodeCoding: t.Type<CMRCompositionU1PerzentilkurvenCodeCoding> =
    t.recursion("CMRCompositionU1PerzentilkurvenCodeCoding", () =>
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
export interface CMRCompositionU1PerzentilkurvenEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU1PerzentilkurvenEmptyReasonCoding: t.Type<CMRCompositionU1PerzentilkurvenEmptyReasonCoding> =
    t.recursion("CMRCompositionU1PerzentilkurvenEmptyReasonCoding", () =>
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
export interface CMRCompositionU1SchwangerschaftsanamneseCode {
    coding: Array<CMRCompositionU1SchwangerschaftsanamneseCodeCoding>;
    id?: string;
}

export const CMRCompositionU1SchwangerschaftsanamneseCode: t.Type<CMRCompositionU1SchwangerschaftsanamneseCode> =
    t.recursion("CMRCompositionU1SchwangerschaftsanamneseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1SchwangerschaftsanamneseCodeCoding
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
export interface CMRCompositionU1SchwangerschaftsanamneseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU1SchwangerschaftsanamneseText: t.Type<CMRCompositionU1SchwangerschaftsanamneseText> =
    t.recursion("CMRCompositionU1SchwangerschaftsanamneseText", () =>
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
export interface CMRCompositionU1SchwangerschaftsanamneseEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU1SchwangerschaftsanamneseEntryReference: t.Type<CMRCompositionU1SchwangerschaftsanamneseEntryReference> =
    t.recursion("CMRCompositionU1SchwangerschaftsanamneseEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Pregnancy_History|1.0.1"
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
export interface CMRCompositionU1SchwangerschaftsanamneseEmptyReason {
    coding: Array<CMRCompositionU1SchwangerschaftsanamneseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU1SchwangerschaftsanamneseEmptyReason: t.Type<CMRCompositionU1SchwangerschaftsanamneseEmptyReason> =
    t.recursion("CMRCompositionU1SchwangerschaftsanamneseEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1SchwangerschaftsanamneseEmptyReasonCoding
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
export interface CMRCompositionU1GeburtsanamneseCode {
    coding: Array<CMRCompositionU1GeburtsanamneseCodeCoding>;
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseCode: t.Type<CMRCompositionU1GeburtsanamneseCode> =
    t.recursion("CMRCompositionU1GeburtsanamneseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU1GeburtsanamneseCodeCoding)
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
export interface CMRCompositionU1GeburtsanamneseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseText: t.Type<CMRCompositionU1GeburtsanamneseText> =
    t.recursion("CMRCompositionU1GeburtsanamneseText", () =>
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
export interface CMRCompositionU1GeburtsanamneseEmptyReason {
    coding: Array<CMRCompositionU1GeburtsanamneseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU1GeburtsanamneseEmptyReason: t.Type<CMRCompositionU1GeburtsanamneseEmptyReason> =
    t.recursion("CMRCompositionU1GeburtsanamneseEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1GeburtsanamneseEmptyReasonCoding
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
export interface CMRCompositionU1FamilienanamneseCode {
    coding: Array<CMRCompositionU1FamilienanamneseCodeCoding>;
    id?: string;
}

export const CMRCompositionU1FamilienanamneseCode: t.Type<CMRCompositionU1FamilienanamneseCode> =
    t.recursion("CMRCompositionU1FamilienanamneseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU1FamilienanamneseCodeCoding)
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
export interface CMRCompositionU1FamilienanamneseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU1FamilienanamneseText: t.Type<CMRCompositionU1FamilienanamneseText> =
    t.recursion("CMRCompositionU1FamilienanamneseText", () =>
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
export interface CMRCompositionU1FamilienanamneseEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU1FamilienanamneseEntryReference: t.Type<CMRCompositionU1FamilienanamneseEntryReference> =
    t.recursion("CMRCompositionU1FamilienanamneseEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Family_History|1.0.1"
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
export interface CMRCompositionU1FamilienanamneseEmptyReason {
    coding: Array<CMRCompositionU1FamilienanamneseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU1FamilienanamneseEmptyReason: t.Type<CMRCompositionU1FamilienanamneseEmptyReason> =
    t.recursion("CMRCompositionU1FamilienanamneseEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1FamilienanamneseEmptyReasonCoding
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
export interface CMRCompositionU1UntersuchungCode {
    coding: Array<CMRCompositionU1UntersuchungCodeCoding>;
    id?: string;
}

export const CMRCompositionU1UntersuchungCode: t.Type<CMRCompositionU1UntersuchungCode> =
    t.recursion("CMRCompositionU1UntersuchungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU1UntersuchungCodeCoding)
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
export interface CMRCompositionU1UntersuchungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU1UntersuchungText: t.Type<CMRCompositionU1UntersuchungText> =
    t.recursion("CMRCompositionU1UntersuchungText", () =>
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
export interface CMRCompositionU1UntersuchungEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU1UntersuchungEntryReference: t.Type<CMRCompositionU1UntersuchungEntryReference> =
    t.recursion("CMRCompositionU1UntersuchungEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Edema_Of_Newborn|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Neonatal_Jaundice|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Birth_Trauma_Of_Fetus|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Congenital_Malformation|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Term_Infant|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Apgar_Score|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Birth_Length|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Birth_Weight|1.0.1"
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
export interface CMRCompositionU1UntersuchungEmptyReason {
    coding: Array<CMRCompositionU1UntersuchungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU1UntersuchungEmptyReason: t.Type<CMRCompositionU1UntersuchungEmptyReason> =
    t.recursion("CMRCompositionU1UntersuchungEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1UntersuchungEmptyReasonCoding
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
export interface CMRCompositionU1SonstigesCode {
    coding: Array<CMRCompositionU1SonstigesCodeCoding>;
    id?: string;
}

export const CMRCompositionU1SonstigesCode: t.Type<CMRCompositionU1SonstigesCode> =
    t.recursion("CMRCompositionU1SonstigesCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU1SonstigesCodeCoding)
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
export interface CMRCompositionU1SonstigesText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU1SonstigesText: t.Type<CMRCompositionU1SonstigesText> =
    t.recursion("CMRCompositionU1SonstigesText", () =>
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
export interface CMRCompositionU1SonstigesEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU1SonstigesEntryReference: t.Type<CMRCompositionU1SonstigesEntryReference> =
    t.recursion("CMRCompositionU1SonstigesEntryReference", () =>
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
 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
 */
export interface CMRCompositionU1SonstigesEmptyReason {
    coding: Array<CMRCompositionU1SonstigesEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU1SonstigesEmptyReason: t.Type<CMRCompositionU1SonstigesEmptyReason> =
    t.recursion("CMRCompositionU1SonstigesEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU1SonstigesEmptyReasonCoding)
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
export interface CMRCompositionU1PulsoxymetrieScreeningCode {
    coding: Array<CMRCompositionU1PulsoxymetrieScreeningCodeCoding>;
    id?: string;
}

export const CMRCompositionU1PulsoxymetrieScreeningCode: t.Type<CMRCompositionU1PulsoxymetrieScreeningCode> =
    t.recursion("CMRCompositionU1PulsoxymetrieScreeningCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1PulsoxymetrieScreeningCodeCoding
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
export interface CMRCompositionU1PulsoxymetrieScreeningText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU1PulsoxymetrieScreeningText: t.Type<CMRCompositionU1PulsoxymetrieScreeningText> =
    t.recursion("CMRCompositionU1PulsoxymetrieScreeningText", () =>
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
export interface CMRCompositionU1PulsoxymetrieScreeningEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU1PulsoxymetrieScreeningEntryReference: t.Type<CMRCompositionU1PulsoxymetrieScreeningEntryReference> =
    t.recursion("CMRCompositionU1PulsoxymetrieScreeningEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U3_Pulse_Oxymetry|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_U1_U3_Pulse_Oxymetry_Clarification|1.0.1"
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
export interface CMRCompositionU1PulsoxymetrieScreeningEmptyReason {
    coding: Array<CMRCompositionU1PulsoxymetrieScreeningEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU1PulsoxymetrieScreeningEmptyReason: t.Type<CMRCompositionU1PulsoxymetrieScreeningEmptyReason> =
    t.recursion("CMRCompositionU1PulsoxymetrieScreeningEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1PulsoxymetrieScreeningEmptyReasonCoding
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
export interface CMRCompositionU1HoerscreeningCode {
    coding: Array<
        | CMRCompositionU1HoerscreeningCodeCodeSnomed
        | CMRCompositionU1HoerscreeningCodeCodeLoinc
    >;
    id?: string;
}

export const CMRCompositionU1HoerscreeningCode: t.Type<CMRCompositionU1HoerscreeningCode> =
    t.recursion("CMRCompositionU1HoerscreeningCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRCompositionU1HoerscreeningCodeCodeSnomed>,
                                t.Type<CMRCompositionU1HoerscreeningCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRCompositionU1HoerscreeningCodeCodeSnomed,
                            CMRCompositionU1HoerscreeningCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRCompositionU1HoerscreeningCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRCompositionU1HoerscreeningCodeCodeLoinc,
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
export interface CMRCompositionU1HoerscreeningText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU1HoerscreeningText: t.Type<CMRCompositionU1HoerscreeningText> =
    t.recursion("CMRCompositionU1HoerscreeningText", () =>
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
export interface CMRCompositionU1HoerscreeningEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU1HoerscreeningEntryReference: t.Type<CMRCompositionU1HoerscreeningEntryReference> =
    t.recursion("CMRCompositionU1HoerscreeningEntryReference", () =>
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
export interface CMRCompositionU1HoerscreeningEmptyReason {
    coding: Array<CMRCompositionU1HoerscreeningEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU1HoerscreeningEmptyReason: t.Type<CMRCompositionU1HoerscreeningEmptyReason> =
    t.recursion("CMRCompositionU1HoerscreeningEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1HoerscreeningEmptyReasonCoding
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
export interface CMRCompositionU1ErweitertesNeugeborenenscreeningCode {
    coding: Array<CMRCompositionU1ErweitertesNeugeborenenscreeningCodeCoding>;
    id?: string;
}

export const CMRCompositionU1ErweitertesNeugeborenenscreeningCode: t.Type<CMRCompositionU1ErweitertesNeugeborenenscreeningCode> =
    t.recursion("CMRCompositionU1ErweitertesNeugeborenenscreeningCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1ErweitertesNeugeborenenscreeningCodeCoding
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
export interface CMRCompositionU1ErweitertesNeugeborenenscreeningText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU1ErweitertesNeugeborenenscreeningText: t.Type<CMRCompositionU1ErweitertesNeugeborenenscreeningText> =
    t.recursion("CMRCompositionU1ErweitertesNeugeborenenscreeningText", () =>
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
export interface CMRCompositionU1ErweitertesNeugeborenenscreeningEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU1ErweitertesNeugeborenenscreeningEntryReference: t.Type<CMRCompositionU1ErweitertesNeugeborenenscreeningEntryReference> =
    t.recursion("CMRCompositionU1ErweitertesNeugeborenenscreeningEntryReference", () =>
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
export interface CMRCompositionU1ErweitertesNeugeborenenscreeningEmptyReason {
    coding: Array<CMRCompositionU1ErweitertesNeugeborenenscreeningEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU1ErweitertesNeugeborenenscreeningEmptyReason: t.Type<CMRCompositionU1ErweitertesNeugeborenenscreeningEmptyReason> =
    t.recursion("CMRCompositionU1ErweitertesNeugeborenenscreeningEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1ErweitertesNeugeborenenscreeningEmptyReasonCoding
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
export interface CMRCompositionU1MukoviszidoseScreeningCode {
    coding: Array<CMRCompositionU1MukoviszidoseScreeningCodeCoding>;
    id?: string;
}

export const CMRCompositionU1MukoviszidoseScreeningCode: t.Type<CMRCompositionU1MukoviszidoseScreeningCode> =
    t.recursion("CMRCompositionU1MukoviszidoseScreeningCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1MukoviszidoseScreeningCodeCoding
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
export interface CMRCompositionU1MukoviszidoseScreeningText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU1MukoviszidoseScreeningText: t.Type<CMRCompositionU1MukoviszidoseScreeningText> =
    t.recursion("CMRCompositionU1MukoviszidoseScreeningText", () =>
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
export interface CMRCompositionU1MukoviszidoseScreeningEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU1MukoviszidoseScreeningEntryReference: t.Type<CMRCompositionU1MukoviszidoseScreeningEntryReference> =
    t.recursion("CMRCompositionU1MukoviszidoseScreeningEntryReference", () =>
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
export interface CMRCompositionU1MukoviszidoseScreeningEmptyReason {
    coding: Array<CMRCompositionU1MukoviszidoseScreeningEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU1MukoviszidoseScreeningEmptyReason: t.Type<CMRCompositionU1MukoviszidoseScreeningEmptyReason> =
    t.recursion("CMRCompositionU1MukoviszidoseScreeningEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1MukoviszidoseScreeningEmptyReasonCoding
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
export interface CMRCompositionU1UntersuchungsGrenzenCode {
    coding: Array<CMRCompositionU1UntersuchungsGrenzenCodeCoding>;
    id?: string;
}

export const CMRCompositionU1UntersuchungsGrenzenCode: t.Type<CMRCompositionU1UntersuchungsGrenzenCode> =
    t.recursion("CMRCompositionU1UntersuchungsGrenzenCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1UntersuchungsGrenzenCodeCoding
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
export interface CMRCompositionU1UntersuchungsGrenzenText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU1UntersuchungsGrenzenText: t.Type<CMRCompositionU1UntersuchungsGrenzenText> =
    t.recursion("CMRCompositionU1UntersuchungsGrenzenText", () =>
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
export interface CMRCompositionU1UntersuchungsGrenzenEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU1UntersuchungsGrenzenEntryReference: t.Type<CMRCompositionU1UntersuchungsGrenzenEntryReference> =
    t.recursion("CMRCompositionU1UntersuchungsGrenzenEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Participation_Period|1.0.1"
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
export interface CMRCompositionU1UntersuchungsGrenzenEmptyReason {
    coding: Array<CMRCompositionU1UntersuchungsGrenzenEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU1UntersuchungsGrenzenEmptyReason: t.Type<CMRCompositionU1UntersuchungsGrenzenEmptyReason> =
    t.recursion("CMRCompositionU1UntersuchungsGrenzenEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1UntersuchungsGrenzenEmptyReasonCoding
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
export interface CMRCompositionU1PerzentilkurvenCode {
    coding: Array<CMRCompositionU1PerzentilkurvenCodeCoding>;
    id?: string;
}

export const CMRCompositionU1PerzentilkurvenCode: t.Type<CMRCompositionU1PerzentilkurvenCode> =
    t.recursion("CMRCompositionU1PerzentilkurvenCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU1PerzentilkurvenCodeCoding)
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
export interface CMRCompositionU1PerzentilkurvenText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU1PerzentilkurvenText: t.Type<CMRCompositionU1PerzentilkurvenText> =
    t.recursion("CMRCompositionU1PerzentilkurvenText", () =>
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
export interface CMRCompositionU1PerzentilkurvenEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU1PerzentilkurvenEntryReference: t.Type<CMRCompositionU1PerzentilkurvenEntryReference> =
    t.recursion("CMRCompositionU1PerzentilkurvenEntryReference", () =>
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
export interface CMRCompositionU1PerzentilkurvenEmptyReason {
    coding: Array<CMRCompositionU1PerzentilkurvenEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU1PerzentilkurvenEmptyReason: t.Type<CMRCompositionU1PerzentilkurvenEmptyReason> =
    t.recursion("CMRCompositionU1PerzentilkurvenEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU1PerzentilkurvenEmptyReasonCoding
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
export interface CMRCompositionU1UHeftEinleitung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: "Liebe Eltern, herzlichen Glückwunsch zur Geburt Ihres Babys! Gerade in den ersten Lebensjahren macht Ihr Kind sehr viele Entwicklungsschritte. Um eventuell vorliegende Erkrankungen und Entwicklungsverzögerungen frühzeitig erkennen und entsprechend handeln zu können, gibt es regelmäßige Untersuchungen. Diese sind ein wichtiger Teil der Gesundheitsvorsorge für Ihr Kind. Die Kosten werden von der gesetzlichen Krankenversicherung übernommen. Innerhalb der ersten sechs Lebensjahre untersucht die Ärztin oder der Arzt, ob sich Ihr Kind gesund und altersgemäß entwickelt. Die Ergebnisse jeder Untersuchung werden Ihnen erläutert. Darüber hinaus werden Sie über Schutzimpfungen informiert, die zugleich mit den Untersuchungen erfolgen können. Sie haben bei sämtlichen Untersuchungen die Gelegenheit, die Entwicklung Ihres Kindes mit der Ärztin oder dem Arzt zu besprechen und Fragen zu stellen, etwa zu Themen wie Ernährung oder Unfallvermeidung. Zudem erhalten Sie im Rahmen der einzelnen Untersuchungen von der Ärztin oder dem Arzt Informationen zu regionalen Unterstützungsangeboten (wie z. B. Eltern-Kind-Angebote, Frühe Hilfen, Familienhebammen, -paten, öffentlicher Gesundheitsdienst). Für alle Untersuchungen sind bestimmte Zeiträume vorgegeben. Dass Sie diese kennen und einhalten, ist besonders wichtig, da manche Liebe Eltern, herzlichen Glückwunsch zur Geburt Ihres Babys! Bitte beachten Sie, dass es sich bei dem Gelben Heft um eine vertrauliche Information handelt. Keine Institution (z. B. Kita, Schule, Jugendamt) darf eine Einsichtnahme verlangen. Sie entscheiden, wem Sie den Einblick gewähren. Die herausnehmbare Teilnahmekarte ist als Beleg für die Wahrnehmung der Untersuchungen ausreichend. Erkrankungen nur in einer bestimmten Altersspanne rechtzeitig erkannt und behandelt werden können (z. B. Stoffwechselstörungen oder Fehlstellungen der Hüfte). Auch bei Frühgeborenen, also Kindern, die vor der 37+0 Schwangerschaftswoche geboren werden, sollen die Untersuchungszeiträume dringend eingehalten werden. In solchen Fällen wird der frühe Geburtstermin bei der Interpretation der Ergebnisse berücksichtigt. Bitte nutzen Sie das Angebot der Untersuchungen! Sie geben sich und Ihrem Kind die Chance, dass gesundheitliche Probleme oder Auffälligkeiten rechtzeitig erkannt und behandelt werden können. Wir wünschen Ihrem Kind und Ihnen alles Gute! Gemeinsamer Bundesausschuss, Berlin* | Der Gemeinsame Bundesausschuss (G-BA) wird gebildet von der Kassenärztlichen und der Kassenzahnärztlichen Bundesvereinigung, der Deutschen Krankenhausgesellschaft e.V. und dem Spitzenverband der gesetzlichen Krankenversicherung. Der G-BA legt in Richtlinien fest, welche Leistungen der medizinischen Versorgung von der gesetzlichen Krankenversicherung übernommen werden. Das Gelbe Heft ist eine Anlage der Kinder-Richtlinie des G-BA. Weitere Informationen finden Sie auf den Internetseiten des G-BA unter www.g-ba.de.";
    id?: string;
}

export const CMRCompositionU1UHeftEinleitung: t.Type<CMRCompositionU1UHeftEinleitung> =
    t.recursion("CMRCompositionU1UHeftEinleitung", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
                    ),
                    valueString: Literal(
                        "Liebe Eltern, herzlichen Glückwunsch zur Geburt Ihres Babys! Gerade in den ersten Lebensjahren macht Ihr Kind sehr viele Entwicklungsschritte. Um eventuell vorliegende Erkrankungen und Entwicklungsverzögerungen frühzeitig erkennen und entsprechend handeln zu können, gibt es regelmäßige Untersuchungen. Diese sind ein wichtiger Teil der Gesundheitsvorsorge für Ihr Kind. Die Kosten werden von der gesetzlichen Krankenversicherung übernommen. Innerhalb der ersten sechs Lebensjahre untersucht die Ärztin oder der Arzt, ob sich Ihr Kind gesund und altersgemäß entwickelt. Die Ergebnisse jeder Untersuchung werden Ihnen erläutert. Darüber hinaus werden Sie über Schutzimpfungen informiert, die zugleich mit den Untersuchungen erfolgen können. Sie haben bei sämtlichen Untersuchungen die Gelegenheit, die Entwicklung Ihres Kindes mit der Ärztin oder dem Arzt zu besprechen und Fragen zu stellen, etwa zu Themen wie Ernährung oder Unfallvermeidung. Zudem erhalten Sie im Rahmen der einzelnen Untersuchungen von der Ärztin oder dem Arzt Informationen zu regionalen Unterstützungsangeboten (wie z. B. Eltern-Kind-Angebote, Frühe Hilfen, Familienhebammen, -paten, öffentlicher Gesundheitsdienst). Für alle Untersuchungen sind bestimmte Zeiträume vorgegeben. Dass Sie diese kennen und einhalten, ist besonders wichtig, da manche Liebe Eltern, herzlichen Glückwunsch zur Geburt Ihres Babys! Bitte beachten Sie, dass es sich bei dem Gelben Heft um eine vertrauliche Information handelt. Keine Institution (z. B. Kita, Schule, Jugendamt) darf eine Einsichtnahme verlangen. Sie entscheiden, wem Sie den Einblick gewähren. Die herausnehmbare Teilnahmekarte ist als Beleg für die Wahrnehmung der Untersuchungen ausreichend. Erkrankungen nur in einer bestimmten Altersspanne rechtzeitig erkannt und behandelt werden können (z. B. Stoffwechselstörungen oder Fehlstellungen der Hüfte). Auch bei Frühgeborenen, also Kindern, die vor der 37+0 Schwangerschaftswoche geboren werden, sollen die Untersuchungszeiträume dringend eingehalten werden. In solchen Fällen wird der frühe Geburtstermin bei der Interpretation der Ergebnisse berücksichtigt. Bitte nutzen Sie das Angebot der Untersuchungen! Sie geben sich und Ihrem Kind die Chance, dass gesundheitliche Probleme oder Auffälligkeiten rechtzeitig erkannt und behandelt werden können. Wir wünschen Ihrem Kind und Ihnen alles Gute! Gemeinsamer Bundesausschuss, Berlin* | Der Gemeinsame Bundesausschuss (G-BA) wird gebildet von der Kassenärztlichen und der Kassenzahnärztlichen Bundesvereinigung, der Deutschen Krankenhausgesellschaft e.V. und dem Spitzenverband der gesetzlichen Krankenversicherung. Der G-BA legt in Richtlinien fest, welche Leistungen der medizinischen Versorgung von der gesetzlichen Krankenversicherung übernommen werden. Das Gelbe Heft ist eine Anlage der Kinder-Richtlinie des G-BA. Weitere Informationen finden Sie auf den Internetseiten des G-BA unter www.g-ba.de."
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
export interface CMRCompositionU1U1Einleitung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "U1 Elterninformation zur Neugeborenen-Erstuntersuchung Unmittelbar nach der Geburt findet die erste Untersuchung Ihres Babys statt. Die Ärztin oder der Arzt oder die Hebamme oder der Entbindungspfleger vergewissern sich, dass Ihr Baby die Geburt gut überstanden hat. Es geht bei der U1 vor allem darum, sofort behandlungsbedürftige Zustände und äußerliche Fehlbildungen zu erkennen. So können notwendige Sofortmaßnahmen eingeleitet und Komplikationen vermieden werden. Das wird untersucht: • Mit dem sogenannten Apgar-Wert werden die Hautfarbe des Babys, der Herzschlag, die Reflexe, die Muskelspannung und die Atmung geprüft. Dieser Wert wird nach fünf und nochmals nach zehn Minuten ermittelt. • Um sicher zu sein, dass Ihr Neugeborenes während der Geburt ausreichend mit Sauerstoff versorgt worden ist, wird der Nabelschnur Blut entnommen und dessen pH-Wert (Säuregrad) bestimmt. • Es wird nach äußerlich erkennbaren Fehlbildungen geschaut. Ihr Baby wird gemessen und gewogen und es erhält nach Rücksprache mit Ihnen Vitamin K, um inneren Blutungen vorzubeugen. Zur Ernährung Ihres Kindes (Stillen oder andere Ernährungsformen) werden Sie fachkundig beraten und können während der gesamten Stillzeit und bei Ernährungsproblemen auf Hilfe zurückgreifen. In den kommenden drei Tagen werden Ihnen für Ihr Baby weitere wichtige Untersuchungen empfohlen. Diese sollen eine rechtzeitige Behandlung der jeweiligen Erkrankungen ermöglichen. Der Test auf kritische angeborene Herzfehler sollte nach der 24. bis zur 48. Lebensstunde Ihres Babys durchgeführt werden. Die Tests auf angeborene Stoffwechselstörungen und Mukoviszidose aus einigen Tropfen Blut Ihres Babys sollten zwischen der 36. und 72. Lebensstunde erfolgen. Der Hörtest für Neugeborene sollte bis zur 72. Lebensstunde vorgenommen werden. Zu diesen Untersuchungen erhalten Sie jeweils ein ausführliches Informationsblatt. Die nächste Untersuchung soll vom 3. bis zum 10. Lebenstag (U2) vorgenommen werden.";
    id?: string;
}

export const CMRCompositionU1U1Einleitung: t.Type<CMRCompositionU1U1Einleitung> =
    t.recursion("CMRCompositionU1U1Einleitung", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                    ),
                    valueString: Literal(
                        "U1 Elterninformation zur Neugeborenen-Erstuntersuchung Unmittelbar nach der Geburt findet die erste Untersuchung Ihres Babys statt. Die Ärztin oder der Arzt oder die Hebamme oder der Entbindungspfleger vergewissern sich, dass Ihr Baby die Geburt gut überstanden hat. Es geht bei der U1 vor allem darum, sofort behandlungsbedürftige Zustände und äußerliche Fehlbildungen zu erkennen. So können notwendige Sofortmaßnahmen eingeleitet und Komplikationen vermieden werden. Das wird untersucht: • Mit dem sogenannten Apgar-Wert werden die Hautfarbe des Babys, der Herzschlag, die Reflexe, die Muskelspannung und die Atmung geprüft. Dieser Wert wird nach fünf und nochmals nach zehn Minuten ermittelt. • Um sicher zu sein, dass Ihr Neugeborenes während der Geburt ausreichend mit Sauerstoff versorgt worden ist, wird der Nabelschnur Blut entnommen und dessen pH-Wert (Säuregrad) bestimmt. • Es wird nach äußerlich erkennbaren Fehlbildungen geschaut. Ihr Baby wird gemessen und gewogen und es erhält nach Rücksprache mit Ihnen Vitamin K, um inneren Blutungen vorzubeugen. Zur Ernährung Ihres Kindes (Stillen oder andere Ernährungsformen) werden Sie fachkundig beraten und können während der gesamten Stillzeit und bei Ernährungsproblemen auf Hilfe zurückgreifen. In den kommenden drei Tagen werden Ihnen für Ihr Baby weitere wichtige Untersuchungen empfohlen. Diese sollen eine rechtzeitige Behandlung der jeweiligen Erkrankungen ermöglichen. Der Test auf kritische angeborene Herzfehler sollte nach der 24. bis zur 48. Lebensstunde Ihres Babys durchgeführt werden. Die Tests auf angeborene Stoffwechselstörungen und Mukoviszidose aus einigen Tropfen Blut Ihres Babys sollten zwischen der 36. und 72. Lebensstunde erfolgen. Der Hörtest für Neugeborene sollte bis zur 72. Lebensstunde vorgenommen werden. Zu diesen Untersuchungen erhalten Sie jeweils ein ausführliches Informationsblatt. Die nächste Untersuchung soll vom 3. bis zum 10. Lebenstag (U2) vorgenommen werden."
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
export interface CMRCompositionU1TypeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "170099002";
    display: "Child examination - birth (procedure)";
    id?: string;
}

export const CMRCompositionU1TypeCoding: t.Type<CMRCompositionU1TypeCoding> = t.recursion(
    "CMRCompositionU1TypeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("170099002"),
                    display: Literal("Child examination - birth (procedure)")
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
export interface CMRCompositionU1CategoryCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "243788004";
    display: "Child examination (procedure)";
    id?: string;
}

export const CMRCompositionU1CategoryCoding: t.Type<CMRCompositionU1CategoryCoding> =
    t.recursion("CMRCompositionU1CategoryCoding", () =>
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
export interface CMRCompositionU1Schwangerschaftsanamnese {
    title: "Schwangerschaftsanamnese";
    code: CMRCompositionU1SchwangerschaftsanamneseCode;
    text: CMRCompositionU1SchwangerschaftsanamneseText;
    id?: string;
    extension?: (Extension | CMRCompositionU1SchwangerschaftsanamneseAnamneseAnweisung)[];
    entry?: CMRCompositionU1SchwangerschaftsanamneseEntryReference[];
    emptyReason?: CMRCompositionU1SchwangerschaftsanamneseEmptyReason;
}

export const CMRCompositionU1Schwangerschaftsanamnese: t.Type<CMRCompositionU1Schwangerschaftsanamnese> =
    t.recursion("CMRCompositionU1Schwangerschaftsanamnese", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Schwangerschaftsanamnese"),
                    code: CMRCompositionU1SchwangerschaftsanamneseCode,
                    text: CMRCompositionU1SchwangerschaftsanamneseText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU1SchwangerschaftsanamneseAnamneseAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU1SchwangerschaftsanamneseAnamneseAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU1SchwangerschaftsanamneseAnamneseAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(
                        CMRCompositionU1SchwangerschaftsanamneseEntryReference
                    ),
                    emptyReason: CMRCompositionU1SchwangerschaftsanamneseEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU1Geburtsanamnese {
    title: "Geburtsanamnese";
    code: CMRCompositionU1GeburtsanamneseCode;
    text: CMRCompositionU1GeburtsanamneseText;
    id?: string;
    extension?: (Extension | CMRCompositionU1GeburtsanamneseAnamneseAnweisung)[];
    emptyReason?: CMRCompositionU1GeburtsanamneseEmptyReason;
    section?: (
        | CMRCompositionU1GeburtsanamneseGeschlecht
        | CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostik
        | CMRCompositionU1GeburtsanamneseBaseExcess
        | CMRCompositionU1GeburtsanamnesePhWert
        | CMRCompositionU1GeburtsanamneseKindslage
        | CMRCompositionU1GeburtsanamneseGeburtsmodus
        | CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeit
        | CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTage
    )[];
}

export const CMRCompositionU1Geburtsanamnese: t.Type<CMRCompositionU1Geburtsanamnese> =
    t.recursion("CMRCompositionU1Geburtsanamnese", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Geburtsanamnese"),
                    code: CMRCompositionU1GeburtsanamneseCode,
                    text: CMRCompositionU1GeburtsanamneseText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU1GeburtsanamneseAnamneseAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU1GeburtsanamneseAnamneseAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU1GeburtsanamneseAnamneseAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    emptyReason: CMRCompositionU1GeburtsanamneseEmptyReason,
                    section: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRCompositionU1GeburtsanamneseGeschlecht>,
                                t.Type<CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostik>,
                                t.Type<CMRCompositionU1GeburtsanamneseBaseExcess>,
                                t.Type<CMRCompositionU1GeburtsanamnesePhWert>,
                                t.Type<CMRCompositionU1GeburtsanamneseKindslage>,
                                t.Type<CMRCompositionU1GeburtsanamneseGeburtsmodus>,
                                t.Type<CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeit>,
                                t.Type<CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTage>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRCompositionU1GeburtsanamneseGeschlecht,
                            CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostik,
                            CMRCompositionU1GeburtsanamneseBaseExcess,
                            CMRCompositionU1GeburtsanamnesePhWert,
                            CMRCompositionU1GeburtsanamneseKindslage,
                            CMRCompositionU1GeburtsanamneseGeburtsmodus,
                            CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeit,
                            CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTage
                        ]),
                        [
                            {
                                codec: CMRCompositionU1GeburtsanamneseGeschlecht,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "Geschlecht" }
                            },
                            {
                                codec: CMRCompositionU1GeburtsanamneseBefundePraenatalerDiagnostik,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "title",
                                    value: "Soweit vorhanden, Befunde einer pränatalen Diagnostik:"
                                }
                            },
                            {
                                codec: CMRCompositionU1GeburtsanamneseBaseExcess,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "Base excess" }
                            },
                            {
                                codec: CMRCompositionU1GeburtsanamnesePhWert,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "title",
                                    value: "pH-Wert (Nabelarterie)"
                                }
                            },
                            {
                                codec: CMRCompositionU1GeburtsanamneseKindslage,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "Kindslage" }
                            },
                            {
                                codec: CMRCompositionU1GeburtsanamneseGeburtsmodus,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "Geburtsmodus" }
                            },
                            {
                                codec: CMRCompositionU1GeburtsanamneseGeburtsdatumUhrzeit,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "Geburtsdatum" }
                            },
                            {
                                codec: CMRCompositionU1GeburtsanamneseSchwangerschaftswocheTage,
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
export interface CMRCompositionU1Familienanamnese {
    title: "Familienanamnese";
    code: CMRCompositionU1FamilienanamneseCode;
    text: CMRCompositionU1FamilienanamneseText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU1FamilienanamneseAnamneseAnweisung
        | CMRCompositionU1FamilienanamneseFamilienanamneseHinweis
    )[];
    entry?: Array<CMRCompositionU1FamilienanamneseEntryReference>;
    emptyReason?: CMRCompositionU1FamilienanamneseEmptyReason;
}

export const CMRCompositionU1Familienanamnese: t.Type<CMRCompositionU1Familienanamnese> =
    t.recursion("CMRCompositionU1Familienanamnese", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Familienanamnese"),
                    code: CMRCompositionU1FamilienanamneseCode,
                    text: CMRCompositionU1FamilienanamneseText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU1FamilienanamneseAnamneseAnweisung>,
                                t.Type<CMRCompositionU1FamilienanamneseFamilienanamneseHinweis>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU1FamilienanamneseAnamneseAnweisung,
                            CMRCompositionU1FamilienanamneseFamilienanamneseHinweis
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU1FamilienanamneseAnamneseAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            },
                            {
                                codec: CMRCompositionU1FamilienanamneseFamilienanamneseHinweis,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: MaxArray(1, CMRCompositionU1FamilienanamneseEntryReference),
                    emptyReason: CMRCompositionU1FamilienanamneseEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU1Untersuchung {
    title: "Körperliche Untersuchung";
    code: CMRCompositionU1UntersuchungCode;
    text: CMRCompositionU1UntersuchungText;
    id?: string;
    entry?: CMRCompositionU1UntersuchungEntryReference[];
    emptyReason?: CMRCompositionU1UntersuchungEmptyReason;
}

export const CMRCompositionU1Untersuchung: t.Type<CMRCompositionU1Untersuchung> =
    t.recursion("CMRCompositionU1Untersuchung", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Körperliche Untersuchung"),
                    code: CMRCompositionU1UntersuchungCode,
                    text: CMRCompositionU1UntersuchungText
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(CMRCompositionU1UntersuchungEntryReference),
                    emptyReason: CMRCompositionU1UntersuchungEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU1Sonstiges {
    title: "Sonstiges";
    code: CMRCompositionU1SonstigesCode;
    text: CMRCompositionU1SonstigesText;
    id?: string;
    entry?: Array<CMRCompositionU1SonstigesEntryReference>;
    emptyReason?: CMRCompositionU1SonstigesEmptyReason;
}

export const CMRCompositionU1Sonstiges: t.Type<CMRCompositionU1Sonstiges> = t.recursion(
    "CMRCompositionU1Sonstiges",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Sonstiges"),
                    code: CMRCompositionU1SonstigesCode,
                    text: CMRCompositionU1SonstigesText
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(1, CMRCompositionU1SonstigesEntryReference),
                    emptyReason: CMRCompositionU1SonstigesEmptyReason
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU1PulsoxymetrieScreening {
    title: "Pulsoxymetrie-Screening (Messung am Fuß)";
    code: CMRCompositionU1PulsoxymetrieScreeningCode;
    text: CMRCompositionU1PulsoxymetrieScreeningText;
    id?: string;
    entry?: CMRCompositionU1PulsoxymetrieScreeningEntryReference[];
    emptyReason?: CMRCompositionU1PulsoxymetrieScreeningEmptyReason;
}

export const CMRCompositionU1PulsoxymetrieScreening: t.Type<CMRCompositionU1PulsoxymetrieScreening> =
    t.recursion("CMRCompositionU1PulsoxymetrieScreening", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Pulsoxymetrie-Screening (Messung am Fuß)"),
                    code: CMRCompositionU1PulsoxymetrieScreeningCode,
                    text: CMRCompositionU1PulsoxymetrieScreeningText
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(CMRCompositionU1PulsoxymetrieScreeningEntryReference),
                    emptyReason: CMRCompositionU1PulsoxymetrieScreeningEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU1Hoerscreening {
    title: "Neugeborenen-Hörscreening";
    code: CMRCompositionU1HoerscreeningCode;
    text: CMRCompositionU1HoerscreeningText;
    id?: string;
    entry?: CMRCompositionU1HoerscreeningEntryReference[];
    emptyReason?: CMRCompositionU1HoerscreeningEmptyReason;
}

export const CMRCompositionU1Hoerscreening: t.Type<CMRCompositionU1Hoerscreening> =
    t.recursion("CMRCompositionU1Hoerscreening", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Neugeborenen-Hörscreening"),
                    code: CMRCompositionU1HoerscreeningCode,
                    text: CMRCompositionU1HoerscreeningText
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(CMRCompositionU1HoerscreeningEntryReference),
                    emptyReason: CMRCompositionU1HoerscreeningEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU1ErweitertesNeugeborenenscreening {
    title: "Erweitertes Neugeborenen-Screening";
    code: CMRCompositionU1ErweitertesNeugeborenenscreeningCode;
    text: CMRCompositionU1ErweitertesNeugeborenenscreeningText;
    id?: string;
    entry?: Array<CMRCompositionU1ErweitertesNeugeborenenscreeningEntryReference>;
    emptyReason?: CMRCompositionU1ErweitertesNeugeborenenscreeningEmptyReason;
}

export const CMRCompositionU1ErweitertesNeugeborenenscreening: t.Type<CMRCompositionU1ErweitertesNeugeborenenscreening> =
    t.recursion("CMRCompositionU1ErweitertesNeugeborenenscreening", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Erweitertes Neugeborenen-Screening"),
                    code: CMRCompositionU1ErweitertesNeugeborenenscreeningCode,
                    text: CMRCompositionU1ErweitertesNeugeborenenscreeningText
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(
                        1,
                        CMRCompositionU1ErweitertesNeugeborenenscreeningEntryReference
                    ),
                    emptyReason:
                        CMRCompositionU1ErweitertesNeugeborenenscreeningEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU1MukoviszidoseScreening {
    title: "Screening auf Mukoviszidose";
    code: CMRCompositionU1MukoviszidoseScreeningCode;
    text: CMRCompositionU1MukoviszidoseScreeningText;
    id?: string;
    entry?: CMRCompositionU1MukoviszidoseScreeningEntryReference[];
    emptyReason?: CMRCompositionU1MukoviszidoseScreeningEmptyReason;
}

export const CMRCompositionU1MukoviszidoseScreening: t.Type<CMRCompositionU1MukoviszidoseScreening> =
    t.recursion("CMRCompositionU1MukoviszidoseScreening", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Screening auf Mukoviszidose"),
                    code: CMRCompositionU1MukoviszidoseScreeningCode,
                    text: CMRCompositionU1MukoviszidoseScreeningText
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(CMRCompositionU1MukoviszidoseScreeningEntryReference),
                    emptyReason: CMRCompositionU1MukoviszidoseScreeningEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU1UntersuchungsGrenzen {
    title: "Bitte bringen Sie Ihr Kind zur Untersuchung:";
    code: CMRCompositionU1UntersuchungsGrenzenCode;
    text: CMRCompositionU1UntersuchungsGrenzenText;
    entry: Array<CMRCompositionU1UntersuchungsGrenzenEntryReference>;
    id?: string;
    emptyReason?: CMRCompositionU1UntersuchungsGrenzenEmptyReason;
}

export const CMRCompositionU1UntersuchungsGrenzen: t.Type<CMRCompositionU1UntersuchungsGrenzen> =
    t.recursion("CMRCompositionU1UntersuchungsGrenzen", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Bitte bringen Sie Ihr Kind zur Untersuchung:"),
                    code: CMRCompositionU1UntersuchungsGrenzenCode,
                    text: CMRCompositionU1UntersuchungsGrenzenText,
                    entry: MinMaxArray(
                        9,
                        9,
                        CMRCompositionU1UntersuchungsGrenzenEntryReference
                    )
                }),
                t.partial({
                    id: SCALARString,
                    emptyReason: CMRCompositionU1UntersuchungsGrenzenEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU1Perzentilkurven {
    title: "Perzentilkurven";
    code: CMRCompositionU1PerzentilkurvenCode;
    text: CMRCompositionU1PerzentilkurvenText;
    id?: string;
    entry?: Array<CMRCompositionU1PerzentilkurvenEntryReference>;
    emptyReason?: CMRCompositionU1PerzentilkurvenEmptyReason;
}

export const CMRCompositionU1Perzentilkurven: t.Type<CMRCompositionU1Perzentilkurven> =
    t.recursion("CMRCompositionU1Perzentilkurven", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Perzentilkurven"),
                    code: CMRCompositionU1PerzentilkurvenCode,
                    text: CMRCompositionU1PerzentilkurvenText
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(1, CMRCompositionU1PerzentilkurvenEntryReference),
                    emptyReason: CMRCompositionU1PerzentilkurvenEmptyReason
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRCompositionU1Meta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U1|1.0.1">;
    id?: string;
}

export const CMRCompositionU1Meta: t.Type<CMRCompositionU1Meta> = t.recursion(
    "CMRCompositionU1Meta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U1|1.0.1"
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
export interface CMRCompositionU1Type {
    coding: Array<CMRCompositionU1TypeCoding>;
    id?: string;
}

export const CMRCompositionU1Type: t.Type<CMRCompositionU1Type> = t.recursion(
    "CMRCompositionU1Type",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU1TypeCoding)
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
export interface CMRCompositionU1Category {
    coding: Array<CMRCompositionU1CategoryCoding>;
    id?: string;
}

export const CMRCompositionU1Category: t.Type<CMRCompositionU1Category> = t.recursion(
    "CMRCompositionU1Category",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU1CategoryCoding)
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
export interface CMRCompositionU1SubjectReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU1SubjectReference: t.Type<CMRCompositionU1SubjectReference> =
    t.recursion("CMRCompositionU1SubjectReference", () =>
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
export interface CMRCompositionU1EncounterReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU1EncounterReference: t.Type<CMRCompositionU1EncounterReference> =
    t.recursion("CMRCompositionU1EncounterReference", () =>
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
export interface CMRCompositionU1AuthorReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU1AuthorReference: t.Type<CMRCompositionU1AuthorReference> =
    t.recursion("CMRCompositionU1AuthorReference", () =>
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

interface CMRCompositionU1 {
    resourceType: "Composition";
    meta: CMRCompositionU1Meta;
    status: "final";
    type: CMRCompositionU1Type;
    category: Array<CMRCompositionU1Category>;
    subject: CMRCompositionU1SubjectReference;
    encounter: CMRCompositionU1EncounterReference;
    date: string;
    author: Array<CMRCompositionU1AuthorReference>;
    title: "U1";
    id?: string;
    text?: Narrative;
    extension?: (
        | Extension
        | CMRCompositionU1UHeftEinleitung
        | CMRCompositionU1U1Einleitung
    )[];
    section?: (
        | CMRCompositionU1Schwangerschaftsanamnese
        | CMRCompositionU1Geburtsanamnese
        | CMRCompositionU1Familienanamnese
        | CMRCompositionU1Untersuchung
        | CMRCompositionU1Sonstiges
        | CMRCompositionU1PulsoxymetrieScreening
        | CMRCompositionU1Hoerscreening
        | CMRCompositionU1ErweitertesNeugeborenenscreening
        | CMRCompositionU1MukoviszidoseScreening
        | CMRCompositionU1UntersuchungsGrenzen
        | CMRCompositionU1Perzentilkurven
    )[];
}

const CMRCompositionU1: t.Type<CMRCompositionU1> = t.recursion("CMRCompositionU1", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Composition"),
                meta: CMRCompositionU1Meta,
                status: Literal("final"),
                type: CMRCompositionU1Type,
                category: MinMaxArray(1, 1, CMRCompositionU1Category),
                subject: CMRCompositionU1SubjectReference,
                encounter: CMRCompositionU1EncounterReference,
                date: SCALARDateTime,
                author: MinMaxArray(1, 2, CMRCompositionU1AuthorReference),
                title: Literal("U1")
            }),
            t.partial({
                id: SCALARString,
                text: Narrative,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRCompositionU1UHeftEinleitung>,
                            t.Type<CMRCompositionU1U1Einleitung>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRCompositionU1UHeftEinleitung,
                        CMRCompositionU1U1Einleitung
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRCompositionU1UHeftEinleitung,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
                            }
                        },
                        {
                            codec: CMRCompositionU1U1Einleitung,
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
                            t.Type<CMRCompositionU1Schwangerschaftsanamnese>,
                            t.Type<CMRCompositionU1Geburtsanamnese>,
                            t.Type<CMRCompositionU1Familienanamnese>,
                            t.Type<CMRCompositionU1Untersuchung>,
                            t.Type<CMRCompositionU1Sonstiges>,
                            t.Type<CMRCompositionU1PulsoxymetrieScreening>,
                            t.Type<CMRCompositionU1Hoerscreening>,
                            t.Type<CMRCompositionU1ErweitertesNeugeborenenscreening>,
                            t.Type<CMRCompositionU1MukoviszidoseScreening>,
                            t.Type<CMRCompositionU1UntersuchungsGrenzen>,
                            t.Type<CMRCompositionU1Perzentilkurven>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        CMRCompositionU1Schwangerschaftsanamnese,
                        CMRCompositionU1Geburtsanamnese,
                        CMRCompositionU1Familienanamnese,
                        CMRCompositionU1Untersuchung,
                        CMRCompositionU1Sonstiges,
                        CMRCompositionU1PulsoxymetrieScreening,
                        CMRCompositionU1Hoerscreening,
                        CMRCompositionU1ErweitertesNeugeborenenscreening,
                        CMRCompositionU1MukoviszidoseScreening,
                        CMRCompositionU1UntersuchungsGrenzen,
                        CMRCompositionU1Perzentilkurven
                    ]),
                    [
                        {
                            codec: CMRCompositionU1Schwangerschaftsanamnese,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Schwangerschaftsanamnese" }
                        },
                        {
                            codec: CMRCompositionU1Geburtsanamnese,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Geburtsanamnese" }
                        },
                        {
                            codec: CMRCompositionU1Familienanamnese,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Familienanamnese" }
                        },
                        {
                            codec: CMRCompositionU1Untersuchung,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Körperliche Untersuchung" }
                        },
                        {
                            codec: CMRCompositionU1Sonstiges,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Sonstiges" }
                        },
                        {
                            codec: CMRCompositionU1PulsoxymetrieScreening,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Pulsoxymetrie-Screening (Messung am Fuß)"
                            }
                        },
                        {
                            codec: CMRCompositionU1Hoerscreening,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Neugeborenen-Hörscreening" }
                        },
                        {
                            codec: CMRCompositionU1ErweitertesNeugeborenenscreening,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Erweitertes Neugeborenen-Screening"
                            }
                        },
                        {
                            codec: CMRCompositionU1MukoviszidoseScreening,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Screening auf Mukoviszidose"
                            }
                        },
                        {
                            codec: CMRCompositionU1UntersuchungsGrenzen,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Bitte bringen Sie Ihr Kind zur Untersuchung:"
                            }
                        },
                        {
                            codec: CMRCompositionU1Perzentilkurven,
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

export default CMRCompositionU1;
