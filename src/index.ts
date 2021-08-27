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

export * from "./Interfaces/AppInternals";

import * as Vaccination from "./Definitions/KBV/IM";
import * as ZAEB from "./Definitions/KBV/ZB";
import * as MR from "./Definitions/KBV/MR";
import * as CMR from "./Definitions/KBV/CMR";
import * as KBVBase from "./Definitions/KBVBase";
import * as FHIR from "./Definitions/FHIR";
import * as HL7DE from "./Definitions/HL7DE";

export { Vaccination, ZAEB, MR, CMR, KBVBase, FHIR, HL7DE };

export {
    KBVBundleResource,
    KBVResource,
    BundleTypes,
    MIOTypes,
    MIOTypeList
} from "./Definitions/ProfileMaps/ProfileMap";

export { VaccinationResource } from "./Definitions/ProfileMaps/VaccinationResource";

export { ZAEBResource } from "./Definitions/ProfileMaps/ZAEBResource";

export { MRResource } from "./Definitions/ProfileMaps/MRResource";

export { CMRResource } from "./Definitions/ProfileMaps/CMRResource";

export { PCResource } from "./Definitions/ProfileMaps/PCResource";

export { PNResource } from "./Definitions/ProfileMaps/PNResource";

export * as ParserUtil from "./Interfaces/Util";

export { default } from "./MIOParser";
