import { ApolloServer } from "apollo-server-express";
import express from "express";

const startServer = async () => {
  const app = express();
  const server = new ApolloServer({});

  await server.start();
  server.applyMiddleware({
    app,
  });
};

startServer().catch(console.error);
