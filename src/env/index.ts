import { DEFAULT_PORT, NODE_ENVS } from "./constants";
import { getBooleanEnvValueOrDefault } from "./utils";

const { env } = process;
const { development, production } = NODE_ENVS;

export const NODE_ENV = env.NODE_ENV || development;
export const IS_PRODUCTION = NODE_ENV === production;
export const PORT = Number.parseInt(env.PORT || "", 10) || DEFAULT_PORT;
export const CORS_ORIGIN = env.CORS_ORIGIN?.split(",") || true;

export const IS_EMIT_SCHEMA_FILE_ENABLED = getBooleanEnvValueOrDefault(
  env.IS_EMIT_SCHEMA_FILE_ENABLED,
  !IS_PRODUCTION
);
