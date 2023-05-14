import React, { useEffect } from "react";
import { useState } from "react";
import { useSiteContext } from '../../utils/GlobalState';

const SingleMerchComp = ({name, image, link}) => {

    const [state, dispatch] = useSiteContext();

    if(link == 'NA') {
        link = null
    };

    return (
        <ul id="shows-div" className=" text-white self-center mt-10">
            <li>
                <article>
                    <a href={link}>
                        <img src={require(image)} alt=""/>
                        <p>{name}</p>
                    </a>
                </article>
            </li>
        </ul>
    )
}

export default SingleMerchComp; 