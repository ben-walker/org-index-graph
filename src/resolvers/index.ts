import { organizationResolvers } from "./Organization";
import { userResolvers } from "./User";

export const resolvers = [...organizationResolvers, ...userResolvers] as const;
