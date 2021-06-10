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

import SCALARDateTime from "../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARDecimal from "../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARPositiveInt from "../../../../Definitions/FHIR/4.0.1/Scalar/PositiveInt";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARTime from "../../../../Definitions/FHIR/4.0.1/Scalar/Time";
import SCALARUnsignedInt from "../../../../Definitions/FHIR/4.0.1/Scalar/UnsignedInt";
import CodeableConcept from "../../../../Definitions/FHIR/4.0.1/Profile/CodeableConcept";
import DaysofweekVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Daysofweek";
import Duration from "../../../../Definitions/FHIR/4.0.1/Profile/Duration";
import EventtimingVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Eventtiming";
import Period from "../../../../Definitions/FHIR/4.0.1/Profile/Period";
import Range from "../../../../Definitions/FHIR/4.0.1/Profile/Range";
import UnitsoftimeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Unitsoftime";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Timing"

/**
 * A set of rules that describe when the event is scheduled.
 */
export interface TimingRepeat {
    id?: string;
    boundsDuration?: Duration;
    boundsRange?: Range;
    boundsPeriod?: Period;
    count?: number;
    countMax?: number;
    duration?: number;
    durationMax?: number;
    durationUnit?: UnitsoftimeVS;
    frequency?: number;
    frequencyMax?: number;
    period?: number;
    periodMax?: number;
    periodUnit?: UnitsoftimeVS;
    dayOfWeek?: DaysofweekVS[];
    timeOfDay?: string[];
    when?: EventtimingVS[];
    offset?: number;
}

export const TimingRepeat: t.Type<TimingRepeat> = t.recursion("TimingRepeat", () =>
    t.partial({
        id: SCALARString,
        boundsDuration: Duration,
        boundsRange: Range,
        boundsPeriod: Period,
        count: SCALARPositiveInt,
        countMax: SCALARPositiveInt,
        duration: SCALARDecimal,
        durationMax: SCALARDecimal,
        durationUnit: UnitsoftimeVS,
        frequency: SCALARPositiveInt,
        frequencyMax: SCALARPositiveInt,
        period: SCALARDecimal,
        periodMax: SCALARDecimal,
        periodUnit: UnitsoftimeVS,
        dayOfWeek: t.array(DaysofweekVS),
        timeOfDay: t.array(SCALARTime),
        when: t.array(EventtimingVS),
        offset: SCALARUnsignedInt
    })
);

interface Timing {
    resourceType?: "Timing";
    id?: string;
    event?: string[];
    repeat?: TimingRepeat;
    code?: CodeableConcept;
}

const Timing: t.Type<Timing> = t.recursion("Timing", () =>
    t.partial({
        resourceType: Literal("Timing"),
        id: SCALARString,
        event: t.array(SCALARDateTime),
        repeat: TimingRepeat,
        code: CodeableConcept
    })
);

export default Timing;
