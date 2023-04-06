import React from "react";
import { PageFooter } from "./page-footer";


export const PageLayout = ({ children }) => {

    return (
        <div className="page-layout">
            { children }
            <PageFooter />
        </div>
    );
};
