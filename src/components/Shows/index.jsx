import React, { useEffect } from "react";
import { useState } from "react";
import { useSiteContext } from '../../utils/GlobalState';
import SingleShowComp from "../ShowSingle";

const ShowsComp = () => {

    const [state, dispatch] = useSiteContext();

    console.log(state.show_data.data);

    console.log(state.isLoading);

    if(!state.isLoading && state.show_data){

        return (
            <div className="flex flex-col relative min-h-screen bg-black border-t-4 border-white p-10">
            <h1 className="text-white text-4xl self-center justify-self-center">Shows</h1>
                <ul id="shows-div" className=" text-white self-center mt-10">
                {state.show_data.data.map((show, index) => {
                    return (
                        <SingleShowComp
                        key={index}
                        location={show.Show}
                        time={show.Info}
                        link={show.Link}>
                        </SingleShowComp>
                        )
                    })}
                </ul>
            </div>
        )
    }

    else {
        return (
            <div>
                Check back here for newest show listings
            </div>
        )
    }
}

export default ShowsComp; 