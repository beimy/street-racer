import React, { Fragment, useEffect } from 'react';
import { useSiteContext } from '../../utils/GlobalState';
import { SET_CURRENT_GALLERY_INDEX, TOGGLE_GALLERY_MODAL } from '../../utils/actions';


const MerchComp = ({}) => {

    const [state, dispatch] = useSiteContext();

    if(!state.isLoading && state.merch_data){

        return (
            <div className="flex flex-col relative justify-evenly min-h-screen bg-black border-t-4 border-white p-20">
                <h1 className="text-white text-4xl self-center justify-self-center">Merch</h1>
            </div>
        )
    }
};

export default MerchComp;