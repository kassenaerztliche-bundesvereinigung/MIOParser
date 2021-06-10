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

import * as t from "io-ts";
import { Literal, Excess, MinMaxArray, CustomReference } from "../../../../CustomTypes";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import ZAEBPreventativeCheckupTypeVS from "../../../../../Definitions/KBV/ZB/1.00.000/ValueSet/ZAEBPreventativeCheckupType";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Observation"

/**
 * A reference to a code defined by a terminology system.
 */
export interface ZAEBObservationCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200309";
    code: ZAEBPreventativeCheckupTypeVS;
    display: string;
    id?: string;
    userSelected?: boolean;
}

export const ZAEBObservationCodeCoding: t.Type<ZAEBObservationCodeCoding> = t.recursion(
    "ZAEBObservationCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200309"
                    ),
                    code: ZAEBPreventativeCheckupTypeVS,
                    display: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface ZAEBObservationMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Observation|1.00.000"
    >;
    id?: string;
}

export const ZAEBObservationMeta: t.Type<ZAEBObservationMeta> = t.recursion(
    "ZAEBObservationMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Observation|1.00.000"
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
export interface ZAEBObservationCode {
    coding: Array<ZAEBObservationCodeCoding>;
    id?: string;
    text?: string;
}

export const ZAEBObservationCode: t.Type<ZAEBObservationCode> = t.recursion(
    "ZAEBObservationCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, ZAEBObservationCodeCoding)
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString
                })
            ])
        )
);

/**
 * The patient, or group of patients, location, or device this observation is about and into whose record the observation is placed. If the actual focus of the observation is different from the subject (or a sample of, part, or region of the subject), the `focus` element or the `code` itself specifies the actual focus of the observation.
 */
export interface ZAEBObservationSubject {
    reference: string;
    id?: string;
}

export const ZAEBObservationSubject: t.Type<ZAEBObservationSubject> = t.recursion(
    "ZAEBObservationSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Patient|1.00.000"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface ZAEBObservation {
    resourceType: "Observation";
    meta: ZAEBObservationMeta;
    status: "final";
    code: ZAEBObservationCode;
    subject: ZAEBObservationSubject;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
}

const ZAEBObservation: t.Type<ZAEBObservation> = t.recursion("ZAEBObservation", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Observation"),
                meta: ZAEBObservationMeta,
                status: Literal("final"),
                code: ZAEBObservationCode,
                subject: ZAEBObservationSubject,
                effectiveDateTime: SCALARDateTime,
                valueBoolean: Literal(true)
            }),
            t.partial({
                id: SCALARString
            })
        ])
    )
);

export default ZAEBObservation;
