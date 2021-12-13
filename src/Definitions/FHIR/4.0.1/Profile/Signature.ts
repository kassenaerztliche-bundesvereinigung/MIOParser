import * as t from "io-ts";
import { Literal, MinArray } from "../../../CustomTypes";
import SCALARBase64Binary from "../../../../Definitions/FHIR/4.0.1/Scalar/Base64Binary";

import SCALARInstant from "../../../../Definitions/FHIR/4.0.1/Scalar/Instant";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import Coding from "../../../../Definitions/FHIR/4.0.1/Profile/Coding";
import MimetypesVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Mimetypes";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Signature"

interface Signature {
    type: Array<Coding>;
    when: string;
    who: Reference;
    resourceType?: "Signature";
    id?: string;
    onBehalfOf?: Reference;
    targetFormat?: MimetypesVS;
    sigFormat?: MimetypesVS;
    data?: string;
}

const Signature: t.Type<Signature> = t.recursion("Signature", () =>
    t.intersection([
        t.type({
            type: MinArray(1, Coding),
            when: SCALARInstant,
            who: Reference
        }),
        t.partial({
            resourceType: Literal("Signature"),
            id: SCALARString,
            onBehalfOf: Reference,
            targetFormat: MimetypesVS,
            sigFormat: MimetypesVS,
            data: SCALARBase64Binary
        })
    ])
);

export default Signature;
