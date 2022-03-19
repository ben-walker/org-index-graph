import {
  AggregateUserResolver,
  FindFirstUserResolver,
  FindManyUserResolver,
  FindUniqueUserResolver,
  GroupByUserResolver,
  User,
  UserRelationsResolver,
} from "@generated/type-graphql";
import { argon2id, hash } from "argon2";
import { IsEmail } from "class-validator";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Resolver,
} from "type-graphql";

import { Context } from "../../server";

@ObjectType()
class AuthPayload {
  @Field()
  user!: User;
}

@InputType()
class SignUpInput implements Partial<User> {
  @Field()
  @IsEmail()
  email!: string;

  @Field()
  name!: string;

  @Field()
  password!: string;
}

@Resolver()
class UserAuthResolver {
  @Mutation(() => AuthPayload)
  async signUp(
    @Arg("userData") { email, name, password }: SignUpInput,
    @Ctx() { prisma }: Context
  ): Promise<AuthPayload> {
    const passwordHash = await hash(password, { type: argon2id });
    const user = await prisma.user.create({
      data: { email, name, passwordHash },
    });

    return { user };
  }
}

export const UserResolvers = [
  AggregateUserResolver,
  FindFirstUserResolver,
  FindManyUserResolver,
  FindUniqueUserResolver,
  GroupByUserResolver,
  UserAuthResolver,
  UserRelationsResolver,
] as const;
