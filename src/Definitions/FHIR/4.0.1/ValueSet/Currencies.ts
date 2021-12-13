import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/currencies

type Currencies = string;

const Currencies: t.Type<Currencies> = t.string;

export const CurrenciesArray: string[] = [];

export const CurrenciesValueSet: ValueSet = [
    {
        system: "",
        concept: []
    }
];

export default Currencies;
