import { AbilityBuilder, Ability } from "@casl/ability";
import { detectSubjectType } from "./detectSubjectType";

export const defineAbility = (user) => {
  const { can, build } = new AbilityBuilder(Ability);

  if (user.roles.includes("VIEWER")) {
    can("read", "Article");
  }

  if (user.roles.includes("EDITOR")) {
    can("read", "Article");
    can("edit", "Article", {
      "createdBy.id": {
        $eq: user.id,
      },
    });
    can("delete", "Article", {
      "createdBy.id": {
        $eq: user.id,
      },
      isPublished: {
        $eq: false,
      },
    });
  }

  if (user.roles.includes("ADMIN")) {
    can("manage", "all");
  }

  return build({ detectSubjectType });
};
