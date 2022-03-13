import { ContributionResolvers } from "./Contribution";
import { OrganizationResolvers } from "./Organization";
import { UserResolvers } from "./User";

export const resolvers = [
  ...ContributionResolvers,
  ...OrganizationResolvers,
  ...UserResolvers,
] as const;
