import React, { useState } from "react";
import ihm from '../../../assets/projects/ihm_page.png';

import github from "../../../assets/logos/github_logo.png";
import link from "../../../assets/logos/link_logo.png";
import more from "../../../assets/logos/more_logo.png";

export default function CardProj(props) {
    const [moreOp, setMoreOp] = useState(false);

    const geraUtilit = () =>{
        const list = [];
        
        for(let i = 0; i<props.infos.more.length; i++){
            let item = <p className="text-nowrap text-[.9em]">{props.infos.more[i]}</p>
            list.push(item);
        }

        return list;
    }

    return (
        <div className="h-[370px] w-[700px] mb-6 bg-no-repeat bg-[length:100%_100%] shadow-[0_0_10px_rgba(255,255,255,0.2)] flex justify-end" style={{ backgroundImage: `url(${props.infos.img})` }}>
            <div className="h-full w-[38%] flex flex-col items-center justify-around gap-5 p-5 text-center bg-projectGrade transition-opacity">
                <p className="text-[20px]">{props.infos.name}</p>

                <p className="text-[13px]">
                    {props.infos.describe}
                </p>

                <span className="flex justify-around w-full">
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-[8px]">REPOSITORIO</p>
                        <a href={props.infos.repository}><img className="h-[35px] w-[35px] cursor-pointer" src={github} alt="github" /></a>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-[8px]">SITE</p>
                        <img className="h-[35px] w-[35px] cursor-pointer" src={link} alt="link" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-[8px]">MAIS</p>
                        <img className="h-[35px] w-[35px] cursor-pointer" onClick={() => { setMoreOp(!moreOp) }} src={more} alt="mais" />
                    </div>
                </span>
            </div>

            <div className="border-l-4 border-l-black overflow-hidden bg-projectGradeM p-3 pt-4 trans" style={moreOp ? { maxWidth: "23%" } : { maxWidth: "0", padding: "0" }}>

                <p className="border-b-[1px] border-white px-[3px] text-[15px] text-center">UTILIZADO</p>

                <span className="flex flex-col gap-2 items-center pt-5">
                    {geraUtilit()}
                </span>

            </div>

        </div>
    );
}
