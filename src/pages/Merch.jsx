import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSiteContext } from '../utils/GlobalState';

const MerchPage = () => {

    const [state, dispatch] = useSiteContext();
    console.log(state.merch_data);
    
    return (
        <div className='flex flex-wrap align-middle justify-center mx-18 my-24'>
            Merch

        </div>
        
    )
};

export default MerchPage;