import React from "react";

export default function Header(props) {
    const text = {
        about: {"PT_BR": "SOBRE", "EN_US": "ABOUT"},
        tech: {"PT_BR": "TECNOLOGIAS", "EN_US": "TECHNOLOGIES"},
        projeto: {"PT_BR": "PROJETOS", "EN_US": "PROJECTS"},
        contato: {"PT_BR": "CONTATOS", "EN_US": "CONTACTS"},
    }

    return (
        <header className="h-[80px] w-[100vw] bg-filter fixed top-0 z-50 flex items-center justify-center border-b-[1px] border-border max-[295px]:h-[60px]">
            <span className="flex items-center justify-center gap-x-16 max-sm:scale-75 max-sm:gap-x-10 max-[320px]:gap-x-5 max-[295px]:scale-50">
                <p className="text-fontCol hover:text-white cursor-pointer" onClick={()=>{props.scroll("about")}} style={props.view == "about" ? {color: "white"} : null}>{text.about[props.lang]}</p>
                <p className="text-fontCol hover:text-white cursor-pointer" onClick={()=>{props.scroll("tech")}} style={props.view == "tech" ? {color: "white"} : null}>{text.tech[props.lang]}</p>
                <p className="text-fontCol hover:text-white cursor-pointer" onClick={()=>{props.scroll("proj")}} style={props.view == "proj" ? {color: "white"} : null}>{text.projeto[props.lang]}</p>
                <p className="text-fontCol hover:text-white cursor-pointer" onClick={()=>{props.scroll("contact")}} style={props.view == "contact" ? {color: "white"} : null}>{text.contato[props.lang]}</p>
            </span>
        </header>
    );
}