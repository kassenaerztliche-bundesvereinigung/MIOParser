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
import { Literal } from "../../../CustomTypes";
import SCALARBoolean from "../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Annotation from "../../../../Definitions/FHIR/4.0.1/Profile/Annotation";
import CodeableConcept from "../../../../Definitions/FHIR/4.0.1/Profile/CodeableConcept";
import ContactPoint from "../../../../Definitions/FHIR/4.0.1/Profile/ContactPoint";
import DevicenametypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Devicenametype";
import Identifier from "../../../../Definitions/FHIR/4.0.1/Profile/Identifier";
import Meta from "../../../../Definitions/FHIR/4.0.1/Profile/Meta";
import Narrative from "../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import ProdCharacteristic from "../../../../Definitions/FHIR/4.0.1/Profile/ProdCharacteristic";
import ProductShelfLife from "../../../../Definitions/FHIR/4.0.1/Profile/ProductShelfLife";
import Quantity from "../../../../Definitions/FHIR/4.0.1/Quantity/Quantity";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import Resource from "../../../../Definitions/FHIR/4.0.1/Profile/Resource";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_DeviceDefinition"

/**
 * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
 */
export interface DeviceDefinitionUdiDeviceIdentifier {
    deviceIdentifier: string;
    issuer: string;
    jurisdiction: string;
    id?: string;
}

export const DeviceDefinitionUdiDeviceIdentifier: t.Type<DeviceDefinitionUdiDeviceIdentifier> =
    t.recursion("DeviceDefinitionUdiDeviceIdentifier", () =>
        t.intersection([
            t.type({
                deviceIdentifier: SCALARString,
                issuer: SCALARUri,
                jurisdiction: SCALARUri
            }),
            t.partial({
                id: SCALARString
            })
        ])
    );

/**
 * A name given to the device to identify it.
 */
export interface DeviceDefinitionDeviceName {
    name: string;
    type: DevicenametypeVS;
    id?: string;
}

export const DeviceDefinitionDeviceName: t.Type<DeviceDefinitionDeviceName> = t.recursion(
    "DeviceDefinitionDeviceName",
    () =>
        t.intersection([
            t.type({
                name: SCALARString,
                type: DevicenametypeVS
            }),
            t.partial({
                id: SCALARString
            })
        ])
);

/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
 */
export interface DeviceDefinitionSpecialization {
    systemType: string;
    id?: string;
    version?: string;
}

export const DeviceDefinitionSpecialization: t.Type<DeviceDefinitionSpecialization> =
    t.recursion("DeviceDefinitionSpecialization", () =>
        t.intersection([
            t.type({
                systemType: SCALARString
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString
            })
        ])
    );

/**
 * Device capabilities.
 */
export interface DeviceDefinitionCapability {
    type: CodeableConcept;
    id?: string;
    description?: CodeableConcept[];
}

export const DeviceDefinitionCapability: t.Type<DeviceDefinitionCapability> = t.recursion(
    "DeviceDefinitionCapability",
    () =>
        t.intersection([
            t.type({
                type: CodeableConcept
            }),
            t.partial({
                id: SCALARString,
                description: t.array(CodeableConcept)
            })
        ])
);

/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 */
export interface DeviceDefinitionProperty {
    type: CodeableConcept;
    id?: string;
    valueQuantity?: Quantity[];
    valueCode?: CodeableConcept[];
}

export const DeviceDefinitionProperty: t.Type<DeviceDefinitionProperty> = t.recursion(
    "DeviceDefinitionProperty",
    () =>
        t.intersection([
            t.type({
                type: CodeableConcept
            }),
            t.partial({
                id: SCALARString,
                valueQuantity: t.array(Quantity),
                valueCode: t.array(CodeableConcept)
            })
        ])
);

/**
 * A substance used to create the material(s) of which the device is made.
 */
export interface DeviceDefinitionMaterial {
    substance: CodeableConcept;
    id?: string;
    alternate?: boolean;
    allergenicIndicator?: boolean;
}

export const DeviceDefinitionMaterial: t.Type<DeviceDefinitionMaterial> = t.recursion(
    "DeviceDefinitionMaterial",
    () =>
        t.intersection([
            t.type({
                substance: CodeableConcept
            }),
            t.partial({
                id: SCALARString,
                alternate: SCALARBoolean,
                allergenicIndicator: SCALARBoolean
            })
        ])
);

interface DeviceDefinition {
    type: CodeableConcept;
    resourceType?: "DeviceDefinition";
    id?: string;
    meta?: Meta;
    implicitRules?: string;
    language?: string;
    text?: Narrative;
    contained?: Resource[];
    identifier?: Identifier[];
    udiDeviceIdentifier?: DeviceDefinitionUdiDeviceIdentifier[];
    manufacturerString?: string;
    manufacturerReference?: Reference;
    deviceName?: DeviceDefinitionDeviceName[];
    modelNumber?: string;
    specialization?: DeviceDefinitionSpecialization[];
    version?: string[];
    safety?: CodeableConcept[];
    shelfLifeStorage?: ProductShelfLife[];
    physicalCharacteristics?: ProdCharacteristic;
    languageCode?: CodeableConcept[];
    capability?: DeviceDefinitionCapability[];
    property?: DeviceDefinitionProperty[];
    owner?: Reference;
    contact?: ContactPoint[];
    url?: string;
    onlineInformation?: string;
    note?: Annotation[];
    quantity?: Quantity;
    parentDevice?: Reference;
    material?: DeviceDefinitionMaterial[];
}

const DeviceDefinition: t.Type<DeviceDefinition> = t.recursion("DeviceDefinition", () =>
    t.intersection([
        t.type({
            type: CodeableConcept
        }),
        t.partial({
            resourceType: Literal("DeviceDefinition"),
            id: SCALARString,
            meta: Meta,
            implicitRules: SCALARUri,
            language: SCALARCode,
            text: Narrative,
            contained: t.array(Resource),
            identifier: t.array(Identifier),
            udiDeviceIdentifier: t.array(DeviceDefinitionUdiDeviceIdentifier),
            manufacturerString: SCALARString,
            manufacturerReference: Reference,
            deviceName: t.array(DeviceDefinitionDeviceName),
            modelNumber: SCALARString,
            specialization: t.array(DeviceDefinitionSpecialization),
            version: t.array(SCALARString),
            safety: t.array(CodeableConcept),
            shelfLifeStorage: t.array(ProductShelfLife),
            physicalCharacteristics: ProdCharacteristic,
            languageCode: t.array(CodeableConcept),
            capability: t.array(DeviceDefinitionCapability),
            property: t.array(DeviceDefinitionProperty),
            owner: Reference,
            contact: t.array(ContactPoint),
            url: SCALARUri,
            onlineInformation: SCALARUri,
            note: t.array(Annotation),
            quantity: Quantity,
            parentDevice: Reference,
            material: t.array(DeviceDefinitionMaterial)
        })
    ])
);

export default DeviceDefinition;
