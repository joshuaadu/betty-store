// prisma/seed.ts
// Create a seed script that will populate the database with some dummy data.

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  //   const user = await prisma.user.upsert({
  //     where: { telephone: 054000000 },
  //     update: {},
  //     create: { first_name: 'Jos' },
  //   });
  //   console.log({ user });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
