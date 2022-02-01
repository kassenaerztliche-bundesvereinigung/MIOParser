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

import { Type, success, failure, identity } from "io-ts";

import ErrorMessage from "../../../ErrorMessage";

/**
 *Base StructureDefinition for base64Binary Type: A stream of bytes
 */
class SCALARBase64BinaryType extends Type<string> {
    readonly _tag = "SCALARBase64BinaryType";

    public static regex = /(\s*([0-9a-zA-Z+=]){4}\s*)+/;

    constructor() {
        super(
            "SCALARBase64BinaryType",

            (s): s is string =>
                typeof s === "string" && SCALARBase64BinaryType.regex.test(s.toString()),

            (s, c) => {
                return this.is(s)
                    ? success(s)
                    : failure(
                          s,
                          c,
                          ErrorMessage.Scalar(
                              "Base64Binary",
                              s,
                              SCALARBase64BinaryType.regex.toString()
                          )
                      );
            },
            identity
        );
    }
}
export { SCALARBase64BinaryType };
const SCALARBase64Binary = new SCALARBase64BinaryType();
export default SCALARBase64Binary;
