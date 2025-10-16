import React, {useEffect, useState} from "react";
import request from "../../scripts/request";

function CasesPage(){
    const [requests, setRequests] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:3000/api/cases/';
            request(url, setRequests)
    }, [])
    return (
        <div>
            {requests.map((item, index) => (
                <img key={index} src={`http://localhost:3000${item.img_url}`}  />
                ))}
        </div>
    )
}

export default CasesPage;