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

import { Type, success, failure, identity } from "io-ts";

import ErrorMessage from "../../../ErrorMessage";

/**
 *Base StructureDefinition for uri Type: String of characters used to identify a name or a resource
 */
class SCALARUriType extends Type<string> {
    readonly _tag = "SCALARUriType";

    public static regex = /^\S*$/;

    constructor() {
        super(
            "SCALARUriType",

            (s): s is string =>
                typeof s === "string" && SCALARUriType.regex.test(s.toString()),

            (s, c) => {
                return this.is(s)
                    ? success(s)
                    : failure(
                          s,
                          c,
                          ErrorMessage.Scalar("Uri", s, SCALARUriType.regex.toString())
                      );
            },
            identity
        );
    }
}
export { SCALARUriType };
const SCALARUri = new SCALARUriType();
export default SCALARUri;
