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

import SCALARCanonical from "../../../../Definitions/FHIR/4.0.1/Scalar/Canonical";

import SCALARMarkdown from "../../../../Definitions/FHIR/4.0.1/Scalar/Markdown";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUrl from "../../../../Definitions/FHIR/4.0.1/Scalar/Url";
import Attachment from "../../../../Definitions/FHIR/4.0.1/Profile/Attachment";
import RelatedartifacttypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Relatedartifacttype";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/RelatedArtifact"

interface RelatedArtifact {
    type: RelatedartifacttypeVS;
    resourceType?: string;
    id?: string;
    label?: string;
    display?: string;
    citation?: string;
    url?: string;
    document?: Attachment;
    resource?: string;
}

const RelatedArtifact: t.Type<RelatedArtifact> = t.recursion("RelatedArtifact", () =>
    t.intersection([
        t.type({
            type: RelatedartifacttypeVS
        }),
        t.partial({
            resourceType: t.string,
            id: SCALARString,
            label: SCALARString,
            display: SCALARString,
            citation: SCALARMarkdown,
            url: SCALARUrl,
            document: Attachment,
            resource: SCALARCanonical
        })
    ])
);

export default RelatedArtifact;
