import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

const SiteContext = createContext();
const { Provider } = SiteContext;

const SiteProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        errorModalOpen: false,
        show_data: [],
        merch_data: [],
        media_data: [],
        about_data: '',
        sections: ['info', 'media', 'shows', 'merch'],
        isLoading : true
    });

    // console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useSiteContext = () => {
    return useContext(SiteContext);
};

export { SiteProvider, useSiteContext };