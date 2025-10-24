import React, { useState } from "react";
import Header from "../components/UI/Header";
import ctaWhite from "../icons/ctaWhite.svg";
import ctaWhiteButton from "../icons/ctaWhiteButton.svg";

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
            error.email = "Некорректный формат email"
        }
        if (form.phone_number.trim()) {
            if (!/^\+?\d{10,15}$/.test(form.phone_number.replace(/\D/g, ''))) {
                error.phone_number = "Некорректный формат номера";
            }
        }

        if (form.site_url.trim()) {
            if (!/^https?:\/\/.+\..+/.test(form.site_url)) {
                error.site_url = "Некорректный формат URL";
            }
        }

        setErrors(error);

        return Object.keys(error).length === 0;
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
                <p className='application__title'>Собрать улей</p>
                <div className='application__form-container'>
                    <form
                        className='application__form-container-grid'
                        onSubmit={sendForm}
                        noValidate
                    >
                        <p className='application__form-question'>Задача:</p>
                        <input
                            type="text"
                            name="task_description"
                            placeholder='опишите задачу в свободной форме'
                            className='application__form-input'
                            onChange={onChange}
                            value={form.task_description}
                        />
                        {errors.task_description && <div className="error__task-description error">{errors.task_description}</div>}
                        <div className='application__form-file_button'>
                            <input
                                type="file"
                                className="application__form-file_button-input"
                            />
                            <img src={ctaWhite} alt="" />
                            <span className="application__form-file_button-title">Прикрепить файл</span>
                        </div>
                        <p className='application__form-question-2'>контактные данные:</p>
                        <input
                            type='text'
                            name='fullname'
                            placeholder='фио'
                            className='application__form-input-2 subname'
                            onChange={onChange}
                            value={form.fullname}
                        />
                        {errors.fullname && <div className="error__fullname error">{errors.fullname}</div>}
                        <input
                            type='text'
                            name='company_name'
                            placeholder='компания'
                            className='application__form-input-2 company'
                            onChange={onChange}
                            value={form.company_name}
                        />
                        {errors.company_name && <div className="error__company-name error">{errors.company_name}</div>}
                        <input
                            type="email"
                            name="email"
                            placeholder='e-mail'
                            className='application__form-input-2 email'
                            onChange={onChange}
                            value={form.email}
                        />
                        {errors.email && <div className="error__email error">{errors.email}</div>}
                        <input
                            type='tel'
                            name='phone_number'
                            placeholder='телефон'
                            className='application__form-input-2 phone'
                            onChange={onChange}
                            value={form.phone_number}
                        />
                        {errors.phone_number && <div className="error__phone-number error">{errors.phone_number}</div>}
                        <input
                            type='text'
                            name='site_url'
                            placeholder='url(например, сайт компании)'
                            className='application__form-input-3'
                            onChange={onChange}
                            value={form.site_url}
                        />
                        {errors.site_url && <div className="error__site-url error">{errors.site_url}</div>}
                        <div className='application__privacy'>
                            <p className='application__privacy-policy'>
                                нажимая кнопку „отправить”, вы даете <a href='' className='application__link'>согласие</a>
                                на обработку персональных данных. <a href='' className='application__link'>политика обработки данных</a>
                            </p>
                        </div>
                        <button type="submit" className='application__form-button-main'>
                            <img src={ctaWhiteButton} alt="" className='application__form-button-main-img' />
                            <span className="application__form-button-main-title">Отправить</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Application;