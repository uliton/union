import React, { useContext } from "react";
import { Outlet } from "react-router";
import { Head } from "../Head/Head";
import { Language, getTranslation } from "../../functions/language";

export const PortfolioLayout = () => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);

  return (
    <>
      <Head link="/portfolio" mock={MOCK.portfolio_header_title} />

      <Outlet />
    </>
  );
};
