import { makeAutoObservable, configure } from 'mobx'

configure({
    enforceActions: "never",
})

class User {
    // Содержание input в поиске по пользователям
    login = ''

    // Пустые ли данные в состоянии
    // Используется для выведения предупреждения 
    // при отсутствии найденных пользователей
    // true - пользователь найден (предупреждение не выводится)
    // false - пользователь не найден (предупреждение выводится)
    found_user: boolean = true

    // Отображает loader во
    // время поиска пользователя
    loading: boolean = false
    
    constructor() {
        makeAutoObservable(this)
    }
    
    updateLogin(login: string) {
        this.login = login
    }

    updateFoundUser(state: boolean) {
        this.found_user = state
    }

    updateLoading(state: boolean) {
        this.loading = state
    }
}

export default new User()