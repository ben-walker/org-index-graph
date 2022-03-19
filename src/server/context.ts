import { ContextFunction } from "apollo-server-core";
import { ExpressContext } from "apollo-server-express";

import { prisma } from "../prisma";
import { Context } from "./types";

// TODO: add user to context via access token in request
export const getServerContext: ContextFunction<
  ExpressContext,
  Context
> = () => ({ prisma });
