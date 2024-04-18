import React, { useState } from "react";
import { tecList } from './tecnology.ts';
import CardTec from "./cardTec/index.jsx";

export default function Tecnology(props) {
    const [desc, setDesc] = useState('');


    const cardGenerator = () => {
        const list = [];
        for (let i = 0; i < tecList.length; i++) {
            let tec = <CardTec Tec={tecList[i]} key={i} setDesc={setDesc} lang={props.lang}/>
            list.push(tec);
        }

        return list;
    }

    return (
        <section className="flex mt-80">
            <span id="tec"></span>
            <div className="bg-border w-[5vw] h-1/1 flex justify-center p-5">
                <p className="break-all max-w-3 flex text-center justify-center items-center">
                    {props.lang == "PT_BR" ? "TECNOLOGIAS" : "TECHNOLOGIES"}
                </p>
            </div>


            <div className="flex max-w-[50vw] flex-wrap pl-10 gap-6 max-lg:pl-5 max-[559px]:max-w-[60vw] max-[315px]:max-w-[95vw]">
                {cardGenerator()}
            </div>

            <div className="w-[45vw] h-full pr-[5px] max-[315px]:hidden">
                <p className="content break-keep text-[30px] max-w-[70%] max-sm:text-[20px] max-[559px]:text-[15px] max-[559px]:max-w-[95%] ">
                    {desc ? desc : (props.lang == "PT_BR" ? "\\\\ CLIQUE OU DEIXE O CURSOR SOBRE A TECNOLOGIA PARA SABER MAIS SOBRE //" : '\\\\ CLICK OR LEAVE THE CURSOR ON THE TECHNOLOGY TO LEARN MORE ABOUT //')}
                </p>
            </div>

        </section>
    );
}