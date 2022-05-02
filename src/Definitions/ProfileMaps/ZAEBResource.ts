import * as ZAEB from "../KBV/ZB/";

export type ZAEBResource =
    | ZAEB.V1_1_0.Profile.Bundle
    | ZAEB.V1_1_0.Profile.Composition
    | ZAEB.V1_1_0.Profile.ObservationDentalCheckUp
    | ZAEB.V1_1_0.Profile.ObservationGaplessDocumentation
    | ZAEB.V1_1_0.Profile.Organization
    | ZAEB.V1_1_0.Profile.Patient;
