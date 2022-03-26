import {
  AggregateUserResolver,
  FindFirstUserResolver,
  FindManyUserResolver,
  FindUniqueUserResolver,
  GroupByUserResolver,
  User,
  UserRelationsResolver,
} from "@generated/type-graphql";
import { argon2id, hash, verify } from "argon2";
import { IsEmail } from "class-validator";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";

import { Context } from "../../server";
import { LOG_IN_ERROR } from "./constants";
import { signAccessToken } from "./utils";

@ObjectType()
class AuthPayload {
  @Field()
  user!: User;

  @Field()
  accessToken!: string;
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

@InputType()
class LogInInput implements Partial<User> {
  @Field()
  email!: string;

  @Field()
  password!: string;
}

@Resolver()
class AuthResolver {
  @Mutation(() => AuthPayload)
  async signUp(
    @Arg("userData") { email, name, password }: SignUpInput,
    @Ctx() { prisma }: Context
  ): Promise<AuthPayload> {
    const passwordHash = await hash(password, { type: argon2id });
    const user = await prisma.user.create({
      data: { email, name, passwordHash },
    });
    const accessToken = signAccessToken(user);

    return { accessToken, user };
  }

  @Mutation(() => AuthPayload)
  async logIn(
    @Arg("userData") { email, password }: LogInInput,
    @Ctx() { prisma }: Context
  ): Promise<AuthPayload> {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new Error(LOG_IN_ERROR);
    }

    const isPasswordMatch = await verify(user.passwordHash, password);

    if (!isPasswordMatch) {
      throw new Error(LOG_IN_ERROR);
    }

    const accessToken = signAccessToken(user);

    return { accessToken, user };
  }
}

@Resolver()
class ViewerResolver {
  @Query(() => User)
  viewer(@Ctx() { prisma, userId }: Context): Promise<User> {
    if (!userId) {
      throw new Error("No User ID in context");
    }

    return prisma.user.findUnique({
      rejectOnNotFound: true,
      where: { id: userId },
    });
  }
}

export const UserResolvers = [
  AggregateUserResolver,
  AuthResolver,
  FindFirstUserResolver,
  FindManyUserResolver,
  FindUniqueUserResolver,
  GroupByUserResolver,
  UserRelationsResolver,
  ViewerResolver,
] as const;
