import React from "react";
import Hero from "../sections/MainPage/Hero";
import Services from "../sections/MainPage/Services";
import CasesPage from "../sections/MainPage/Cases";
import Footer from "../components/UI/Footer";

function MainPage() {
    return (

        <div className="mainPage">
            <Hero />
            <Services />
            <CasesPage />
            <Footer />
        </div>
    )
}

export default MainPage;