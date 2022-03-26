export interface IRepository {
    id: number;
    name: string;
    full_name: string;
    private: boolean;
    html_url: string;
    created_at: string;
    language: string;
    stargazers_count: number;
}

export interface IGitHubSearchApi {
    total_count: number;
    incomplete_results: boolean;
    items: IRepository[];
}