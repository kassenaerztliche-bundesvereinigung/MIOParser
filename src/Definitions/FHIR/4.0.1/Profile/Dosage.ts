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
import SCALARInteger from "../../../../Definitions/FHIR/4.0.1/Scalar/Integer";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import CodeableConcept from "../../../../Definitions/FHIR/4.0.1/Profile/CodeableConcept";
import Range from "../../../../Definitions/FHIR/4.0.1/Profile/Range";
import Ratio from "../../../../Definitions/FHIR/4.0.1/Profile/Ratio";
import SimpleQuantity from "../../../../Definitions/FHIR/4.0.1/Quantity/SimpleQuantity";
import Timing from "../../../../Definitions/FHIR/4.0.1/Profile/Timing";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Dosage"

/**
 * The amount of medication administered.
 */
export interface DosageDoseAndRate {
    id?: string;
    type?: CodeableConcept;
    doseRange?: Range;
    doseQuantity?: SimpleQuantity;
    rateRatio?: Ratio;
    rateRange?: Range;
    rateQuantity?: SimpleQuantity;
}

export const DosageDoseAndRate: t.Type<DosageDoseAndRate> = t.recursion(
    "DosageDoseAndRate",
    () =>
        t.partial({
            id: SCALARString,
            type: CodeableConcept,
            doseRange: Range,
            doseQuantity: SimpleQuantity,
            rateRatio: Ratio,
            rateRange: Range,
            rateQuantity: SimpleQuantity
        })
);

interface Dosage {
    resourceType?: "Dosage";
    id?: string;
    sequence?: number;
    text?: string;
    additionalInstruction?: CodeableConcept[];
    patientInstruction?: string;
    timing?: Timing;
    asNeededBoolean?: boolean;
    asNeededCodeableConcept?: CodeableConcept;
    site?: CodeableConcept;
    route?: CodeableConcept;
    method?: CodeableConcept;
    doseAndRate?: DosageDoseAndRate[];
    maxDosePerPeriod?: Ratio;
    maxDosePerAdministration?: SimpleQuantity;
    maxDosePerLifetime?: SimpleQuantity;
}

const Dosage: t.Type<Dosage> = t.recursion("Dosage", () =>
    t.partial({
        resourceType: Literal("Dosage"),
        id: SCALARString,
        sequence: SCALARInteger,
        text: SCALARString,
        additionalInstruction: t.array(CodeableConcept),
        patientInstruction: SCALARString,
        timing: Timing,
        asNeededBoolean: SCALARBoolean,
        asNeededCodeableConcept: CodeableConcept,
        site: CodeableConcept,
        route: CodeableConcept,
        method: CodeableConcept,
        doseAndRate: t.array(DosageDoseAndRate),
        maxDosePerPeriod: Ratio,
        maxDosePerAdministration: SimpleQuantity,
        maxDosePerLifetime: SimpleQuantity
    })
);

export default Dosage;
