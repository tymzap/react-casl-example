import { rest } from "msw";

const usersMock = [
  {
    id: 1,
    name: "user-admin",
    roles: ["ADMIN"],
    __typename: "User",
  },
  {
    id: 2,
    name: "user-editor-1",
    roles: ["EDITOR"],
    __typename: "User",
  },
  {
    id: 3,
    name: "user-editor-2",
    roles: ["EDITOR"],
    __typename: "User",
  },
  {
    id: 4,
    name: "user-viewer",
    roles: ["VIEWER"],
    __typename: "User",
  },
  {
    id: 5,
    name: "user-no-role",
    roles: [],
    __typename: "User",
  },
];

const articlesMock = [
  {
    id: 1,
    name: "article 1",
    isPublished: false,
    createdBy: {
      id: 2,
      name: "user-editor-1",
    },
    __typename: "Article",
  },
  {
    id: 2,
    name: "article 2",
    isPublished: true,
    createdBy: {
      id: 2,
      name: "user-editor-1",
    },
    __typename: "Article",
  },
  {
    id: 3,
    name: "article 3",
    isPublished: false,
    createdBy: {
      id: 3,
      name: "user-editor-2",
    },
    __typename: "Article",
  },
  {
    id: 4,
    name: "article 4",
    isPublished: true,
    createdBy: {
      id: 3,
      name: "user-editor-2",
    },
    __typename: "Article",
  },
];

export const handlers = [
  rest.post("/login", (request, response, context) => {
    const name = request.url.searchParams.get("name");
    return response(context.json(usersMock.find((user) => user.name === name)));
  }),
  rest.get("/articles", (_, response, context) => {
    return response(context.json(articlesMock));
  }),
];
