import React from "react";
import cta from "../../icons/cta.svg";
import Sota from "../../animations/Sota";
import Header from "../../components/UI/Header";

function Hero() {
    return (
        <div className="hero">
            <div className="hero__container-side">
                <Sota
                    hexSize={25}
                    borderColor="#333"
                    hoverColor="#FF7514"
                    gapX={5}
                    gapY={18.5}
                />
                <Header />
            </div>
            <div className="hero__container-main">
                <div className="hero__container">
                    <p className="hero__title">
                        Наша цель - Ваш рост. <br/>
                    </p>
                    <p className="hero__subtitle">
                        Мы создаем безупречную<br/>
                        техническую основу и визуал,<br/>
                        который ковертирует<br/>
                        посетителей в прибыль.<br/>
                    </p>
                    <span className="hero__cta" >
                        <img src={cta} alt="" className="hero__cta-img"/>
                        <a className="hero__cta-title" href="/application">Обсудить проект</a>
                    </span>
                </div>
                <div className="hero__footer">
                    <a href="#" className="hero__footer-details">
                        Подробнее
                    </a>
                    <span className="hero__footer-copyright">
                    ©2025
                    </span>
                    <div className="hero__footer-links">
                        <ul className="hero__footer-links-1">
                            <a href="#" className="hero__footer-link">
                                <li>
                                    instagram
                                </li>
                            </a>
                            <a href="#" className="hero__footer-link">
                                <li>
                                    youtube
                                </li>
                            </a>
                            <a href="#" className="hero__footer-link">
                                <li>
                                    vkonakte
                                </li>
                            </a>
                        </ul>
                        <ul className="hero__footer-links-2">
                            <a href="#" className="hero__footer-link">
                                <li>
                                    behance
                                </li>
                            </a>
                            <a href="#" className="hero__footer-link">
                                <li>
                                    telegram
                                </li>
                            </a>
                            <a href="#" className="hero__footer-link">
                                <li>
                                    pinterest
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;