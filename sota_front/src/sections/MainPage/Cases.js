import React, {useEffect, useState} from "react";
import request from "../../scripts/request";
import cta from "../../icons/services_cta.svg";
import sotaSvg from "../../icons/sota.svg";

function CasesPage(){
    const [requests, setRequests] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:3000/api/cases/';
            request(url, setRequests)
    }, [])
    return (
        <div className="cases">
            <p className="cases__title">Кейсы</p>
            <div className="cases__container">
                {requests.map((item, index) => (
                    <div key={index} className="cases__item">
                        <img src={sotaSvg} alt="" className="cases__item-sota"/>
                        <img src={`${item.design_url}`} alt="" className="cases__item-design"/>
                        <img src={`${item.logo_url}`} alt="" className="cases__item-logo"/>
                    </div>
                ))}
            </div>
            <button className="cases__cta">
                <img src={cta} alt="" className="cases__cta-img"/>
                <span>Больше кейсов</span>
            </button>
            <p className="cases__about">
                <a href="#">
                    О команде
                </a>
            </p>
        </div>
    )
}

export default CasesPage;