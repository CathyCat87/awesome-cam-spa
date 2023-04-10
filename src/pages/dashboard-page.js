import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { PageLayout } from "../components/page-layout";
import { CodeSnippet } from "../components/code-snippet";

export const DashboardPage = () => {
    const { user } = useAuth0();

    if (!user) {
        return null;
    }

    return (
        <PageLayout>
            <h1>Hey from Dashboard</h1>
            <p>This is your awesome Dashboard subtitle</p>
            <p>Maybe current/most recent picture then a table with a list of events to click on for details.</p>
        </PageLayout>
    );
}
