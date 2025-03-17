import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLList, GraphQLInt } from "graphql";
import { EventType } from "./eventSchema";

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    events: { type: new GraphQLList(EventType) },
  },
});
