import { ISuccessResponse } from '../api/types';
import { SET_DATA, SET_DATA_LOADED, STAR_REPOSITORY, SWITCH_REPOSITORY_LIST } from '../actionCreators';


export interface IAppState {
    rawData: ISuccessResponse | null;
    starred: number[];
    loaded: boolean;
    showAll: boolean;
}

export const initialState: IAppState = {
    rawData: null,
    starred: [],
    loaded: false,
    showAll: true,
}

const reducer = (state = initialState, action: any) => {
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

        case SWITCH_REPOSITORY_LIST:
            return {
                ...state,
                showAll: !state.showAll
            }

        default:
            return {...state};
    }
};

export default reducer;