import React from "react";
import { NavBar } from "./navigation/desktop/nav-bar";
import { PageFooter } from "./page-footer";


export const PageLayout = ({ children }) => {

    return (
        <div className="page-layout">
            <NavBar />
            { children }
            <PageFooter />
        </div>
    );
};
