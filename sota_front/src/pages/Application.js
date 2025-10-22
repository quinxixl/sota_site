import React from "react";
import Header from "../components/UI/Header";

function Application() {
    return (
        <div className='application'>
            <Header />

            <div className='application__main'>
                <p className='application__title'>Собрать улей</p>
                <div>
                    <form method='' action=''>
                        <div className='applicaiton__form'>
                            <label className='application__form__question'>Задача:</label>
                            <input type="text" placeholder='опишите задачу в свободной форме' className='application__form__input' />
                        </div>
                    </form>
                </div>
                <p className='application__form__question__2'>контактные данные:</p>
                <div className={'application__form__container'}>
                    <form method='' action='' className='application__form__container__grid'>
                        <input type='text' placeholder='фио' className='application__form__input__2' />
                        <input type='text' placeholder='компания' className='application__form__input__2'/>
                        <input type='text' placeholder='e-mail' className='application__form__input__2'/>
                        <input type='text' placeholder='телефон' className='application__form__input__2'/>
                    </form>
                </div>
                <div>
                    <form method='' action=''>
                        <input type='text' placeholder='url(например, сайт компании)' className='application__form__input__3'  />
                    </form>
                </div>
                <p className={'application__privacy_policy'}>нажимая кнопку „отправить”, вы даете
                    согласие
                    на обработку персональных данных.
                    политика обработки данных</p>
            </div>
        </div>
    )
};


export default Application;