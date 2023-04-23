import React, { Fragment, useEffect } from 'react';
import { useSiteContext } from '../../utils/GlobalState';
import { SET_CURRENT_GALLERY_INDEX, TOGGLE_GALLERY_MODAL } from '../../utils/actions';


const MerchPage = ({}) => {

    const [state, dispatch] = useSiteContext();

    return (
        <div>
            Merch
        </div>
    )
};

export default MerchPage;