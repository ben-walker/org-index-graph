import { ContextFunction } from "apollo-server-core";
import { ExpressContext } from "apollo-server-express";

import { prisma } from "../../prisma";
import { Context } from "./types";
import { decodeUserId } from "./utils";

export const getServerContext: ContextFunction<ExpressContext, Context> = ({
  req,
}) => {
  const userId = decodeUserId(req);

  return { prisma, userId };
};
