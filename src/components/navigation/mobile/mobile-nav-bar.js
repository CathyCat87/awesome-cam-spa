import React from "react";
import {MobileNavBarBrand} from "./mobile-nav-bar-brand";

const MobileMenuState = {
    CLOSED: "closed",
    OPEN: "",
};

const MobileMenuIcon = {
    CLOSE: "close",
    MENU: "menu",
};

export const MobileNavBar = () => {
    const [ mobileMenuState, setMobileMenuState ] = React.useState( MobileMenuState.CLOSED );
    const [ mobileMenuIcon, setMobileMenuIcon ] = React.useState( MobileMenuIcon.CLOSED );

    const closeMobileMenu = () => {
        document.body.classList.remove("mobile-scroll-lock");
        setMobileMenuState(MobileMenuState.CLOSED);
        setMobileMenuIcon(MobileMenuIcon.MENU);
    };

    return (
        <div className="mobile-nav-bar__container">
            <nav className="mobile-nav-bar">
                <MobileNavBarBrand handleClick={ closeMobileMenu } />
            </nav>
        </div>
    );

};
