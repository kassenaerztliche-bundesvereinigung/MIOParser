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
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Annotation from "../../../../../Definitions/FHIR/4.0.1/Profile/Annotation";

import MRRhesusSystemFetusVS from "../../../../../Definitions/KBV/MR/1.1.0/ValueSet/MRRhesusSystemFetus";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Group_Serology_Fetus"

/**
 * Content in other Language.
 */
export interface MRObservationBloodGroupSerologyFetusComponentCodeSnomedCTDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Rhesus-System";
    id?: string;
}

export const MRObservationBloodGroupSerologyFetusComponentCodeSnomedCTDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBloodGroupSerologyFetusComponentCodeSnomedCTDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationBloodGroupSerologyFetusComponentCodeSnomedCTDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Rhesus-System")
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
export interface MRObservationBloodGroupSerologyFetusComponentCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Rhesus-System";
    id?: string;
}

export const MRObservationBloodGroupSerologyFetusComponentCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationBloodGroupSerologyFetusComponentCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationBloodGroupSerologyFetusComponentCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Rhesus-System")
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
export interface MRObservationBloodGroupSerologyFetusComponentValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationBloodGroupSerologyFetusComponentValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBloodGroupSerologyFetusComponentValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationBloodGroupSerologyFetusComponentValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: SCALARString
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
export interface MRObservationBloodGroupSerologyFetusCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Bestimmung des fetalen RHD-Status";
    id?: string;
}

export const MRObservationBloodGroupSerologyFetusCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBloodGroupSerologyFetusCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationBloodGroupSerologyFetusCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Bestimmung des fetalen RHD-Status")
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
export interface MRObservationBloodGroupSerologyFetusComponentCodeSnomedCTDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBloodGroupSerologyFetusComponentCodeSnomedCTDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationBloodGroupSerologyFetusComponentCodeSnomedCTDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBloodGroupSerologyFetusComponentCodeSnomedCTDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationBloodGroupSerologyFetusComponentCodeSnomedCTDisplayAnzeigenameCodeSnomed",
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
                        extension: t.array(
                            MRObservationBloodGroupSerologyFetusComponentCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationBloodGroupSerologyFetusComponentCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBloodGroupSerologyFetusComponentCodeLoincDisplayAnzeigenameCodeLoincContent[];
}

