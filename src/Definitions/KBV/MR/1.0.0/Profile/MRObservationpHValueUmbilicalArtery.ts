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
import SCALARDecimal from "../../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_pH_Value_Umbilical_Artery"

/**
 * Content in other Language.
 */
export interface MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "pH-Wert (Nabelarterie)";
    id?: string;
}

export const MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("pH-Wert (Nabelarterie)")
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Content in other Language.
 */
export interface MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "pH-Wert (Nabelarterie)";
    id?: string;
}

export const MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("pH-Wert (Nabelarterie)")
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomed: t.Type<MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomed",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                        )
                    }),
                    t.partial({
                        id: SCALARString,
                        extension: ReqArray<
                            t.UnionC<
                                [
                                    t.Type<Extension>,
                                    t.Type<MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomedContent,
                                    occurrence: ["1", "1"],
                                    sliceBy: { path: "url", value: "content" }
                                }
                            ],
                            ["0", "*"]
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoinc",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                        )
                    }),
                    t.partial({
                        id: SCALARString,
                        extension: ReqArray<
                            t.UnionC<
                                [
                                    t.Type<Extension>,
                                    t.Type<MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoincContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoincContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoincContent,
                                    occurrence: ["1", "1"],
                                    sliceBy: { path: "url", value: "content" }
                                }
                            ],
                            ["0", "*"]
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplay: t.Type<MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplay> =
    t.recursion("MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationpHValueUmbilicalArteryCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const MRObservationpHValueUmbilicalArteryCodeLoincDisplay: t.Type<MRObservationpHValueUmbilicalArteryCodeLoincDisplay> =
    t.recursion("MRObservationpHValueUmbilicalArteryCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoinc,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationpHValueUmbilicalArteryCodeSnomedCT {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "363787002:370134009=123029007,704319004=12499000,246093002=89177007,704318007=702700007,370132008=30766002,704327008=703430008";
    id?: string;
    _display?: MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplay;
    display?: string;
}

export const MRObservationpHValueUmbilicalArteryCodeSnomedCT: t.Type<MRObservationpHValueUmbilicalArteryCodeSnomedCT> =
    t.recursion("MRObservationpHValueUmbilicalArteryCodeSnomedCT", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal(
                        "363787002:370134009=123029007,704319004=12499000,246093002=89177007,704318007=702700007,370132008=30766002,704327008=703430008"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationpHValueUmbilicalArteryCodeLoinc {
    system: "http://loinc.org";
    version: "2.68";
    code: "28646-8";
    id?: string;
    _display?: MRObservationpHValueUmbilicalArteryCodeLoincDisplay;
    display?: string;
}

export const MRObservationpHValueUmbilicalArteryCodeLoinc: t.Type<MRObservationpHValueUmbilicalArteryCodeLoinc> =
    t.recursion("MRObservationpHValueUmbilicalArteryCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.68"),
                    code: Literal("28646-8")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationpHValueUmbilicalArteryCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationpHValueUmbilicalArteryValueQuantity {
    value: number;
    unit: "(pH)";
    system: "http://unitsofmeasure.org";
    code: "[pH]";
    id?: string;
}

export const MRObservationpHValueUmbilicalArteryValueQuantity: t.Type<MRObservationpHValueUmbilicalArteryValueQuantity> =
    t.recursion("MRObservationpHValueUmbilicalArteryValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("(pH)"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("[pH]")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationpHValueUmbilicalArteryMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_pH_Value_Umbilical_Artery|1.0.0">;
    id?: string;
}

export const MRObservationpHValueUmbilicalArteryMeta: t.Type<MRObservationpHValueUmbilicalArteryMeta> =
    t.recursion("MRObservationpHValueUmbilicalArteryMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_pH_Value_Umbilical_Artery|1.0.0"
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
 * Describes what was observed. Sometimes this is called the observation "name".
 */
export interface MRObservationpHValueUmbilicalArteryCode {
    coding: Array<
        | MRObservationpHValueUmbilicalArteryCodeSnomedCT
        | MRObservationpHValueUmbilicalArteryCodeLoinc
    >;
    id?: string;
}

export const MRObservationpHValueUmbilicalArteryCode: t.Type<MRObservationpHValueUmbilicalArteryCode> =
    t.recursion("MRObservationpHValueUmbilicalArteryCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationpHValueUmbilicalArteryCodeSnomedCT>,
                                t.Type<MRObservationpHValueUmbilicalArteryCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationpHValueUmbilicalArteryCodeSnomedCT,
                            MRObservationpHValueUmbilicalArteryCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationpHValueUmbilicalArteryCodeSnomedCT,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationpHValueUmbilicalArteryCodeLoinc,
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
 * The patient, or group of patients, location, or device this observation is about and into whose record the observation is placed. If the actual focus of the observation is different from the subject (or a sample of, part, or region of the subject), the `focus` element or the `code` itself specifies the actual focus of the observation.
 */
export interface MRObservationpHValueUmbilicalArterySubject {
    reference: string;
    id?: string;
}

export const MRObservationpHValueUmbilicalArterySubject: t.Type<MRObservationpHValueUmbilicalArterySubject> =
    t.recursion("MRObservationpHValueUmbilicalArterySubject", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Child|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.
 */
export interface MRObservationpHValueUmbilicalArteryEncounter {
    reference: string;
    id?: string;
}

export const MRObservationpHValueUmbilicalArteryEncounter: t.Type<MRObservationpHValueUmbilicalArteryEncounter> =
    t.recursion("MRObservationpHValueUmbilicalArteryEncounter", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_General|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Who was responsible for asserting the observed value as "true".
 */
export interface MRObservationpHValueUmbilicalArteryPerformer {
    reference: string;
    id?: string;
}

export const MRObservationpHValueUmbilicalArteryPerformer: t.Type<MRObservationpHValueUmbilicalArteryPerformer> =
    t.recursion("MRObservationpHValueUmbilicalArteryPerformer", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRObservationpHValueUmbilicalArtery {
    resourceType: "Observation";
    meta: MRObservationpHValueUmbilicalArteryMeta;
    status: "final";
    code: MRObservationpHValueUmbilicalArteryCode;
    subject: MRObservationpHValueUmbilicalArterySubject;
    encounter: MRObservationpHValueUmbilicalArteryEncounter;
    effectiveDateTime: string;
    valueQuantity: MRObservationpHValueUmbilicalArteryValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationpHValueUmbilicalArteryPerformer>;
}

const MRObservationpHValueUmbilicalArtery: t.Type<MRObservationpHValueUmbilicalArtery> =
    t.recursion("MRObservationpHValueUmbilicalArtery", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationpHValueUmbilicalArteryMeta,
                    status: Literal("final"),
                    code: MRObservationpHValueUmbilicalArteryCode,
                    subject: MRObservationpHValueUmbilicalArterySubject,
                    encounter: MRObservationpHValueUmbilicalArteryEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: MRObservationpHValueUmbilicalArteryValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationpHValueUmbilicalArteryPerformer)
                })
            ])
        )
    );

export default MRObservationpHValueUmbilicalArtery;
