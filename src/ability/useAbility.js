import { useAbility as useCaslAbility } from "@casl/react";

import { AbilityContext } from "./Ability.context";

export const useAbility = () => useCaslAbility(AbilityContext);
