import React from "react";

export default function Header(props) {
    const text = {
        about: {"PT_BR": "SOBRE", "EN_US": "ABOUT"},
        tech: {"PT_BR": "TECNOLOGIAS", "EN_US": "TECHNOLOGIES"},
        projeto: {"PT_BR": "PROJETOS", "EN_US": "PROJECTS"},
        contato: {"PT_BR": "MÍDIAS", "EN_US": "MEDIA"},
    }

    return (
        <header className="h-[80px] w-[100vw] bg-filter fixed top-0 z-50 flex items-center justify-center border-b-[1px] border-border max-[295px]:h-[60px]">
            <span className="flex items-center justify-center gap-x-16 max-sm:scale-75 max-sm:gap-x-10 max-[320px]:gap-x-5 max-[295px]:scale-50">
                <p className="text-fontCol hover:text-white cursor-pointer">{text.about[props.lang]}</p>
                <p className="text-fontCol hover:text-white cursor-pointer">{text.tech[props.lang]}</p>
                <p className="text-fontCol hover:text-white cursor-pointer">{text.projeto[props.lang]}</p>
                <p className="text-fontCol hover:text-white cursor-pointer">{text.contato[props.lang]}</p>
            </span>

            <p className="text-fontCol hover:text-white cursor-pointer absolute right-2 top-2 text-[15px]" onClick={()=>{props.lang == "PT_BR" ? props.setLang("EN_US") : props.setLang("PT_BR")}}>{props.lang}</p>
        </header>
    );
}