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

import { AnyType, Vaccination, ZAEB } from "./../";

type Bundle =
    | typeof Vaccination.V1_00_000.Profile.BundleEntry
    | typeof ZAEB.V1_00_000.Profile.Bundle;

export type Composition =
    | typeof Vaccination.V1_00_000.Profile.CompositionAddendum
    | typeof Vaccination.V1_00_000.Profile.CompositionPrime
    | typeof ZAEB.V1_00_000.Profile.Composition;

/**
 * Defines the structure of a compositions within a bundle, it's required and prohibited entries.
 * Required fields are should contain resolved references.
 */
export type CompositionDefinition = {
    bundle: Bundle;
    compositions: {
        profile: Composition;
        requiredFields: string[];
        required: AnyType[];
        exclude: AnyType[];
    }[];
};

const IMCompositionStructure: CompositionDefinition = {
    bundle: Vaccination.V1_00_000.Profile.BundleEntry,
    compositions: [
        {
            profile: Vaccination.V1_00_000.Profile.CompositionAddendum,
            requiredFields: ["subject", "author", "section"],
            required: [Vaccination.V1_00_000.Profile.RecordAddendum],
            exclude: [
                Vaccination.V1_00_000.Profile.Condition,
                Vaccination.V1_00_000.Profile.ObservationImmunizationStatus,
                Vaccination.V1_00_000.Profile.RecordPrime
            ]
        },
        {
            profile: Vaccination.V1_00_000.Profile.CompositionPrime,
            requiredFields: ["subject", "author", "section"],
            required: [
                Vaccination.V1_00_000.Profile.Condition,
                Vaccination.V1_00_000.Profile.ObservationImmunizationStatus,
                Vaccination.V1_00_000.Profile.RecordPrime
            ],
            exclude: [Vaccination.V1_00_000.Profile.RecordAddendum]
        }
    ]
};

const ZBCompositionStructure: CompositionDefinition = {
    bundle: ZAEB.V1_00_000.Profile.Bundle,
    compositions: [
        {
            profile: ZAEB.V1_00_000.Profile.Composition,
            requiredFields: ["subject", "author", "section"],
            required: [
                ZAEB.V1_00_000.Profile.Observation,
                ZAEB.V1_00_000.Profile.GaplessDocumentation
            ],
            exclude: []
        }
    ]
};

const CompositionStructures: CompositionDefinition[] = [
    IMCompositionStructure,
    ZBCompositionStructure
];

export { IMCompositionStructure };
export { ZBCompositionStructure };
export { CompositionStructures };
