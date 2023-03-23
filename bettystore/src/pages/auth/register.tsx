import React from "react";
import { type GetServerSideProps } from "next";
import { getServerAuthSession } from "../../server/auth";

import RegisterForm from "~/components/forms/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="flex h-full w-full flex-1 items-center justify-center font-sans">
      <section className="mx-auto flex max-w-4xl flex-col overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800 md:h-max md:flex-row">
        <div className="md:flex md:w-1/2 md:items-center md:justify-center md:bg-gray-700 md:dark:bg-gray-800">
          <div className="px-6 py-6 md:px-8 md:py-0">
            <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">
              Sign In To{" "}
              <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">
                Betty Store
              </span>{" "}
              Dashboard
            </h2>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur obcaecati odio
            </p>
          </div>
        </div>

        <div className="text- flex items-center justify-center pb-6 md:w-1/2 md:py-6">
          <RegisterForm />
        </div>
      </section>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
};
