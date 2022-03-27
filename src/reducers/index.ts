import { ISuccessResponse } from '../api/types';
import { SET_DATA, SET_DATA_LOADED, STAR_REPOSITORY } from '../actionCreators';

export interface IAppState {
    rawData: ISuccessResponse | null;
    starred: number[];
    loaded: boolean;
}

export const initialState: IAppState = {
    rawData: null,
    starred: [],
    loaded: false,
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case SET_DATA:
            return { ...state, rawData: action.payload };

        case SET_DATA_LOADED:
            return { ...state, loaded: true };

        case STAR_REPOSITORY:
            if (state.starred.includes(action.payload)) {
                return {
                    ...state,
                    starred: state.starred.filter(id => id !== action.payload),
                };
            }

            return {
                ...state,
                starred: [...state.starred, action.payload],
            };

        default:
            return {...state};
    }
};