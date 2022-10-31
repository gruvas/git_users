import axios from 'axios';

import user from '../store/user';

import { GitUrl } from '../@types/enum';
import { NavigateFunction } from 'react-router-dom';

// Данная функция используется при поиске пользователя
const user_search_redirect = async (navigate: NavigateFunction) => {
    // Отображаем loader
    user.updateLoading(true)

    try{
        await axios.get(GitUrl.User + user.login)

        // Предупреждение о не найденном пользователе скрывается, 
        // если оно было отображено
        user.updateFoundUser(true)

        // Перенаправляем пользователя на страницу проектов
        navigate('/projects/' + user.login)
    } catch(e) {
        // Предупреждение о не найденном пользователе отображается
        user.updateFoundUser(false)
    }

    // Скрываем loader
    user.updateLoading(false)
}

export default user_search_redirect;
