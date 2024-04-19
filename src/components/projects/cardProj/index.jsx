import React, { useState } from "react";
import Infos from "./infos";

export default function CardProj(props) {
    const [hover, setHover] = useState(false);

    if (props.infos !== 'default') {
        return (
            <div
                className="h-[370px] min-w-[700px] max-w-[700px] mb-6 bg-center transition-all shadow-[0_0_10px_rgba(255,255,255,0.2)] flex justify-end 
                max-[1490px]:max-w-[600px] max-[1490px]:min-w-[600px]
                max-[1290px]:max-w-[500px] max-[1290px]:min-w-[500px]
                max-[1090px]:max-w-[400px] max-[1090px]:min-w-[400px] max-[1090px]:h-[320px]
                max-[890px]:max-w-[80vw] max-[890px]:min-w-[80vw]
                max-[560px]:max-w-[90vw] max-[1090px]:h-[240px]
                max-[390px]:max-w-[95vw] max-[390px]:min-w-[95vw]"
                style={{
                    backgroundImage: `url(${props.infos.img})`,
                    backgroundRepeat: props.infos.tag === "FRONT END" ? "no-repeat" : "repeat",
                    backgroundSize: props.infos.tag === "FRONT END" ? (!hover ? "100% 100%" : "120% 120%") : (!hover ? "50% 50%" : "60% 60%"),

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
                className="bg-filter h-[370px] max-w-[700px] min-w-[700px] mb-6 shadow-[0_0_10px_rgba(255,255,255,0.2)] flex justify-center items-center
                max-[1490px]:max-w-[600px] max-[1490px]:min-w-[600px]
                max-[1290px]:max-w-[500px] max-[1290px]:min-w-[500px]
                max-[1090px]:max-w-[400px] max-[1090px]:min-w-[400px] max-[1090px]:h-[320px]
                max-[890px]:max-w-[80vw] max-[890px]:min-w-[80vw]
                max-[560px]:max-w-[90vw] max-[1090px]:h-[240px]
                max-[390px]:max-w-[95vw] max-[390px]:min-w-[95vw]"
            >
                <p className="text-center text-[20px] break-words w-[80%]">
                    {props.lang == "PT_BR" ? `FAÇA SEU CAFÉ, MAIS PROJETOS ${props.tag} ESTÃO VINDO` : `MAKE YOUR COFFEE, MORE ${props.tag} PROJECTS ARE COMING`}
                </p>

            </div>
        );
    }

}
