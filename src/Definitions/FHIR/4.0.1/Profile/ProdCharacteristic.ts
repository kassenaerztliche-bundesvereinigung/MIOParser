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

import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import Attachment from "../../../../Definitions/FHIR/4.0.1/Profile/Attachment";
import CodeableConcept from "../../../../Definitions/FHIR/4.0.1/Profile/CodeableConcept";
import Quantity from "../../../../Definitions/FHIR/4.0.1/Quantity/Quantity";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/ProdCharacteristic"

interface ProdCharacteristic {
    id?: string;
    height?: Quantity;
    width?: Quantity;
    depth?: Quantity;
    weight?: Quantity;
    nominalVolume?: Quantity;
    externalDiameter?: Quantity;
    shape?: string;
    color?: string[];
    imprint?: string[];
    image?: Attachment[];
    scoring?: CodeableConcept;
}

const ProdCharacteristic: t.Type<ProdCharacteristic> = t.recursion(
    "ProdCharacteristic",
    () =>
        t.partial({
            id: SCALARString,
            height: Quantity,
            width: Quantity,
            depth: Quantity,
            weight: Quantity,
            nominalVolume: Quantity,
            externalDiameter: Quantity,
            shape: SCALARString,
            color: t.array(SCALARString),
            imprint: t.array(SCALARString),
            image: t.array(Attachment),
            scoring: CodeableConcept
        })
);

export default ProdCharacteristic;
