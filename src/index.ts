import { ApolloServer } from "apollo-server-express";
import express from "express";

import { CORS_ORIGIN, PORT } from "./env";
import { getServerContext } from "./server";

const startServer = async () => {
  const app = express();
  const server = new ApolloServer({
    context: getServerContext,
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
  console.info(`Graph server: port ${PORT} // path ${server.graphqlPath}`);
};

startServer().catch(console.error);
