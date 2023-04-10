import React from "react";
import { PageLayout } from "../components/page-layout";
//import { useParams } from "react-router-dom";
export const ProfilePage = () => {
//    let { id } = useParams();
    return (
        <PageLayout>
            <h1>Hello there user.</h1>
            <p>This is your awesome User Profile page</p>
        </PageLayout>
    );
}
