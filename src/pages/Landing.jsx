import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSiteContext } from '../utils/GlobalState';

import AboutComp  from '../components/About';
import MerchComp from '../components/Merch';
import ShowsComp from '../components/Shows';
import MediaComp from '../components/Media';


const LandingPage = () => {

    const [state, dispatch] = useSiteContext();

    return (
        <div id='landing-div' className='flex-col flex align-middle h-screen max-w-[900px] scroll-m-20 md:flex-row md:mx-1/12 md:scroll-m-32 lg:mx-auto'>
            <AboutComp></AboutComp>
            <MediaComp></MediaComp>
            <ShowsComp></ShowsComp>
            <MerchComp></MerchComp>
        </div>
        
    )
};

export default LandingPage;