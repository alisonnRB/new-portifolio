import React from "react";

export default function Header() {
    return (
        <header className="h-[80px] w-[100vw] bg-filter fixed top-0 z-50 flex items-center justify-center border-b-[1px] border-border max-[295px]:h-[60px]">
            <span className="flex items-center justify-center gap-x-16 max-sm:scale-75 max-sm:gap-x-10 max-[320px]:gap-x-5 max-[295px]:scale-50">
                <p className="text-fontCol hover:text-white cursor-pointer">SOBRE</p>
                <p className="text-fontCol hover:text-white cursor-pointer">TECNOLOGIAS</p>
                <p className="text-fontCol hover:text-white cursor-pointer">PROJETOS</p>
                <p className="text-fontCol hover:text-white cursor-pointer">CONTATO</p>
            </span>
        </header>
    );
}