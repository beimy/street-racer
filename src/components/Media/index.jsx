import React, { useEffect } from "react";
import { useState } from "react";
import { useSiteContext } from '../../utils/GlobalState';

const MediaComp = () => {

    const [state, dispatch] = useSiteContext();

    return (
        <div className="flex flex-col relative justify-evenly min-h-screen bg-black border-t-4 border-white p-20">
            <h1 className="text-white text-4xl self-center justify-self-center">Media</h1>
        </div>
    )
}

export default MediaComp; 