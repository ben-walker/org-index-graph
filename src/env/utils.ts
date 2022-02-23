import { TRUE } from "./constants";

export const getBooleanEnvValueOrDefault = (
  value: string | undefined,
  defaultValue: boolean
) => (value ? value.toLowerCase() === TRUE : defaultValue);
