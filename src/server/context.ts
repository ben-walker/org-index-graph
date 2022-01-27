import { prisma } from "../prisma";

export const getServerContext = () => ({ prisma });
