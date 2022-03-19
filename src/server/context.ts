import { prisma } from "../prisma";
import { Context } from "./types";

export const getServerContext = (): Context => ({ prisma });
