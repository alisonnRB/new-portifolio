import React, { useState } from "react";
import Infos from "./infos";

export default function CardProj(props) {
    const [hover, setHover] = useState(false);

    if (props.infos !== 'default') {
        return (
            <div
                className="h-[370px] w-[700px] max-w-[700px] mb-6 bg-center transition-all shadow-[0_0_10px_rgba(255,255,255,0.2)] flex justify-end"
                style={{
                    backgroundImage: `url(${props.infos.img})`,
                    backgroundRepeat: props.infos.tag === "front" ? "no-repeat" : "repeat",
                    backgroundSize: props.infos.tag === "front" ? (!hover ? "100% 100%" : "120% 120%") : (!hover ? "50% 50%" : "60% 60%"),

                }}
                onMouseEnter={() => { setHover(true) }}
                onMouseLeave={() => { setHover(false) }}
            >

                <Infos infos={props.infos} hover={hover} lang={props.lang} /> :

            </div>
        );
    } else {
        return (
            <div
                className="bg-filter h-[370px] w-[700px] px-[10%] max-w-[700px] mb-6 shadow-[0_0_10px_rgba(255,255,255,0.2)] flex justify-center items-center"
            >
                <p className="text-center text-[20px] break-words">
                    {props.lang == "PT_BR" ? `FAÇA SEU CAFÉ, MAIS PROJETOS ${props.tag} ESTÃO VINDO` : `MAKE YOUR COFFEE, MORE ${props.tag} PROJECTS ARE COMING`}
                </p>

            </div>
        );
    }

}
