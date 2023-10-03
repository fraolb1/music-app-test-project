import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { Flex } from "rebass";
import Sidebar from "../components/Sidebar";
import { css } from "@emotion/react";

const RootLayout = ({ handleSearch }) => {
  const textStyle = css`
    color: black;
  `;
  return (
    <>
      <Header handleSearch={handleSearch} />
      <Flex flex={[1, 3]}>
        <Sidebar />
        <Outlet />
      </Flex>
    </>
  );
};

export default RootLayout;
