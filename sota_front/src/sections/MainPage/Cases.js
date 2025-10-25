import React, {useEffect, useState} from "react";
import request from "../../scripts/request";
import cta from "../../icons/cta.svg";
import sotaSvg from "../../icons/sota.svg";

function Cases(){
    const [requests, setRequests] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:3000/api/cases/';
            request(url, setRequests)
    }, [])
    return (
        <div className='cases'></div>
    )
}

export default Cases;