import { IGitHubSearchApi } from '../api/types';

export const SET_DATA = 'SET_DATA';
export const STAR_REPOSITORY = 'STAR_REPOSITORY';

export const setData = (data: IGitHubSearchApi) => ({
    type: SET_DATA,
    payload: data
});

export const toggleStarRepository = (repoId: number) => ({
    type: STAR_REPOSITORY,
    payload: repoId,
})