import { useAuth0  } from "@auth0/auth0-react";
import React from "react";

import { Route, Routes } from "react-router-dom";
import { PageLoader } from "./components/page-loader";
import { AuthenticationGuard } from "./components/authentication-guard";

import { HomePage } from "./pages/HomePage";

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
    </Routes>
  );
};


/*import React from "react";
import { Route, Routes } from "react-router-dom";
// We will create these two pages in a moment

import DashboardPage from "./pages/DashboardPage";
import { HomePage } from "./pages/HomePage";
import LogoutPage from "./pages/LogoutPage";
import UserPage from "./pages/UserPage";

import { AuthenticationGuard } from "./components/authentication-guard";

export default function App() {
  return (
      <Routes>
          <Route exact
                 path="/"
                 element={ HomePage } />
          <Route path="/dashboard"
                 element={<AuthenticationGuard component={ DashboardPage } />}
          />
          <Route path="/profile"
                 element={<AuthenticationGuard component={ UserPage } />}
          />
          <Route path="/logout" element={ LogoutPage } />
      </Routes>
  );
}*/
