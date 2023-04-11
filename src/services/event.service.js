import { callExternalAPI } from "./external-api.service";

const apiServerURL = process.env.REACT_APP_API_SERVER_URL;

export const getAPIEvents = async () => {
    const config = {
        url: `${ apiServerURL }/events`,
        method: "GET",
        headers: {
            "content-type": "application/json",
        },
    };

    const { data, error } = await callExternalAPI( { config } );

    return {
        data: data || null,
        error,
    };
};
