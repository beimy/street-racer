import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSiteContext } from '../utils/GlobalState';

const ShowsPage = () => {

    const [state, dispatch] = useSiteContext();
    console.log(state.show_data);
    return (
        <div className=''>
            Shows
        </div>
        
    )
};

export default ShowsPage;