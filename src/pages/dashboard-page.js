import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { PageLayout } from "../components/page-layout";

import { DashboardProfile } from "../components/dashboard-profile";
import { DashboardLogEvents } from "../components/dashboard-log-events";
import {DashboardLiveVideo} from "../components/dashboard-live-video";
import {DashboardCameraStatus} from "../components/dashboard-camera-status";
import {DashboardLatestEvent} from "../components/dashboard-latest-event";

export const DashboardPage = () => {
    const { user } = useAuth0();

    if (!user) {
        return null;
    }

    return (
        <PageLayout>
            <div class="container">
                <div class="row">
                    <DashboardLiveVideo />
                    <DashboardCameraStatus />
                    <DashboardProfile />
                    <DashboardLatestEvent />
                    <DashboardLogEvents />
                </div>
            </div>

        </PageLayout>
    );
}
