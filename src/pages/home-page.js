import React from "react";
import { AwesomeCamFeatures } from "../components/awesome-cam-features";
import { HeroBanner } from "../components/hero-banner";
import { PageLayout} from "../components/page-layout";

export const HomePage = () => (
    <PageLayout>
        <HeroBanner />
        <AwesomeCamFeatures />
    </PageLayout>
);
