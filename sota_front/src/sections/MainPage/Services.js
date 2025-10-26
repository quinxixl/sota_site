import React from "react";
import cta from "../../icons/services_cta.svg";

function Services() {
    return (
        <div className='services'>
            <p className="services__title">
                Услуги
            </p>
            <p className="services__subtitle">
                Мы не просто делаем сайты. Мы создаем инструменты для роста и развития для вашего бизнеса.
            </p>
            <div className="services__container">
                <div className="services__item">
                    <p className="services__item-title">
                        Fast-лендинг
                    </p>
                    <p className="services__item-price">
                        от 30 000 ₽
                    </p>
                    <div className="services__item-hover">
                        <p className="services__item-subtitle">
                            Яркий одностраничный <br/>
                            сайт для быстрого <br/>
                            старта продаж <br/>
                            или рекламной компании <br/>
                        </p>
                        <p className="services__item-date">
                            7-14 дней
                        </p>
                    </div>
                </div>
                <div className="services__item">
                    <p className="services__item-title">
                        Лендинг
                    </p>
                    <p className="services__item-price">
                        от 40 000 ₽
                    </p>
                    <div className="services__item-hover">
                        <p className="services__item-subtitle">
                            Продающая страница <br/>
                            с аналитикой, формами <br/>
                            захвата и интеграцией <br/>
                            с CRM. <br/>
                        </p>
                        <p className="services__item-date">
                            7-14 дней
                        </p>
                    </div>
                </div>
                <div className="services__item">
                    <p className="services__item-title">
                        Сайт-визитка
                    </p>
                    <p className="services__item-price">
                        от 25 000 ₽
                    </p>
                    <div className="services__item-hover">
                        <p className="services__item-subtitle">
                            Лаконичный сайт для <br/>
                            представления вашей <br/>
                            компании услуг <br/>
                            и контактов.
                        </p>
                        <p className="services__item-date">
                            10-12 дней
                        </p>
                    </div>
                </div>
                <div className="services__item">
                    <p className="services__item-title">
                        Промо сайт
                    </p>
                    <p className="services__item-price">
                        от 55 000 ₽
                    </p>
                    <div className="services__item-hover">
                        <p className="services__item-subtitle">
                            Яркий <br/>
                            и интерактивный сайт <br/>
                            для продвижения <br/>
                            конкретного продукта <br/>
                            или события.
                        </p>
                        <p className="services__item-date date">
                            14-20 дней
                        </p>
                    </div>
                </div>
                <div className="services__item">
                    <p className="services__item-title">
                        Сайт-каталог
                    </p>
                    <p className="services__item-price">
                        от 65 000 ₽
                    </p>
                    <div className="services__item-hover">
                        <p className="services__item-subtitle">
                            Каталог <br/>
                            товаров/услуг <br/>
                            с фильтрами, поиском <br/>
                            и личным кабинетом. <br/>
                        </p>
                        <p className="services__item-date">
                            20-30 дней
                        </p>
                    </div>
                </div>
            </div>
            <button className="services__cta">
                <img src={cta} alt="" className="services__cta-img"/>
                <span className='services__cta-img-title'>Заказать</span>
            </button>
            <p className="services__examples">
                <a href="#">
                    Примеры
                </a>
            </p>
        </div>

    )
}

export default Services;