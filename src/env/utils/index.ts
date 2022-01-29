import { TRUE_STRING } from "../constants";

export const getBooleanEnvValueOrDefault = (
  envValue: string | undefined,
  defaultValue: boolean
) => (envValue ? envValue === TRUE_STRING : defaultValue);
