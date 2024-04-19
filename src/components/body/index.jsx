import React, { useState } from "react";
import Header from '../header';
import About from "../about";
import Tecnology from "../tecnology";
import Projects from "../projects";
import Midia from "../midia";

export default function Body(){
    const [lang, setLang] = useState('PT_BR');
    return(
        <main className="h-screen w-[100vw] bg-background flex flex-col pt-[120px] pb-[300px] overflow-y-auto overflow-x-hidden">
            <Header  setLang={setLang} lang={lang}/>
            <About lang={lang}/>
            <Tecnology lang={lang}/>
            <Projects lang={lang} />
            <Midia lang={lang} />
        </main>
    );
}