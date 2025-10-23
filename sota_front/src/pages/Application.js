import React from "react";
import Header from "../components/UI/Header";
import ctaWhite from "../icons/ctaWhite.svg";
import ctaWhiteButton from "../icons/ctaWhiteButton.svg";

function Application() {
    return (
        <div className='application'>
            <Header />
            <div className='application__main'>
                <p className='application__title'>Собрать улей</p>
                    <div className='application__form-container'>
                        <form method='' action='' className= 'application__form-container-grid'>
                            <p className='application__form-question'>Задача:</p>
                            <input type="text" placeholder='опишите задачу в свободной форме' className='application__form-input' />
                            <div className='application__form-file_button'>
                                <input type="file" className="application__form-file_button-input"/>
                                <img src={ctaWhite} alt=""/>
                                <span className="application__form-file_button-title">Прикрепить файл</span>
                            </div>
                            <p className='application__form-question-2'>контактные данные:</p>
                            <input type='text' placeholder='фио' className='application__form-input-2 subname' />
                            <input type='text' placeholder='компания' className='application__form-input-2 company'/>
                            <input type="email" placeholder='e-mail' className='application__form-input-2 email'/>
                            <input type='tel' placeholder='телефон' className='application__form-input-2 phone'/>
                            <input type='text' placeholder='url(например, сайт компании)' className='application__form-input-3'  />
                            <div className='application__privacy'>
                                <p className='application__privacy-policy'>нажимая кнопку „отправить”, вы даете <a href='' className='application__link'>согласие</a> на обработку персональных данных. <a href='' className='application__link'>политика обработки данных</a></p>
                            </div>
                            <button className='application__form-button-main'>
                                <img src={ctaWhiteButton} alt="" className='application__form-button-main-img'/>
                                <span className="application__form-button-main-title">Отправить</span>
                            </button>
                        </form>
                    </div>

                </div>
        </div>
    )
}


export default Application;