export const MRObservationBloodGroupSerologyFetusComponentCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationBloodGroupSerologyFetusComponentCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "MRObservationBloodGroupSerologyFetusComponentCodeLoincDisplayAnzeigenameCodeLoinc",
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
                        extension: t.array(
                            MRObservationBloodGroupSerologyFetusComponentCodeLoincDisplayAnzeigenameCodeLoincContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationBloodGroupSerologyFetusComponentValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBloodGroupSerologyFetusComponentValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationBloodGroupSerologyFetusComponentValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBloodGroupSerologyFetusComponentValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationBloodGroupSerologyFetusComponentValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                        extension: t.array(
                            MRObservationBloodGroupSerologyFetusComponentValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationBloodGroupSerologyFetusCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBloodGroupSerologyFetusCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationBloodGroupSerologyFetusCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBloodGroupSerologyFetusCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationBloodGroupSerologyFetusCodeCodingDisplayAnzeigenameCodeSnomed",
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
                        extension: t.array(
                            MRObservationBloodGroupSerologyFetusCodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBloodGroupSerologyFetusComponentCodeSnomedCTDisplay {
    id?: string;
    extension?: MRObservationBloodGroupSerologyFetusComponentCodeSnomedCTDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationBloodGroupSerologyFetusComponentCodeSnomedCTDisplay: t.Type<MRObservationBloodGroupSerologyFetusComponentCodeSnomedCTDisplay> =
    t.recursion("MRObservationBloodGroupSerologyFetusComponentCodeSnomedCTDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationBloodGroupSerologyFetusComponentCodeSnomedCTDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBloodGroupSerologyFetusComponentCodeLoincDisplay {
    id?: string;
    extension?: MRObservationBloodGroupSerologyFetusComponentCodeLoincDisplayAnzeigenameCodeLoinc[];
    value?: string;
}

export const MRObservationBloodGroupSerologyFetusComponentCodeLoincDisplay: t.Type<MRObservationBloodGroupSerologyFetusComponentCodeLoincDisplay> =
    t.recursion("MRObservationBloodGroupSerologyFetusComponentCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationBloodGroupSerologyFetusComponentCodeLoincDisplayAnzeigenameCodeLoinc
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBloodGroupSerologyFetusComponentValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: MRObservationBloodGroupSerologyFetusComponentValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationBloodGroupSerologyFetusComponentValueCodeableConceptCodingDisplay: t.Type<MRObservationBloodGroupSerologyFetusComponentValueCodeableConceptCodingDisplay> =
    t.recursion(
        "MRObservationBloodGroupSerologyFetusComponentValueCodeableConceptCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: t.array(
                        MRObservationBloodGroupSerologyFetusComponentValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                    ),
                    value: SCALARString
                })
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBloodGroupSerologyFetusComponentCodeSnomedCT {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "363787002:704319004=87612001,704327008=119297000,370134009=123029007,370132008=117362005,370130000=410656007,246093002=16951006";
    id?: string;
    _display?: MRObservationBloodGroupSerologyFetusComponentCodeSnomedCTDisplay;
    display?: string;
}

export const MRObservationBloodGroupSerologyFetusComponentCodeSnomedCT: t.Type<MRObservationBloodGroupSerologyFetusComponentCodeSnomedCT> =
    t.recursion("MRObservationBloodGroupSerologyFetusComponentCodeSnomedCT", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal(
                        "363787002:704319004=87612001,704327008=119297000,370134009=123029007,370132008=117362005,370130000=410656007,246093002=16951006"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        MRObservationBloodGroupSerologyFetusComponentCodeSnomedCTDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBloodGroupSerologyFetusComponentCodeLoinc {
    system: "http://loinc.org";
    version: "2.71";
    code: "10331-7";
    id?: string;
    _display?: MRObservationBloodGroupSerologyFetusComponentCodeLoincDisplay;
    display?: string;
}

export const MRObservationBloodGroupSerologyFetusComponentCodeLoinc: t.Type<MRObservationBloodGroupSerologyFetusComponentCodeLoinc> =
    t.recursion("MRObservationBloodGroupSerologyFetusComponentCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.71"),
                    code: Literal("10331-7")
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        MRObservationBloodGroupSerologyFetusComponentCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBloodGroupSerologyFetusComponentValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRRhesusSystemFetusVS;
    id?: string;
    _display?: MRObservationBloodGroupSerologyFetusComponentValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRObservationBloodGroupSerologyFetusComponentValueCodeableConceptCoding: t.Type<MRObservationBloodGroupSerologyFetusComponentValueCodeableConceptCoding> =
    t.recursion(
        "MRObservationBloodGroupSerologyFetusComponentValueCodeableConceptCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: SCALARString,
                        code: MRRhesusSystemFetusVS
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            MRObservationBloodGroupSerologyFetusComponentValueCodeableConceptCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBloodGroupSerologyFetusCodeCodingDisplay {
    id?: string;
    extension?: MRObservationBloodGroupSerologyFetusCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationBloodGroupSerologyFetusCodeCodingDisplay: t.Type<MRObservationBloodGroupSerologyFetusCodeCodingDisplay> =
    t.recursion("MRObservationBloodGroupSerologyFetusCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationBloodGroupSerologyFetusCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationBloodGroupSerologyFetusComponentValueCodeableConcept {
    coding: Array<MRObservationBloodGroupSerologyFetusComponentValueCodeableConceptCoding>;
    id?: string;
    text?: string;
}

export const MRObservationBloodGroupSerologyFetusComponentValueCodeableConcept: t.Type<MRObservationBloodGroupSerologyFetusComponentValueCodeableConcept> =
    t.recursion("MRObservationBloodGroupSerologyFetusComponentValueCodeableConcept", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationBloodGroupSerologyFetusComponentValueCodeableConceptCoding
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBloodGroupSerologyFetusCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "365645007+106112009";
    id?: string;
    _display?: MRObservationBloodGroupSerologyFetusCodeCodingDisplay;
    display?: string;
}

export const MRObservationBloodGroupSerologyFetusCodeCoding: t.Type<MRObservationBloodGroupSerologyFetusCodeCoding> =
    t.recursion("MRObservationBloodGroupSerologyFetusCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("365645007+106112009")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBloodGroupSerologyFetusCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * Describes what was observed. Sometimes this is called the observation "code".
 */
export interface MRObservationBloodGroupSerologyFetusComponentCode {
    coding: Array<
        | MRObservationBloodGroupSerologyFetusComponentCodeSnomedCT
        | MRObservationBloodGroupSerologyFetusComponentCodeLoinc
    >;
    id?: string;
}

export const MRObservationBloodGroupSerologyFetusComponentCode: t.Type<MRObservationBloodGroupSerologyFetusComponentCode> =
    t.recursion("MRObservationBloodGroupSerologyFetusComponentCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationBloodGroupSerologyFetusComponentCodeSnomedCT>,
                                t.Type<MRObservationBloodGroupSerologyFetusComponentCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationBloodGroupSerologyFetusComponentCodeSnomedCT,
                            MRObservationBloodGroupSerologyFetusComponentCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationBloodGroupSerologyFetusComponentCodeSnomedCT,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationBloodGroupSerologyFetusComponentCodeLoinc,
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
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationBloodGroupSerologyFetusMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Group_Serology_Fetus|1.1.0">;
    id?: string;
}

export const MRObservationBloodGroupSerologyFetusMeta: t.Type<MRObservationBloodGroupSerologyFetusMeta> =
    t.recursion("MRObservationBloodGroupSerologyFetusMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Group_Serology_Fetus|1.1.0"
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
 * A unique identifier assigned to this observation.
 */
export interface MRObservationBloodGroupSerologyFetusIdentifier {
    system: string;
    value: string;
    id?: string;
}

export const MRObservationBloodGroupSerologyFetusIdentifier: t.Type<MRObservationBloodGroupSerologyFetusIdentifier> =
    t.recursion("MRObservationBloodGroupSerologyFetusIdentifier", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    value: SCALARString
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
export interface MRObservationBloodGroupSerologyFetusCode {
    coding: Array<MRObservationBloodGroupSerologyFetusCodeCoding>;
    id?: string;
}

export const MRObservationBloodGroupSerologyFetusCode: t.Type<MRObservationBloodGroupSerologyFetusCode> =
    t.recursion("MRObservationBloodGroupSerologyFetusCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationBloodGroupSerologyFetusCodeCoding
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
export interface MRObservationBloodGroupSerologyFetusSubject {
    reference: string;
    id?: string;
}

export const MRObservationBloodGroupSerologyFetusSubject: t.Type<MRObservationBloodGroupSerologyFetusSubject> =
    t.recursion("MRObservationBloodGroupSerologyFetusSubject", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Mother|1.1.0"
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
export interface MRObservationBloodGroupSerologyFetusEncounter {
    reference: string;
    id?: string;
}

export const MRObservationBloodGroupSerologyFetusEncounter: t.Type<MRObservationBloodGroupSerologyFetusEncounter> =
    t.recursion("MRObservationBloodGroupSerologyFetusEncounter", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_General|1.1.0"
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
export interface MRObservationBloodGroupSerologyFetusPerformer {
    reference: string;
    id?: string;
}

export const MRObservationBloodGroupSerologyFetusPerformer: t.Type<MRObservationBloodGroupSerologyFetusPerformer> =
    t.recursion("MRObservationBloodGroupSerologyFetusPerformer", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.1.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.1.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
 */
export interface MRObservationBloodGroupSerologyFetusComponent {
    code: MRObservationBloodGroupSerologyFetusComponentCode;
    valueCodeableConcept: MRObservationBloodGroupSerologyFetusComponentValueCodeableConcept;
    id?: string;
}

export const MRObservationBloodGroupSerologyFetusComponent: t.Type<MRObservationBloodGroupSerologyFetusComponent> =
    t.recursion("MRObservationBloodGroupSerologyFetusComponent", () =>
        Excess(
            t.intersection([
                t.type({
                    code: MRObservationBloodGroupSerologyFetusComponentCode,
                    valueCodeableConcept:
                        MRObservationBloodGroupSerologyFetusComponentValueCodeableConcept
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRObservationBloodGroupSerologyFetus {
    resourceType: "Observation";
    meta: MRObservationBloodGroupSerologyFetusMeta;
    status: "final";
    code: MRObservationBloodGroupSerologyFetusCode;
    subject: MRObservationBloodGroupSerologyFetusSubject;
    encounter: MRObservationBloodGroupSerologyFetusEncounter;
    effectiveDateTime: string;
    component: Array<MRObservationBloodGroupSerologyFetusComponent>;
    id?: string;
    text?: Narrative;
    identifier?: Array<MRObservationBloodGroupSerologyFetusIdentifier>;
    performer?: Array<MRObservationBloodGroupSerologyFetusPerformer>;
    note?: Array<Annotation>;
}

const MRObservationBloodGroupSerologyFetus: t.Type<MRObservationBloodGroupSerologyFetus> =
    t.recursion("MRObservationBloodGroupSerologyFetus", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationBloodGroupSerologyFetusMeta,
                    status: Literal("final"),
                    code: MRObservationBloodGroupSerologyFetusCode,
                    subject: MRObservationBloodGroupSerologyFetusSubject,
                    encounter: MRObservationBloodGroupSerologyFetusEncounter,
                    effectiveDateTime: SCALARDateTime,
                    component: MinMaxArray(
                        1,
                        1,
                        MRObservationBloodGroupSerologyFetusComponent
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    identifier: MaxArray(
                        1,
                        MRObservationBloodGroupSerologyFetusIdentifier
                    ),
                    performer: MaxArray(1, MRObservationBloodGroupSerologyFetusPerformer),
                    note: MaxArray(1, Annotation)
                })
            ])
        )
    );

export default MRObservationBloodGroupSerologyFetus;
