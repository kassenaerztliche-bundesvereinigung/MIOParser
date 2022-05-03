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
import { Literal, ExtensibleCheck } from "../../../CustomTypes";
import SCALARCanonical from "../../../../Definitions/FHIR/4.0.1/Scalar/Canonical";

import SCALARDateTime from "../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARPositiveInt from "../../../../Definitions/FHIR/4.0.1/Scalar/PositiveInt";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import AlltypesVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Alltypes";

import Coding from "../../../../Definitions/FHIR/4.0.1/Profile/Coding";
import Duration from "../../../../Definitions/FHIR/4.0.1/Profile/Duration";
import Period from "../../../../Definitions/FHIR/4.0.1/Profile/Period";

import SortdirectionVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Sortdirection";
import SubjecttypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Subjecttype";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/DataRequirement"

/**
 * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
 */
export interface DataRequirementCodeFilter {
    id?: string;
    path?: string;
    searchParam?: string;
    valueSet?: string;
    code?: Coding[];
}

export const DataRequirementCodeFilter: t.Type<DataRequirementCodeFilter> = t.recursion(
    "DataRequirementCodeFilter",
    () =>
        t.partial({
            id: SCALARString,
            path: SCALARString,
            searchParam: SCALARString,
            valueSet: SCALARCanonical,
            code: t.array(Coding)
        })
);

/**
 * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
 */
export interface DataRequirementDateFilter {
    id?: string;
    path?: string;
    searchParam?: string;
    valueDateTime?: string;
    valuePeriod?: Period;
    valueDuration?: Duration;
}

export const DataRequirementDateFilter: t.Type<DataRequirementDateFilter> = t.recursion(
    "DataRequirementDateFilter",
    () =>
        t.partial({
            id: SCALARString,
            path: SCALARString,
            searchParam: SCALARString,
            valueDateTime: SCALARDateTime,
            valuePeriod: Period,
            valueDuration: Duration
        })
);

/**
 * Specifies the order of the results to be returned.
 */
export interface DataRequirementSort {
    path: string;
    direction: SortdirectionVS;
    id?: string;
}

export const DataRequirementSort: t.Type<DataRequirementSort> = t.recursion(
    "DataRequirementSort",
    () =>
        t.intersection([
            t.type({
                path: SCALARString,
                direction: SortdirectionVS
            }),
            t.partial({
                id: SCALARString
            })
        ])
);

interface DataRequirement {
    type: AlltypesVS;
    resourceType?: "DataRequirement";
    id?: string;
    profile?: string[];
    subjectCodeableConcept?: SubjecttypeVS;
    mustSupport?: string[];
    codeFilter?: DataRequirementCodeFilter[];
    dateFilter?: DataRequirementDateFilter[];
    limit?: number;
    sort?: DataRequirementSort[];
}

const DataRequirement: t.Type<DataRequirement> = t.recursion("DataRequirement", () =>
    t.intersection([
        t.type({
            type: AlltypesVS
        }),
        t.partial({
            resourceType: Literal("DataRequirement"),
            id: SCALARString,
            profile: t.array(SCALARCanonical),
            subjectCodeableConcept: ExtensibleCheck<t.Type<SubjecttypeVS>>(SubjecttypeVS),
            mustSupport: t.array(SCALARString),
            codeFilter: t.array(DataRequirementCodeFilter),
            dateFilter: t.array(DataRequirementDateFilter),
            limit: SCALARPositiveInt,
            sort: t.array(DataRequirementSort)
        })
    ])
);

export default DataRequirement;
