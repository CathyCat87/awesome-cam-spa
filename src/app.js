import { useAuth0  } from "@auth0/auth0-react";
import React from "react";

import { Route, Routes } from "react-router-dom";
import { PageLoader } from "./components/page-loader";
import { AuthenticationGuard } from "./components/authentication-guard";

import { DashboardPage } from "./pages/dashboard-page";
import { HomePage } from "./pages/home-page";
import { NotFoundPage } from "./pages/not-found-page";
import { ProfilePage } from "./pages/profile-page";
import { ReferencesPage } from "./pages/references-page";


export const App = () =>{
  const { isLoading } = useAuth0();

  if ( isLoading )
      return (
        <div className="page-layout">
            <PageLoader />
        </div>
      );

  return (
    <Routes>
        <Route
            path="/"
            element={ <HomePage /> }
        />
        <Route
            path="/dashboard"
            element={ <AuthenticationGuard component={ DashboardPage } /> }
        />
        <Route
            path="/profile"
            element={ <AuthenticationGuard component={ ProfilePage } /> }
        />
        <Route
            path="/references"
            element={ <ReferencesPage /> }
        />
        <Route
            path="/*"
            element={ <NotFoundPage /> }
        />
    </Routes>
  );
};
