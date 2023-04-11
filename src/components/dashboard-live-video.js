import React from "react";

export const DashboardLiveVideo = () => {
    return (
        <div className="col-md-3">
            LIVE VIDEO
            <img src="http://192.168.2.54:8000/stream.mjpg" width="100%" />
        </div>
    );
};
