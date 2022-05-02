import * as PN from "../KBV/CMR/";

export type PNResource =
    | PN.V1_0_1.Profile.PNBundle
    | PN.V1_0_1.Profile.PNCompositionParentalNotes
    | PN.V1_0_1.Profile.PNEncounter
    | PN.V1_0_1.Profile.PNObservationParentalNotes;
