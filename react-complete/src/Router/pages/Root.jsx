import React from "react";

import { Outlet } from "react-router-dom";
import { MainNavigation } from "./../component/MainNavigation";
import classes from "./Root.module.css";

export const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};
