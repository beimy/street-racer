import React, { useEffect } from "react";
import { useState } from "react";
import { useSiteContext } from '../../utils/GlobalState';

const SingleShowComp = ({location, time, link}) => {

    const [state, dispatch] = useSiteContext();

    if(link == 'NA') {
        link = null
    };

    return (
        <ul id="shows-div" className=" text-white self-center mt-10">
            <li>
                <a href={link} target="_blank">{location}</a>
                <p>{time}</p>
            </li>
        </ul>
    )
}

export default SingleShowComp; 