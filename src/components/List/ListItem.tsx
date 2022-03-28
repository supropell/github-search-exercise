import React from 'react';
import styles from './listItem.module.scss';

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
        <li className={styles.root}>
            <div className={styles.name}>{name}</div>
            <div className={styles.link}>
                <a href={url} target="_blank" rel="noreferrer">repository link</a>
            </div>
            <div className={styles.language}>{language}</div>
            <div className={styles.starsCount}>{starsCount} stars</div>
            <button
                type="button"
                onClick={onStarClick(id)}
                className={styles.button}
            >
                Star it!
            </button>
        </li>
    );
};

export default ListItemView;