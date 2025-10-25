import React, {useEffect} from "react";

function About () {
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
        </div>
    )
}


export default About;