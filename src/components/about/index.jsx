import React, { useState, useEffect } from "react";
import foto from '../../assets/draws/foto.png';

export default function About() {
    const [cor, setCor] = useState('');

    useEffect(() => {
        if (!cor) {
            traverseList();
        }
    }, [])


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
        <section className="bgImageCircle w-[100%]">
            <span id="about"></span>
            <div className="flex items-center justify-center">
                <img src={foto} alt="foto do autor" className="grayscale scale-75" />
                <div>
                    <p className="text-[38px]">HI, IAM</p>
                    <div className="inline-block overflow-hidden pr-3">
                        <p className="text-[60px] mt-[-5px] mb-[-10px] text-nowrap transition-colors duration-1000" style={{ color: cor }}>ÁLISON BATISTA </p>
                        <div className="type mt-[-85px] border-l-4 transition-colors duration-1000" style={{ borderLeftColor: cor }}></div>
                        <div className="border-r-4 mt-[-65px] translate-x-3 h-[65px] relative z-10 transition-colors duration-1000" style={{ borderColor: cor }}></div>
                    </div>

                    <p className="text-[45px] ml-16">FULLSTACK DEVELOPER</p>
                    <button className="bg-border cursor-pointer mt-[20px] w-[320px] h-[70px] text-[1.8em] hover:bg-fontCol rounded-md">DOWNLOAD CV</button>
                </div>
            </div>

            <div className="flex ml-[10vw]">
                <p className="rotate-[-90deg] text-[20px] relative left-48 bottom-24 text-nowrap">ABOUT ME</p>
                <span className="max-w-[700px] pl-[30px] border-l-4 py-5 transition-colors duration-1000" style={{ borderLeftColor: cor }}>
                    <p className="text-[25px] mb-10 break-words">
                        MY NAME IS ÁLISON, I'M <span className="font-sans">20</span> YEARS OLD, I'M A FULLSTACK DEVELOPER PASSIONATE ABOUT WRITING LINES OF CODE HAVING GOOD COFFEE.
                    </p>
                    <p className="text-[25px] break-words">
                        I'M A COMPUTER TECHNICIAN, CURRENTLY STUDYING SYSTEMS ANALYSIS AND DEVELOPMENT UNDER IFRS, I CAN'T WAIT TO CREATE SOMETHING INCREDIBLE TOGETHER.
                    </p>
                </span>
            </div>
        </section>
    );
}
