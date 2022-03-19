import { prisma } from "../prisma";
import { Context } from "./types";

// TODO: add user to context via access token in request
export const getServerContext = (): Context => ({ prisma });
