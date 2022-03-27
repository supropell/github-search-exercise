import React from 'react';

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
                <button type="button" onClick={toggleListViewHandler}>
                    {isActiveAllList ? 'Switch to starred' : 'Switch to all'}
                </button>
            </div>

            {children}
        </section>
    </div>
);

export default ContentWrapper;