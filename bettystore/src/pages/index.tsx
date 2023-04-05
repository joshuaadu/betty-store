import { type NextPage, type GetServerSideProps } from "next";
import { getServerAuthSession } from "../server/auth";
import Head from "next/head";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();

  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const users = api.credential.getAll.useQuery();
  const { mutate } = api.credential.changeRole.useMutation();
  // const router = useRouter()

  return (
    <>
      <Head>
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://preline.co/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title>Landing Page | Betty Store</title>
        <meta name="description" content="Landing page for Betty Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="" id="content" role="main">
        {/* <!-- Hero --> */}
        <div className="relative overflow-hidden">
          <div className="mx-auto max-w-[85rem] px-4 pb-10 pt-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="block text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl md:text-5xl">
                Designed for you to get more{" "}
                <span className="text-blue-600">simple</span>
              </h1>
              <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
                Build your business here. Take it anywhere.
              </p>
              {/* <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
            <p className="text-white">Username: {sessionData?.user.name}</p>
            <p className="text-white">Users: {JSON.stringify(users?.data)}</p> */}
              {/* <button
                className=" rounded-full bg-white/10 p-4 text-2xl font-semibold text-white no-underline transition hover:bg-white/20"
                onClick={() => void signOut()}
              >
                Sign out
              </button>
              <button
                className=" rounded-full bg-white/10 p-4 text-2xl font-semibold text-white no-underline transition hover:bg-white/20"
                onClick={() => {
                  if (users?.data && users?.data[0]) {
                    mutate({ role: "ADMIN", user_id: users.data[0]?.id });
                  }
                }}
              >
                Change user role
              </button>
              <button
                className=" rounded-full bg-white/10 p-4 text-2xl font-semibold text-white no-underline transition hover:bg-white/20"
                // onClick={() => {}}
              >
                <Link href="/dashboard"> Dashboard</Link>
              </button> */}
            </div>

            <div className="relative mx-auto mt-10 max-w-5xl">
              <div className="h-96 w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')] bg-cover bg-center bg-no-repeat object-cover sm:h-[480px]"></div>

              <div className="absolute inset-0 h-full w-full">
                <div className="flex h-full w-full flex-col items-center justify-center">
                  <Link
                    className="inline-flex items-center justify-center gap-x-1.5 rounded-full bg-white px-4 py-3 text-center text-sm text-gray-800 transition transition hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:bg-black dark:text-gray-200 dark:hover:text-gray-400 dark:focus:ring-offset-black"
                    href="/dashboard"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                      />
                    </svg>
                    Go to dashboard
                  </Link>
                </div>
              </div>

              <div className="absolute -left-20 bottom-12 -z-[1] h-48 w-48 rounded-lg bg-gradient-to-b from-orange-500 to-white p-px dark:to-slate-900">
                <div className="h-48 w-48 rounded-lg bg-white dark:bg-slate-900"></div>
              </div>

              <div className="absolute -right-20 -top-12 -z-[1] h-48 w-48 rounded-full bg-gradient-to-t from-blue-600 to-cyan-400 p-px">
                <div className="h-48 w-48 rounded-full bg-white dark:bg-slate-900"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Hero --> */}
      </main>
    </>
  );
};

export default Home;

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const session = await getServerAuthSession(ctx);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/auth/signin",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: { session },
//   };
// };
