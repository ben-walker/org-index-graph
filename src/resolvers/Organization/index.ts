import {
  AggregateOrganizationResolver,
  FindFirstOrganizationResolver,
  FindManyOrganizationResolver,
  FindUniqueOrganizationResolver,
  GroupByOrganizationResolver,
} from "@generated/type-graphql";

export const organizationResolvers = [
  AggregateOrganizationResolver,
  FindFirstOrganizationResolver,
  FindManyOrganizationResolver,
  FindUniqueOrganizationResolver,
  GroupByOrganizationResolver,
] as const;
