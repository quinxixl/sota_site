import React, {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import sotaSvg from "../icons/sota.svg";
import request from "../scripts/request";

function Slider({prevRef, nextRef}) {
    const [requests, setRequests] = useState([]);


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
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={3}
                navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                }}
                loop={true}
                className={'slider__container'}
            >
                {requests.map((item, index) => (
                    <SwiperSlide key={index} className={'slider__container-item'}>
                        <div className="cases__item" onMouseEnter={noScroll} onMouseLeave={scroll}>
                            <img src={sotaSvg} className="border"/>
                            <div className="cases__item-design">
                                <div className='cases__item-design-imgwrap'>
                                    <img src={`${item.design_url}`} alt=""/>
                                </div>
                            </div>
                            <img src={`${item.logo_url}`} alt="" className="cases__item-logo"/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        )
}

export default Slider;