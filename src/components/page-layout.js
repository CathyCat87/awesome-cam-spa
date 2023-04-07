import React from "react";
import { NavBar } from "./navigation/desktop/nav-bar";
import { PageFooter } from "./page-footer";
import { MobileNavBar } from "./navigation/mobile/mobile-nav-bar";

export const PageLayout = ({ children }) => {

    return (
        <div className="page-layout">
            <NavBar />
            <MobileNavBar />
            { children }
            <PageFooter />
        </div>
    );
};
