import React, { useReducer, useEffect } from 'react';
import reducer, { initialState } from './reducers'
import { fetchData } from './api';

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetchData(dispatch);
    }, []);

    console.log(state);
    return (
        <div>

        </div>
    );
};

export default App;
