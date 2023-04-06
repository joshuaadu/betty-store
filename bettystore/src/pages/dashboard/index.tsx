import React from "react";
import { type NextPage, type GetServerSideProps } from "next";
import { getServerAuthSession } from "../../server/auth";
import Content from "~/components/Content";
import Header from "~/components/Header";
import SideBar from "~/components/SideBar";
import SideBarToggle from "~/components/SideBarToggle";
import { useSession } from "next-auth/react";
import Stats from "~/components/Stats";

export default function Home() {
  const { data: sessionData } = useSession();
  return (
    <>
      <Header />
      <SideBarToggle />
      <SideBar />
      {/* <Content /> */}

      <div className="w-full px-4 pt-10 sm:px-6 md:px-8 lg:pl-72">
        {/* <!-- Page Heading --> */}
        <header className="flex w-full justify-between">
          <div className="j mt-5 flex flex-col gap-2 ">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white sm:text-3xl">
              {/* {`Welcome,${sessionData?.user.name}.`} */}
              Welcome!
            </h1>
            <p className="mt-2 text-lg text-gray-800 dark:text-gray-400">
              {"Here's what's happening with your store today."}
            </p>
          </div>
          <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <a
              className="inline-flex w-full items-center justify-center gap-x-3 rounded-md border border-transparent bg-blue-600 px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 sm:w-auto"
              href="#"
              // target="_blank"
            >
              Make A Sale
            </a>
          </div>
        </header>
        {/* <!-- End Page Heading --> */}
        <Stats />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
};
