const { env } = process;

export const NODE_ENV = env.NODE_ENV || "development";
export const IS_PRODUCTION = NODE_ENV === "production";
export const PORT = env.PORT || 4_000;
export const CORS_ORIGIN = env.CORS_ORIGIN?.split(",") || true;
