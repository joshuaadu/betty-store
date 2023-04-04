import React from "react";
import Header from "./Header";
import SideBarToggle from "./SideBarToggle";
import SideBar from "./SideBar";
import Content from "./Content";

export default function Layout() {
  return (
    <>
      <Header />
      <SideBarToggle />
      <SideBar />
      <Content />
    </>
  );
}
