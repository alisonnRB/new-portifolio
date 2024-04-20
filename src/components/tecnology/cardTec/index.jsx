import React, { useState } from "react";

export default function CardTec(props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (props.lang == "PT_BR") {
            props.setDesc(props.Tec.description);
        }else{
            props.setDesc(props.Tec.descriptionEn);
        }

    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        props.setDesc('');
    };

    const imageStyle = {
        transition: "transform 0.3s, filter 0.3s",
        cursor: "pointer",
        ...(isHovered && {
            transform: "scale(1.25)",
            filter: `drop-shadow(0px 0px 20px ${props.Tec.color}`,
        }),
    };

    return (
        <div className="w-[100px] flex flex-col items-center gap-2 mb-5 max-sm:w-[70px] max-[559px]:w-[50px]">
            <p className="text-center text-nowrap max-sm:text-[.8em] max-[559px]:text-[.6em]">{props.Tec.Name}</p>
            <div
                className="h-full w-full flex justify-center items-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    className="max-h-[70%] max-w-[70px] max-sm:max-w-[55px] max-[559px]:max-w-[35px] max-[360px]:max-w-[25px]"
                    style={imageStyle}
                    src={props.Tec.logo}
                    alt={`logo do ${props.Tec.Name}`}
                />
            </div>
        </div>
    );
}
