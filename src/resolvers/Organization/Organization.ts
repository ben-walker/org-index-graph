import {
  AggregateOrganizationResolver,
  FindFirstOrganizationResolver,
  FindManyOrganizationResolver,
  FindUniqueOrganizationResolver,
  GroupByOrganizationResolver,
  OrganizationRelationsResolver,
} from "@generated/type-graphql";

export const OrganizationResolvers = [
  AggregateOrganizationResolver,
  FindFirstOrganizationResolver,
  FindManyOrganizationResolver,
  FindUniqueOrganizationResolver,
  GroupByOrganizationResolver,
  OrganizationRelationsResolver,
] as const;
