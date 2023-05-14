import {
    TOGGLE_ERROR_MODAL,
    GET_DATA_FROM_DB,
    SWITCH_URL_SECTION,
    SET_LOADING
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
                merch_data : action.new_merch_data,
                media_data : action.new_media_data,
                about_data : action.new_about_data
            };
        case SWITCH_URL_SECTION :
            return {
                ...state,
                section : action.new_section
            };
        case SET_LOADING :
            return {
                ...state,
                isLoading : action.new_isLoading
            }
        default: 
            return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}