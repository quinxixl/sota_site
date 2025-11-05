import React, {useEffect, useState} from "react";
import logo from "../../icons/logo.svg";
import ctaWhite from "../../icons/ctaWhite.svg";
import menu from "../../icons/menu-button.svg";




function Header() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 431);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 431);
        };

        window.addEventListener('resize', handleResize);
        return () =>
            window.removeEventListener('resize', handleResize);

    }, []);

    return (
        <header className="header">
        {isMobile ? (
            <>
                <img src = {logo} alt="STA" className="header__logo"/>
                <button className='header__menu'><img src = {menu}/></button>
            </>)
        : (
                <>
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
            </a> </>
        )
        }
        </header>
    )
}

export default Header;