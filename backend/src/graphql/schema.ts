import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { eventResolvers } from "./resolvers/event";
import { userResolvers } from "./resolvers/user";

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQuery",
    fields: {
      ...eventResolvers.Query,
      ...userResolvers.Query,
    },
  }),
  mutation: new GraphQLObjectType({
    name: "RootMutation",
    fields: {
        ...eventResolvers.Mutation,
        ...userResolvers.Mutation 
    },
  }),
});
