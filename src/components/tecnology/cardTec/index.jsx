import React, { useState } from "react";

export default function CardTec(props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        props.setDesc(props.Tec.description);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        props.setDesc('');
    };

    const imageStyle = {
        maxHeight: "70%",
        maxWidth: "70px",
        transition: "transform 0.3s, filter 0.3s",
        cursor: "pointer",
        ...(isHovered && {
            transform: "scale(1.25)",
            filter: `drop-shadow(0px 0px 20px ${props.Tec.color}`,
        }),
    };

    return (
        <div className="w-[100px] flex flex-col items-center gap-2 mb-5">
            <p className="text-center text-nowrap">{props.Tec.Name}</p>
            <div
                className="h-full w-full flex justify-center items-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    style={imageStyle}
                    src={props.Tec.logo}
                    alt={`logo do ${props.Tec.Name}`}
                />
            </div>
        </div>
    );
}
