import React, { useReducer, useEffect } from 'react';
import reducer, { initialState } from './reducers'
import { fetchData } from './api';
import styles from './App.module.scss';
import { selectItems } from './selectors';

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetchData(dispatch);
    }, []);

    console.log(state);
    const calculatedItems = selectItems(state);

    return(
        <main className={styles.root}>
            {state.loaded ? (
                <div>
                    <h1>Most starred repositories for last week</h1>
                    <section>
                        <h2>Check the result</h2>

                        <ul>
                            {calculatedItems.map(({ id, name, html_url, language, stargazers_count }) => (
                                <li key={id}>
                                    <div>{name}</div>
                                    <div>
                                        <a href={html_url} target="_blank">open in new tab</a>
                                    </div>
                                    <div>{language}</div>
                                    <div>{stargazers_count} stars</div>
                                    <button type="button">Star it!</button>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            ) : (
                <h1>Data is loading</h1>
            )}
        </main>
    );
};

export default App;
