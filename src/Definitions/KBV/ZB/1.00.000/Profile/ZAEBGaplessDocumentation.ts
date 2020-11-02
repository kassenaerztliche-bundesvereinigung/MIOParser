/*
 * Licensed to the Kassenärztliche Bundesvereinigung (KBV) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The KBV licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as t from "io-ts";
import {
    Excess,
    Literal,
    MinArray,
    MaxArray,
    MinMaxArray,
    Req,
    ReqArray
} from "../../../../util";
import SCALARCanonical from "../../../../../Definitions/FHIR/4.0.1/Scalar/Canonical";
import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import ObservationstatusVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Observationstatus";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Gapless_Documentation"

/**
 * Optional Extension Element - found in all resources.
 */
export interface ZAEBGaplessDocumentationDisclaimer {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_ZAEB_Disclaimer";
    valueString: "Die Vertragsparteien sind sich einig, dass der Zahnarzt im Nachhinein für eine falsche Jahresangabe nicht haftbar gemacht werden kann, wenn die Krankenkasse bei der Prüfung eines Heil- und Kostenplanes keinen Bonus oder eine andere Bonusstufe feststellt.";
    id?: string;
}

export const ZAEBGaplessDocumentationDisclaimer: t.Type<ZAEBGaplessDocumentationDisclaimer> = t.recursion(
    "ZAEBGaplessDocumentationDisclaimer",
    () =>
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
export interface ZAEBGaplessDocumentationMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Gapless_Documentation|1.00.000"
    >;
    id?: string;
}

export const ZAEBGaplessDocumentationMeta: t.Type<ZAEBGaplessDocumentationMeta> = t.recursion(
    "ZAEBGaplessDocumentationMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Gapless_Documentation|1.00.000"
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
export interface ZAEBGaplessDocumentationCode {
    text: "Datum, seit dem eine lückenlose Dokumentation in dem Papier-Zahnbonusheft nachweislich vorliegt.";
    id?: string;
}

export const ZAEBGaplessDocumentationCode: t.Type<ZAEBGaplessDocumentationCode> = t.recursion(
    "ZAEBGaplessDocumentationCode",
    () =>
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
export interface ZAEBGaplessDocumentationSubject {
    reference: string;
    id?: string;
}

export const ZAEBGaplessDocumentationSubject: t.Type<ZAEBGaplessDocumentationSubject> = t.recursion(
    "ZAEBGaplessDocumentationSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface ZAEBGaplessDocumentation {
    meta: ZAEBGaplessDocumentationMeta;
    status: ObservationstatusVS;
    code: ZAEBGaplessDocumentationCode;
    subject: ZAEBGaplessDocumentationSubject;
    valueDateTime: string;
    resourceType?: string;
    id?: string;
    extension?: (Extension | ZAEBGaplessDocumentationDisclaimer)[];
}

const ZAEBGaplessDocumentation: t.Type<ZAEBGaplessDocumentation> = t.recursion(
    "ZAEBGaplessDocumentation",
    () =>
        Excess(
            t.intersection([
                t.type({
                    meta: ZAEBGaplessDocumentationMeta,
                    status: ObservationstatusVS,
                    code: ZAEBGaplessDocumentationCode,
                    subject: ZAEBGaplessDocumentationSubject,
                    valueDateTime: SCALARDateTime
                }),
                t.partial({
                    resourceType: t.string,
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<ZAEBGaplessDocumentationDisclaimer>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([Extension, ZAEBGaplessDocumentationDisclaimer]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: ZAEBGaplessDocumentationDisclaimer,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_ZAEB_Disclaimer"
                                }
                            }
                        ],
                        ["0", "*"]
                    )
                })
            ])
        )
);

export default ZAEBGaplessDocumentation;
