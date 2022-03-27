import { IGitHubSearchApi } from '../api/types';

export const SET_DATA = 'SET_DATA';
export const SET_DATA_LOADED = 'SET_DATA_LOADED';
export const STAR_REPOSITORY = 'STAR_REPOSITORY';

export const setData = (data: IGitHubSearchApi) => ({
    type: SET_DATA,
    payload: data
});

export const setDataLoaded = () => ({
    type: SET_DATA_LOADED,
});

export const toggleStarRepository = (repoId: number) => ({
    type: STAR_REPOSITORY,
    payload: repoId,
})