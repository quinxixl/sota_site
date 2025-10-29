import React, {useRef, useState} from "react";
import sota from "../../icons/sotaAbout.svg";
import bg from "../../icons/design_background.svg";
import Footer from "../../components/UI/Footer";


function About () {
    const imgRef = useRef(null);
    const [hovered, setHovered] = useState(false);

    return (
        <div className='about'>
            <p className="about__title">
                О нас
            </p>
            <div className="about__container-subtitle">
                <p className="about__subtitle">
                    Ваш бизнес — это улей.
                </p>
                <p className="about__subtitle">
                    Мы — его защита и опора.
                </p>
            </div>
            <p className="about__subtitle-main">
                Мы действуем <br/>
                как сплоченный рой, <br/>
                где каждый специалист <br/>
                точно знает свою задачу. <br/>
            </p>
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
            </div>
            <Footer />
        </div>
    )
}


export default About;