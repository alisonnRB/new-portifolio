import React from "react";

export default function Header() {
    return (
        <header className="h-[80px] w-[100vw] bg-filter fixed top-0 z-50 flex items-center justify-center gap-x-16 border-b-[1px] border-border">
            <p className="text-fontCol hover:text-white cursor-pointer">SOBRE</p>
            <p className="text-fontCol hover:text-white cursor-pointer">TECNOLOGIAS</p>
            <p className="text-fontCol hover:text-white cursor-pointer">PROJETOS</p>
            <p className="text-fontCol hover:text-white cursor-pointer">CONTATO</p>
        </header>
    );
}