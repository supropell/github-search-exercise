import React, { useReducer, useEffect } from 'react';
import reducer, { initialState } from './reducers'
import { fetchData } from './api';
import styles from './App.module.scss';
import { selectAllItems, selectCalculatedStarredItems } from './selectors';
import { switchRepositoryList, toggleStarRepository } from './actionCreators';

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetchData(dispatch);
    }, []);

    console.log(state);
    const allItems = selectAllItems(state);
    const starredItems = selectCalculatedStarredItems(state);

    const handleClickStar = (id: number) => () => {
        dispatch(toggleStarRepository(id));
    };

    const handleSwitchList = () => {
        dispatch(switchRepositoryList());
    }

    return(
        <main className={styles.root}>
            {state.loaded ? (
                <div>
                    <h1>Most starred repositories for last week</h1>
                    <section>
                        <h2>Check the result</h2>

                        <div>
                            <button type="button" onClick={handleSwitchList}>
                                {state.showAll ? 'Switch to starred' : 'Switch to all'}
                            </button>
                        </div>

                        {state.showAll ? (
                            <ul>
                                {allItems.map(({ id, name, html_url, language, stargazers_count }) => (
                                    <li key={id}>
                                        <div>{name}</div>
                                        <div>
                                            <a href={html_url} target="_blank" rel="noreferrer">open in new tab</a>
                                        </div>
                                        <div>{language}</div>
                                        <div>{stargazers_count} stars</div>
                                        <button type="button" onClick={handleClickStar(id)}>Star it!</button>
                                    </li>
                                ))}
                            </ul>
                        ): (
                            <ul>
                                {starredItems.map(({ id, name, html_url, language, stargazers_count }) => (
                                    <li key={id}>
                                        <div>{name}</div>
                                        <div>
                                            <a href={html_url} target="_blank">open in new tab</a>
                                        </div>
                                        <div>{language}</div>
                                        <div>{stargazers_count} stars</div>
                                        <button type="button" onClick={handleClickStar(id)}>Star it!</button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>
                </div>
            ) : (
                <h1>Data is loading</h1>
            )}
        </main>
    );
};

export default App;
