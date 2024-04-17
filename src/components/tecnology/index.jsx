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
            <div className="bg-border w-[5vw] h-1/1 flex justify-center py-5">
                <p className="break-all max-w-4 flex text-center justify-center items-center">
                    TECNOLOGIAS
                </p>
            </div>


            <div className="flex max-w-[50vw] flex-wrap pl-10 gap-6">
                {cardGenerator()}
            </div>

            <div className="w-[45vw] h-full">
                <p className="content break-keep text-[30px] max-w-[70%]">
                    {desc ? desc : '\\\\ PLACE THE CURSOR ABOVE TO SEE MORE ABOUT THE TECHNOLOGY //'}
                </p>
            </div>

        </section>
    );
}