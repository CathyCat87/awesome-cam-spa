import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
    return (
        <div className="nav-bar__brand">
            <NavLink to="/">
                <img className="nav-bar__logo"
                     //TODO
                     src="https://cdn.auth0.com/blog/hub/code-samples/hello-world/auth0-logo.svg"
                     alt="Awesome-Cam Logo"
                     width="122"
                     height="36"
                />
            </NavLink>
        </div>
    );

};