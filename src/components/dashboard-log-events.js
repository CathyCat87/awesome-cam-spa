import React, { useEffect, useState} from "react";

import { getAPIEvents } from "../services/event.service";
import { CodeSnippet } from "./code-snippet";

export const DashboardLogEvents = () =>{

    const [ events, setEvents ] = useState("");

    useEffect(() => {
        let isMounted = true;

        const getEvents = async () => {
            const { data, error } = await getAPIEvents();

            if ( !isMounted )
                return;

            if ( data )
                setEvents(JSON.stringify(data, null, 2))

            if  ( error )
                setEvents(JSON.stringify(error, null, 2))
        };

        getEvents();

        return () => {
            isMounted = false;
        };

    }, []);
    return (
        <div className="col-md-12">
            <div className="container">
                <div className="row">
                    <div className="col-12" align="center">
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12" align="center">
                        <b>Event Log</b>
                        <hr />
                    </div>
                </div>
            </div>
            <CodeSnippet title="Events" code={ events } />
        </div>



    );
};
