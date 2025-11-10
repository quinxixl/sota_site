import React, {useEffect, useRef, useState} from "react";
import sota from "../../icons/sotaAbout.svg";
import bg from "../../icons/design_background.svg";
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Navigation, Pagination, Autoplay} from "swiper/modules";


function About () {
    const imgRef = useRef(null);
    const [hovered, setHovered] = useState(false);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 700);
        };

        window.addEventListener('resize', handleResize);
        return () =>
            window.removeEventListener('resize', handleResize);

    }, []);

    return (
        <div className='about' id = 'about'>
            <p className="about__title">
                О нас
            </p>
            <div className="about__container-subtitle">
                <p className="about__subtitle">
                    Ваш бизнес — это улей.
                </p>
                <p className="about__subtitle-2">
                    Мы — его защита и опора.
                </p>
                <p className="about__subtitle-main">
                    Мы действуем <br/>
                    как сплоченный рой, <br/>
                    где каждый специалист <br/>
                    точно знает свою задачу. <br/>
                </p>
            </div>
            {isMobile ? (
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.about__slider-next',
                        prevEl: '.about__slider-prev',
                    }}
                    className={'about__container-slider'}
                    autoplay={false}
                >
                    <SwiperSlide>
                        <div className="about__sota">
                            <img src={sota}  className="about__sota-img"/>
                            <p className="about__sota-title">Backend</p>
                            <p className="about__sota-subtitle">глубина и структура</p>
                            <div className="about__sota-hover">
                                <div className="about__sota-background-animate backend"></div>
                                <ul className="about__sota-hover-list">
                                    <li className="about__sota-point">
                                        Прочный фундамент всего улья
                                    </li>
                                    <li className="about__sota-point">
                                        Надежная основа для роста
                                    </li>
                                    <li className="about__sota-point">
                                        Логика и мощность внутри
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="about__sota design1"
                             onMouseEnter={() => setHovered(true)}
                             onMouseLeave={() => setHovered(false)}>
                            <img src={hovered ? bg : sota}  ref = {imgRef} className="about__sota-img"/>
                            <span className="about__sota-title">Design</span>
                            <p className="about__sota-subtitle">визуал и эмоция</p>
                            <div className="about__sota-hover ">
                                <div className="about__sota-background-animate design"></div>
                                <ul className="about__sota-hover-list">
                                    <li className="about__sota-point">
                                        Идеальная геометрия впечатлений
                                    </li>
                                    <li className="about__sota-point">
                                        Красота, в которую хочется верить
                                    </li>
                                    <li className="about__sota-point">
                                        Эстетика, приносящая результат
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="about__sota frontend">
                            <img src={sota}  className="about__sota-img"/>
                            <p className="about__sota-title">Frontend</p>
                            <p className="about__sota-subtitle">движение и динамика</p>
                            <div className="about__sota-hover">
                                <div className="about__sota-background-animate frontend-animate"></div>
                                <ul className="about__sota-hover-list">
                                    <li className="about__sota-point">
                                        Жизнь и движение вашего продукта
                                    </li>
                                    <li className="about__sota-point">
                                        Технологии, которые чувствуются
                                    </li>
                                    <li className="about__sota-point">
                                        Плавность каждого взаимодействия
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            ) : (
                <div className="about__container">
                <div className="about__sota">
                    <img src={sota}  className="about__sota-img"/>
                    <p className="about__sota-title">Backend</p>
                    <p className="about__sota-subtitle">глубина и структура</p>
                    <div className="about__sota-hover">
                        <div className="about__sota-background-animate backend"></div>
                        <ul className="about__sota-hover-list">
                            <li className="about__sota-point">
                                Прочный фундамент всего улья
                            </li>
                            <li className="about__sota-point">
                                Надежная основа для роста
                            </li>
                            <li className="about__sota-point">
                                Логика и мощность внутри
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="about__sota design1"
                     onMouseEnter={() => setHovered(true)}
                     onMouseLeave={() => setHovered(false)}>
                    <img src={hovered ? bg : sota}  ref = {imgRef} className="about__sota-img"/>
                    <span className="about__sota-title">Design</span>
                    <p className="about__sota-subtitle">визуал и эмоция</p>
                    <div className="about__sota-hover ">
                        <div className="about__sota-background-animate design"></div>
                        <ul className="about__sota-hover-list">
                            <li className="about__sota-point">
                                Идеальная геометрия впечатлений
                            </li>
                            <li className="about__sota-point">
                                Красота, в которую хочется верить
                            </li>
                            <li className="about__sota-point">
                                Эстетика, приносящая результат
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="about__sota frontend">
                    <img src={sota}  className="about__sota-img"/>
                    <p className="about__sota-title">Frontend</p>
                    <p className="about__sota-subtitle">движение и динамика</p>
                    <div className="about__sota-hover">
                        <div className="about__sota-background-animate frontend-animate"></div>
                        <ul className="about__sota-hover-list">
                            <li className="about__sota-point">
                                Жизнь и движение вашего продукта
                            </li>
                            <li className="about__sota-point">
                                Технологии, которые чувствуются
                            </li>
                            <li className="about__sota-point">
                                Плавность каждого взаимодействия
                            </li>
                        </ul>
                    </div>
                </div>
            </div>)}
        </div>
    )
}


export default About;