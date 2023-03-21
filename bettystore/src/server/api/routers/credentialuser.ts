import { z } from "zod";
import argon2 from "argon2";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const credentialUserRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({ name: z.string(), email: z.string(), password: z.string() })
    )
    .mutation(async ({ input, ctx }) => {
      // try {
      //   const hash = await argon2.hash(input.password);

      // } catch (err) {
      //   //...
      // }
      const hashedPassword = await argon2.hash(input.password);
      const user = await ctx.prisma.credentialUser.create({
        data: {
          name: input.name,
          email: input.email,
          password: hashedPassword,
        },
      });

      return user;
    }),

  login: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .query(async ({ input, ctx }) => {
      const user = await ctx.prisma.credentialUser.findFirst({
        where: {
          email: input.email,
        },
      });
      if (!user) {
        throw new Error("Invalid email or password");
      }
      const isValidPassword = await argon2.verify(
        user.password,
        input.password
      );
      if (!isValidPassword) {
        throw new Error("Invalid email or password");
      }
      return user;
    }),
});
