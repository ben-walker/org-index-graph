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

@InputType()
class LogInInput implements Partial<User> {
  @Field()
  email!: string;

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

  @Mutation(() => AuthPayload)
  async logIn(
    @Arg("userData") { email, password }: LogInInput,
    @Ctx() { prisma }: Context
  ): Promise<AuthPayload> {
    const errorMessage = "Incorrect email or password";
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new Error(errorMessage);
    }

    const isPasswordMatch = await verify(user.passwordHash, password);

    if (!isPasswordMatch) {
      throw new Error(errorMessage);
    }

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
