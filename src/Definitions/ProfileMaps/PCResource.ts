import * as PC from "../KBV/CMR/";

export type PCResource =
    | PC.V1_0_1.Profile.PCBundle
    | PC.V1_0_1.Profile.PCCompositionExaminationParticipation
    | PC.V1_0_1.Profile.PCEncounter;
