import {
  AggregateOrganizationResolver,
  FindFirstOrganizationResolver,
  FindManyOrganizationResolver,
  FindUniqueOrganizationResolver,
  GroupByOrganizationResolver,
} from "@generated/type-graphql";

export const OrganizationResolvers = [
  AggregateOrganizationResolver,
  FindFirstOrganizationResolver,
  FindManyOrganizationResolver,
  FindUniqueOrganizationResolver,
  GroupByOrganizationResolver,
] as const;
