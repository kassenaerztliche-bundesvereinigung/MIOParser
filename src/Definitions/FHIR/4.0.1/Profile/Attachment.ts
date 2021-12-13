import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";
import SCALARBase64Binary from "../../../../Definitions/FHIR/4.0.1/Scalar/Base64Binary";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDateTime from "../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUnsignedInt from "../../../../Definitions/FHIR/4.0.1/Scalar/UnsignedInt";
import SCALARUrl from "../../../../Definitions/FHIR/4.0.1/Scalar/Url";
import MimetypesVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Mimetypes";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Attachment"

interface Attachment {
    resourceType?: "Attachment";
    id?: string;
    contentType?: MimetypesVS;
    language?: string;
    data?: string;
    url?: string;
    size?: number;
    hash?: string;
    title?: string;
    creation?: string;
}

const Attachment: t.Type<Attachment> = t.recursion("Attachment", () =>
    t.partial({
        resourceType: Literal("Attachment"),
        id: SCALARString,
        contentType: MimetypesVS,
        language: SCALARCode,
        data: SCALARBase64Binary,
        url: SCALARUrl,
        size: SCALARUnsignedInt,
        hash: SCALARBase64Binary,
        title: SCALARString,
        creation: SCALARDateTime
    })
);

export default Attachment;
