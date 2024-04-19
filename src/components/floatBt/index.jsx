import React from "react";

export default function FloatBt(props){
    return(
        <div  onClick={()=>{props.lang == "PT_BR" ? props.setLang("EN_US") : props.setLang("PT_BR")}} className="h-14 w-14 fixed rounded bottom-1 right-1 flex items-center justify-center cursor-pointer hover:bg-filter text-fontCol hover:text-white">
            <p className="text-inherit text-[11px] relative top-[0.35ch]">{props.lang}</p>
        </div>
    );
}