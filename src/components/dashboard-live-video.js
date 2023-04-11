import React from "react";

const camera_stream = process.env.REACT_APP_VIDEO_STREAM_URL+"/stream.mjpg";

export const DashboardLiveVideo = () => {
    console.log(camera_stream);
    return (
        <div className="col-md-3">
            LIVE VIDEO
            <img src={ camera_stream } width="100%" />
        </div>
    );
};
