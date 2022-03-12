import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

import { SEED_COUNTS } from "./constants";

const prisma = new PrismaClient();
const { organizations, users } = SEED_COUNTS;

const seed = async () => {
  await prisma.user.createMany({
    data: Array.from({ length: users }).map(() => ({
      email: faker.internet.email(),
      emailVerifiedAt: faker.datatype.boolean() ? faker.date.recent() : null,
    })),
    skipDuplicates: true,
  });

  await prisma.organization.createMany({
    data: Array.from({ length: organizations }).map(() => ({
      name: faker.commerce.productName(),
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
