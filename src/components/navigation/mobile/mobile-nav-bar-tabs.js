import React from "react";

import { useAuth0 } from "@auth0/auth0-react";
import {MobileNavBarTab} from "./mobile-nav-bar-tab";

export const MobileNavBarTabs = ({ handleClick }) => {
    const { isAuthenticated } = useAuth0();

    return(
        <div className="mobile-nav-bar__tabs">
            <MobileNavBarTab
                path="/references"
                label="References"
                handleClick={ handleClick }
            />

            { isAuthenticated && (
                <>
                    <MobileNavBarTab
                        path="/dashboard"
                        label="Dashboard"
                        handleClick={ handleClick }
                    />
                    <MobileNavBarTab
                        path="/profile"
                        label="Profile"
                        handleClick={ handleClick }
                    />
                </>
            )}
        </div>
    );

};
