import React from "react";
import { useState } from "react";
import { useSiteContext } from '../../utils/GlobalState';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight, faCircleChevronLeft, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const AboutComp = () => {

    const [state, dispatch] = useSiteContext();

    return (
        <div className="flex flex-col relative justify-evenly min-h-screen bg-black border-t-4 border-white p-20">
            <h1 className=" text-white text-4xl self-center justify-self-center">Street Racer</h1>
            <img src={require(`../../assets/cowboy-white-on-black.png`)} />
        </div>
    )
}

export default AboutComp; 