import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB
// run inside `async` function

async function main() {
  const newUser = await prisma.user.create({
    data: {
      username: 'admin',
      address: 'accra',
      first_name: 'admin',
      last_name: 'admin',
      telephone: 123456789,
      password: 'test',
    },
  });

  //   const users = await prisma.user.findMany();
  //   const deleteUsers = await prisma.user.deleteMany({});

  console.log('Seed db with test admin:', newUser);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
