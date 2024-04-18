import React, { useState } from "react";
import Header from '../header';
import About from "../about";
import Tecnology from "../tecnology";

export default function Body(){
    const [lang, setLang] = useState('PT_BR');
    return(
        <main className="h-screen w-[100vw] bg-background flex flex-col py-[120px] overflow-y-auto overflow-x-hidden">
            <Header  setLang={setLang} lang={lang}/>
            <About lang={lang}/>
            <Tecnology lang={lang}/>
        </main>
    );
}