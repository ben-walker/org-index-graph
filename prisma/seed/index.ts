import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  // TODO: Create a data file for many users
  await prisma.user.upsert({
    where: {
      email: "test@email.com",
    },
    update: {},
    create: {
      email: "test@email.com",
    },
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
