import { TRUE } from "../constants";

export const getBooleanEnvValueOrDefault = (
  envValue: string | undefined,
  defaultValue: boolean
) => (envValue ? envValue.toLowerCase() === TRUE : defaultValue);
