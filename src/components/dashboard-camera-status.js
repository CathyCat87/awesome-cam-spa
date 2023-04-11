import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryFull, faPlugCircleBolt, faCamera, faLocationDot, faSignal5 } from "@fortawesome/free-solid-svg-icons";
export const DashboardCameraStatus = () => {
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
                        <b>Camera Status</b>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <FontAwesomeIcon icon={ faCamera } size="2xl" /> Camera 1 (Prototype)<br />
                    </div>
                    <div className="col-6" align="right">
                        <FontAwesomeIcon icon={ faLocationDot } size="2xl" /> South West Gate<br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12" align="center">
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4" align="left">
                        <FontAwesomeIcon icon={ faBatteryFull } size="2xl" />
                    </div>
                    <div className="col-4" align="center">
                        <FontAwesomeIcon icon={ faPlugCircleBolt } size="2xl" />
                    </div>
                    <div className="col-4" align="right">
                        <FontAwesomeIcon icon={ faSignal5 } size="2xl" />
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
