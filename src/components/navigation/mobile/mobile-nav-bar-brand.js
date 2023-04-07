import React from "react";
import { NavLink } from "react-router-dom";

export const MobileNavBarBrand = ({ handleClick }) => {
    return (
        <div className="mobile-nav-bar__brand" onClick={ handleClick }>
            <NavLink to="/">
                <img
                    className="mobile-nav-bar__logo"
                    src="https://cdn.auth0.com/blog/hub/code-samples/hello-world/auth0-logo.svg"
                    alt="Awesome-Cam Logo"
                    width="82"
                    height="24"
                />
            </NavLink>
        </div>

    );
};
