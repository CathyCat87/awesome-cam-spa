import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons"
export const DashboardProfile = () => {

    const { user } = useAuth0();

    return (
        <div className="col-md-3">
            <div className="container">
                <div className="row">
                    <div className="col-12" align="center">
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12" align="center">
                        <b>User Profile</b>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 align-top" align="center">
                        <img className="rounded-circle" width="20px" src={ user.picture } />
                    </div>
                    <div className="col-10 align-top" align="center">
                        Logged in as <FontAwesomeIcon icon={ faUser } size="2xl" /> <strong>{ user.nickname }</strong><br/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12" align="center">
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12" align="center">
                        <FontAwesomeIcon icon={ faEnvelope } size="2xl" /> { user.email }
                    </div>
                </div>
                <div className="row">
                    <div className="col-12" align="center">
                        <hr />
                    </div>
                </div>


            </div>
        </div>
    );
};
