import "reflect-metadata"; // Required for TypeGraphQL type reflection

import { resolvers } from "@generated/type-graphql"; // TODO: Don't expose all resolvers
import { buildSchema } from "type-graphql";

import { IS_EMIT_SCHEMA_FILE_ENABLED } from "../env";

export const getGraphSchema = async () =>
  buildSchema({
    emitSchemaFile: IS_EMIT_SCHEMA_FILE_ENABLED,
    resolvers,
  });
