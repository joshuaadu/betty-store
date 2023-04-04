import React from "react";
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
