import React, { useState} from "react";
import Header from '../header';
import About from "../about";
import Tecnology from "../tecnology";
import Projects from "../projects";
import Midia from "../midia";
import FloatBt from "../floatBt";

export default function Body() {
    const [lang, setLang] = useState('PT_BR');
    const [view, setView] = useState('about');

    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className="h-screen w-[100vw] bg-background flex flex-col pt-[120px] pb-[300px] overflow-y-auto overflow-x-hidden">
            <Header lang={lang} scroll={scrollToElement} view={view}/>
            <About lang={lang} setView={setView}/>
            <Tecnology lang={lang} setView={setView}/>
            <Projects lang={lang} setView={setView}/>
            <Midia lang={lang} setView={setView}/>
            <FloatBt setLang={setLang} lang={lang} />
        </main>
    );
}