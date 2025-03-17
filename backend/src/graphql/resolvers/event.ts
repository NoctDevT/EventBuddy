import { GraphQLList, GraphQLString } from "graphql";
import Event from "../../types/event";
import { EventType } from "../types/eventSchema";

export const eventResolvers = {
  events: {
    type: new GraphQLList(EventType),
    resolve: async () => {
      return await Event.findAll();
    },
  },

  createEvent: {
    type: EventType,
    args: {
      title: { type: GraphQLString },
      date: { type: GraphQLString },
      location: { type: GraphQLString },
      description: { type: GraphQLString },
    },
    resolve: async (_: any, args: any) => {
      return await Event.create({ ...args });
    },
  },
};
