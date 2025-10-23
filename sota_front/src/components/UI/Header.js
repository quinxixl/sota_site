import React from "react";
import logo from "../../icons/logo.svg";
import ctaWhite from "../../icons/ctaWhite.svg"

function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <ul className="header__nav__list">
                    <a href="#" className="header__nav__list-href">
                        <li className="header__nav__list-item">Услуги</li>
                    </a>
                    <a href="#" className="header__nav__list-href">
                        <li className="header__nav__list-item">Кейсы</li>
                    </a>
                    <a href="#" className="header__nav__list-href">
                        <li className="header__nav__list-item">О нас</li>
                    </a>
                </ul>
            </nav>
            <img src={logo} alt="STA" className="header__logo"/>
            <a className="header__cta" href="/application">
                <img src={ctaWhite} alt="" className="header__cta-img"/>
                <span className="header__cta-title">начать проект</span>
            </a>
        </header>
    )
}

export default Header;