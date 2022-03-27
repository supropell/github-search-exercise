import React, { useReducer, useEffect } from 'react';
import reducer, { initialState } from './reducers'
import { fetchData } from './api';
import styles from './App.module.scss';
import { selectAllItems, selectCalculatedStarredItems } from './selectors';
import { switchRepositoryList, toggleStarRepository } from './actionCreators';
import Loader from './components/Loader';
import ContentWrapper from './components/ContentWrapper';
import List from './components/List';

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
                <ContentWrapper
                    toggleListViewHandler={handleSwitchList}
                    isActiveAllList={state.showAll}
                >
                    {state.showAll ? (
                        <List items={allItems} handleClickStar={handleClickStar} />
                    ): (
                        <List items={starredItems} handleClickStar={handleClickStar} />
                    )}
                </ContentWrapper>
            ) : (
                <Loader/>
            )}
        </main>
    );
};

export default App;
