import React from "react";
import Hero from "../sections/MainPage/Hero";
import Services from "../sections/MainPage/Services";
import About from "../sections/MainPage/About";
import Sota from "../animations/Sota";
import LenisScroll from "../animations/LenisScroll";

function MainPage() {

    return (
        <div className="mainPage">
            <LenisScroll>
                <Sota
                    hexSize={25}
                    borderColor="#333"
                    hoverFillColor="#FF7514"
                    gapX={5}
                    gapY={18.5}
                />
                <Hero />
                <Services />
                <About />
            </LenisScroll>
        </div>
    );
}

export default MainPage;
