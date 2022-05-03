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
import { Literal, Excess, MinMaxArray, ReqArray } from "../../../../CustomTypes";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARDate from "../../../../../Definitions/FHIR/4.0.1/Scalar/Date";
import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARInteger from "../../../../../Definitions/FHIR/4.0.1/Scalar/Integer";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import AdministrativegenderVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Administrativegender";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Child"

/**
 * In dieser Extension kann eine Nummer dokumentiert werden, welche im Falle einer Mehrlingsschwangerschaft der Reihenfolge der Geburt entspricht.
 */
export interface MRPatientChildIdentifierNummer {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Child_Number";
    valueInteger: number;
    id?: string;
}

export const MRPatientChildIdentifierNummer: t.Type<MRPatientChildIdentifierNummer> =
    t.recursion("MRPatientChildIdentifierNummer", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Child_Number"
                    ),
                    valueInteger: SCALARInteger
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
export interface MRPatientChildErgaenzendeAngaben {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: string;
    id?: string;
}

export const MRPatientChildErgaenzendeAngaben: t.Type<MRPatientChildErgaenzendeAngaben> =
    t.recursion("MRPatientChildErgaenzendeAngaben", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
                    ),
                    valueString: SCALARString
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
export interface MRPatientChildMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Child|1.0.0">;
    id?: string;
}

export const MRPatientChildMeta: t.Type<MRPatientChildMeta> = t.recursion(
    "MRPatientChildMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Child|1.0.0"
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
 * An identifier for this patient.
 */
export interface MRPatientChildIdentifier {
    id?: string;
    extension?: (Extension | MRPatientChildIdentifierNummer)[];
}

export const MRPatientChildIdentifier: t.Type<MRPatientChildIdentifier> = t.recursion(
    "MRPatientChildIdentifier",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<[t.Type<Extension>, t.Type<MRPatientChildIdentifierNummer>]>,
                    t.Any
                >(
                    t.union([Extension, MRPatientChildIdentifierNummer]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRPatientChildIdentifierNummer,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Child_Number"
                            }
                        }
                    ],
                    ["0", "*"]
                )
            })
        )
);

interface MRPatientChild {
    resourceType: "Patient";
    meta: MRPatientChildMeta;
    identifier: Array<MRPatientChildIdentifier>;
    birthDate: string;
    id?: string;
    text?: Narrative;
    extension?: (Extension | MRPatientChildErgaenzendeAngaben)[];
    gender?: AdministrativegenderVS;
    deceasedDateTime?: string;
    deceasedBoolean?: boolean;
}

const MRPatientChild: t.Type<MRPatientChild> = t.recursion("MRPatientChild", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Patient"),
                meta: MRPatientChildMeta,
                identifier: MinMaxArray(1, 1, MRPatientChildIdentifier),
                birthDate: SCALARDate
            }),
            t.partial({
                id: SCALARString,
                text: Narrative,
                extension: ReqArray<
                    t.UnionC<
                        [t.Type<Extension>, t.Type<MRPatientChildErgaenzendeAngaben>]
                    >,
                    t.Any
                >(
                    t.union([Extension, MRPatientChildErgaenzendeAngaben]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRPatientChildErgaenzendeAngaben,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                gender: AdministrativegenderVS,
                deceasedDateTime: SCALARDateTime,
                deceasedBoolean: SCALARBoolean
            })
        ])
    )
);

export default MRPatientChild;
