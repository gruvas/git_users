// Ссылки для получения данных от github
export enum GitUrl {
    // Ссылка для получения данных о пользователе
    // В конец ссылки необходимо вставить логин.
    // Пример: https://api.github.com/users/gruvas
    User = 'https://api.github.com/users/',

    // Ссылка для получения данных о репозитории
    // В конце необходимо добавить full_name. 
    // Если необходимо получить 
    // коммиты добавляем слово commits
    // Пример: https://api.github.com/repos/gruvas/Job-search/commits
    Repository = 'https://api.github.com/repos/'
}