import { AbilityBuilder, Ability } from "@casl/ability";
import { detectSubjectType } from "./detectSubjectType";

export const defineAbility = (user) => {
  const { build } = new AbilityBuilder(Ability);

  return build({ detectSubjectType });
};
