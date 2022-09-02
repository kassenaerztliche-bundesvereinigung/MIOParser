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
import { Literal, ReqArray, MaxArray, ExtensibleCheck } from "../../../CustomTypes";

import SCALARDateTime from "../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";

import AddressuseVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Addressuse";
import Extension from "../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import GemRSAnlage8VS from "../../../../Definitions/KBVBase/1.2.1/ValueSet/GemRSAnlage8";
import Iso21090ADXPprecinct from "../../../../Definitions/FHIR/4.0.1/Extension/Iso21090ADXPprecinct";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Datatype_Post_Office_Box"

/**
* Postfach-Adresse.
Bei Angabe eines Postfaches in dieser Extension muss das Postfach auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
Eine Postfach-Adresse darf nicht in Verbindung mit Address.type "physical" oder "both" verwendet werden.
*/
export interface DatatypePostOfficeBoxLinePostfach {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox";
    valueString: string;
    id?: string;
}

export const DatatypePostOfficeBoxLinePostfach: t.Type<DatatypePostOfficeBoxLinePostfach> =
    t.recursion("DatatypePostOfficeBoxLinePostfach", () =>
        t.intersection([
            t.type({
                url: Literal(
                    "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox"
                ),
                valueString: SCALARString
            }),
            t.partial({
                id: SCALARString
            })
        ])
    );

/**
* Diese Komponente kann Straßennamen, Hausnummer, Appartmentnummer, Postfach, c/o sowie weitere Zustellungshinweise enthalten. Die Informationen können in mehrere line-Komponenten aufgeteilt werden.
Bei Verwendung der Extensions, um Straße, Hausnnummer und Postleitzahl strukturiert zu übermitteln, müssen diese Informationen stets vollständig auch in der line-Komponente, die sie erweitern, enthalten sein, um es Systemen, die diese Extensions nicht verwenden zu ermöglichen, auf diese Informationen zugreifen zu können.
*/
export interface DatatypePostOfficeBoxLine {
    id?: string;
    extension?: (Extension | DatatypePostOfficeBoxLinePostfach)[];
    value?: string;
}

export const DatatypePostOfficeBoxLine: t.Type<DatatypePostOfficeBoxLine> = t.recursion(
    "DatatypePostOfficeBoxLine",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<[t.Type<Extension>, t.Type<DatatypePostOfficeBoxLinePostfach>]>,
                t.Any
            >(
                t.union([Extension, DatatypePostOfficeBoxLinePostfach]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: DatatypePostOfficeBoxLinePostfach,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox"
                        }
                    }
                ],
                ["0", "*"]
            ),
            value: SCALARString
        })
);

/**
 * Time period when address was/is in use.
 */
export interface DatatypePostOfficeBoxPeriod {
    id?: string;
    start?: string;
    end?: string;
}

export const DatatypePostOfficeBoxPeriod: t.Type<DatatypePostOfficeBoxPeriod> =
    t.recursion("DatatypePostOfficeBoxPeriod", () =>
        t.partial({ id: SCALARString, start: SCALARDateTime, end: SCALARDateTime })
    );

interface DatatypePostOfficeBox {
    type: "postal";
    id?: string;
    extension?: (Extension | Iso21090ADXPprecinct)[];
    use?: AddressuseVS;
    text?: string;
    _line?: Array<DatatypePostOfficeBoxLine>;
    line?: Array<string>;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: GemRSAnlage8VS;
    period?: DatatypePostOfficeBoxPeriod;
}

const DatatypePostOfficeBox: t.Type<DatatypePostOfficeBox> = t.recursion(
    "DatatypePostOfficeBox",
    () =>
        t.intersection([
            t.type({
                type: Literal("postal")
            }),
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<[t.Type<Extension>, t.Type<Iso21090ADXPprecinct>]>,
                    t.Any
                >(
                    t.union([Extension, Iso21090ADXPprecinct]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: Iso21090ADXPprecinct,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                use: AddressuseVS,
                text: SCALARString,
                _line: MaxArray(3, DatatypePostOfficeBoxLine),
                line: MaxArray(3, SCALARString),
                city: SCALARString,
                state: SCALARString,
                postalCode: SCALARString,
                country: ExtensibleCheck<t.Type<GemRSAnlage8VS>>(GemRSAnlage8VS),
                period: DatatypePostOfficeBoxPeriod
            })
        ])
);

export default DatatypePostOfficeBox;
