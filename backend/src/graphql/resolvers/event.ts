import { GraphQLList, GraphQLString } from "graphql";
import Event from "../../types/event";
import { EventType } from "../types/eventSchema";

// better approach as it's cleaner and scalable 

export const eventResolvers = {
  Query: {
      events: {
          type: new GraphQLList(EventType),
          resolve: async () => await Event.findAll(),
      }
  },

  Mutation: {
      createEvent: {
          type: EventType,
          args: {
              title: { type: GraphQLString },
              date: { type: GraphQLString },
              location: { type: GraphQLString },
              description: { type: GraphQLString },
          },
          resolve: async (_: any, args: any) => await Event.create({ ...args }),
      }
  }
};
