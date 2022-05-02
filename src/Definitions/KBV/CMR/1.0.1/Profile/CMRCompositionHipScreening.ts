import * as t from "io-ts";
import {
    Literal,
    Excess,
    MinArray,
    MinMaxArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_Hip_Screening"

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionHipScreeningTypeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "171241003";
    display: "Congenital dislocation of the hip screening (procedure)";
    id?: string;
}

export const CMRCompositionHipScreeningTypeCoding: t.Type<CMRCompositionHipScreeningTypeCoding> =
    t.recursion("CMRCompositionHipScreeningTypeCoding", () =>
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
export interface CMRCompositionHipScreeningCategoryCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "243788004";
    display: "Child examination (procedure)";
    id?: string;
}

export const CMRCompositionHipScreeningCategoryCoding: t.Type<CMRCompositionHipScreeningCategoryCoding> =
    t.recursion("CMRCompositionHipScreeningCategoryCoding", () =>
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
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface CMRCompositionHipScreeningSectionEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionHipScreeningSectionEntry: t.Type<CMRCompositionHipScreeningSectionEntry> =
    t.recursion("CMRCompositionHipScreeningSectionEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U4_Problem_Of_Hip|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U4_Hip_Screening_History|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_U4_Hip_Screening|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Care_Plan_U3_U4_Hip_Screening_Plan|1.0.1"
                    ])
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
export interface CMRCompositionHipScreeningMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_Hip_Screening|1.0.1">;
    id?: string;
}

export const CMRCompositionHipScreeningMeta: t.Type<CMRCompositionHipScreeningMeta> =
    t.recursion("CMRCompositionHipScreeningMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_Hip_Screening|1.0.1"
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
export interface CMRCompositionHipScreeningType {
    coding: Array<CMRCompositionHipScreeningTypeCoding>;
    id?: string;
}

export const CMRCompositionHipScreeningType: t.Type<CMRCompositionHipScreeningType> =
    t.recursion("CMRCompositionHipScreeningType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionHipScreeningTypeCoding)
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
export interface CMRCompositionHipScreeningCategory {
    coding: Array<CMRCompositionHipScreeningCategoryCoding>;
    id?: string;
}

export const CMRCompositionHipScreeningCategory: t.Type<CMRCompositionHipScreeningCategory> =
    t.recursion("CMRCompositionHipScreeningCategory", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionHipScreeningCategoryCoding)
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
export interface CMRCompositionHipScreeningSubject {
    reference: string;
    id?: string;
}

export const CMRCompositionHipScreeningSubject: t.Type<CMRCompositionHipScreeningSubject> =
    t.recursion("CMRCompositionHipScreeningSubject", () =>
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
export interface CMRCompositionHipScreeningEncounter {
    reference: string;
    id?: string;
}

export const CMRCompositionHipScreeningEncounter: t.Type<CMRCompositionHipScreeningEncounter> =
    t.recursion("CMRCompositionHipScreeningEncounter", () =>
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
export interface CMRCompositionHipScreeningAuthor {
    reference: string;
    id?: string;
}

export const CMRCompositionHipScreeningAuthor: t.Type<CMRCompositionHipScreeningAuthor> =
    t.recursion("CMRCompositionHipScreeningAuthor", () =>
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

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionHipScreeningSection {
    title: "Screening auf Hüftgelenksdysplasie und -luxation";
    entry: Array<CMRCompositionHipScreeningSectionEntry>;
    id?: string;
}

export const CMRCompositionHipScreeningSection: t.Type<CMRCompositionHipScreeningSection> =
    t.recursion("CMRCompositionHipScreeningSection", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Screening auf Hüftgelenksdysplasie und -luxation"),
                    entry: MinArray(1, CMRCompositionHipScreeningSectionEntry)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRCompositionHipScreening {
    resourceType: "Composition";
    meta: CMRCompositionHipScreeningMeta;
    status: "final";
    type: CMRCompositionHipScreeningType;
    category: Array<CMRCompositionHipScreeningCategory>;
    subject: CMRCompositionHipScreeningSubject;
    encounter: CMRCompositionHipScreeningEncounter;
    date: string;
    author: Array<CMRCompositionHipScreeningAuthor>;
    title: "Spezielle Früherkennungsuntersuchungen";
    section: Array<CMRCompositionHipScreeningSection>;
    id?: string;
    text?: Narrative;
}

const CMRCompositionHipScreening: t.Type<CMRCompositionHipScreening> = t.recursion(
    "CMRCompositionHipScreening",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Composition"),
                    meta: CMRCompositionHipScreeningMeta,
                    status: Literal("final"),
                    type: CMRCompositionHipScreeningType,
                    category: MinMaxArray(1, 1, CMRCompositionHipScreeningCategory),
                    subject: CMRCompositionHipScreeningSubject,
                    encounter: CMRCompositionHipScreeningEncounter,
                    date: SCALARDateTime,
                    author: MinMaxArray(1, 2, CMRCompositionHipScreeningAuthor),
                    title: Literal("Spezielle Früherkennungsuntersuchungen"),
                    section: MinMaxArray(1, 1, CMRCompositionHipScreeningSection)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative
                })
            ])
        )
);

export default CMRCompositionHipScreening;
