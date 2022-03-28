import React from 'react';
import styles from './list.module.scss';

import ListItemView, { ListItem } from './ListItem';

interface IProps {
    items: ListItem[];
    handleClickStar: (id: number) => () => void;
}

const List: React.FunctionComponent<IProps> = ({ items, handleClickStar }) => (
    <ul className={styles.root}>
        {items.map(item => (
            <ListItemView
                item={item}
                onStarClick={handleClickStar}
                key={item.id}
            />
        ))}
    </ul>
);

export default List;