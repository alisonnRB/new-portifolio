import React from "react";
import CardProj from "./cardProj";
import { listProj } from "./project.ts";


export default function Projects(props) {
  
    const GeraCardFront = () => {
        const list = [];
        let index = 0;

        for (let i = 0; i < listProj.length; i++) {
            if (listProj[i].tag == 'front') {
                let item = <CardProj key={i} infos={listProj[i]} lang={props.lang}/>
                list.push(item);
                index = i;
            }
        }

        let item = <CardProj key={index + 1} infos={'default'} tag="FRONT END" lang={props.lang}/>
        list.push(item);

        return list;
    }

    const GeraCardBack = () => {
        const list = [];
        let index = 0;

        for (let i = 0; i < listProj.length; i++) {
            if (listProj[i].tag == 'back') {
                let item = <CardProj key={i} infos={listProj[i]} lang={props.lang}/>
                list.push(item);
                index = i;
            }
        }

        let item = <CardProj key={index + 1} infos={'default'} tag="BACK END" lang={props.lang}/>
        list.push(item);

        return list;
    }

    // const GeraCardMobile = () => {
    //     const list = [];
    //     let index = 0;

    //     for (let i = 0; i < listProj.length; i++) {
    //         if (listProj[i].tag == 'mobile') {
    //             let item = <CardProj key={i} infos={listProj[i]} lang={props.lang}/>
    //             list.push(item);
    //             index = i;
    //         }
    //     }

    //     let item = <CardProj key={index + 1} infos={'default'} tag="MOBILE" lang={props.lang}/>
    //     list.push(item);

    //     return list;
    // }

    return (
        <section className="flex flex-col justify-center items-center mt-80">
            <span id="proj"></span>

            <p className="text-[40px] mb-44 bg-filter w-[50%] flex justify-center items-center py-5 rounded-bl-2xl rounded-tr-2xl">{props.lang == 'PT_BR' ? "PROJETOS" : "PROJECTS"}</p>

            <p className="text-[30px]">Front-end</p>
            <div className="max-w-screen flex flex-wrap justify-evenly gap-10 p-6">
                {GeraCardFront()}
            </div>

            <p className="mt-60 text-[30px]">Back-end</p>
            <div className="max-w-screen flex flex-wrap justify-evenly gap-10 p-6">
                {GeraCardBack()}
            </div>

            {/* <p>Mobile</p>
            <div className="max-w-screen flex flex-wrap justify-evenly gap-10 p-6">
                {GeraCardMobile()}
            </div> */}

        </section>
    );
}