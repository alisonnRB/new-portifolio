import React, { useEffect } from "react";
import email from '../../assets/contatos/email.png';
import git from '../../assets/contatos/git_hub.png';
import linke from '../../assets/contatos/linkedin.png';
import phone from '../../assets/contatos/phone.png';
import { useInView } from "react-intersection-observer";

export default function Midia(props) {
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            props.setView("contact");
        }
    }, [inView]);

    return (
        <>
            <div id="contact" ref={ref} className="h-2 w-2"></div>
            <section className="flex flex-col items-center justify-center mt-80">


                <p className="text-[40px] mb-44">{props.lang == "PT_BR" ? "CONTATOS" : "CONTACTS"}</p>


                <span className="flex items-center justify-center gap-20 flex-wrap">
                    <div className="flex flex-col gap-10 items-center w-[204px] max-[500px]:w-[160px] max-[400px]:w-[100px]">
                        <a href="https://gmail.google.com/mail/?view=cm&fs=1&to=alisonrbjs@gmail.com&su=Assunto do Email&body=Conteúdo do Email"><img className="cursor-pointer hover:scale-110 max-[500px]:w-[80px] max-[400px]:w-[50px]" src={email} alt="email" /></a>
                        <a href="https://gmail.google.com/mail/?view=cm&fs=1&to=alisonrbjs@gmail.com&su=Assunto do Email&body=Conteúdo do Email"><p className="text-[20px] cursor-pointer max-[500px]:text-[15px] max-[500px]:text-[9.5px] ">alionrbjs@gmail.com</p></a>
                    </div>

                    <div className="flex flex-col gap-10 items-center w-[204px] max-[500px]:w-[160px] max-[400px]:w-[100px]">

                        <a href="https://github.com/alisonnRB"><img className="cursor-pointer hover:scale-110 max-[500px]:w-[80px] max-[400px]:w-[50px]" src={git} alt="github" /></a>
                        <a href="https://github.com/alisonnRB"><p className="text-[20px] cursor-pointer max-[500px]:text-[15px] max-[500px]:text-[9.5px] ">@alisonnRB</p></a>
                    </div>

                    <div className="flex flex-col gap-10 items-center w-[204px] max-[500px]:w-[160px] max-[400px]:w-[100px]">
                        <a href="https://www.linkedin.com/in/%C3%A1lison-de-rozado-batista-307a11287/"><img className="cursor-pointer hover:scale-110 max-[500px]:w-[80px] max-[400px]:w-[50px]" src={linke} alt="linkedin" /></a>
                        <a href="https://www.linkedin.com/in/%C3%A1lison-de-rozado-batista-307a11287/"><p className="text-[20px] cursor-pointer max-[500px]:text-[15px] max-[500px]:text-[9.5px] ">@Álison de Rozado Batista</p></a>
                    </div>

                    <div className="flex flex-col gap-10 items-center w-[204px] max-[500px]:w-[160px] max-[400px]:w-[100px]">
                        <img className="max-[500px]:w-[80px] max-[400px]:w-[50px]" src={phone} alt="telefone" />
                        <p className="text-[20px] max-[500px]:text-[15px] max-[500px]:text-[9.5px] ">(51) 99541-5991</p>
                    </div>
                </span>
            </section>
        </>
    );
}