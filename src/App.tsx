import React, { useReducer, useEffect } from 'react';

// data entities
import { fetchData } from './api';
import { switchRepositoryList, toggleStarRepository } from './actionCreators';
import reducer, { initialState } from './reducers'
import { selectAllItems, selectCalculatedStarredItems } from './selectors';

// views
import ContentWrapper from './components/ContentWrapper';
import Loader from './components/Loader';
import List from './components/List';

// styles
import styles from './App.module.scss';

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetchData(dispatch);
    }, []);

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
