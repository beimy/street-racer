import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSiteContext } from '../utils/GlobalState';


const LandingPage = () => {

    const [state, dispatch] = useSiteContext();

    return (
        <div className=''>
            Landing
        </div>
        
    )
};

export default LandingPage;