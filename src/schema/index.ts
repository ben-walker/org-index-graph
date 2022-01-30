import "reflect-metadata"; // Required for TypeGraphQL type reflection

import { buildSchema } from "type-graphql";

import { IS_EMIT_SCHEMA_FILE_ENABLED } from "../env";
import { resolvers } from "../resolvers";

export const getGraphSchema = async () =>
  buildSchema({
    emitSchemaFile: IS_EMIT_SCHEMA_FILE_ENABLED,
    resolvers,
  });
