import React from "react";
import { useState } from "react";
import { useSiteContext } from '../../utils/GlobalState';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight, faCircleChevronLeft, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {

    const [state, dispatch] = useSiteContext();


    return (
        <div className="">
            Landing
        </div>
    )
}

export default LandingPage; 