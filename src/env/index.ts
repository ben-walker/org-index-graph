const { env } = process;

export const CORS_ORIGIN = env.CORS_ORIGIN?.split(",") || true;
export const PORT = env.PORT || 4_000;
