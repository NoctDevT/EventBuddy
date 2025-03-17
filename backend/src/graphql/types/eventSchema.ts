import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";

export const EventType = new GraphQLObjectType({
  name: "Event",
  fields: {
    id: { type: GraphQLString },
    title: { type: new GraphQLNonNull(GraphQLString) },
    date: { type: new GraphQLNonNull(GraphQLString) },
    location: { type: GraphQLString },
    description: { type: GraphQLString },
  },
});
