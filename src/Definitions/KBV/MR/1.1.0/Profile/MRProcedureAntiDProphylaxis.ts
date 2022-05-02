import * as t from "io-ts";
import {
    Literal,
    Excess,
    MaxArray,
    MinMaxArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Annotation from "../../../../../Definitions/FHIR/4.0.1/Profile/Annotation";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Procedure_Anti_D_Prophylaxis"

/**
 * Content in other Language.
 */
export interface MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Anti-D-Prophylaxe";
    id?: string;
}

export const MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Anti-D-Prophylaxe")
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
export interface MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                        MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomedContent
                    )
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRProcedureAntiDProphylaxisCodeCodingDisplay {
    id?: string;
    extension?: MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRProcedureAntiDProphylaxisCodeCodingDisplay: t.Type<MRProcedureAntiDProphylaxisCodeCodingDisplay> =
    t.recursion("MRProcedureAntiDProphylaxisCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRProcedureAntiDProphylaxisCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "180190006";
    id?: string;
    _display?: MRProcedureAntiDProphylaxisCodeCodingDisplay;
    display?: string;
}

export const MRProcedureAntiDProphylaxisCodeCoding: t.Type<MRProcedureAntiDProphylaxisCodeCoding> =
    t.recursion("MRProcedureAntiDProphylaxisCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("180190006")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRProcedureAntiDProphylaxisCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The practitioner who was involved in the procedure.
 */
export interface MRProcedureAntiDProphylaxisPerformerActor {
    reference: string;
    id?: string;
}

export const MRProcedureAntiDProphylaxisPerformerActor: t.Type<MRProcedureAntiDProphylaxisPerformerActor> =
    t.recursion("MRProcedureAntiDProphylaxisPerformerActor", () =>
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
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRProcedureAntiDProphylaxisMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Procedure_Anti_D_Prophylaxis|1.1.0">;
    id?: string;
}

export const MRProcedureAntiDProphylaxisMeta: t.Type<MRProcedureAntiDProphylaxisMeta> =
    t.recursion("MRProcedureAntiDProphylaxisMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Procedure_Anti_D_Prophylaxis|1.1.0"
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
 * The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
 */
export interface MRProcedureAntiDProphylaxisCode {
    coding: Array<MRProcedureAntiDProphylaxisCodeCoding>;
    id?: string;
}

export const MRProcedureAntiDProphylaxisCode: t.Type<MRProcedureAntiDProphylaxisCode> =
    t.recursion("MRProcedureAntiDProphylaxisCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRProcedureAntiDProphylaxisCodeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The person, animal or group on which the procedure was performed.
 */
export interface MRProcedureAntiDProphylaxisSubject {
    reference: string;
    id?: string;
}

export const MRProcedureAntiDProphylaxisSubject: t.Type<MRProcedureAntiDProphylaxisSubject> =
    t.recursion("MRProcedureAntiDProphylaxisSubject", () =>
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
 * The Encounter during which this Procedure was created or performed or to which the creation of this record is tightly associated.
 */
export interface MRProcedureAntiDProphylaxisEncounter {
    reference: string;
    id?: string;
}

export const MRProcedureAntiDProphylaxisEncounter: t.Type<MRProcedureAntiDProphylaxisEncounter> =
    t.recursion("MRProcedureAntiDProphylaxisEncounter", () =>
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
 * Limited to "real" people rather than equipment.
 */
export interface MRProcedureAntiDProphylaxisPerformer {
    actor: MRProcedureAntiDProphylaxisPerformerActor;
    id?: string;
}

export const MRProcedureAntiDProphylaxisPerformer: t.Type<MRProcedureAntiDProphylaxisPerformer> =
    t.recursion("MRProcedureAntiDProphylaxisPerformer", () =>
        Excess(
            t.intersection([
                t.type({
                    actor: MRProcedureAntiDProphylaxisPerformerActor
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRProcedureAntiDProphylaxis {
    resourceType: "Procedure";
    meta: MRProcedureAntiDProphylaxisMeta;
    status: "completed";
    code: MRProcedureAntiDProphylaxisCode;
    subject: MRProcedureAntiDProphylaxisSubject;
    encounter: MRProcedureAntiDProphylaxisEncounter;
    performedDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRProcedureAntiDProphylaxisPerformer>;
    note?: Array<Annotation>;
}

const MRProcedureAntiDProphylaxis: t.Type<MRProcedureAntiDProphylaxis> = t.recursion(
    "MRProcedureAntiDProphylaxis",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Procedure"),
                    meta: MRProcedureAntiDProphylaxisMeta,
                    status: Literal("completed"),
                    code: MRProcedureAntiDProphylaxisCode,
                    subject: MRProcedureAntiDProphylaxisSubject,
                    encounter: MRProcedureAntiDProphylaxisEncounter,
                    performedDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRProcedureAntiDProphylaxisPerformer),
                    note: MaxArray(1, Annotation)
                })
            ])
        )
);

export default MRProcedureAntiDProphylaxis;
