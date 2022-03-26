import { setData } from '../actionCreators';

type Dispatch = (action: Record<string, any>) => void

export const fetchData = async (dispatch: Dispatch) => {
    const url = 'https://api.github.com/search/repositories?q=created:%3E2022-03-25&sort=stars&order=desc'

    try {
        const response = await fetch(url, {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
            }
        });

        if (!response.ok) {
            throw new Error('failed fetch data')
        }

        const data = await response.json();

        dispatch(setData(data));
    } catch (e) {
    //    TODO: process the error
        console.log(e);
    }
}