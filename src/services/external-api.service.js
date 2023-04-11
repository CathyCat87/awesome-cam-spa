import axios from "axios";

export const callExternalAPI = async ( options ) => {
    try {
        const rsp = await axios( options.config );
        const  { data } = rsp;

        return {
            data,
            error: null,
        }
    }

    catch ( error ) {
        if ( axios.isAxiosError( error ) ) {
            const axiosError = error;
            const { response } = axiosError;

            let msg = "http request failed";

            if ( response && response.statusText )
                msg = response.statusText;

            if ( axiosError.message )
                msg = axiosError.message;

            if ( response && response.data && response.data.message )
                msg = response.data.message;

            return {
                data: null,
                error: {
                    msg,
                },
            };
        }

        return {
            data: null,
            error: {
                message: error.message,
            },
        };
    }
};
