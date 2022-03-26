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

export interface ISuccessResponse {
    total_count: number;
    incomplete_results: boolean;
    items: IRepository[];
}

interface IApiError {
    message: string;
    resource: string;
    field: string;
    code: string;
}

export interface IFailResponse {
    message: string;
    errors: IApiError[];
    documentation_url: string;
}

export type IGitHubSearchApi = ISuccessResponse | IFailResponse;