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
import { Literal } from "../../../CustomTypes";
import SCALARBase64Binary from "../../../../Definitions/FHIR/4.0.1/Scalar/Base64Binary";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDateTime from "../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUnsignedInt from "../../../../Definitions/FHIR/4.0.1/Scalar/UnsignedInt";
import SCALARUrl from "../../../../Definitions/FHIR/4.0.1/Scalar/Url";
import MimetypesVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Mimetypes";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Attachment"

interface Attachment {
    resourceType?: "Attachment";
    id?: string;
    contentType?: MimetypesVS;
    language?: string;
    data?: string;
    url?: string;
    size?: number;
    hash?: string;
    title?: string;
    creation?: string;
}

const Attachment: t.Type<Attachment> = t.recursion("Attachment", () =>
    t.partial({
        resourceType: Literal("Attachment"),
        id: SCALARString,
        contentType: MimetypesVS,
        language: SCALARCode,
        data: SCALARBase64Binary,
        url: SCALARUrl,
        size: SCALARUnsignedInt,
        hash: SCALARBase64Binary,
        title: SCALARString,
        creation: SCALARDateTime
    })
);

export default Attachment;
