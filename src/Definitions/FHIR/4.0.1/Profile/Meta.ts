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
import { ExtensibleCheck } from "../../../util";
import SCALARCanonical from "../../../../Definitions/FHIR/4.0.1/Scalar/Canonical";
import SCALARId from "../../../../Definitions/FHIR/4.0.1/Scalar/Id";
import SCALARInstant from "../../../../Definitions/FHIR/4.0.1/Scalar/Instant";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Coding from "../../../../Definitions/FHIR/4.0.1/Profile/Coding";
import SecuritylabelsVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Securitylabels";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Meta"

interface Meta {
    resourceType?: string;
    id?: string;
    versionId?: string;
    lastUpdated?: string;
    source?: string;
    profile?: string[];
    security?: SecuritylabelsVS[];
    tag?: Coding[];
}

const Meta: t.Type<Meta> = t.recursion("Meta", () =>
    t.partial({
        resourceType: t.string,
        id: SCALARString,
        versionId: SCALARId,
        lastUpdated: SCALARInstant,
        source: SCALARUri,
        profile: t.array(SCALARCanonical),
        security: t.array(ExtensibleCheck<t.Type<SecuritylabelsVS>>(SecuritylabelsVS)),
        tag: t.array(Coding)
    })
);

export default Meta;
