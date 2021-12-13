import * as t from "io-ts";
import {
    Literal,
    Excess,
    MinMaxArray,
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import ObservationstatusVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Observationstatus";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Observation_Gapless_Documentation"

/**
 * Mit diesem Profil ist ein Haftungsausschluss definiert worden. Dieser muss an die Gapless_Documentation-Ressource hinzugefügt werden.
 */
export interface ZAEBObservationGaplessDocumentationDisclaimer {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_ZAEB_Disclaimer";
    valueString: "Die Vertragsparteien sind sich einig, dass der Zahnarzt im Nachhinein für eine falsche Jahresangabe nicht haftbar gemacht werden kann, wenn die Krankenkasse bei der Prüfung eines Heil- und Kostenplanes keinen Bonus oder eine andere Bonusstufe feststellt.";
    id?: string;
}

export const ZAEBObservationGaplessDocumentationDisclaimer: t.Type<ZAEBObservationGaplessDocumentationDisclaimer> =
    t.recursion("ZAEBObservationGaplessDocumentationDisclaimer", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_ZAEB_Disclaimer"
                    ),
                    valueString: Literal(
                        "Die Vertragsparteien sind sich einig, dass der Zahnarzt im Nachhinein für eine falsche Jahresangabe nicht haftbar gemacht werden kann, wenn die Krankenkasse bei der Prüfung eines Heil- und Kostenplanes keinen Bonus oder eine andere Bonusstufe feststellt."
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
export interface ZAEBObservationGaplessDocumentationMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Observation_Gapless_Documentation|1.1.0">;
    id?: string;
}

export const ZAEBObservationGaplessDocumentationMeta: t.Type<ZAEBObservationGaplessDocumentationMeta> =
    t.recursion("ZAEBObservationGaplessDocumentationMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Observation_Gapless_Documentation|1.1.0"
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
export interface ZAEBObservationGaplessDocumentationCode {
    text: "Datum, seit dem eine lückenlose Dokumentation in dem Papier-Zahnbonusheft nachweislich vorliegt.";
    id?: string;
}

export const ZAEBObservationGaplessDocumentationCode: t.Type<ZAEBObservationGaplessDocumentationCode> =
    t.recursion("ZAEBObservationGaplessDocumentationCode", () =>
        Excess(
            t.intersection([
                t.type({
                    text: Literal(
                        "Datum, seit dem eine lückenlose Dokumentation in dem Papier-Zahnbonusheft nachweislich vorliegt."
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
export interface ZAEBObservationGaplessDocumentationSubject {
    reference: string;
    id?: string;
}

export const ZAEBObservationGaplessDocumentationSubject: t.Type<ZAEBObservationGaplessDocumentationSubject> =
    t.recursion("ZAEBObservationGaplessDocumentationSubject", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Patient|1.1.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface ZAEBObservationGaplessDocumentation {
    resourceType: "Observation";
    meta: ZAEBObservationGaplessDocumentationMeta;
    status: ObservationstatusVS;
    code: ZAEBObservationGaplessDocumentationCode;
    subject: ZAEBObservationGaplessDocumentationSubject;
    valueDateTime: string;
    id?: string;
    text?: Narrative;
    extension?: (Extension | ZAEBObservationGaplessDocumentationDisclaimer)[];
}

const ZAEBObservationGaplessDocumentation: t.Type<ZAEBObservationGaplessDocumentation> =
    t.recursion("ZAEBObservationGaplessDocumentation", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: ZAEBObservationGaplessDocumentationMeta,
                    status: ObservationstatusVS,
                    code: ZAEBObservationGaplessDocumentationCode,
                    subject: ZAEBObservationGaplessDocumentationSubject,
                    valueDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<ZAEBObservationGaplessDocumentationDisclaimer>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            ZAEBObservationGaplessDocumentationDisclaimer
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: ZAEBObservationGaplessDocumentationDisclaimer,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_ZAEB_Disclaimer"
                                }
                            }
                        ],
                        ["0", "*"]
                    )
                })
            ])
        )
    );

export default ZAEBObservationGaplessDocumentation;
