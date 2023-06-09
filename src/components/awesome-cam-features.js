import React from "react";

import { AwesomeCamFeature } from "./awesome-cam-feature";

export const AwesomeCamFeatures = () => {
    const featuresList = [
        {
            title: "Identity Providers",
            description: "Auth0 supports social providers such as Google, Facebook, and Twitter, along with Enterprise providers such as Microsoft Office 365, Google Apps, and Azure. You can also use any OAuth 2.0 Authorization Server.",
            resourceUrl: "https://www.google.com/search?q=todo",
            icon: "https://cdn.auth0.com/blog/hello-auth0/identity-providers-logo.svg"
        },
        {
            title: "Multi-Factor Authentication",
            description:
                "You can require your users to provide more than one piece of identifying information when logging in. MFA delivers one-time codes to your users via SMS, voice, email, WebAuthn, and push notifications.",
            resourceUrl: "https://www.google.com/search?q=todo",
            icon: "https://cdn.auth0.com/blog/hello-auth0/mfa-logo.svg",
        },
        {
            title: "Attack Protection",
            description:
                "Auth0 can detect attacks and stop malicious attempts to access your application such as blocking traffic from certain IPs and displaying CAPTCHA. Auth0 supports the principle of layered protection in security that uses a variety of signals to detect and mitigate attacks.",
            resourceUrl: "https://www.google.com/search?q=todo",
            icon: "https://cdn.auth0.com/blog/hello-auth0/advanced-protection-logo.svg",
        },
        {
            title: "Serverless Extensibility",
            description:
                "Actions are functions that allow you to customize the behavior of Auth0. Each action is bound to a specific triggering event on the Auth0 platform. Auth0 invokes the custom code of these Actions when the corresponding triggering event is produced at runtime.",
            resourceUrl: "https://www.google.com/search?q=todo",
            icon: "https://cdn.auth0.com/blog/hello-auth0/private-cloud-logo.svg",
        },
    ];

    return (
        <div className="auto-features">
            <br />
            <br />
            <h2 className="awesome-cam-features__title">Explore Awesome-Cam's Awesome Features</h2>
            <div className="awesome-cam-features__grid">
                { featuresList.map((feature) => (
                    <AwesomeCamFeature
                        key={feature.resourceUrl}
                        title={feature.title}
                        description={feature.description}
                        resourceURL={feature.resourceUrl}
                        icon={feature.icon}
                    />
                ))}
            </div>
        </div>

    );

};
