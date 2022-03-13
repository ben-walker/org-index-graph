import {
  AggregateContributionResolver,
  ContributionRelationsResolver,
  FindFirstContributionResolver,
  FindManyContributionResolver,
  FindUniqueContributionResolver,
  GroupByContributionResolver,
} from "@generated/type-graphql";

export const ContributionResolvers = [
  AggregateContributionResolver,
  ContributionRelationsResolver,
  FindFirstContributionResolver,
  FindManyContributionResolver,
  FindUniqueContributionResolver,
  GroupByContributionResolver,
] as const;
