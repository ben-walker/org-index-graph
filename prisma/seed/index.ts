import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

import { SEED_COUNTS } from "./constants";

const prisma = new PrismaClient();
const { userCount } = SEED_COUNTS;

// TODO: Add a util to take in a length and a schema and return an array with fake data
const seed = async () => {
  await prisma.user.createMany({
    data: Array.from({ length: userCount }).map(() => ({
      email: faker.internet.email(),
    })),
    skipDuplicates: true,
  });
};

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void (async () => {
      await prisma.$disconnect();
    })();
  });
