import { IRepository } from '../api/types';

type PredicateContext = {
    starred: number[]
}

export const calcItemPredicate = function (this: PredicateContext, {
   id,
   name,
   html_url,
   language,
   stargazers_count
}: IRepository) {
    return ({
        id,
        name,
        url: html_url,
        language,
        starsCount: stargazers_count,
        selected: this.starred.includes(id),
    });
}