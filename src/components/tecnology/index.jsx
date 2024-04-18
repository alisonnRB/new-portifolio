import React, { useState } from "react";
import { tecList } from './tecnology.ts';
import CardTec from "./cardTec/index.jsx";

export default function Tecnology() {
    const [desc, setDesc] = useState('');


    const cardGenerator = () => {
        const list = [];
        for (let i = 0; i < tecList.length; i++) {
            let tec = <CardTec Tec={tecList[i]} key={i} setDesc={setDesc} />
            list.push(tec);
        }

        return list;
    }

    return (
        <section className="flex mt-80">
            <span id="tec"></span>
            <div className="bg-border w-[5vw] h-1/1 flex justify-center p-5">
                <p className="break-all max-w-4 flex text-center justify-center items-center">
                    TECNOLOGIAS
                </p>
            </div>


            <div className="flex max-w-[50vw] flex-wrap pl-10 gap-6 max-lg:pl-5 max-[559px]:max-w-[60vw] max-[315px]:max-w-[95vw]">
                {cardGenerator()}
            </div>

            <div className="w-[45vw] h-full pr-[5px] max-[315px]:hidden">
                <p className="content break-keep text-[30px] max-w-[70%] max-sm:text-[20px] max-[559px]:text-[15px] max-[559px]:max-w-[95%] ">
                    {desc ? desc : '\\\\ PLACE THE CURSOR ABOVE TO SEE MORE ABOUT THE TECHNOLOGY //'}
                </p>
            </div>

        </section>
    );
}