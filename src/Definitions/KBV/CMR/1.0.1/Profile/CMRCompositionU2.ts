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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U2"

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "313199003";
    display: "Antenatal screening finding (observable entity)";
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeSnomed: t.Type<CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeSnomed> =
    t.recursion(
        "CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeSnomed",
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
export interface CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "57078-8";
    display: "Antenatal testing and surveillance Narrative";
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeLoinc: t.Type<CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeLoinc> =
    t.recursion(
        "CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeLoinc",
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
export interface CMRCompositionU2GeburtsanamneseBaseExcessCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "363787002:370134009=123029007,704319004=12499000,118598001=118556004,370132008=30766002,704327008=703430008,246093002=68615006,246501002=723208001";
    display: "Observable entity (observable entity) : Time aspect (attribute) = Single point in time (qualifier value) , Inheres in (attribute) = Cord blood (substance) , Property (attribute) = Substance concentration (property) (qualifier value) , Scale type (attribute) = Quantitative (qualifier value) , Direct site (attribute) = Arterial cord blood specimen (specimen) , Component (attribute) = Bicarbonate (substance) , Technique (attribute) = Base excess calculation technique (qualifier value)";
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseBaseExcessCodeCodeSnomed: t.Type<CMRCompositionU2GeburtsanamneseBaseExcessCodeCodeSnomed> =
    t.recursion("CMRCompositionU2GeburtsanamneseBaseExcessCodeCodeSnomed", () =>
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
export interface CMRCompositionU2GeburtsanamneseBaseExcessCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "28638-5";
    display: "Base excess in Arterial cord blood by calculation";
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseBaseExcessCodeCodeLoinc: t.Type<CMRCompositionU2GeburtsanamneseBaseExcessCodeCodeLoinc> =
    t.recursion("CMRCompositionU2GeburtsanamneseBaseExcessCodeCodeLoinc", () =>
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
export interface CMRCompositionU2GeburtsanamnesePhWertCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "363787002:370134009=123029007,704319004=12499000,246093002=89177007,704318007=702700007,370132008=30766002,704327008=703430008";
    display: "Observable entity (observable entity) : Time aspect (attribute) = Single point in time (qualifier value) , Inheres in (attribute) = Cord blood (substance) , Component (attribute) = Proton (substance) , Property type (attribute) = Logarithmic substance concentration (property) (qualifier value) , Scale type (attribute) = Quantitative (qualifier value) , Direct site (attribute) = Arterial cord blood specimen (specimen)";
    id?: string;
}

export const CMRCompositionU2GeburtsanamnesePhWertCodeCodeSnomed: t.Type<CMRCompositionU2GeburtsanamnesePhWertCodeCodeSnomed> =
    t.recursion("CMRCompositionU2GeburtsanamnesePhWertCodeCodeSnomed", () =>
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
export interface CMRCompositionU2GeburtsanamnesePhWertCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "28646-8";
    display: "pH of Arterial cord blood";
    id?: string;
}

export const CMRCompositionU2GeburtsanamnesePhWertCodeCodeLoinc: t.Type<CMRCompositionU2GeburtsanamnesePhWertCodeCodeLoinc> =
    t.recursion("CMRCompositionU2GeburtsanamnesePhWertCodeCodeLoinc", () =>
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
export interface CMRCompositionU2GeburtsanamneseGeschlechtCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "263495000";
    display: "Gender (observable entity)";
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseGeschlechtCodeCoding: t.Type<CMRCompositionU2GeburtsanamneseGeschlechtCodeCoding> =
    t.recursion("CMRCompositionU2GeburtsanamneseGeschlechtCodeCoding", () =>
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
export interface CMRCompositionU2GeburtsanamneseKindslageCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364607000";
    display: "Position of fetus (observable entity)";
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseKindslageCodeCoding: t.Type<CMRCompositionU2GeburtsanamneseKindslageCodeCoding> =
    t.recursion("CMRCompositionU2GeburtsanamneseKindslageCodeCoding", () =>
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
export interface CMRCompositionU2GeburtsanamneseGeburtsmodusCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "394698008";
    display: "Birth history (situation)";
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseGeburtsmodusCodeCoding: t.Type<CMRCompositionU2GeburtsanamneseGeburtsmodusCodeCoding> =
    t.recursion("CMRCompositionU2GeburtsanamneseGeburtsmodusCodeCoding", () =>
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
export interface CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeitCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "184099003+397836004";
    display: "Date of birth (observable entity) + Time of delivery (observable entity)";
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeitCodeCoding: t.Type<CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeitCodeCoding> =
    t.recursion("CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeitCodeCoding", () =>
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
export interface CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTageCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "412726003";
    display: "Length of gestation at birth (observable entity)";
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTageCodeCoding: t.Type<CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTageCodeCoding> =
    t.recursion(
        "CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTageCodeCoding",
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
export interface CMRCompositionU2GeburtsanamneseGeschlechtCode {
    coding: Array<CMRCompositionU2GeburtsanamneseGeschlechtCodeCoding>;
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseGeschlechtCode: t.Type<CMRCompositionU2GeburtsanamneseGeschlechtCode> =
    t.recursion("CMRCompositionU2GeburtsanamneseGeschlechtCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2GeburtsanamneseGeschlechtCodeCoding
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
export interface CMRCompositionU2GeburtsanamneseGeschlechtEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseGeschlechtEntryReference: t.Type<CMRCompositionU2GeburtsanamneseGeschlechtEntryReference> =
    t.recursion("CMRCompositionU2GeburtsanamneseGeschlechtEntryReference", () =>
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
export interface CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikCode {
    coding: Array<
        | CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeSnomed
        | CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeLoinc
    >;
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikCode: t.Type<CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikCode> =
    t.recursion("CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeSnomed>,
                                t.Type<CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeSnomed,
                            CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikCodeCodeLoinc,
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
export interface CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikEntryReference: t.Type<CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikEntryReference> =
    t.recursion(
        "CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikEntryReference",
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
export interface CMRCompositionU2GeburtsanamneseBaseExcessCode {
    coding: Array<
        | CMRCompositionU2GeburtsanamneseBaseExcessCodeCodeSnomed
        | CMRCompositionU2GeburtsanamneseBaseExcessCodeCodeLoinc
    >;
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseBaseExcessCode: t.Type<CMRCompositionU2GeburtsanamneseBaseExcessCode> =
    t.recursion("CMRCompositionU2GeburtsanamneseBaseExcessCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRCompositionU2GeburtsanamneseBaseExcessCodeCodeSnomed>,
                                t.Type<CMRCompositionU2GeburtsanamneseBaseExcessCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRCompositionU2GeburtsanamneseBaseExcessCodeCodeSnomed,
                            CMRCompositionU2GeburtsanamneseBaseExcessCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRCompositionU2GeburtsanamneseBaseExcessCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRCompositionU2GeburtsanamneseBaseExcessCodeCodeLoinc,
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
export interface CMRCompositionU2GeburtsanamneseBaseExcessEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseBaseExcessEntryReference: t.Type<CMRCompositionU2GeburtsanamneseBaseExcessEntryReference> =
    t.recursion("CMRCompositionU2GeburtsanamneseBaseExcessEntryReference", () =>
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
export interface CMRCompositionU2GeburtsanamnesePhWertCode {
    coding: Array<
        | CMRCompositionU2GeburtsanamnesePhWertCodeCodeSnomed
        | CMRCompositionU2GeburtsanamnesePhWertCodeCodeLoinc
    >;
    id?: string;
}

export const CMRCompositionU2GeburtsanamnesePhWertCode: t.Type<CMRCompositionU2GeburtsanamnesePhWertCode> =
    t.recursion("CMRCompositionU2GeburtsanamnesePhWertCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRCompositionU2GeburtsanamnesePhWertCodeCodeSnomed>,
                                t.Type<CMRCompositionU2GeburtsanamnesePhWertCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRCompositionU2GeburtsanamnesePhWertCodeCodeSnomed,
                            CMRCompositionU2GeburtsanamnesePhWertCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRCompositionU2GeburtsanamnesePhWertCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRCompositionU2GeburtsanamnesePhWertCodeCodeLoinc,
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
export interface CMRCompositionU2GeburtsanamnesePhWertEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU2GeburtsanamnesePhWertEntryReference: t.Type<CMRCompositionU2GeburtsanamnesePhWertEntryReference> =
    t.recursion("CMRCompositionU2GeburtsanamnesePhWertEntryReference", () =>
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
export interface CMRCompositionU2GeburtsanamneseKindslageCode {
    coding: Array<CMRCompositionU2GeburtsanamneseKindslageCodeCoding>;
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseKindslageCode: t.Type<CMRCompositionU2GeburtsanamneseKindslageCode> =
    t.recursion("CMRCompositionU2GeburtsanamneseKindslageCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2GeburtsanamneseKindslageCodeCoding
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
export interface CMRCompositionU2GeburtsanamneseKindslageEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseKindslageEntryReference: t.Type<CMRCompositionU2GeburtsanamneseKindslageEntryReference> =
    t.recursion("CMRCompositionU2GeburtsanamneseKindslageEntryReference", () =>
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
export interface CMRCompositionU2GeburtsanamneseGeburtsmodusCode {
    coding: Array<CMRCompositionU2GeburtsanamneseGeburtsmodusCodeCoding>;
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseGeburtsmodusCode: t.Type<CMRCompositionU2GeburtsanamneseGeburtsmodusCode> =
    t.recursion("CMRCompositionU2GeburtsanamneseGeburtsmodusCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2GeburtsanamneseGeburtsmodusCodeCoding
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
export interface CMRCompositionU2GeburtsanamneseGeburtsmodusEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseGeburtsmodusEntryReference: t.Type<CMRCompositionU2GeburtsanamneseGeburtsmodusEntryReference> =
    t.recursion("CMRCompositionU2GeburtsanamneseGeburtsmodusEntryReference", () =>
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
export interface CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeitCode {
    coding: Array<CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeitCodeCoding>;
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeitCode: t.Type<CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeitCode> =
    t.recursion("CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeitCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeitCodeCoding
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
export interface CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeitEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeitEntryReference: t.Type<CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeitEntryReference> =
    t.recursion("CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeitEntryReference", () =>
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
export interface CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTageCode {
    coding: Array<CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTageCodeCoding>;
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTageCode: t.Type<CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTageCode> =
    t.recursion("CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTageCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTageCodeCoding
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
export interface CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTageEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTageEntryReference: t.Type<CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTageEntryReference> =
    t.recursion(
        "CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTageEntryReference",
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
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU2ErgebnisseSectionPruefungAufklaerungHinweis {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "- Pulsoxymetrie-Screening - Erweitertes Neugeborenen-Screening - Screening auf Mukoviszidose - Neugeborenen-Hörscreening - Screening auf Hüftgelenksdysplasie und -luxation (nur bei Risikofaktoren)";
    id?: string;
}

export const CMRCompositionU2ErgebnisseSectionPruefungAufklaerungHinweis: t.Type<CMRCompositionU2ErgebnisseSectionPruefungAufklaerungHinweis> =
    t.recursion("CMRCompositionU2ErgebnisseSectionPruefungAufklaerungHinweis", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                    ),
                    valueString: Literal(
                        "- Pulsoxymetrie-Screening - Erweitertes Neugeborenen-Screening - Screening auf Mukoviszidose - Neugeborenen-Hörscreening - Screening auf Hüftgelenksdysplasie und -luxation (nur bei Risikofaktoren)"
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
export interface CMRCompositionU2HoerscreeningCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "252957005";
    display: "Children's hearing test (procedure)";
    id?: string;
}

export const CMRCompositionU2HoerscreeningCodeCodeSnomed: t.Type<CMRCompositionU2HoerscreeningCodeCodeSnomed> =
    t.recursion("CMRCompositionU2HoerscreeningCodeCodeSnomed", () =>
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
export interface CMRCompositionU2HoerscreeningCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "54111-0";
    display: "Newborn hearing screening panel";
    id?: string;
}

export const CMRCompositionU2HoerscreeningCodeCodeLoinc: t.Type<CMRCompositionU2HoerscreeningCodeCodeLoinc> =
    t.recursion("CMRCompositionU2HoerscreeningCodeCodeLoinc", () =>
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
export interface CMRCompositionU2SchwangerschaftsanamneseAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU2SchwangerschaftsanamneseAnamneseAnweisung: t.Type<CMRCompositionU2SchwangerschaftsanamneseAnamneseAnweisung> =
    t.recursion("CMRCompositionU2SchwangerschaftsanamneseAnamneseAnweisung", () =>
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
export interface CMRCompositionU2SchwangerschaftsanamneseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "160427003";
    display: "Family history with explicit context pertaining to mother (situation)";
    id?: string;
}

export const CMRCompositionU2SchwangerschaftsanamneseCodeCoding: t.Type<CMRCompositionU2SchwangerschaftsanamneseCodeCoding> =
    t.recursion("CMRCompositionU2SchwangerschaftsanamneseCodeCoding", () =>
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
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU2GeburtsanamneseAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseAnamneseAnweisung: t.Type<CMRCompositionU2GeburtsanamneseAnamneseAnweisung> =
    t.recursion("CMRCompositionU2GeburtsanamneseAnamneseAnweisung", () =>
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
export interface CMRCompositionU2GeburtsanamneseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364319003";
    display: "Pregnancy, childbirth / puerperium observable (observable entity)";
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseCodeCoding: t.Type<CMRCompositionU2GeburtsanamneseCodeCoding> =
    t.recursion("CMRCompositionU2GeburtsanamneseCodeCoding", () =>
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
export interface CMRCompositionU2GeburtsanamneseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseEmptyReasonCoding: t.Type<CMRCompositionU2GeburtsanamneseEmptyReasonCoding> =
    t.recursion("CMRCompositionU2GeburtsanamneseEmptyReasonCoding", () =>
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
export interface CMRCompositionU2GeburtsanamneseGeschlecht {
    title: "Geschlecht";
    code: CMRCompositionU2GeburtsanamneseGeschlechtCode;
    entry: Array<CMRCompositionU2GeburtsanamneseGeschlechtEntryReference>;
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseGeschlecht: t.Type<CMRCompositionU2GeburtsanamneseGeschlecht> =
    t.recursion("CMRCompositionU2GeburtsanamneseGeschlecht", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Geschlecht"),
                    code: CMRCompositionU2GeburtsanamneseGeschlechtCode,
                    entry: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2GeburtsanamneseGeschlechtEntryReference
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
export interface CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostik {
    title: "Soweit vorhanden, Befunde einer pränatalen Diagnostik:";
    code: CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikCode;
    entry: Array<CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikEntryReference>;
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostik: t.Type<CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostik> =
    t.recursion("CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostik", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal(
                        "Soweit vorhanden, Befunde einer pränatalen Diagnostik:"
                    ),
                    code: CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikCode,
                    entry: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostikEntryReference
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
export interface CMRCompositionU2GeburtsanamneseBaseExcess {
    title: "Base excess";
    code: CMRCompositionU2GeburtsanamneseBaseExcessCode;
    entry: Array<CMRCompositionU2GeburtsanamneseBaseExcessEntryReference>;
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseBaseExcess: t.Type<CMRCompositionU2GeburtsanamneseBaseExcess> =
    t.recursion("CMRCompositionU2GeburtsanamneseBaseExcess", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Base excess"),
                    code: CMRCompositionU2GeburtsanamneseBaseExcessCode,
                    entry: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2GeburtsanamneseBaseExcessEntryReference
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
export interface CMRCompositionU2GeburtsanamnesePhWert {
    title: "pH-Wert (Nabelarterie)";
    code: CMRCompositionU2GeburtsanamnesePhWertCode;
    entry: Array<CMRCompositionU2GeburtsanamnesePhWertEntryReference>;
    id?: string;
}

export const CMRCompositionU2GeburtsanamnesePhWert: t.Type<CMRCompositionU2GeburtsanamnesePhWert> =
    t.recursion("CMRCompositionU2GeburtsanamnesePhWert", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("pH-Wert (Nabelarterie)"),
                    code: CMRCompositionU2GeburtsanamnesePhWertCode,
                    entry: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2GeburtsanamnesePhWertEntryReference
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
export interface CMRCompositionU2GeburtsanamneseKindslage {
    title: "Kindslage";
    code: CMRCompositionU2GeburtsanamneseKindslageCode;
    entry: Array<CMRCompositionU2GeburtsanamneseKindslageEntryReference>;
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseKindslage: t.Type<CMRCompositionU2GeburtsanamneseKindslage> =
    t.recursion("CMRCompositionU2GeburtsanamneseKindslage", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Kindslage"),
                    code: CMRCompositionU2GeburtsanamneseKindslageCode,
                    entry: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2GeburtsanamneseKindslageEntryReference
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
export interface CMRCompositionU2GeburtsanamneseGeburtsmodus {
    title: "Geburtsmodus";
    code: CMRCompositionU2GeburtsanamneseGeburtsmodusCode;
    entry: Array<CMRCompositionU2GeburtsanamneseGeburtsmodusEntryReference>;
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseGeburtsmodus: t.Type<CMRCompositionU2GeburtsanamneseGeburtsmodus> =
    t.recursion("CMRCompositionU2GeburtsanamneseGeburtsmodus", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Geburtsmodus"),
                    code: CMRCompositionU2GeburtsanamneseGeburtsmodusCode,
                    entry: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2GeburtsanamneseGeburtsmodusEntryReference
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
export interface CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeit {
    title: "Geburtsdatum";
    code: CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeitCode;
    entry: Array<CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeitEntryReference>;
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeit: t.Type<CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeit> =
    t.recursion("CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeit", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Geburtsdatum"),
                    code: CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeitCode,
                    entry: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeitEntryReference
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
export interface CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTage {
    title: "SSW (Wochen+Tage)";
    code: CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTageCode;
    entry: Array<CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTageEntryReference>;
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTage: t.Type<CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTage> =
    t.recursion("CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTage", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("SSW (Wochen+Tage)"),
                    code: CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTageCode,
                    entry: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTageEntryReference
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
export interface CMRCompositionU2AktuelleAnamneseDesKindesAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU2AktuelleAnamneseDesKindesAnamneseAnweisung: t.Type<CMRCompositionU2AktuelleAnamneseDesKindesAnamneseAnweisung> =
    t.recursion("CMRCompositionU2AktuelleAnamneseDesKindesAnamneseAnweisung", () =>
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
export interface CMRCompositionU2AktuelleAnamneseDesKindesHinweisNachtragen {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "Schwangerschafts- und Geburtsanamnese: Erhebung und Dokumentation in der U1 prüfen und ggf. nachtragen.";
    id?: string;
}

export const CMRCompositionU2AktuelleAnamneseDesKindesHinweisNachtragen: t.Type<CMRCompositionU2AktuelleAnamneseDesKindesHinweisNachtragen> =
    t.recursion("CMRCompositionU2AktuelleAnamneseDesKindesHinweisNachtragen", () =>
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
export interface CMRCompositionU2AktuelleAnamneseDesKindesCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "423374008";
    display: "Review of systems section (record artifact)";
    id?: string;
}

export const CMRCompositionU2AktuelleAnamneseDesKindesCodeCoding: t.Type<CMRCompositionU2AktuelleAnamneseDesKindesCodeCoding> =
    t.recursion("CMRCompositionU2AktuelleAnamneseDesKindesCodeCoding", () =>
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
export interface CMRCompositionU2AktuelleAnamneseDesKindesEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU2AktuelleAnamneseDesKindesEmptyReasonCoding: t.Type<CMRCompositionU2AktuelleAnamneseDesKindesEmptyReasonCoding> =
    t.recursion("CMRCompositionU2AktuelleAnamneseDesKindesEmptyReasonCoding", () =>
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
export interface CMRCompositionU2FamilienanamneseAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU2FamilienanamneseAnamneseAnweisung: t.Type<CMRCompositionU2FamilienanamneseAnamneseAnweisung> =
    t.recursion("CMRCompositionU2FamilienanamneseAnamneseAnweisung", () =>
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
export interface CMRCompositionU2FamilienanamneseHinweisNachtragen {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "Schwangerschafts- und Geburtsanamnese: Erhebung und Dokumentation in der U1 prüfen und ggf. nachtragen.";
    id?: string;
}

export const CMRCompositionU2FamilienanamneseHinweisNachtragen: t.Type<CMRCompositionU2FamilienanamneseHinweisNachtragen> =
    t.recursion("CMRCompositionU2FamilienanamneseHinweisNachtragen", () =>
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
export interface CMRCompositionU2FamilienanamneseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "422432008";
    display: "Family history section (record artifact)";
    id?: string;
}

export const CMRCompositionU2FamilienanamneseCodeCoding: t.Type<CMRCompositionU2FamilienanamneseCodeCoding> =
    t.recursion("CMRCompositionU2FamilienanamneseCodeCoding", () =>
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
export interface CMRCompositionU2FamilienanamneseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU2FamilienanamneseEmptyReasonCoding: t.Type<CMRCompositionU2FamilienanamneseEmptyReasonCoding> =
    t.recursion("CMRCompositionU2FamilienanamneseEmptyReasonCoding", () =>
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
export interface CMRCompositionU2SozialanamneseAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU2SozialanamneseAnamneseAnweisung: t.Type<CMRCompositionU2SozialanamneseAnamneseAnweisung> =
    t.recursion("CMRCompositionU2SozialanamneseAnamneseAnweisung", () =>
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
export interface CMRCompositionU2SozialanamneseHinweisNachtragen {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "Schwangerschafts- und Geburtsanamnese: Erhebung und Dokumentation in der U1 prüfen und ggf. nachtragen.";
    id?: string;
}

export const CMRCompositionU2SozialanamneseHinweisNachtragen: t.Type<CMRCompositionU2SozialanamneseHinweisNachtragen> =
    t.recursion("CMRCompositionU2SozialanamneseHinweisNachtragen", () =>
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
export interface CMRCompositionU2SozialanamneseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "281575007";
    display: "Family social history (situation)";
    id?: string;
}

export const CMRCompositionU2SozialanamneseCodeCoding: t.Type<CMRCompositionU2SozialanamneseCodeCoding> =
    t.recursion("CMRCompositionU2SozialanamneseCodeCoding", () =>
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
export interface CMRCompositionU2SozialanamneseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU2SozialanamneseEmptyReasonCoding: t.Type<CMRCompositionU2SozialanamneseEmptyReasonCoding> =
    t.recursion("CMRCompositionU2SozialanamneseEmptyReasonCoding", () =>
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
export interface CMRCompositionU2UntersuchungUntersuchungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Nur Auffälligkeiten ankreuzen!";
    id?: string;
}

export const CMRCompositionU2UntersuchungUntersuchungAnweisung: t.Type<CMRCompositionU2UntersuchungUntersuchungAnweisung> =
    t.recursion("CMRCompositionU2UntersuchungUntersuchungAnweisung", () =>
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
export interface CMRCompositionU2UntersuchungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "425044008";
    display: "Physical exam section (record artifact)";
    id?: string;
}

export const CMRCompositionU2UntersuchungCodeCoding: t.Type<CMRCompositionU2UntersuchungCodeCoding> =
    t.recursion("CMRCompositionU2UntersuchungCodeCoding", () =>
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
export interface CMRCompositionU2UntersuchungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU2UntersuchungEmptyReasonCoding: t.Type<CMRCompositionU2UntersuchungEmptyReasonCoding> =
    t.recursion("CMRCompositionU2UntersuchungEmptyReasonCoding", () =>
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
export interface CMRCompositionU2BeratungBeratungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Bei erweitertem Beratungsbedarf bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU2BeratungBeratungAnweisung: t.Type<CMRCompositionU2BeratungBeratungAnweisung> =
    t.recursion("CMRCompositionU2BeratungBeratungAnweisung", () =>
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
export interface CMRCompositionU2BeratungBeratungHinweis {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "Beratung vor allem zu folgenden Themen:";
    id?: string;
}

export const CMRCompositionU2BeratungBeratungHinweis: t.Type<CMRCompositionU2BeratungBeratungHinweis> =
    t.recursion("CMRCompositionU2BeratungBeratungHinweis", () =>
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
export interface CMRCompositionU2BeratungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "409066002";
    display: "Education, guidance and counseling (procedure)";
    id?: string;
}

export const CMRCompositionU2BeratungCodeCoding: t.Type<CMRCompositionU2BeratungCodeCoding> =
    t.recursion("CMRCompositionU2BeratungCodeCoding", () =>
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
export interface CMRCompositionU2BeratungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU2BeratungEmptyReasonCoding: t.Type<CMRCompositionU2BeratungEmptyReasonCoding> =
    t.recursion("CMRCompositionU2BeratungEmptyReasonCoding", () =>
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
export interface CMRCompositionU2ErgebnisseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "423100009";
    display: "Results section (record artifact)";
    id?: string;
}

export const CMRCompositionU2ErgebnisseCodeCoding: t.Type<CMRCompositionU2ErgebnisseCodeCoding> =
    t.recursion("CMRCompositionU2ErgebnisseCodeCoding", () =>
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
export interface CMRCompositionU2ErgebnisseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU2ErgebnisseEmptyReasonCoding: t.Type<CMRCompositionU2ErgebnisseEmptyReasonCoding> =
    t.recursion("CMRCompositionU2ErgebnisseEmptyReasonCoding", () =>
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
export interface CMRCompositionU2ErgebnisseSectionEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU2ErgebnisseSectionEntryReference: t.Type<CMRCompositionU2ErgebnisseSectionEntryReference> =
    t.recursion("CMRCompositionU2ErgebnisseSectionEntryReference", () =>
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
export interface CMRCompositionU2PulsoxymetrieScreeningCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "252465000:405813007=56459004";
    display: "Pulse oximetry (procedure) : Procedure site - Direct (attribute) = Foot structure (body structure)";
    id?: string;
}

export const CMRCompositionU2PulsoxymetrieScreeningCodeCoding: t.Type<CMRCompositionU2PulsoxymetrieScreeningCodeCoding> =
    t.recursion("CMRCompositionU2PulsoxymetrieScreeningCodeCoding", () =>
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
export interface CMRCompositionU2PulsoxymetrieScreeningEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU2PulsoxymetrieScreeningEmptyReasonCoding: t.Type<CMRCompositionU2PulsoxymetrieScreeningEmptyReasonCoding> =
    t.recursion("CMRCompositionU2PulsoxymetrieScreeningEmptyReasonCoding", () =>
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
export interface CMRCompositionU2HoerscreeningEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU2HoerscreeningEmptyReasonCoding: t.Type<CMRCompositionU2HoerscreeningEmptyReasonCoding> =
    t.recursion("CMRCompositionU2HoerscreeningEmptyReasonCoding", () =>
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
export interface CMRCompositionU2ErweitertesNeugeborenenscreeningCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "738796001:363702006=428447008";
    display: "Collection of dried blood spot specimen (procedure) : Has focus (attribute) = Newborn blood spot screening (procedure)";
    id?: string;
}

export const CMRCompositionU2ErweitertesNeugeborenenscreeningCodeCoding: t.Type<CMRCompositionU2ErweitertesNeugeborenenscreeningCodeCoding> =
    t.recursion("CMRCompositionU2ErweitertesNeugeborenenscreeningCodeCoding", () =>
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
export interface CMRCompositionU2ErweitertesNeugeborenenscreeningEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU2ErweitertesNeugeborenenscreeningEmptyReasonCoding: t.Type<CMRCompositionU2ErweitertesNeugeborenenscreeningEmptyReasonCoding> =
    t.recursion("CMRCompositionU2ErweitertesNeugeborenenscreeningEmptyReasonCoding", () =>
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
export interface CMRCompositionU2MukoviszidoseScreeningCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "738796001:363702006=171191008";
    display: "Collection of dried blood spot specimen (procedure) : Has focus (attribute) = Cystic fibrosis screening (procedure)";
    id?: string;
}

export const CMRCompositionU2MukoviszidoseScreeningCodeCoding: t.Type<CMRCompositionU2MukoviszidoseScreeningCodeCoding> =
    t.recursion("CMRCompositionU2MukoviszidoseScreeningCodeCoding", () =>
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
export interface CMRCompositionU2MukoviszidoseScreeningEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU2MukoviszidoseScreeningEmptyReasonCoding: t.Type<CMRCompositionU2MukoviszidoseScreeningEmptyReasonCoding> =
    t.recursion("CMRCompositionU2MukoviszidoseScreeningEmptyReasonCoding", () =>
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
export interface CMRCompositionU2PerzentilkurvenCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "129822005";
    display: "Childhood growth AND/OR development finding (finding)";
    id?: string;
}

export const CMRCompositionU2PerzentilkurvenCodeCoding: t.Type<CMRCompositionU2PerzentilkurvenCodeCoding> =
    t.recursion("CMRCompositionU2PerzentilkurvenCodeCoding", () =>
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
export interface CMRCompositionU2PerzentilkurvenEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU2PerzentilkurvenEmptyReasonCoding: t.Type<CMRCompositionU2PerzentilkurvenEmptyReasonCoding> =
    t.recursion("CMRCompositionU2PerzentilkurvenEmptyReasonCoding", () =>
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
export interface CMRCompositionU2SchwangerschaftsanamneseCode {
    coding: Array<CMRCompositionU2SchwangerschaftsanamneseCodeCoding>;
    id?: string;
}

export const CMRCompositionU2SchwangerschaftsanamneseCode: t.Type<CMRCompositionU2SchwangerschaftsanamneseCode> =
    t.recursion("CMRCompositionU2SchwangerschaftsanamneseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2SchwangerschaftsanamneseCodeCoding
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
export interface CMRCompositionU2SchwangerschaftsanamneseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU2SchwangerschaftsanamneseText: t.Type<CMRCompositionU2SchwangerschaftsanamneseText> =
    t.recursion("CMRCompositionU2SchwangerschaftsanamneseText", () =>
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
export interface CMRCompositionU2SchwangerschaftsanamneseEntryReference {
    reference: string;
    id?: string;
    type?: ResourcetypesVS;
}

export const CMRCompositionU2SchwangerschaftsanamneseEntryReference: t.Type<CMRCompositionU2SchwangerschaftsanamneseEntryReference> =
    t.recursion("CMRCompositionU2SchwangerschaftsanamneseEntryReference", () =>
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
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU2GeburtsanamneseCode {
    coding: Array<CMRCompositionU2GeburtsanamneseCodeCoding>;
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseCode: t.Type<CMRCompositionU2GeburtsanamneseCode> =
    t.recursion("CMRCompositionU2GeburtsanamneseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU2GeburtsanamneseCodeCoding)
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
export interface CMRCompositionU2GeburtsanamneseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseText: t.Type<CMRCompositionU2GeburtsanamneseText> =
    t.recursion("CMRCompositionU2GeburtsanamneseText", () =>
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
export interface CMRCompositionU2GeburtsanamneseEmptyReason {
    coding: Array<CMRCompositionU2GeburtsanamneseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU2GeburtsanamneseEmptyReason: t.Type<CMRCompositionU2GeburtsanamneseEmptyReason> =
    t.recursion("CMRCompositionU2GeburtsanamneseEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2GeburtsanamneseEmptyReasonCoding
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
export interface CMRCompositionU2AktuelleAnamneseDesKindesCode {
    coding: Array<CMRCompositionU2AktuelleAnamneseDesKindesCodeCoding>;
    id?: string;
}

export const CMRCompositionU2AktuelleAnamneseDesKindesCode: t.Type<CMRCompositionU2AktuelleAnamneseDesKindesCode> =
    t.recursion("CMRCompositionU2AktuelleAnamneseDesKindesCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2AktuelleAnamneseDesKindesCodeCoding
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
export interface CMRCompositionU2AktuelleAnamneseDesKindesText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU2AktuelleAnamneseDesKindesText: t.Type<CMRCompositionU2AktuelleAnamneseDesKindesText> =
    t.recursion("CMRCompositionU2AktuelleAnamneseDesKindesText", () =>
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
export interface CMRCompositionU2AktuelleAnamneseDesKindesEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU2AktuelleAnamneseDesKindesEntryReference: t.Type<CMRCompositionU2AktuelleAnamneseDesKindesEntryReference> =
    t.recursion("CMRCompositionU2AktuelleAnamneseDesKindesEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_Current_Child_History|1.0.1"
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
export interface CMRCompositionU2AktuelleAnamneseDesKindesEmptyReason {
    coding: Array<CMRCompositionU2AktuelleAnamneseDesKindesEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU2AktuelleAnamneseDesKindesEmptyReason: t.Type<CMRCompositionU2AktuelleAnamneseDesKindesEmptyReason> =
    t.recursion("CMRCompositionU2AktuelleAnamneseDesKindesEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2AktuelleAnamneseDesKindesEmptyReasonCoding
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
export interface CMRCompositionU2FamilienanamneseCode {
    coding: Array<CMRCompositionU2FamilienanamneseCodeCoding>;
    id?: string;
}

export const CMRCompositionU2FamilienanamneseCode: t.Type<CMRCompositionU2FamilienanamneseCode> =
    t.recursion("CMRCompositionU2FamilienanamneseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU2FamilienanamneseCodeCoding)
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
export interface CMRCompositionU2FamilienanamneseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU2FamilienanamneseText: t.Type<CMRCompositionU2FamilienanamneseText> =
    t.recursion("CMRCompositionU2FamilienanamneseText", () =>
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
export interface CMRCompositionU2FamilienanamneseEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU2FamilienanamneseEntryReference: t.Type<CMRCompositionU2FamilienanamneseEntryReference> =
    t.recursion("CMRCompositionU2FamilienanamneseEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_Family_History|1.0.1"
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
export interface CMRCompositionU2FamilienanamneseEmptyReason {
    coding: Array<CMRCompositionU2FamilienanamneseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU2FamilienanamneseEmptyReason: t.Type<CMRCompositionU2FamilienanamneseEmptyReason> =
    t.recursion("CMRCompositionU2FamilienanamneseEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2FamilienanamneseEmptyReasonCoding
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
export interface CMRCompositionU2SozialanamneseCode {
    coding: Array<CMRCompositionU2SozialanamneseCodeCoding>;
    id?: string;
}

export const CMRCompositionU2SozialanamneseCode: t.Type<CMRCompositionU2SozialanamneseCode> =
    t.recursion("CMRCompositionU2SozialanamneseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU2SozialanamneseCodeCoding)
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
export interface CMRCompositionU2SozialanamneseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU2SozialanamneseText: t.Type<CMRCompositionU2SozialanamneseText> =
    t.recursion("CMRCompositionU2SozialanamneseText", () =>
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
export interface CMRCompositionU2SozialanamneseEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU2SozialanamneseEntryReference: t.Type<CMRCompositionU2SozialanamneseEntryReference> =
    t.recursion("CMRCompositionU2SozialanamneseEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_Social_History|1.0.1"
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
export interface CMRCompositionU2SozialanamneseEmptyReason {
    coding: Array<CMRCompositionU2SozialanamneseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU2SozialanamneseEmptyReason: t.Type<CMRCompositionU2SozialanamneseEmptyReason> =
    t.recursion("CMRCompositionU2SozialanamneseEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2SozialanamneseEmptyReasonCoding
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
export interface CMRCompositionU2UntersuchungCode {
    coding: Array<CMRCompositionU2UntersuchungCodeCoding>;
    id?: string;
}

export const CMRCompositionU2UntersuchungCode: t.Type<CMRCompositionU2UntersuchungCode> =
    t.recursion("CMRCompositionU2UntersuchungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU2UntersuchungCodeCoding)
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
export interface CMRCompositionU2UntersuchungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU2UntersuchungText: t.Type<CMRCompositionU2UntersuchungText> =
    t.recursion("CMRCompositionU2UntersuchungText", () =>
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
export interface CMRCompositionU2UntersuchungEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU2UntersuchungEntryReference: t.Type<CMRCompositionU2UntersuchungEntryReference> =
    t.recursion("CMRCompositionU2UntersuchungEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_Physical_Exam_Skin|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U4_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U3_Physical_Exam_Abdomen_Genitals|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U6_Physical_Exam_Heart_Blood_Circulation|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U3_Physical_Exam_Ears|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_Physical_Exam_Musculoskeletal_System|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_Physical_Exam_Head|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_Physical_Exam_Mouth_Nose|1.0.1",
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
export interface CMRCompositionU2UntersuchungEmptyReason {
    coding: Array<CMRCompositionU2UntersuchungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU2UntersuchungEmptyReason: t.Type<CMRCompositionU2UntersuchungEmptyReason> =
    t.recursion("CMRCompositionU2UntersuchungEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2UntersuchungEmptyReasonCoding
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
export interface CMRCompositionU2BeratungCode {
    coding: Array<CMRCompositionU2BeratungCodeCoding>;
    id?: string;
}

export const CMRCompositionU2BeratungCode: t.Type<CMRCompositionU2BeratungCode> =
    t.recursion("CMRCompositionU2BeratungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU2BeratungCodeCoding)
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
export interface CMRCompositionU2BeratungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU2BeratungText: t.Type<CMRCompositionU2BeratungText> =
    t.recursion("CMRCompositionU2BeratungText", () =>
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
export interface CMRCompositionU2BeratungEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU2BeratungEntryReference: t.Type<CMRCompositionU2BeratungEntryReference> =
    t.recursion("CMRCompositionU2BeratungEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U2_Consultation|1.0.1",
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
export interface CMRCompositionU2BeratungEmptyReason {
    coding: Array<CMRCompositionU2BeratungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU2BeratungEmptyReason: t.Type<CMRCompositionU2BeratungEmptyReason> =
    t.recursion("CMRCompositionU2BeratungEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU2BeratungEmptyReasonCoding)
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
export interface CMRCompositionU2ErgebnisseCode {
    coding: Array<CMRCompositionU2ErgebnisseCodeCoding>;
    id?: string;
}

export const CMRCompositionU2ErgebnisseCode: t.Type<CMRCompositionU2ErgebnisseCode> =
    t.recursion("CMRCompositionU2ErgebnisseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU2ErgebnisseCodeCoding)
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
export interface CMRCompositionU2ErgebnisseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU2ErgebnisseText: t.Type<CMRCompositionU2ErgebnisseText> =
    t.recursion("CMRCompositionU2ErgebnisseText", () =>
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
export interface CMRCompositionU2ErgebnisseEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU2ErgebnisseEntryReference: t.Type<CMRCompositionU2ErgebnisseEntryReference> =
    t.recursion("CMRCompositionU2ErgebnisseEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_Relevant_History_Results|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U6_Body_Measures|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Comments|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_No_Abnormality_Detected|1.0.1",
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
export interface CMRCompositionU2ErgebnisseEmptyReason {
    coding: Array<CMRCompositionU2ErgebnisseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU2ErgebnisseEmptyReason: t.Type<CMRCompositionU2ErgebnisseEmptyReason> =
    t.recursion("CMRCompositionU2ErgebnisseEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU2ErgebnisseEmptyReasonCoding)
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
export interface CMRCompositionU2ErgebnisseSection {
    title: "Prüfung, Aufklärung und ggf. Veranlassung der Durchführung von:";
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU2ErgebnisseSectionPruefungAufklaerungHinweis
    )[];
    entry?: Array<CMRCompositionU2ErgebnisseSectionEntryReference>;
}

export const CMRCompositionU2ErgebnisseSection: t.Type<CMRCompositionU2ErgebnisseSection> =
    t.recursion("CMRCompositionU2ErgebnisseSection", () =>
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
                                t.Type<CMRCompositionU2ErgebnisseSectionPruefungAufklaerungHinweis>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU2ErgebnisseSectionPruefungAufklaerungHinweis
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU2ErgebnisseSectionPruefungAufklaerungHinweis,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: MaxArray(1, CMRCompositionU2ErgebnisseSectionEntryReference)
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU2PulsoxymetrieScreeningCode {
    coding: Array<CMRCompositionU2PulsoxymetrieScreeningCodeCoding>;
    id?: string;
}

export const CMRCompositionU2PulsoxymetrieScreeningCode: t.Type<CMRCompositionU2PulsoxymetrieScreeningCode> =
    t.recursion("CMRCompositionU2PulsoxymetrieScreeningCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2PulsoxymetrieScreeningCodeCoding
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
export interface CMRCompositionU2PulsoxymetrieScreeningText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU2PulsoxymetrieScreeningText: t.Type<CMRCompositionU2PulsoxymetrieScreeningText> =
    t.recursion("CMRCompositionU2PulsoxymetrieScreeningText", () =>
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
export interface CMRCompositionU2PulsoxymetrieScreeningEntryReference {
    reference: string;
    id?: string;
    display?: string;
}

export const CMRCompositionU2PulsoxymetrieScreeningEntryReference: t.Type<CMRCompositionU2PulsoxymetrieScreeningEntryReference> =
    t.recursion("CMRCompositionU2PulsoxymetrieScreeningEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U3_Pulse_Oxymetry|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_U1_U3_Pulse_Oxymetry_Clarification|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
 */
export interface CMRCompositionU2PulsoxymetrieScreeningEmptyReason {
    coding: Array<CMRCompositionU2PulsoxymetrieScreeningEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU2PulsoxymetrieScreeningEmptyReason: t.Type<CMRCompositionU2PulsoxymetrieScreeningEmptyReason> =
    t.recursion("CMRCompositionU2PulsoxymetrieScreeningEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2PulsoxymetrieScreeningEmptyReasonCoding
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
export interface CMRCompositionU2HoerscreeningCode {
    coding: Array<
        | CMRCompositionU2HoerscreeningCodeCodeSnomed
        | CMRCompositionU2HoerscreeningCodeCodeLoinc
    >;
    id?: string;
}

export const CMRCompositionU2HoerscreeningCode: t.Type<CMRCompositionU2HoerscreeningCode> =
    t.recursion("CMRCompositionU2HoerscreeningCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRCompositionU2HoerscreeningCodeCodeSnomed>,
                                t.Type<CMRCompositionU2HoerscreeningCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRCompositionU2HoerscreeningCodeCodeSnomed,
                            CMRCompositionU2HoerscreeningCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRCompositionU2HoerscreeningCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRCompositionU2HoerscreeningCodeCodeLoinc,
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
export interface CMRCompositionU2HoerscreeningText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU2HoerscreeningText: t.Type<CMRCompositionU2HoerscreeningText> =
    t.recursion("CMRCompositionU2HoerscreeningText", () =>
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
export interface CMRCompositionU2HoerscreeningEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU2HoerscreeningEntryReference: t.Type<CMRCompositionU2HoerscreeningEntryReference> =
    t.recursion("CMRCompositionU2HoerscreeningEntryReference", () =>
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
export interface CMRCompositionU2HoerscreeningEmptyReason {
    coding: Array<CMRCompositionU2HoerscreeningEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU2HoerscreeningEmptyReason: t.Type<CMRCompositionU2HoerscreeningEmptyReason> =
    t.recursion("CMRCompositionU2HoerscreeningEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2HoerscreeningEmptyReasonCoding
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
export interface CMRCompositionU2ErweitertesNeugeborenenscreeningCode {
    coding: Array<CMRCompositionU2ErweitertesNeugeborenenscreeningCodeCoding>;
    id?: string;
}

export const CMRCompositionU2ErweitertesNeugeborenenscreeningCode: t.Type<CMRCompositionU2ErweitertesNeugeborenenscreeningCode> =
    t.recursion("CMRCompositionU2ErweitertesNeugeborenenscreeningCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2ErweitertesNeugeborenenscreeningCodeCoding
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
export interface CMRCompositionU2ErweitertesNeugeborenenscreeningText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU2ErweitertesNeugeborenenscreeningText: t.Type<CMRCompositionU2ErweitertesNeugeborenenscreeningText> =
    t.recursion("CMRCompositionU2ErweitertesNeugeborenenscreeningText", () =>
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
export interface CMRCompositionU2ErweitertesNeugeborenenscreeningEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU2ErweitertesNeugeborenenscreeningEntryReference: t.Type<CMRCompositionU2ErweitertesNeugeborenenscreeningEntryReference> =
    t.recursion("CMRCompositionU2ErweitertesNeugeborenenscreeningEntryReference", () =>
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
export interface CMRCompositionU2ErweitertesNeugeborenenscreeningEmptyReason {
    coding: Array<CMRCompositionU2ErweitertesNeugeborenenscreeningEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU2ErweitertesNeugeborenenscreeningEmptyReason: t.Type<CMRCompositionU2ErweitertesNeugeborenenscreeningEmptyReason> =
    t.recursion("CMRCompositionU2ErweitertesNeugeborenenscreeningEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2ErweitertesNeugeborenenscreeningEmptyReasonCoding
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
export interface CMRCompositionU2MukoviszidoseScreeningCode {
    coding: Array<CMRCompositionU2MukoviszidoseScreeningCodeCoding>;
    id?: string;
}

export const CMRCompositionU2MukoviszidoseScreeningCode: t.Type<CMRCompositionU2MukoviszidoseScreeningCode> =
    t.recursion("CMRCompositionU2MukoviszidoseScreeningCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2MukoviszidoseScreeningCodeCoding
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
export interface CMRCompositionU2MukoviszidoseScreeningText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU2MukoviszidoseScreeningText: t.Type<CMRCompositionU2MukoviszidoseScreeningText> =
    t.recursion("CMRCompositionU2MukoviszidoseScreeningText", () =>
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
export interface CMRCompositionU2MukoviszidoseScreeningEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU2MukoviszidoseScreeningEntryReference: t.Type<CMRCompositionU2MukoviszidoseScreeningEntryReference> =
    t.recursion("CMRCompositionU2MukoviszidoseScreeningEntryReference", () =>
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
export interface CMRCompositionU2MukoviszidoseScreeningEmptyReason {
    coding: Array<CMRCompositionU2MukoviszidoseScreeningEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU2MukoviszidoseScreeningEmptyReason: t.Type<CMRCompositionU2MukoviszidoseScreeningEmptyReason> =
    t.recursion("CMRCompositionU2MukoviszidoseScreeningEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2MukoviszidoseScreeningEmptyReasonCoding
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
export interface CMRCompositionU2PerzentilkurvenCode {
    coding: Array<CMRCompositionU2PerzentilkurvenCodeCoding>;
    id?: string;
}

export const CMRCompositionU2PerzentilkurvenCode: t.Type<CMRCompositionU2PerzentilkurvenCode> =
    t.recursion("CMRCompositionU2PerzentilkurvenCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU2PerzentilkurvenCodeCoding)
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
export interface CMRCompositionU2PerzentilkurvenText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU2PerzentilkurvenText: t.Type<CMRCompositionU2PerzentilkurvenText> =
    t.recursion("CMRCompositionU2PerzentilkurvenText", () =>
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
export interface CMRCompositionU2PerzentilkurvenEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU2PerzentilkurvenEntryReference: t.Type<CMRCompositionU2PerzentilkurvenEntryReference> =
    t.recursion("CMRCompositionU2PerzentilkurvenEntryReference", () =>
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
export interface CMRCompositionU2PerzentilkurvenEmptyReason {
    coding: Array<CMRCompositionU2PerzentilkurvenEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU2PerzentilkurvenEmptyReason: t.Type<CMRCompositionU2PerzentilkurvenEmptyReason> =
    t.recursion("CMRCompositionU2PerzentilkurvenEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU2PerzentilkurvenEmptyReasonCoding
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
export interface CMRCompositionU2U2Einleitung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "U2 Elterninformation zur Untersuchung vom 3. bis zum 10. Lebenstag Ihr Baby ist jetzt einige Tage alt. Wenn Sie in der Klinik sind, wird die zweite Untersuchung, die U2, dort stattfinden. Wenn Sie zu Hause sind, vereinbaren Sie so früh wie möglich einen Untersuchungstermin bei der Ärztin oder dem Arzt, die oder der Ihr Baby betreuen soll. Die U2 soll drei bis spätestens zehn Tage nach der Geburt stattfinden. Falls die Tests auf kritische angeborene Herzfehler, angeborene Stoffwechselstörungen und/oder Mukoviszidose sowie der Neugeborenen-Hörtest noch nicht durchgeführt wurden, sollten sie umgehend erfolgen, da es für einige Erkrankungen wichtig ist, dass die Diagnose schnell gestellt werden kann. Durch eine eingehende körperliche Untersuchung Ihres Babys sollen bei der U2 angeborene Erkrankungen und Fehlbildungen (z. B. Fehlbildungen des Herzens) erkannt und lebensbedrohliche Komplikationen vermieden werden. Hierzu gehört auch das Erkennen einer behandlungsbedürftigen Gelbsucht. Bei dieser und bei allen weiteren Untersuchungen wird Ihr Baby gemessen und gewogen. Es wird besonders geachtet auf: • die Haut • die Sinnesorgane • die Brust- und Bauchorgane • die Geschlechtsorgane • den Kopf (Mund, Nase, Augen, Ohren) • das Skelettsystem mit Muskeln und Nerven. Die Ärztin oder der Arzt bespricht mit Ihnen, was für die gesunde Entwicklung Ihres Babys wichtig ist. Sie erhalten Informationen zu regionalen Unterstützungsangeboten (z. B. Eltern-Kind-Hilfen, Frühe Hilfen). Bei dieser Untersuchung erhält Ihr Baby nochmals Vitamin K, um Blutungen vorzubeugen. Außerdem werden Sie über Vitamin D zur Vorbeugung der Knochenerkrankung Rachitis und über Fluorid beraten, das für die spätere Zahnhärtung wichtig ist. Gegebenenfalls werden diese Ihrem Baby verschrieben. Außerdem werden Sie zu den Themen Stillen und Ernährung beraten sowie über Maßnahmen, die das Risiko eines plötzlichen Kindstodes vermindern.";
    id?: string;
}

export const CMRCompositionU2U2Einleitung: t.Type<CMRCompositionU2U2Einleitung> =
    t.recursion("CMRCompositionU2U2Einleitung", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                    ),
                    valueString: Literal(
                        "U2 Elterninformation zur Untersuchung vom 3. bis zum 10. Lebenstag Ihr Baby ist jetzt einige Tage alt. Wenn Sie in der Klinik sind, wird die zweite Untersuchung, die U2, dort stattfinden. Wenn Sie zu Hause sind, vereinbaren Sie so früh wie möglich einen Untersuchungstermin bei der Ärztin oder dem Arzt, die oder der Ihr Baby betreuen soll. Die U2 soll drei bis spätestens zehn Tage nach der Geburt stattfinden. Falls die Tests auf kritische angeborene Herzfehler, angeborene Stoffwechselstörungen und/oder Mukoviszidose sowie der Neugeborenen-Hörtest noch nicht durchgeführt wurden, sollten sie umgehend erfolgen, da es für einige Erkrankungen wichtig ist, dass die Diagnose schnell gestellt werden kann. Durch eine eingehende körperliche Untersuchung Ihres Babys sollen bei der U2 angeborene Erkrankungen und Fehlbildungen (z. B. Fehlbildungen des Herzens) erkannt und lebensbedrohliche Komplikationen vermieden werden. Hierzu gehört auch das Erkennen einer behandlungsbedürftigen Gelbsucht. Bei dieser und bei allen weiteren Untersuchungen wird Ihr Baby gemessen und gewogen. Es wird besonders geachtet auf: • die Haut • die Sinnesorgane • die Brust- und Bauchorgane • die Geschlechtsorgane • den Kopf (Mund, Nase, Augen, Ohren) • das Skelettsystem mit Muskeln und Nerven. Die Ärztin oder der Arzt bespricht mit Ihnen, was für die gesunde Entwicklung Ihres Babys wichtig ist. Sie erhalten Informationen zu regionalen Unterstützungsangeboten (z. B. Eltern-Kind-Hilfen, Frühe Hilfen). Bei dieser Untersuchung erhält Ihr Baby nochmals Vitamin K, um Blutungen vorzubeugen. Außerdem werden Sie über Vitamin D zur Vorbeugung der Knochenerkrankung Rachitis und über Fluorid beraten, das für die spätere Zahnhärtung wichtig ist. Gegebenenfalls werden diese Ihrem Baby verschrieben. Außerdem werden Sie zu den Themen Stillen und Ernährung beraten sowie über Maßnahmen, die das Risiko eines plötzlichen Kindstodes vermindern."
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
export interface CMRCompositionU2TypeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "170107008";
    display: "Child examination - 10 days (procedure)";
    id?: string;
}

export const CMRCompositionU2TypeCoding: t.Type<CMRCompositionU2TypeCoding> = t.recursion(
    "CMRCompositionU2TypeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("170107008"),
                    display: Literal("Child examination - 10 days (procedure)")
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
export interface CMRCompositionU2CategoryCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "243788004";
    display: "Child examination (procedure)";
    id?: string;
}

export const CMRCompositionU2CategoryCoding: t.Type<CMRCompositionU2CategoryCoding> =
    t.recursion("CMRCompositionU2CategoryCoding", () =>
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
export interface CMRCompositionU2Schwangerschaftsanamnese {
    title: "Schwangerschaftsanamnese";
    code: CMRCompositionU2SchwangerschaftsanamneseCode;
    text: CMRCompositionU2SchwangerschaftsanamneseText;
    id?: string;
    extension?: (Extension | CMRCompositionU2SchwangerschaftsanamneseAnamneseAnweisung)[];
    entry?: CMRCompositionU2SchwangerschaftsanamneseEntryReference[];
}

export const CMRCompositionU2Schwangerschaftsanamnese: t.Type<CMRCompositionU2Schwangerschaftsanamnese> =
    t.recursion("CMRCompositionU2Schwangerschaftsanamnese", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Schwangerschaftsanamnese"),
                    code: CMRCompositionU2SchwangerschaftsanamneseCode,
                    text: CMRCompositionU2SchwangerschaftsanamneseText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU2SchwangerschaftsanamneseAnamneseAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU2SchwangerschaftsanamneseAnamneseAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU2SchwangerschaftsanamneseAnamneseAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU2SchwangerschaftsanamneseEntryReference)
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU2Geburtsanamnese {
    title: "Geburtsanamnese";
    code: CMRCompositionU2GeburtsanamneseCode;
    text: CMRCompositionU2GeburtsanamneseText;
    id?: string;
    extension?: (Extension | CMRCompositionU2GeburtsanamneseAnamneseAnweisung)[];
    emptyReason?: CMRCompositionU2GeburtsanamneseEmptyReason;
    section?: (
        | CMRCompositionU2GeburtsanamneseGeschlecht
        | CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostik
        | CMRCompositionU2GeburtsanamneseBaseExcess
        | CMRCompositionU2GeburtsanamnesePhWert
        | CMRCompositionU2GeburtsanamneseKindslage
        | CMRCompositionU2GeburtsanamneseGeburtsmodus
        | CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeit
        | CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTage
    )[];
}

export const CMRCompositionU2Geburtsanamnese: t.Type<CMRCompositionU2Geburtsanamnese> =
    t.recursion("CMRCompositionU2Geburtsanamnese", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Geburtsanamnese"),
                    code: CMRCompositionU2GeburtsanamneseCode,
                    text: CMRCompositionU2GeburtsanamneseText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU2GeburtsanamneseAnamneseAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU2GeburtsanamneseAnamneseAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU2GeburtsanamneseAnamneseAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    emptyReason: CMRCompositionU2GeburtsanamneseEmptyReason,
                    section: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRCompositionU2GeburtsanamneseGeschlecht>,
                                t.Type<CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostik>,
                                t.Type<CMRCompositionU2GeburtsanamneseBaseExcess>,
                                t.Type<CMRCompositionU2GeburtsanamnesePhWert>,
                                t.Type<CMRCompositionU2GeburtsanamneseKindslage>,
                                t.Type<CMRCompositionU2GeburtsanamneseGeburtsmodus>,
                                t.Type<CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeit>,
                                t.Type<CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTage>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRCompositionU2GeburtsanamneseGeschlecht,
                            CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostik,
                            CMRCompositionU2GeburtsanamneseBaseExcess,
                            CMRCompositionU2GeburtsanamnesePhWert,
                            CMRCompositionU2GeburtsanamneseKindslage,
                            CMRCompositionU2GeburtsanamneseGeburtsmodus,
                            CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeit,
                            CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTage
                        ]),
                        [
                            {
                                codec: CMRCompositionU2GeburtsanamneseGeschlecht,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "Geschlecht" }
                            },
                            {
                                codec: CMRCompositionU2GeburtsanamneseBefundePraenatalerDiagnostik,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "title",
                                    value: "Soweit vorhanden, Befunde einer pränatalen Diagnostik:"
                                }
                            },
                            {
                                codec: CMRCompositionU2GeburtsanamneseBaseExcess,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "Base excess" }
                            },
                            {
                                codec: CMRCompositionU2GeburtsanamnesePhWert,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "title",
                                    value: "pH-Wert (Nabelarterie)"
                                }
                            },
                            {
                                codec: CMRCompositionU2GeburtsanamneseKindslage,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "Kindslage" }
                            },
                            {
                                codec: CMRCompositionU2GeburtsanamneseGeburtsmodus,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "Geburtsmodus" }
                            },
                            {
                                codec: CMRCompositionU2GeburtsanamneseGeburtsdatumUhrzeit,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "Geburtsdatum" }
                            },
                            {
                                codec: CMRCompositionU2GeburtsanamneseSchwangerschaftswocheTage,
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
export interface CMRCompositionU2AktuelleAnamneseDesKindes {
    title: "Aktuelle Anamnese des Kindes";
    code: CMRCompositionU2AktuelleAnamneseDesKindesCode;
    text: CMRCompositionU2AktuelleAnamneseDesKindesText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU2AktuelleAnamneseDesKindesAnamneseAnweisung
        | CMRCompositionU2AktuelleAnamneseDesKindesHinweisNachtragen
    )[];
    entry?: CMRCompositionU2AktuelleAnamneseDesKindesEntryReference[];
    emptyReason?: CMRCompositionU2AktuelleAnamneseDesKindesEmptyReason;
}

export const CMRCompositionU2AktuelleAnamneseDesKindes: t.Type<CMRCompositionU2AktuelleAnamneseDesKindes> =
    t.recursion("CMRCompositionU2AktuelleAnamneseDesKindes", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Aktuelle Anamnese des Kindes"),
                    code: CMRCompositionU2AktuelleAnamneseDesKindesCode,
                    text: CMRCompositionU2AktuelleAnamneseDesKindesText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU2AktuelleAnamneseDesKindesAnamneseAnweisung>,
                                t.Type<CMRCompositionU2AktuelleAnamneseDesKindesHinweisNachtragen>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU2AktuelleAnamneseDesKindesAnamneseAnweisung,
                            CMRCompositionU2AktuelleAnamneseDesKindesHinweisNachtragen
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU2AktuelleAnamneseDesKindesAnamneseAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            },
                            {
                                codec: CMRCompositionU2AktuelleAnamneseDesKindesHinweisNachtragen,
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
                        CMRCompositionU2AktuelleAnamneseDesKindesEntryReference
                    ),
                    emptyReason: CMRCompositionU2AktuelleAnamneseDesKindesEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU2Familienanamnese {
    title: "Familienanamnese";
    code: CMRCompositionU2FamilienanamneseCode;
    text: CMRCompositionU2FamilienanamneseText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU2FamilienanamneseAnamneseAnweisung
        | CMRCompositionU2FamilienanamneseHinweisNachtragen
    )[];
    entry?: CMRCompositionU2FamilienanamneseEntryReference[];
    emptyReason?: CMRCompositionU2FamilienanamneseEmptyReason;
}

export const CMRCompositionU2Familienanamnese: t.Type<CMRCompositionU2Familienanamnese> =
    t.recursion("CMRCompositionU2Familienanamnese", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Familienanamnese"),
                    code: CMRCompositionU2FamilienanamneseCode,
                    text: CMRCompositionU2FamilienanamneseText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU2FamilienanamneseAnamneseAnweisung>,
                                t.Type<CMRCompositionU2FamilienanamneseHinweisNachtragen>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU2FamilienanamneseAnamneseAnweisung,
                            CMRCompositionU2FamilienanamneseHinweisNachtragen
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU2FamilienanamneseAnamneseAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            },
                            {
                                codec: CMRCompositionU2FamilienanamneseHinweisNachtragen,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU2FamilienanamneseEntryReference),
                    emptyReason: CMRCompositionU2FamilienanamneseEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU2Sozialanamnese {
    title: "Sozialanamnese";
    code: CMRCompositionU2SozialanamneseCode;
    text: CMRCompositionU2SozialanamneseText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU2SozialanamneseAnamneseAnweisung
        | CMRCompositionU2SozialanamneseHinweisNachtragen
    )[];
    entry?: Array<CMRCompositionU2SozialanamneseEntryReference>;
    emptyReason?: CMRCompositionU2SozialanamneseEmptyReason;
}

export const CMRCompositionU2Sozialanamnese: t.Type<CMRCompositionU2Sozialanamnese> =
    t.recursion("CMRCompositionU2Sozialanamnese", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Sozialanamnese"),
                    code: CMRCompositionU2SozialanamneseCode,
                    text: CMRCompositionU2SozialanamneseText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU2SozialanamneseAnamneseAnweisung>,
                                t.Type<CMRCompositionU2SozialanamneseHinweisNachtragen>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU2SozialanamneseAnamneseAnweisung,
                            CMRCompositionU2SozialanamneseHinweisNachtragen
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU2SozialanamneseAnamneseAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            },
                            {
                                codec: CMRCompositionU2SozialanamneseHinweisNachtragen,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: MaxArray(1, CMRCompositionU2SozialanamneseEntryReference),
                    emptyReason: CMRCompositionU2SozialanamneseEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU2Untersuchung {
    title: "Körperliche Untersuchung";
    code: CMRCompositionU2UntersuchungCode;
    text: CMRCompositionU2UntersuchungText;
    id?: string;
    extension?: (Extension | CMRCompositionU2UntersuchungUntersuchungAnweisung)[];
    entry?: CMRCompositionU2UntersuchungEntryReference[];
    emptyReason?: CMRCompositionU2UntersuchungEmptyReason;
}

export const CMRCompositionU2Untersuchung: t.Type<CMRCompositionU2Untersuchung> =
    t.recursion("CMRCompositionU2Untersuchung", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Körperliche Untersuchung"),
                    code: CMRCompositionU2UntersuchungCode,
                    text: CMRCompositionU2UntersuchungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU2UntersuchungUntersuchungAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU2UntersuchungUntersuchungAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU2UntersuchungUntersuchungAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU2UntersuchungEntryReference),
                    emptyReason: CMRCompositionU2UntersuchungEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU2Beratung {
    title: "Beratung";
    code: CMRCompositionU2BeratungCode;
    text: CMRCompositionU2BeratungText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU2BeratungBeratungAnweisung
        | CMRCompositionU2BeratungBeratungHinweis
    )[];
    entry?: CMRCompositionU2BeratungEntryReference[];
    emptyReason?: CMRCompositionU2BeratungEmptyReason;
}

export const CMRCompositionU2Beratung: t.Type<CMRCompositionU2Beratung> = t.recursion(
    "CMRCompositionU2Beratung",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Beratung"),
                    code: CMRCompositionU2BeratungCode,
                    text: CMRCompositionU2BeratungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU2BeratungBeratungAnweisung>,
                                t.Type<CMRCompositionU2BeratungBeratungHinweis>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU2BeratungBeratungAnweisung,
                            CMRCompositionU2BeratungBeratungHinweis
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU2BeratungBeratungAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            },
                            {
                                codec: CMRCompositionU2BeratungBeratungHinweis,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU2BeratungEntryReference),
                    emptyReason: CMRCompositionU2BeratungEmptyReason
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU2Ergebnisse {
    title: "Ergebnisse";
    code: CMRCompositionU2ErgebnisseCode;
    text: CMRCompositionU2ErgebnisseText;
    section: Array<CMRCompositionU2ErgebnisseSection>;
    id?: string;
    entry?: CMRCompositionU2ErgebnisseEntryReference[];
    emptyReason?: CMRCompositionU2ErgebnisseEmptyReason;
}

export const CMRCompositionU2Ergebnisse: t.Type<CMRCompositionU2Ergebnisse> = t.recursion(
    "CMRCompositionU2Ergebnisse",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Ergebnisse"),
                    code: CMRCompositionU2ErgebnisseCode,
                    text: CMRCompositionU2ErgebnisseText,
                    section: MinMaxArray(1, 1, CMRCompositionU2ErgebnisseSection)
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(CMRCompositionU2ErgebnisseEntryReference),
                    emptyReason: CMRCompositionU2ErgebnisseEmptyReason
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU2PulsoxymetrieScreening {
    title: "Pulsoxymetrie-Screening (Messung am Fuß)";
    code: CMRCompositionU2PulsoxymetrieScreeningCode;
    text: CMRCompositionU2PulsoxymetrieScreeningText;
    id?: string;
    entry?: CMRCompositionU2PulsoxymetrieScreeningEntryReference[];
    emptyReason?: CMRCompositionU2PulsoxymetrieScreeningEmptyReason;
}

export const CMRCompositionU2PulsoxymetrieScreening: t.Type<CMRCompositionU2PulsoxymetrieScreening> =
    t.recursion("CMRCompositionU2PulsoxymetrieScreening", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Pulsoxymetrie-Screening (Messung am Fuß)"),
                    code: CMRCompositionU2PulsoxymetrieScreeningCode,
                    text: CMRCompositionU2PulsoxymetrieScreeningText
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(CMRCompositionU2PulsoxymetrieScreeningEntryReference),
                    emptyReason: CMRCompositionU2PulsoxymetrieScreeningEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU2Hoerscreening {
    title: "Neugeborenen-Hörscreening";
    code: CMRCompositionU2HoerscreeningCode;
    text: CMRCompositionU2HoerscreeningText;
    id?: string;
    entry?: CMRCompositionU2HoerscreeningEntryReference[];
    emptyReason?: CMRCompositionU2HoerscreeningEmptyReason;
}

export const CMRCompositionU2Hoerscreening: t.Type<CMRCompositionU2Hoerscreening> =
    t.recursion("CMRCompositionU2Hoerscreening", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Neugeborenen-Hörscreening"),
                    code: CMRCompositionU2HoerscreeningCode,
                    text: CMRCompositionU2HoerscreeningText
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(CMRCompositionU2HoerscreeningEntryReference),
                    emptyReason: CMRCompositionU2HoerscreeningEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU2ErweitertesNeugeborenenscreening {
    title: "Erweitertes Neugeborenen-Screening";
    code: CMRCompositionU2ErweitertesNeugeborenenscreeningCode;
    text: CMRCompositionU2ErweitertesNeugeborenenscreeningText;
    id?: string;
    entry?: Array<CMRCompositionU2ErweitertesNeugeborenenscreeningEntryReference>;
    emptyReason?: CMRCompositionU2ErweitertesNeugeborenenscreeningEmptyReason;
}

export const CMRCompositionU2ErweitertesNeugeborenenscreening: t.Type<CMRCompositionU2ErweitertesNeugeborenenscreening> =
    t.recursion("CMRCompositionU2ErweitertesNeugeborenenscreening", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Erweitertes Neugeborenen-Screening"),
                    code: CMRCompositionU2ErweitertesNeugeborenenscreeningCode,
                    text: CMRCompositionU2ErweitertesNeugeborenenscreeningText
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(
                        1,
                        CMRCompositionU2ErweitertesNeugeborenenscreeningEntryReference
                    ),
                    emptyReason:
                        CMRCompositionU2ErweitertesNeugeborenenscreeningEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU2MukoviszidoseScreening {
    title: "Screening auf Mukoviszidose";
    code: CMRCompositionU2MukoviszidoseScreeningCode;
    text: CMRCompositionU2MukoviszidoseScreeningText;
    id?: string;
    entry?: CMRCompositionU2MukoviszidoseScreeningEntryReference[];
    emptyReason?: CMRCompositionU2MukoviszidoseScreeningEmptyReason;
}

export const CMRCompositionU2MukoviszidoseScreening: t.Type<CMRCompositionU2MukoviszidoseScreening> =
    t.recursion("CMRCompositionU2MukoviszidoseScreening", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Screening auf Mukoviszidose"),
                    code: CMRCompositionU2MukoviszidoseScreeningCode,
                    text: CMRCompositionU2MukoviszidoseScreeningText
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(CMRCompositionU2MukoviszidoseScreeningEntryReference),
                    emptyReason: CMRCompositionU2MukoviszidoseScreeningEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU2Perzentilkurven {
    title: "Perzentilkurven";
    code: CMRCompositionU2PerzentilkurvenCode;
    text: CMRCompositionU2PerzentilkurvenText;
    id?: string;
    entry?: Array<CMRCompositionU2PerzentilkurvenEntryReference>;
    emptyReason?: CMRCompositionU2PerzentilkurvenEmptyReason;
}

export const CMRCompositionU2Perzentilkurven: t.Type<CMRCompositionU2Perzentilkurven> =
    t.recursion("CMRCompositionU2Perzentilkurven", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Perzentilkurven"),
                    code: CMRCompositionU2PerzentilkurvenCode,
                    text: CMRCompositionU2PerzentilkurvenText
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(1, CMRCompositionU2PerzentilkurvenEntryReference),
                    emptyReason: CMRCompositionU2PerzentilkurvenEmptyReason
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRCompositionU2Meta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U2|1.0.1">;
    id?: string;
}

export const CMRCompositionU2Meta: t.Type<CMRCompositionU2Meta> = t.recursion(
    "CMRCompositionU2Meta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U2|1.0.1"
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
export interface CMRCompositionU2Type {
    coding: Array<CMRCompositionU2TypeCoding>;
    id?: string;
}

export const CMRCompositionU2Type: t.Type<CMRCompositionU2Type> = t.recursion(
    "CMRCompositionU2Type",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU2TypeCoding)
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
export interface CMRCompositionU2Category {
    coding: Array<CMRCompositionU2CategoryCoding>;
    id?: string;
}

export const CMRCompositionU2Category: t.Type<CMRCompositionU2Category> = t.recursion(
    "CMRCompositionU2Category",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU2CategoryCoding)
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
export interface CMRCompositionU2SubjectReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU2SubjectReference: t.Type<CMRCompositionU2SubjectReference> =
    t.recursion("CMRCompositionU2SubjectReference", () =>
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
export interface CMRCompositionU2EncounterReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU2EncounterReference: t.Type<CMRCompositionU2EncounterReference> =
    t.recursion("CMRCompositionU2EncounterReference", () =>
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
export interface CMRCompositionU2AuthorReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU2AuthorReference: t.Type<CMRCompositionU2AuthorReference> =
    t.recursion("CMRCompositionU2AuthorReference", () =>
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

interface CMRCompositionU2 {
    resourceType: "Composition";
    meta: CMRCompositionU2Meta;
    status: "final";
    type: CMRCompositionU2Type;
    category: Array<CMRCompositionU2Category>;
    subject: CMRCompositionU2SubjectReference;
    encounter: CMRCompositionU2EncounterReference;
    date: string;
    author: Array<CMRCompositionU2AuthorReference>;
    title: "U2";
    id?: string;
    text?: Narrative;
    extension?: (Extension | CMRCompositionU2U2Einleitung)[];
    section?: (
        | CMRCompositionU2Schwangerschaftsanamnese
        | CMRCompositionU2Geburtsanamnese
        | CMRCompositionU2AktuelleAnamneseDesKindes
        | CMRCompositionU2Familienanamnese
        | CMRCompositionU2Sozialanamnese
        | CMRCompositionU2Untersuchung
        | CMRCompositionU2Beratung
        | CMRCompositionU2Ergebnisse
        | CMRCompositionU2PulsoxymetrieScreening
        | CMRCompositionU2Hoerscreening
        | CMRCompositionU2ErweitertesNeugeborenenscreening
        | CMRCompositionU2MukoviszidoseScreening
        | CMRCompositionU2Perzentilkurven
    )[];
}

const CMRCompositionU2: t.Type<CMRCompositionU2> = t.recursion("CMRCompositionU2", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Composition"),
                meta: CMRCompositionU2Meta,
                status: Literal("final"),
                type: CMRCompositionU2Type,
                category: MinMaxArray(1, 1, CMRCompositionU2Category),
                subject: CMRCompositionU2SubjectReference,
                encounter: CMRCompositionU2EncounterReference,
                date: SCALARDateTime,
                author: MinMaxArray(1, 2, CMRCompositionU2AuthorReference),
                title: Literal("U2")
            }),
            t.partial({
                id: SCALARString,
                text: Narrative,
                extension: ReqArray<
                    t.UnionC<[t.Type<Extension>, t.Type<CMRCompositionU2U2Einleitung>]>,
                    t.Any
                >(
                    t.union([Extension, CMRCompositionU2U2Einleitung]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRCompositionU2U2Einleitung,
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
                            t.Type<CMRCompositionU2Schwangerschaftsanamnese>,
                            t.Type<CMRCompositionU2Geburtsanamnese>,
                            t.Type<CMRCompositionU2AktuelleAnamneseDesKindes>,
                            t.Type<CMRCompositionU2Familienanamnese>,
                            t.Type<CMRCompositionU2Sozialanamnese>,
                            t.Type<CMRCompositionU2Untersuchung>,
                            t.Type<CMRCompositionU2Beratung>,
                            t.Type<CMRCompositionU2Ergebnisse>,
                            t.Type<CMRCompositionU2PulsoxymetrieScreening>,
                            t.Type<CMRCompositionU2Hoerscreening>,
                            t.Type<CMRCompositionU2ErweitertesNeugeborenenscreening>,
                            t.Type<CMRCompositionU2MukoviszidoseScreening>,
                            t.Type<CMRCompositionU2Perzentilkurven>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        CMRCompositionU2Schwangerschaftsanamnese,
                        CMRCompositionU2Geburtsanamnese,
                        CMRCompositionU2AktuelleAnamneseDesKindes,
                        CMRCompositionU2Familienanamnese,
                        CMRCompositionU2Sozialanamnese,
                        CMRCompositionU2Untersuchung,
                        CMRCompositionU2Beratung,
                        CMRCompositionU2Ergebnisse,
                        CMRCompositionU2PulsoxymetrieScreening,
                        CMRCompositionU2Hoerscreening,
                        CMRCompositionU2ErweitertesNeugeborenenscreening,
                        CMRCompositionU2MukoviszidoseScreening,
                        CMRCompositionU2Perzentilkurven
                    ]),
                    [
                        {
                            codec: CMRCompositionU2Schwangerschaftsanamnese,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "title", value: "Schwangerschaftsanamnese" }
                        },
                        {
                            codec: CMRCompositionU2Geburtsanamnese,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "title", value: "Geburtsanamnese" }
                        },
                        {
                            codec: CMRCompositionU2AktuelleAnamneseDesKindes,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Aktuelle Anamnese des Kindes"
                            }
                        },
                        {
                            codec: CMRCompositionU2Familienanamnese,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Familienanamnese" }
                        },
                        {
                            codec: CMRCompositionU2Sozialanamnese,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Sozialanamnese" }
                        },
                        {
                            codec: CMRCompositionU2Untersuchung,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Körperliche Untersuchung" }
                        },
                        {
                            codec: CMRCompositionU2Beratung,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Beratung" }
                        },
                        {
                            codec: CMRCompositionU2Ergebnisse,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Ergebnisse" }
                        },
                        {
                            codec: CMRCompositionU2PulsoxymetrieScreening,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Pulsoxymetrie-Screening (Messung am Fuß)"
                            }
                        },
                        {
                            codec: CMRCompositionU2Hoerscreening,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "title", value: "Neugeborenen-Hörscreening" }
                        },
                        {
                            codec: CMRCompositionU2ErweitertesNeugeborenenscreening,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Erweitertes Neugeborenen-Screening"
                            }
                        },
                        {
                            codec: CMRCompositionU2MukoviszidoseScreening,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Screening auf Mukoviszidose"
                            }
                        },
                        {
                            codec: CMRCompositionU2Perzentilkurven,
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

export default CMRCompositionU2;
