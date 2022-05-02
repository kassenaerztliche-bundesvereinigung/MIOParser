import * as t from "io-ts";
import { Literal, Excess } from "../../../../CustomTypes";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_ZAEB_Disclaimer"

interface ZAEBDisclaimer {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_ZAEB_Disclaimer";
    id?: string;
    valueString?: "Die Vertragsparteien sind sich einig, dass der Zahnarzt im Nachhinein für eine falsche Jahresangabe nicht haftbar gemacht werden kann, wenn die Krankenkasse bei der Prüfung eines Heil- und Kostenplanes keinen Bonus oder eine andere Bonusstufe feststellt.";
}

const ZAEBDisclaimer: t.Type<ZAEBDisclaimer> = t.recursion("ZAEBDisclaimer", () =>
    Excess(
        t.intersection([
            t.type({
                url: Literal(
                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_ZAEB_Disclaimer"
                )
            }),
            t.partial({
                id: SCALARString,
                valueString: Literal(
                    "Die Vertragsparteien sind sich einig, dass der Zahnarzt im Nachhinein für eine falsche Jahresangabe nicht haftbar gemacht werden kann, wenn die Krankenkasse bei der Prüfung eines Heil- und Kostenplanes keinen Bonus oder eine andere Bonusstufe feststellt."
                )
            })
        ])
    )
);

export default ZAEBDisclaimer;
