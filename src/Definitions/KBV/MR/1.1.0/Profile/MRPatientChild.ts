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
import { Literal, Excess, MinMaxArray, ValueSetCheck } from "../../../../CustomTypes";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDate from "../../../../../Definitions/FHIR/4.0.1/Scalar/Date";
import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import MRGenderExtensionVS from "../../../../../Definitions/KBV/MR/1.1.0/ValueSet/MRGenderExtension";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Child"

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRPatientChildPidTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "MR";
    display: "Medical record number";
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const MRPatientChildPidTypeCoding: t.Type<MRPatientChildPidTypeCoding> =
    t.recursion("MRPatientChildPidTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                    code: Literal("MR"),
                    display: Literal("Medical record number")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
    );

/**
 * Provides a reason why the expected value or elements in the element that is extended are missing.
 */
export interface MRPatientChildNameUnknownDataabsentreason {
    url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason";
    valueCode: "unknown";
    id?: string;
}

export const MRPatientChildNameUnknownDataabsentreason: t.Type<MRPatientChildNameUnknownDataabsentreason> =
    t.recursion("MRPatientChildNameUnknownDataabsentreason", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
                    ),
                    valueCode: Literal("unknown")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface MRPatientChildPidType {
    coding: Array<MRPatientChildPidTypeCoding>;
    id?: string;
    text?: string;
}

export const MRPatientChildPidType: t.Type<MRPatientChildPidType> = t.recursion(
    "MRPatientChildPidType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRPatientChildPidTypeCoding)
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString
                })
            ])
        )
);

/**
 * Optional Extension Element - found in all resources.
 */
export interface MRPatientChildGenderOtheramtlich {
    url: "http://fhir.de/StructureDefinition/gender-amtlich-de";
    valueCoding: {
        system?: string;
        version?: string;
        code?: MRGenderExtensionVS;
        display?: string;
        userSelected?: boolean;
    }[];
    id?: string;
}

export const MRPatientChildGenderOtheramtlich: t.Type<MRPatientChildGenderOtheramtlich> =
    t.recursion("MRPatientChildGenderOtheramtlich", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("http://fhir.de/StructureDefinition/gender-amtlich-de"),
                    valueCoding: t.array(
                        t.partial({
                            system: t.string,
                            version: t.string,
                            code: ValueSetCheck<t.Type<MRGenderExtensionVS>>(
                                MRGenderExtensionVS
                            ),
                            display: t.string,
                            userSelected: t.boolean
                        })
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Provides a reason why the expected value or elements in the element that is extended are missing.
 */
export interface MRPatientChildBirthDateDataabsentreason {
    url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason";
    valueCode: "unknown";
    id?: string;
}

export const MRPatientChildBirthDateDataabsentreason: t.Type<MRPatientChildBirthDateDataabsentreason> =
    t.recursion("MRPatientChildBirthDateDataabsentreason", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
                    ),
                    valueCode: Literal("unknown")
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
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface MRPatientChildPid {
    type: MRPatientChildPidType;
    system: "urn:ietf:rfc:3986";
    value: string;
    id?: string;
    use?: "usual";
}

export const MRPatientChildPid: t.Type<MRPatientChildPid> = t.recursion(
    "MRPatientChildPid",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: MRPatientChildPidType,
                    system: Literal("urn:ietf:rfc:3986"),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    use: Literal("usual")
                })
            ])
        )
);

/**
 * A name associated with the individual.
 */
export interface MRPatientChildNameUnknown {
    use: "temp";
    id?: string;
    extension?: MRPatientChildNameUnknownDataabsentreason[];
}

export const MRPatientChildNameUnknown: t.Type<MRPatientChildNameUnknown> = t.recursion(
    "MRPatientChildNameUnknown",
    () =>
        Excess(
            t.intersection([
                t.type({
                    use: Literal("temp")
                }),
                t.partial({
                    id: SCALARString,
                    extension: t.array(MRPatientChildNameUnknownDataabsentreason)
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRPatientChildMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Child|1.1.0">;
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
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Child|1.1.0"
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
 * Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.
 */
export interface MRPatientChildGender {
    id?: string;
    extension?: MRPatientChildGenderOtheramtlich[];
    value?: string;
}

export const MRPatientChildGender: t.Type<MRPatientChildGender> = t.recursion(
    "MRPatientChildGender",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(MRPatientChildGenderOtheramtlich),
                value: SCALARString
            })
        )
);

/**
 * The date of birth for the individual.
 */
export interface MRPatientChildBirthDate {
    id?: string;
    extension?: MRPatientChildBirthDateDataabsentreason[];
    value?: string;
}

export const MRPatientChildBirthDate: t.Type<MRPatientChildBirthDate> = t.recursion(
    "MRPatientChildBirthDate",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(MRPatientChildBirthDateDataabsentreason),
                value: SCALARDate
            })
        )
);

interface MRPatientChild {
    resourceType: "Patient";
    meta: MRPatientChildMeta;
    identifier: Array<MRPatientChildPid>;
    name: Array<MRPatientChildNameUnknown>;
    id?: string;
    text?: Narrative;
    extension?: MRPatientChildErgaenzendeAngaben[];
    _gender?: MRPatientChildGender;
    gender?: string;
    _birthDate?: MRPatientChildBirthDate;
    birthDate?: string;
    deceasedDateTime?: string;
    deceasedBoolean?: boolean;
}

const MRPatientChild: t.Type<MRPatientChild> = t.recursion("MRPatientChild", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Patient"),
                meta: MRPatientChildMeta,
                identifier: MinMaxArray(1, 1, MRPatientChildPid),
                name: MinMaxArray(1, 1, MRPatientChildNameUnknown)
            }),
            t.partial({
                id: SCALARString,
                text: Narrative,
                extension: t.array(MRPatientChildErgaenzendeAngaben),
                _gender: MRPatientChildGender,
                gender: SCALARCode,
                _birthDate: MRPatientChildBirthDate,
                birthDate: SCALARDate,
                deceasedDateTime: SCALARDateTime,
                deceasedBoolean: SCALARBoolean
            })
        ])
    )
);

export default MRPatientChild;
