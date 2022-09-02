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
import {
    Literal,
    Excess,
    ReqArray,
    MinMaxArray,
    ExtensibleCheck
} from "../../../../CustomTypes";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Iso21090ADXPprecinct from "../../../../../Definitions/FHIR/4.0.1/Extension/Iso21090ADXPprecinct";
import NFDxDPEBundleTypeVS from "../../../../../Definitions/KBV/PKA/1.0.0/ValueSet/NFDxDPEBundleType";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFDxDPE_Address"

/**
* Strassenname (ohne Hausnummer)
Bei Angabe einer Strasse in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface NFDxDPEAddressLineStrasse {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName";
    valueString: string;
    id?: string;
}

export const NFDxDPEAddressLineStrasse: t.Type<NFDxDPEAddressLineStrasse> = t.recursion(
    "NFDxDPEAddressLineStrasse",
    () =>
        Excess(
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
        )
);

/**
* Hausnummer, sowie Zusätze (Appartmentnummer, Etage...)
Bei Angabe einer Hausnummer in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface NFDxDPEAddressLineHausnummer {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber";
    valueString: string;
    id?: string;
}

export const NFDxDPEAddressLineHausnummer: t.Type<NFDxDPEAddressLineHausnummer> =
    t.recursion("NFDxDPEAddressLineHausnummer", () =>
        Excess(
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
        )
    );

/**
* Zusätzliche Informationen, wie z.B. "3. Etage", "Appartment C"
Bei Angabe einer Zusatzinformation in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface NFDxDPEAddressLineAdresszusatz {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator";
    valueString: string;
    id?: string;
}

export const NFDxDPEAddressLineAdresszusatz: t.Type<NFDxDPEAddressLineAdresszusatz> =
    t.recursion("NFDxDPEAddressLineAdresszusatz", () =>
        Excess(
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
        )
    );

/**
* Diese Komponente kann Straßennamen, Hausnummer, Appartmentnummer, Postfach, c/o sowie weitere Zustellungshinweise enthalten. Die Informationen können in mehrere line-Komponenten aufgeteilt werden.
Bei Verwendung der Extensions, um Straße, Hausnnummer und Postleitzahl strukturiert zu übermitteln, müssen diese Informationen stets vollständig auch in der line-Komponente, die sie erweitern, enthalten sein, um es Systemen, die diese Extensions nicht verwenden zu ermöglichen, auf diese Informationen zugreifen zu können.
*/
export interface NFDxDPEAddressLine {
    id?: string;
    extension?: (
        | Extension
        | NFDxDPEAddressLineStrasse
        | NFDxDPEAddressLineHausnummer
        | NFDxDPEAddressLineAdresszusatz
    )[];
    value?: string;
}

export const NFDxDPEAddressLine: t.Type<NFDxDPEAddressLine> = t.recursion(
    "NFDxDPEAddressLine",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDxDPEAddressLineStrasse>,
                            t.Type<NFDxDPEAddressLineHausnummer>,
                            t.Type<NFDxDPEAddressLineAdresszusatz>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        NFDxDPEAddressLineStrasse,
                        NFDxDPEAddressLineHausnummer,
                        NFDxDPEAddressLineAdresszusatz
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDxDPEAddressLineStrasse,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
                            }
                        },
                        {
                            codec: NFDxDPEAddressLineHausnummer,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
                            }
                        },
                        {
                            codec: NFDxDPEAddressLineAdresszusatz,
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
        )
);

interface NFDxDPEAddress {
    city: string;
    postalCode: string;
    id?: string;
    extension?: (Extension | Iso21090ADXPprecinct)[];
    _line?: Array<NFDxDPEAddressLine>;
    line?: Array<string>;
    country?: NFDxDPEBundleTypeVS;
}

const NFDxDPEAddress: t.Type<NFDxDPEAddress> = t.recursion("NFDxDPEAddress", () =>
    Excess(
        t.intersection([
            t.type({
                city: SCALARString,
                postalCode: SCALARString
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
                _line: MinMaxArray(1, 3, NFDxDPEAddressLine),
                line: MinMaxArray(1, 3, SCALARString),
                country: ExtensibleCheck<t.Type<NFDxDPEBundleTypeVS>>(NFDxDPEBundleTypeVS)
            })
        ])
    )
);

export default NFDxDPEAddress;
