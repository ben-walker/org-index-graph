import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

import { SEED_COUNTS } from "./constants";

const prisma = new PrismaClient();
const { userCount } = SEED_COUNTS;

const seed = async () => {
  await prisma.user.createMany({
    data: Array.from({ length: userCount }).map(() => ({
      email: faker.internet.email(),
      emailVerifiedAt: faker.datatype.boolean() ? faker.date.recent() : null,
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
