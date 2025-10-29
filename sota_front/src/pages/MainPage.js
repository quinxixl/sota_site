import React from "react";
import Hero from "../sections/MainPage/Hero";
import Services from "../sections/MainPage/Services";
import Cases from "../sections/MainPage/Cases";
import About from "../sections/MainPage/About";

function MainPage() {
    return (

        <div className="mainPage">
            <Hero />
            <Services />
            <Cases />
            <About />
        </div>
    )
}

export default MainPage;