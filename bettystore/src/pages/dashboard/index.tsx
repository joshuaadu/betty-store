import React from "react";
import { type NextPage, type GetServerSideProps } from "next";
import { getServerAuthSession } from "../../server/auth";
import Content from "~/components/Content";
import Header from "~/components/Header";
import SideBar from "~/components/SideBar";
import SideBarToggle from "~/components/SideBarToggle";

export default function Home() {
  return (
    <>
      <Header />
      <SideBarToggle />
      <SideBar />
      <Content />
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
