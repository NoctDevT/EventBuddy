import { GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import EventDb from "../../types/event";
import { EventType } from "../types/eventSchema";

// better approach as it's cleaner and scalable 

export const eventResolvers = {
  Query: {
      events: {
          type: new GraphQLList(EventType),
          resolve: async () => await EventDb.findAll(),
      }
  },

  Mutation: {
      createEvent: {
          type: EventType,
          args: {
              title: { type: new GraphQLNonNull(GraphQLString) },
              date: {  type: new GraphQLNonNull(GraphQLString) },
              capacity: { type: GraphQLInt},
              location: {  type: new GraphQLNonNull(GraphQLString) },
              description: { type: GraphQLString },
          },
          resolve: async (_: any, args: any) => {
            try {
                const formattedDate : Date = new Date(args.date);
                if (isNaN(formattedDate.getTime())) {
                  throw new Error("Invalid date format. Please use ISO8601 format.");
                }
      
            const event : EventDb = await EventDb.create({
                 ...args,
                 date: formattedDate
                });
            return event;
          } catch(error: unknown){
            if(error instanceof Error){
                console.error("Error creating event:", error.message);
                throw new Error(`Failed to create event: ${error.message}`);
            } else {
                 console.error("Error creating event:", error);
            throw new Error("Failed to create event. Please check the data and try again.");
            }
           
          }
          }
      }
  }
};
