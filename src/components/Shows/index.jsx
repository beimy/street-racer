import React, { useEffect } from "react";
import { useState } from "react";
import { useSiteContext } from '../../utils/GlobalState';

const ShowsPage = () => {

    const [state, dispatch] = useSiteContext();

    return (
        <div>
            Shows
        </div>
    )
}

export default ShowsPage; 