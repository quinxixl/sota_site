import React from "react";
import logo from "../../icons/logo.png";

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
            <img src={logo} alt="SOTA" className="header__logo"/>
            <a className="header__cta" href="/application">
                <span></span>
                <p className="header__cta-title">начать проект</p>
                <span></span>
            </a>
        </header>
    )
}

export default Header;