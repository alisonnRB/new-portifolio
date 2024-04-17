import React from "react";
import Header from '../header';
import About from "../about";
import Tecnology from "../tecnology";

export default function Body(){
    return(
        <main className="h-screen w-[100vw] bg-background flex flex-col py-[120px] overflow-y-auto">
            <Header />
            <About />
            <Tecnology />
        </main>
    );
}