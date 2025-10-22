import React from "react";
import Hero from "../sections/MainPage/Hero";
import Services from "../sections/MainPage/Services";
import CasesPage from "../sections/MainPage/Cases";

function MainPage() {
    return (

        <div className="mainPage">
            <Hero />
            <Services />
            <CasesPage />
        </div>
    )
}

export default MainPage;