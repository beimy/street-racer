import {
    TOGGLE_ERROR_MODAL,
    GET_DATA_FROM_DB
} from './actions';
import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_ERROR_MODAL :
            return {
                ...state,
                errorModalOpen: !state.errorModalOpen
            };
        case GET_DATA_FROM_DB :
            return {
                ...state,
                show_data : action.new_show_data,
                merch_data : action.new_merch_data
            };
        
        default: 
            return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}