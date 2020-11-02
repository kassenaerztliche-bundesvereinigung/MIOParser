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

import { Type, success, failure, identity } from "io-ts";

import ErrorMessage from "../../../ErrorMessage";

/**
 *Base StructureDefinition for oid type: An OID represented as a URI
 */
class SCALAROidType extends Type<string> {
    private static regexExp = /^urn:oid:[0-2](\.(0|[1-9][0-9]*))+$/;

    constructor() {
        super(
            "SCALAROidType",

            (s): s is string =>
                typeof s === "string" && SCALAROidType.regexExp.test(s.toString()),

            (s, c) => {
                return this.is(s)
                    ? success(s)
                    : failure(
                          s,
                          c,
                          ErrorMessage.Scalar(
                              "Oid",
                              s,
                              "^urn:oid:[0-2](.(0|[1-9][0-9]*))+$"
                          )
                      );
            },
            identity
        );
    }
}
const SCALAROid = new SCALAROidType();
export default SCALAROid;
