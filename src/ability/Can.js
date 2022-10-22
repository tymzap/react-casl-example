import { createContextualCan } from "@casl/react";

import { AbilityContext } from "./Ability.context";

const Can = createContextualCan(AbilityContext.Consumer);

export default Can;
