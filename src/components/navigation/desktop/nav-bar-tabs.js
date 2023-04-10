import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {NavBarTab} from "./nav-bar-tab";

export const NavBarTabs = () =>{
    const { isAuthenticated } = useAuth0();
    return (
      <div className="nav-bar__tabs">
          { isAuthenticated && (
            <>
                <NavBarTab path="/dashboard" label="Dashboard" />
                <NavBarTab path="/profile" label="Profile" />
            </>
          )}
      </div>
    );
};
