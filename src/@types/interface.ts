export interface ICommit {
    name: string
    img: string
    sha: string
    date: string | Date
}

export interface ISearch {
    className?: string
    placeholder?: string
}

export interface ISubscriptions {
    id: number
    name: string
    full_name: string
    language: string | null
    description: string | undefined,
    stargazers_count: number | undefined
}

export interface IMainInformation {
    login: string,
    avatar_url: string
}

