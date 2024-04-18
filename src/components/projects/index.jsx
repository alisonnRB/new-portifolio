import React from "react";
import CardProj from "./cardProj";
import { listProj } from "./project.ts";


export default function Projects(props) {
  
    const GeraCardFront = () => {
        const list = [];

        for (let i = 0; i < listProj.length; i++) {
            if (listProj[i].tag == 'front') {
                let item = <CardProj key={i} infos={listProj[i]}/>
                list.push(item);
            }
        }

        return list;
    }

    const GeraCardBack = () => {
        const list = [];

        for (let i = 0; i < listProj.length; i++) {
            if (listProj[i].tag == 'back') {
                let item = <CardProj key={i} infos={listProj[i]}/>
                list.push(item);
            }
        }

        return list;
    }

    // const GeraCardMobile = () => {
    //     const list = [];

    //     for (let i = 0; i < listProj.length; i++) {
    //         if (listProj[i].tag == 'mobile') {
    //             let item = <CardProj key={i} infos={listProj[i]}/>
    //             list.push(item);
    //         }
    //     }

    //     return list;
    // }

    return (
        <section className="flex flex-col justify-center items-center mt-80">

            <p className="text-[40px] mb-44">PROJETOS</p>

            <p>Front-end</p>
            <div className="max-w-screen flex flex-wrap justify-evenly gap-10 p-6">
                {GeraCardFront()}
            </div>

            <p>Back-end</p>
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