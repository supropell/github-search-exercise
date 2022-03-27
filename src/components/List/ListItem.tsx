import React from 'react';

export type ListItem = {
    id: number;
    name: string;
    url: string;
    language: string;
    starsCount: number;
}

interface IProps {
    item: ListItem;
    onStarClick: (id: number) => () => void;
}

const ListItemView: React.FunctionComponent<IProps> = ({ item, onStarClick }) => {
    const {
        id,
        name,
        url,
        language,
        starsCount
    } = item;

    return (
        <li key={id}>
            <div>{name}</div>
            <div>
                <a href={url} target="_blank" rel="noreferrer">open in new tab</a>
            </div>
            <div>{language}</div>
            <div>{starsCount} stars</div>
            <button type="button" onClick={onStarClick(id)}>Star it!</button>
        </li>
    );
};

export default ListItemView;