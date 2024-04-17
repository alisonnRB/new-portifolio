import React, { useState, useEffect } from "react";
import foto from '../../assets/draws/foto.png';

export default function About() {
    const [cor, setCor] = useState('');
    const [name, setName] = useState('');
    const [init, setInit] = useState(false);

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

    function writeName() {
        if(name){
            return;
        }
        const nameList = 'ÁLLISON BATISTA';
        let i = 0;
        const interval = setInterval(() => {
            setName((prevName) => prevName + nameList[i]);
            i++;
            if (i == nameList.length - 1) {
                clearInterval(interval);
            }
        }, 200);

        return () => clearInterval(interval);
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
        <section className="bgImageCircle w-[100%]">
            <span id="about"></span>
            <div className="flex items-center justify-center">
                <img src={foto} alt="foto do autor" className="grayscale scale-75" />
                <div>
                    <p className="text-[38px]">HI, I AM</p>
                    <div className="flex pr-3 h-[70px]">
                        <p className="text-[60px] mt-[-5px] mb-[-10px] text-nowrap transition-colors duration-1000 pr-2" style={{ color: cor}}>{name}</p>
                        <div className="h-[60px] w-1 bg-white transition-colors pisca" style={{backgroundColor: cor}}></div>
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
