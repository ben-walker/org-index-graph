import {
  AggregateUserResolver,
  FindFirstUserResolver,
  FindManyUserResolver,
  FindUniqueUserResolver,
  GroupByUserResolver,
} from "@generated/type-graphql";

export const UserResolvers = [
  AggregateUserResolver,
  FindFirstUserResolver,
  FindManyUserResolver,
  FindUniqueUserResolver,
  GroupByUserResolver,
] as const;
