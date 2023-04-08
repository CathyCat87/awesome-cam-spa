import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
    return (
        <div className="nav-bar__brand">
            <NavLink to="/">
                <span className="messages-grid__header">
                    <img
                        className="nav-bar__logo"
                        src="./linked-camera.svg"
                        alt="Awesome-cam Camera Logo"
                        width="36"
                        height="36"
                    />
                    Awesome-Cam
                </span>
            </NavLink>
        </div>
    );
};
