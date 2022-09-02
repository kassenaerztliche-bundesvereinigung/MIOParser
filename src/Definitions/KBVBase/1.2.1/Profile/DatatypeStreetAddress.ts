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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Datatype_Street_Address"

/**
* Strassenname (ohne Hausnummer)
Bei Angabe einer Strasse in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface DatatypeStreetAddressLineStrasse {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName";
    valueString: string;
    id?: string;
}

export const DatatypeStreetAddressLineStrasse: t.Type<DatatypeStreetAddressLineStrasse> =
    t.recursion("DatatypeStreetAddressLineStrasse", () =>
        t.intersection([
            t.type({
                url: Literal(
                    "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
                ),
                valueString: SCALARString
            }),
            t.partial({
                id: SCALARString
            })
        ])
    );

/**
* Hausnummer, sowie Zusätze (Appartmentnummer, Etage...)
Bei Angabe einer Hausnummer in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface DatatypeStreetAddressLineHausnummer {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber";
    valueString: string;
    id?: string;
}

export const DatatypeStreetAddressLineHausnummer: t.Type<DatatypeStreetAddressLineHausnummer> =
    t.recursion("DatatypeStreetAddressLineHausnummer", () =>
        t.intersection([
            t.type({
                url: Literal(
                    "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
                ),
                valueString: SCALARString
            }),
            t.partial({
                id: SCALARString
            })
        ])
    );

/**
* Zusätzliche Informationen, wie z.B. "3. Etage", "Appartment C"
Bei Angabe einer Zusatzinformation in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface DatatypeStreetAddressLineAdresszusatz {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator";
    valueString: string;
    id?: string;
}

export const DatatypeStreetAddressLineAdresszusatz: t.Type<DatatypeStreetAddressLineAdresszusatz> =
    t.recursion("DatatypeStreetAddressLineAdresszusatz", () =>
        t.intersection([
            t.type({
                url: Literal(
                    "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator"
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
Bei Verwendung der Extensions, um Straße, Hausnnummer und Postleitzahl strukturiert zu übermitteln, müssen diese Informationen stets vollständig auch in der line-Komponente, die sie erweitern, enthalten sein, um es Systemen, die diese Extensions nicht verwenden zu ermöglichen, auf diese Informationen zugreifen zu können. Es wird empfohlen, dass die erste Zeile für Straße und Hausnummer, die zweite Zeile für den Zusatz und die dritte Zeile für den Stadtteil verwendet wird.
*/
export interface DatatypeStreetAddressLine {
    id?: string;
    extension?: (
        | Extension
        | DatatypeStreetAddressLineStrasse
        | DatatypeStreetAddressLineHausnummer
        | DatatypeStreetAddressLineAdresszusatz
    )[];
    value?: string;
}

export const DatatypeStreetAddressLine: t.Type<DatatypeStreetAddressLine> = t.recursion(
    "DatatypeStreetAddressLine",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<DatatypeStreetAddressLineStrasse>,
                        t.Type<DatatypeStreetAddressLineHausnummer>,
                        t.Type<DatatypeStreetAddressLineAdresszusatz>
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    DatatypeStreetAddressLineStrasse,
                    DatatypeStreetAddressLineHausnummer,
                    DatatypeStreetAddressLineAdresszusatz
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: DatatypeStreetAddressLineStrasse,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
                        }
                    },
                    {
                        codec: DatatypeStreetAddressLineHausnummer,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
                        }
                    },
                    {
                        codec: DatatypeStreetAddressLineAdresszusatz,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator"
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
export interface DatatypeStreetAddressPeriod {
    id?: string;
    start?: string;
    end?: string;
}

export const DatatypeStreetAddressPeriod: t.Type<DatatypeStreetAddressPeriod> =
    t.recursion("DatatypeStreetAddressPeriod", () =>
        t.partial({ id: SCALARString, start: SCALARDateTime, end: SCALARDateTime })
    );

interface DatatypeStreetAddress {
    type: "both";
    id?: string;
    extension?: (Extension | Iso21090ADXPprecinct)[];
    use?: AddressuseVS;
    text?: string;
    _line?: Array<DatatypeStreetAddressLine>;
    line?: Array<string>;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: GemRSAnlage8VS;
    period?: DatatypeStreetAddressPeriod;
}

const DatatypeStreetAddress: t.Type<DatatypeStreetAddress> = t.recursion(
    "DatatypeStreetAddress",
    () =>
        t.intersection([
            t.type({
                type: Literal("both")
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
                _line: MaxArray(3, DatatypeStreetAddressLine),
                line: MaxArray(3, SCALARString),
                city: SCALARString,
                state: SCALARString,
                postalCode: SCALARString,
                country: ExtensibleCheck<t.Type<GemRSAnlage8VS>>(GemRSAnlage8VS),
                period: DatatypeStreetAddressPeriod
            })
        ])
);

export default DatatypeStreetAddress;
