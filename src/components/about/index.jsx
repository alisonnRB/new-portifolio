import React, { useState, useEffect } from "react";
import foto from '../../assets/draws/foto.png';
import { useInView } from "react-intersection-observer";

export default function About(props) {
    const text = {
        hi: { "PT_BR": "OLÁ, EU SOU", "EN_US": "HI, I AM" },
        about: { "PT_BR": "SOBRE MIM", "EN_US": "ABOUT ME" },
        name: { "PT_BR": "MEU NOME É ÁLISON, TENHO ", "EN_US": "MY NAME IS ÁLISON, I'M" },
        old: { "PT_BR": " ANOS DE IDADE, SOU UM DESENVOLVEDOR FULL STACK APAIXONADO POR ESCREVER LINHAS DE CÓDIGO TOMANDO UM BOM CAFÉ.", "EN_US": " YEARS OLD, I'M A FULLSTACK DEVELOPER PASSIONATE ABOUT WRITING LINES OF CODE HAVING GOOD COFFEE." },
        presentation: { "PT_BR": "SOU TÉCNICO DE INFORMÁTICA, ATUALMENTE ESTUDO ANÁLISE E DESENVOLVIMENTO DE SISTEMAS EM IFRS, MAL POSSO ESPERAR PARA CRIAR ALGO INCRÍVEL JUNTOS.", "EN_US": "I'M A COMPUTER TECHNICIAN, CURRENTLY STUDYING SYSTEMS ANALYSIS AND DEVELOPMENT UNDER IFRS, I CAN'T WAIT TO CREATE SOMETHING INCREDIBLE TOGETHER." },
    }

    const [cor, setCor] = useState('');
    const [name, setName] = useState('');
    const [init, setInit] = useState(false);

    const [ref, inView] = useInView();

    useEffect(() => {
        if (init) {
            setInit(true);
            traverseList();
            writeName();
        } else {
            return;
        }
    }, [init])

    useEffect(() => {
        if (!init) {
            setInit(true)
        } else {
            return;
        }
    }, [])

    useEffect(() => {
        if (inView) {
            props.setView("about");
        }
    }, [inView]);

    function writeName() {
        const nameList = [" ", "Á", "L", "I", "S", "O", "N", " ", "B", "A", "T", "I", "S", "T", "A", " "];
        let i = 0;
        const interval = setInterval(() => {
            setName((prevName) => prevName + nameList[i]);
            i++;

            if (i == nameList.length - 1) {
                clearInterval(interval);
            }
        }, 200);
    }


    function traverseList() {
        const interval = setInterval(() => {
            let R = generateRandomNumber();
            let G = generateRandomNumber();
            let B = generateRandomNumber();
            setCor(`rgba(${R}, ${G}, ${B})`);
        }, 2000);

        return () => clearInterval(interval);
    }

    function generateRandomNumber() {
        return Math.floor(Math.random() * 256);
    }

    return (
        <section className="bgImageCircle w-[100%] max-sm:mt-[-150px]">
            <div id="about" ref={ref} className="h-2 w-2"></div>
            <div className="flex items-center justify-center ml-[-1.5rem] max-lg:scale-75 max-md:scale-[0.6] max-sm:scale-[0.4] max-[320px]:scale-[0.35] max-[295px]:scale-[0.25]">
                <img src={foto} alt="foto do autor" className="grayscale scale-75" />
                <div className="ml-[-2rem]">
                    <p className="text-[38px]">{text.hi[props.lang]}</p>
                    <div className="flex pr-3 h-[70px]">
                        <p className="text-[60px] mt-[-5px] mb-[-10px] text-nowrap transition-colors duration-1000 pr-2" style={{ color: cor }}>{name}</p>
                        <div className="h-[60px] w-1 bg-white transition-colors pisca" style={{ backgroundColor: cor }}></div>
                    </div>

                    <p className="text-[45px] ml-12 text-nowrap">FULLSTACK DEVELOPER</p>
                    <button className="bg-border cursor-pointer mt-[20px] w-[320px] h-[70px] text-[1.8em] hover:bg-fontCol rounded-md">DOWNLOAD CV</button>
                </div>
            </div>

            <div className="flex ml-[10vw]">
                <p className="rotate-[-90deg] text-[20px] h-1 w-1 text-nowrap relative top-[10ch] right-[2.5ch]">{text.about[props.lang]}</p>
                <span className="max-w-[700px] pl-[30px] pr-[10px] border-l-4 py-5 transition-colors duration-1000" style={{ borderLeftColor: cor }}>
                    <p className="text-[25px] mb-10 break-words  max-[420px]:text-[20px]">
                        {text.name[props.lang]} <span className="font-sans">20</span> {text.old[props.lang]}
                    </p>
                    <p className="text-[25px] break-words max-[420px]:text-[20px]">
                        {text.presentation[props.lang]}
                    </p>
                </span>
            </div>
        </section>
    );
}
