import { rest } from "msw";

const usersMock = [
  {
    id: 1,
    name: "user-1",
    roles: [],
  },
  {
    id: 2,
    name: "user-2",
    roles: [],
  },
  {
    id: 3,
    name: "user-admin",
    roles: ["ADMIN"],
  },
];

export const handlers = [
  rest.get("/users", (_, response, context) =>
    response(context.json(usersMock))
  ),
];
