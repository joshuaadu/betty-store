import { withAuth } from "next-auth/middleware";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth.token);
  },
  {
    callbacks: {
      authorized: ({ token }) =>
        (token?.role as string) in ["USER", "ADMIN", "SUPER"],
    },
  }
);

export const config = { matcher: ["/dashboard"] };
