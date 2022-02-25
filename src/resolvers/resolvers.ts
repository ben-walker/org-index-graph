import { OrganizationResolvers } from "./Organization";
import { UserResolvers } from "./User";

export const resolvers = [...OrganizationResolvers, ...UserResolvers] as const;
