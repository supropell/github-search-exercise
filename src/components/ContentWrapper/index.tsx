import React from 'react';
import styles from './contentWrapper.module.scss';

interface IProps {
    toggleListViewHandler: () => void;
    isActiveAllList: boolean;
}

const ContentWrapper: React.FunctionComponent<IProps> = ({
    children,
    toggleListViewHandler,
    isActiveAllList,
}) => (
    <div>
        <h1>Most starred repositories for last week</h1>
        <section>
            <h2>Check the result</h2>

            <div>
                <button
                    type="button"
                    onClick={toggleListViewHandler}
                    className={styles.button}
                >
                    {isActiveAllList ? 'Switch to starred' : 'Switch to all'}
                </button>
            </div>

            <div className={styles.content}>
                {children}
            </div>
        </section>
    </div>
);

export default ContentWrapper;