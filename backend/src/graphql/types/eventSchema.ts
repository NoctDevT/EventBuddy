import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInt } from "graphql";

export const EventType = new GraphQLObjectType({
  name: "Event",
  fields: {
    id: { type: GraphQLString },
    title: { type: new GraphQLNonNull(GraphQLString) },
    date: { type: new GraphQLNonNull(GraphQLString) },
    location: { type: GraphQLString },
    capacity: {type: GraphQLInt},
    description: { type: GraphQLString },
  },
});
