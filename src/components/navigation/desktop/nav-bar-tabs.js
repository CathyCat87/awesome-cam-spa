import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const NavBarTabs = () =>{
    const { isAuthenticated } = useAuth0();
    //TODO
    return (
      <div className="nav-bar__tabs">

      </div>
    );
};