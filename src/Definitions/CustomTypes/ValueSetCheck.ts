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
import ErrorMessage from "../ErrorMessage";

import { AnyType } from "../Interfaces";

export class ValueSetCheckType extends t.Type<AnyType> {
    readonly _tag = "ValueSetCheckType";
    constructor(
        name: string,
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        is: t.Is<any>,
        validate: (i: unknown, context: t.Context) => t.Validation<AnyType>,
        encode: (a: AnyType) => AnyType,
        readonly valueSet: AnyType
    ) {
        super(name, is, validate, encode);
    }
}

export default function ValueSetCheck<C extends t.Any>(
    valueSet: C,
    name = `ReqArray<${valueSet.name}>`
): t.Type<t.TypeOf<C>> {
    return new ValueSetCheckType(
        name,
        (i): i is string => typeof i === "string",
        (i, c) => {
            if (!i) return t.failure(ErrorMessage.ObjectNotPresent(), c);
            const valueSetResult = valueSet.decode(i);
            if (valueSetResult._tag === "Right") {
                // eslint-disable-next-line  @typescript-eslint/no-explicit-any
                return t.success<any>(i);
            } else {
                return t.failure(
                    i,
                    c,
                    ErrorMessage.ValueOfValueSetNotPresent(
                        valueSet.name ? valueSet.name : valueSet
                    )
                );
            }
        },
        (a) => t.identity(a),
        valueSet
    );
}
