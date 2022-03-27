import React from 'react';
import ListItemView, { ListItem } from './ListItem';

interface IProps {
    items: ListItem[];
    handleClickStar: (id: number) => () => void;
}

const List: React.FunctionComponent<IProps> = ({ items, handleClickStar }) => (
    <ul>
        {items.map(item => (
            <ListItemView
                item={item}
                onStarClick={handleClickStar}
            />
        ))}
    </ul>
);

export default List;