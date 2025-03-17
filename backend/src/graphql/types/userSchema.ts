import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLList } from "graphql";
import { EventType } from "./eventSchema";

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    events: { type: new GraphQLList(EventType) },
  },
});
