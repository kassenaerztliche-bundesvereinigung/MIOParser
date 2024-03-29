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

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export class CustomLiteralType extends t.Type<any> {
    readonly _tag = "CustomLiteralType";
    constructor(
        name: string,
        is: t.Is<string | number | boolean>,
        validate: (i: unknown, context: t.Context) => t.Validation<AnyType>,
        encode: (a: AnyType) => AnyType,
        readonly literal: string | number | boolean
    ) {
        super(name, is, validate, encode);
    }
}

export default function Literal<V extends string | number | boolean>(
    literal: V,
    name = "LiteralCheck"
): t.Type<t.TypeOf<AnyType>> {
    return new CustomLiteralType(
        name,
        (i): i is V => {
            if (typeof literal === "number" && typeof i === "string") {
                const number = parseInt(i);
                if (number) return t.literal(literal).is(number);
            }
            return t.literal(literal).is(i);
        },
        (i, c) => {
            if (i == literal) {
                // eslint-disable-next-line  @typescript-eslint/no-explicit-any
                return t.success<any>(i);
            } else {
                return t.failure(i, c, ErrorMessage.Literal(i, literal));
            }
        },
        t.identity,
        literal
    );
}
