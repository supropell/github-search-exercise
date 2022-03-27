import { IAppState } from '../reducers';
import { createSelector } from 'reselect';
import { calcItemPredicate } from '../helpers';

const selectLoadedItems = (state: IAppState) => state.rawData?.items || [];
const selectStarredItems = (state: IAppState) => state.starred;

export const selectAllItems = createSelector(
    selectLoadedItems,
    items => items.map(calcItemPredicate)
);

export const selectCalculatedStarredItems = createSelector(
    selectLoadedItems,
    selectStarredItems,
    (items, starred) => {
        const filteredItems = items.filter(({ id }) => starred.includes(id));

        return filteredItems.map(calcItemPredicate);
    }
);