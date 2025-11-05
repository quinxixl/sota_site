import React, { useState } from "react";
import Header from "../components/UI/Header";
import ctaWhite from "../icons/ctaWhite.svg";
import ctaWhiteButton from "../icons/ctaWhiteButton.svg";
import Footer from "../components/UI/Footer"

function Application() {
    const [form, setForm] = useState({
        task_description: "",
        fullname: "",
        company_name: "",
        email: "",
        phone_number: "",
        site_url: "",
    });
    const [errors, setErrors] = useState({});

    const validateAll = () => {
        const error = {};

        if (!form.task_description.trim()) {
            error.task_description = "Пожалуйста опишите задачу для нас";
        }

        if (!form.fullname.trim()) {
            error.fullname = "Пожалуйста напишите ваше полное ФИО";
        }

        if (!form.company_name.trim()) {
            error.company_name = "Пожалуйста напишите название компании";
        }

        if (!form.email.trim()) {
            error.email = "Пожалуйста напишите ваш email для обратной связи";
        }else if(!/\S+@\S+\.\S+/.test(form.email)){
            error.email = "Некорректный формат email!"
        }
        if (form.phone_number.trim()) {
            if (!/^\+?\d{10,15}$/.test(form.phone_number.replace(/\D/g, ''))) {
                error.phone_number = "Некорректный формат номера!";
            }
        }

        if (form.site_url.trim()) {
            if (!/^https?:\/\/.+\..+/.test(form.site_url)) {
                error.site_url = "Некорректный формат URL!";
            }
        }

        setErrors(error);

        return Object.keys(error).length === 0;
    }

    const onFocusError = (e) => {
        setErrors(prevErrors => ({ ...prevErrors, [e]: undefined }));
    }

    const onChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const sendForm = async (e) => {
        e.preventDefault();
        if (!validateAll()) {
            return
        }
        const res = await fetch("http://localhost:3000/api/application/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        const data = await res.json();
        console.log(data);
    };
    return (
        <div className='application'>
            <Header />
            <div className='application__main'>
                <p className='application__main-title'>Собрать улей</p>
                <div className='application__main-form'>
                    <form className='application__main-form-container'
                        onSubmit={sendForm}
                        noValidate
                    >
                        <p className='application__main-form-container-input-question task'>Задача:</p>
                        <input className='application__main-form-container-input'
                            type="text"
                            name="task_description"
                            placeholder='опишите задачу в свободной форме'
                            onChange={onChange}
                            onFocus={() => onFocusError('task_description')}
                            value={form.task_description}
                        />
                        {errors.task_description && <div className="error__task-description error">{errors.task_description}</div>}
                        <div className='application__main-form-container-file_button'>
                            <input className="application__main-form-container-file_button-input"
                                type="file"
                            />
                            <img src={ctaWhite} alt="" className='application__main-form-container-file_button-img'/>
                            <p className="application__main-form-container-file_button-title">Прикрепить файл</p>
                        </div>
                        <p className='application__main-form-container-input-question contact'>контактные данные:</p>
                        <input className='application__main-form-container-input-2 name'
                            type='text'
                            name='fullname'
                            placeholder='фио'
                            onChange={onChange}
                            onFocus={() => onFocusError('fullname')}
                            value={form.fullname}
                        />
                        {errors.fullname && <div className="error__fullname error">{errors.fullname}</div>}
                        <input className='application__main-form-container-input-2 company'
                            type='text'
                            name='company_name'
                            placeholder='компания'
                            onChange={onChange}
                            onFocus={() => onFocusError('company_name')}
                            value={form.company_name}
                        />
                        {errors.company_name && <div className="error__company-name error">{errors.company_name}</div>}
                        <input className='application__main-form-container-input-2 email'
                            type="email"
                            name="email"
                            placeholder='e-mail'
                            onChange={onChange}
                            onFocus={() => onFocusError('email')}
                            value={form.email}
                        />
                        {errors.email && <div className="error__email error">{errors.email}</div>}
                        <input className='application__main-form-container-input-2 phone'
                            type='tel'
                            name='phone_number'
                            placeholder='телефон'
                            onChange={onChange}
                            onFocus={() => onFocusError('phone_number')}
                            value={form.phone_number}
                        />
                        {errors.phone_number && <div className="error__phone-number error">{errors.phone_number}</div>}
                        <input className='application__main-form-container-input url'
                            type='text'
                            name='site_url'
                            placeholder='url(например, сайт компании)'
                            onChange={onChange}
                            onFocus={() => onFocusError('site_url')}
                            value={form.site_url}
                        />
                        {errors.site_url && <div className="error__site-url error">{errors.site_url}</div>}
                        <div className='application__main-form-container-privacy'>
                            <p className='application__main-form-container-privacy-title'>
                                нажимая кнопку „отправить”, вы даете <a href='' className='application__main-form-container-privacy-title-link'>согласие</a> на обработку персональных данных. <a href='' className='application__main-form-container-privacy-title-link'>политика обработки данных</a>
                            </p>
                        </div>
                        <button type="submit" className='application__main-form-container-button-main'>
                            <img src={ctaWhiteButton} alt="" className='application__main-form-container-button-main-img'/>
                            <p className="application__main-form-container-button-main-title">Отправить</p>
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Application;