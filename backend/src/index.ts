import { ApolloServer } from "apollo-server";
import { sequelize } from "./config";
import { schema } from "./graphql/schema"; 

async function startServer() {
    const server = new ApolloServer({
      schema,
      context: ({ req }) => ({ req }),
    });
  
    try {
      await sequelize.authenticate();
      console.log("Database connected successfully.");
  
      await sequelize.sync({ alter: true }); 
      console.log("Database synced.");
  
      const { url } = await server.listen({ port: 4000 });
      console.log(`🚀 Server ready at ${url}`);
    } catch (error) {
      console.error("Error starting server:", error);
    }
  }
  
  startServer();