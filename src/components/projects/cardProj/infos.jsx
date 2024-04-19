import React, {useState} from "react";
import github from "../../../assets/logos/github_logo.png";
import link from "../../../assets/logos/link_logo.png";
import more from "../../../assets/logos/more_logo.png";

export default function Infos(props) {
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
        <>
            <div className="h-full w-[38%] flex flex-col items-center justify-around gap-5 p-5 text-center bg-projectGrade transition-opacity relative right-[-1%]"
                style={props.hover ? {opacity: 1} : {opacity: 0}}
            >
        
                <p className="text-[20px]">{props.infos.name}</p>

                <p className="text-[13px]">
                    {props.lang == "PT_BR" ? props.infos.describe : props.infos.describeEn}
                </p>

                <span className="flex justify-around w-full">
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-[8px]">{props.lang == "PT_BR" ? "REPOSITÓRIO" : "REPOSITORY"}</p>
                        <a href={props.infos.repository}><img className="h-[35px] w-[35px] cursor-pointer" src={github} alt="github" /></a>
                    </div>

                    {props.infos.site ?
                        <div className="flex flex-col gap-2">
                            <p className="text-[8px]">SITE</p>
                            <a href={props.infos.site}><img className="h-[35px] w-[35px] cursor-pointer" src={link} alt="link" /></a>
                        </div> : null}

                    <div className="flex flex-col gap-2">
                        <p className="text-[8px]">{props.lang == "PT_BR" ? "MAIS" : "MORE"}</p>
                        <img className="h-[35px] w-[35px] cursor-pointer transition-[rotate] ease-in" style={moreOp ? { rotate: "90deg" } : null} onClick={() => { setMoreOp(!moreOp) }} src={more} alt="mais" />
                    </div>
                </span>
            </div>

            <div className="border-l-4 border-l-black overflow-hidden bg-projectGradeM p-3 pt-4 trans relative right-[-1%]" 
                style={moreOp && props.hover? { maxWidth: "23%" } : { maxWidth: "0", padding: "0", border: "none" }}
            >

                <p className="border-b-[1px] border-white px-[3px] text-[15px] text-center">{props.lang == "PT_BR" ? "UTILIZADO" : "USED"}</p>

                <span className="flex flex-col gap-2 items-center pt-5">
                    {geraUtilit()}
                </span>

            </div>
        </>
    );
}