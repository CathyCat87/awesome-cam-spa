import React from "react";

export const HeroBanner = () => {
    const logo = "https://cdn.auth0.com/blog/developer-hub/react-logo.svg";

    return (
        <div className="hero-banner hero-banner--pink-yellow">
            <div className="hero-banner__logo">
                <img className="hero-banner__image" src={ logo } alt="Awesome-Cam logo" />
            </div>
            <h1 className="hero-banner__headline">Welcome to Awesome-Cam!</h1>
            <p className="hero-banner__description">
                Awesome-cam is a security camera hosted on a RaspberryPI completed for <strong>CS490CO Winter 2023</strong>.
            </p>
        </div>
    );
};
