import React, { useState } from "react";
import CardProj from "./cardProj";
import { listProj } from "./project.ts";

export default function Projects(props) {
    const [type, setType] = useState("FRONT END");

    return (
        <section className="flex flex-col justify-center items-center mt-80">
            <span id="proj"></span>

            <p className="text-[40px] mb-44 bg-filter w-[50%] flex justify-center items-center py-5 rounded-bl-2xl rounded-tr-2xl max-[1090px]:w-[80%]">{props.lang == 'PT_BR' ? "PROJETOS" : "PROJECTS"}</p>

            <span className="flex justify-evenly w-[80vw] pb-4 mb-10">
                <p className="text-[30px] h-full px-4 cursor-pointer border-b-4 max-[600px]:text-[20px] max-[600px]:text-[14px]"  onClick={()=>{setType("FRONT END")}} style={type == "FRONT END" ? {borderColor: "white"} : {borderColor: "transparent"}}>Front-end</p>
                <p className="text-[30px] h-full px-4 cursor-pointer border-b-4 max-[600px]:text-[20px] max-[600px]:text-[14px]" onClick={()=>{setType("BACK END")}} style={type == "BACK END" ? {borderColor: "white"} : {borderColor: "transparent"}}>Back-end</p>
                {/* <p className="text-[30px] h-full px-4 cursor-pointer border-b-4 max-[600px]:text-[20px] max-[600px]:text-[14px]" onClick={()=>{setType("MOBILE")}} style={type == "MOBILE" ? {borderColor: "white"} : {borderColor: "transparent"}}>Mobile</p> */}
            </span>

            <div className="max-w-screen flex flex-wrap justify-evenly gap-10 p-6">
                {listProj.map((project, index) => {
                    if (project.tag === type) {
                        return <CardProj key={index} infos={project} lang={props.lang} />;
                    }
                    return null;
                })}
                <CardProj key={listProj.length} infos={'default'} tag={type} lang={props.lang} />
            </div>
        </section>
    );
}
