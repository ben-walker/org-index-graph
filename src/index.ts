import { ApolloServer } from "apollo-server-express";
import express from "express";

import { CORS_ORIGIN, PORT } from "./env";
import { getGraphSchema } from "./schema";
import { getServerContext } from "./server";

const startGraph = async () => {
  const schema = await getGraphSchema();
  const app = express();
  const server = new ApolloServer({
    context: getServerContext,
    schema,
  });

  await server.start();
  server.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: CORS_ORIGIN,
    },
  });

  await new Promise<void>((resolve) => app.listen({ port: PORT }, resolve));
  console.info(`Graph server: port ${PORT} • path ${server.graphqlPath}`);
};

startGraph().catch(console.error);
