import { userResolvers } from "./User";

export const resolvers = [...userResolvers] as const;
