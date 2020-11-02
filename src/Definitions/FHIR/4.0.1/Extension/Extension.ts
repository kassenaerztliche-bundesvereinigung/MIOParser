/*
 * Licensed to the Kassenärztliche Bundesvereinigung (KBV) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The KBV licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as t from "io-ts";
import { Excess } from "../../../util";
import SCALARBase64Binary from "../../../../Definitions/FHIR/4.0.1/Scalar/Base64Binary";
import SCALARBoolean from "../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";
import SCALARCanonical from "../../../../Definitions/FHIR/4.0.1/Scalar/Canonical";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDate from "../../../../Definitions/FHIR/4.0.1/Scalar/Date";
import SCALARDateTime from "../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARDecimal from "../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARId from "../../../../Definitions/FHIR/4.0.1/Scalar/Id";
import SCALARInstant from "../../../../Definitions/FHIR/4.0.1/Scalar/Instant";
import SCALARInteger from "../../../../Definitions/FHIR/4.0.1/Scalar/Integer";
import SCALARMarkdown from "../../../../Definitions/FHIR/4.0.1/Scalar/Markdown";
import SCALAROid from "../../../../Definitions/FHIR/4.0.1/Scalar/Oid";
import SCALARPositiveInt from "../../../../Definitions/FHIR/4.0.1/Scalar/PositiveInt";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARTime from "../../../../Definitions/FHIR/4.0.1/Scalar/Time";
import SCALARUnsignedInt from "../../../../Definitions/FHIR/4.0.1/Scalar/UnsignedInt";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import SCALARUrl from "../../../../Definitions/FHIR/4.0.1/Scalar/Url";
import SCALARUuid from "../../../../Definitions/FHIR/4.0.1/Scalar/Uuid";
import Address from "../../../../Definitions/FHIR/4.0.1/Profile/Address";
import Age from "../../../../Definitions/FHIR/4.0.1/Profile/Age";
import Annotation from "../../../../Definitions/FHIR/4.0.1/Profile/Annotation";
import Attachment from "../../../../Definitions/FHIR/4.0.1/Profile/Attachment";
import CodeableConcept from "../../../../Definitions/FHIR/4.0.1/Profile/CodeableConcept";
import Coding from "../../../../Definitions/FHIR/4.0.1/Profile/Coding";
import ContactDetail from "../../../../Definitions/FHIR/4.0.1/Profile/ContactDetail";
import ContactPoint from "../../../../Definitions/FHIR/4.0.1/Profile/ContactPoint";
import Contributor from "../../../../Definitions/FHIR/4.0.1/Profile/Contributor";
import Count from "../../../../Definitions/FHIR/4.0.1/Profile/Count";
import DataRequirement from "../../../../Definitions/FHIR/4.0.1/Profile/DataRequirement";
import Distance from "../../../../Definitions/FHIR/4.0.1/Profile/Distance";
import Dosage from "../../../../Definitions/FHIR/4.0.1/Profile/Dosage";
import Duration from "../../../../Definitions/FHIR/4.0.1/Profile/Duration";
import Expression from "../../../../Definitions/FHIR/4.0.1/Profile/Expression";
import HumanName from "../../../../Definitions/FHIR/4.0.1/Profile/HumanName";
import Identifier from "../../../../Definitions/FHIR/4.0.1/Profile/Identifier";
import Meta from "../../../../Definitions/FHIR/4.0.1/Profile/Meta";
import Money from "../../../../Definitions/FHIR/4.0.1/Profile/Money";
import ParameterDefinition from "../../../../Definitions/FHIR/4.0.1/Profile/ParameterDefinition";
import Period from "../../../../Definitions/FHIR/4.0.1/Profile/Period";
import Quantity from "../../../../Definitions/FHIR/4.0.1/Quantity/Quantity";
import Range from "../../../../Definitions/FHIR/4.0.1/Profile/Range";
import Ratio from "../../../../Definitions/FHIR/4.0.1/Profile/Ratio";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import RelatedArtifact from "../../../../Definitions/FHIR/4.0.1/Profile/RelatedArtifact";
import SampledData from "../../../../Definitions/FHIR/4.0.1/Profile/SampledData";
import Signature from "../../../../Definitions/FHIR/4.0.1/Profile/Signature";
import Timing from "../../../../Definitions/FHIR/4.0.1/Profile/Timing";
import TriggerDefinition from "../../../../Definitions/FHIR/4.0.1/Profile/TriggerDefinition";
import UsageContext from "../../../../Definitions/FHIR/4.0.1/Profile/UsageContext";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Extension"

interface Extension {
    url: string;
    id?: string;
    valueBase64Binary?: string;
    valueBoolean?: boolean;
    valueCanonical?: string;
    valueCode?: string;
    valueDate?: string;
    valueDateTime?: string;
    valueDecimal?: number;
    valueId?: string;
    valueInstant?: string;
    valueInteger?: number;
    valueMarkdown?: string;
    valueOid?: string;
    valuePositiveInt?: number;
    valueString?: string;
    valueTime?: string;
    valueUnsignedInt?: number;
    valueUri?: string;
    valueUrl?: string;
    valueUuid?: string;
    valueAddress?: Address;
    valueAge?: Age;
    valueAnnotation?: Annotation;
    valueAttachment?: Attachment;
    valueCodeableConcept?: CodeableConcept;
    valueCoding?: Coding;
    valueContactPoint?: ContactPoint;
    valueCount?: Count;
    valueDistance?: Distance;
    valueDuration?: Duration;
    valueHumanName?: HumanName;
    valueIdentifier?: Identifier;
    valueMoney?: Money;
    valuePeriod?: Period;
    valueQuantity?: Quantity;
    valueRange?: Range;
    valueRatio?: Ratio;
    valueReference?: Reference;
    valueSampledData?: SampledData;
    valueSignature?: Signature;
    valueTiming?: Timing;
    valueContactDetail?: ContactDetail;
    valueContributor?: Contributor;
    valueDataRequirement?: DataRequirement;
    valueExpression?: Expression;
    valueParameterDefinition?: ParameterDefinition;
    valueRelatedArtifact?: RelatedArtifact;
    valueTriggerDefinition?: TriggerDefinition;
    valueUsageContext?: UsageContext;
    valueDosage?: Dosage;
    valueMeta?: Meta;
}

const Extension: t.Type<Extension> = t.recursion("Extension", () =>
    t.intersection([
        t.type({
            url: SCALARString
        }),
        t.partial({
            id: SCALARString,
            valueBase64Binary: SCALARBase64Binary,
            valueBoolean: SCALARBoolean,
            valueCanonical: SCALARCanonical,
            valueCode: SCALARCode,
            valueDate: SCALARDate,
            valueDateTime: SCALARDateTime,
            valueDecimal: SCALARDecimal,
            valueId: SCALARId,
            valueInstant: SCALARInstant,
            valueInteger: SCALARInteger,
            valueMarkdown: SCALARMarkdown,
            valueOid: SCALAROid,
            valuePositiveInt: SCALARPositiveInt,
            valueString: SCALARString,
            valueTime: SCALARTime,
            valueUnsignedInt: SCALARUnsignedInt,
            valueUri: SCALARUri,
            valueUrl: SCALARUrl,
            valueUuid: SCALARUuid,
            valueAddress: Address,
            valueAge: Age,
            valueAnnotation: Annotation,
            valueAttachment: Attachment,
            valueCodeableConcept: CodeableConcept,
            valueCoding: Coding,
            valueContactPoint: ContactPoint,
            valueCount: Count,
            valueDistance: Distance,
            valueDuration: Duration,
            valueHumanName: HumanName,
            valueIdentifier: Identifier,
            valueMoney: Money,
            valuePeriod: Period,
            valueQuantity: Quantity,
            valueRange: Range,
            valueRatio: Ratio,
            valueReference: Reference,
            valueSampledData: SampledData,
            valueSignature: Signature,
            valueTiming: Timing,
            valueContactDetail: ContactDetail,
            valueContributor: Contributor,
            valueDataRequirement: DataRequirement,
            valueExpression: Expression,
            valueParameterDefinition: ParameterDefinition,
            valueRelatedArtifact: RelatedArtifact,
            valueTriggerDefinition: TriggerDefinition,
            valueUsageContext: UsageContext,
            valueDosage: Dosage,
            valueMeta: Meta
        })
    ])
);

export default Extension;
