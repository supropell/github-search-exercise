import { IAppState } from '../reducers';
import { createSelector } from 'reselect';

const selectRawData = (state: IAppState) => state.rawData;

export const selectItems = createSelector(
    selectRawData,
    data => data?.items.map(({
        id,
        name,
        html_url,
        language,
        stargazers_count
    }) => ({
        id,
        name,
        html_url,
        language,
        stargazers_count,
    })) || []
);