import React, {useEffect, useRef, useState} from "react";
import request from "../../scripts/request";
import cta from "../../icons/services_cta.svg";
import sotaSvg from "../../icons/sota.svg";
import Slider from "../../animations/Slider";
import arrow from "../../icons/arrow.svg";


function CasesPage(){
    const imageRef = useRef(null);
    const [requests, setRequests] = useState([]);
    const prevRef = useRef(null);
    const nextRef = useRef(null);


    useEffect(() => {
        const url = 'http://localhost:3000/api/cases/';
            request(url, setRequests)
    }, [])

    const noScroll = () => {
        document.body.style.overflow = 'hidden';
    }

    const scroll = () => {
        document.body.style.overflow = 'auto';

    }

    return (
            <div className="cases">
                <p className="cases__title">Кейсы</p>
                <div className="cases__slider">
                    <div className='slider__button'>
                        <button ref={prevRef} className="prev"><img src={arrow} /></button>
                        <button ref={nextRef} className="next"><img src={arrow} /></button>
                    </div>
                    <Slider prevRef = {prevRef} nextRef = {nextRef}/>
                </div>
                <button className="cases__cta">
                    <img src={cta} alt="" className="cases__cta-img"/>
                    <span>Заказать</span>
                </button>
                <p className="cases__about ">
                    <a href="#">
                        О команде
                    </a>
                </p>
            </div>
    )
}

export default CasesPage;