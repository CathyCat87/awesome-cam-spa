import React from "react";

export const HeroBanner = () => {
    const logo = "./logo192.png";

    return (
        <div className="hero-banner hero-banner--aqua-emerald">
            <div className="hero-banner__logo">
                <img className="hero-banner__image" src={ logo } alt="Awesome-Cam logo" />
            </div>
            <h1 className="hero-banner__headline">Welcome to Awesome-Cam!</h1>
            <p className="hero-banner__description">
                Awesome-cam is a security camera hosted on a RaspberryPI with on-board image recognition, centralized server, and React Single Page Application completed for <strong>CS490CO(Winter 2023)</strong> at the University of Regina.
            </p>
        </div>
    );
};
