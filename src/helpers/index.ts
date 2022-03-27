import { IRepository } from '../api/types';

export const calcItemPredicate = ({
   id,
   name,
   html_url,
   language,
   stargazers_count
}: IRepository) => ({
    id,
    name,
    html_url,
    language,
    stargazers_count,
})