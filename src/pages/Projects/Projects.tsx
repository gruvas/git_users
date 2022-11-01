import React from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import axios from 'axios';

import Search from '../../component/Search';

import Table from '../../component/Table';
import user from '../../store/user';

import { GitUrl } from '../../@types/enum';
import { IMainInformation, ISubscriptions } from '../../@types/interface';

import user_data_filtering from '../../method/user_data_filtering';



const Projects = observer(() => {
    let login = useParams().login

    const [dataUser, setDataUser] = React.useState<ISubscriptions[]>([])

    const [mainInformation, setMainInformation] = React.useState<IMainInformation>({
        login: '',
        avatar_url: ''
    })

    // // Данное состояние отображает, готовы ли 
    // // данные для заполнения в таблице
    const [state, setState] = React.useState<boolean>(false)

    async function data_organization () {
        

        setState(false)

        // Загружаем информацию о пользователе
        let main_information = await axios.get(GitUrl.User + user.login)

        setMainInformation({
            login: main_information.data.login,
            avatar_url: main_information.data.avatar_url
        })

        // Получаем список проектов на которые подписан пользователь
        let data = await axios.get(GitUrl.User + user.login + '/subscriptions')

        user_data_filtering(data.data).then((value) => {
            setDataUser(value)
        })

        setState(true)
    }
    
    React.useEffect(() => {
        // Отображаем loader
        user.updateLoading(true)

        user.updateLogin(login || '')

        data_organization()

        // Скрываем loader
        user.updateLoading(false)
    }, [])

    // Отслеживать изменения login необходимо
    // из-за наличия поиска в компоненте 
    React.useMemo(() => {
        user.updateLogin(login || '')

        data_organization()
    }, [login]);
    
    
    return (
        <div className='m-auto w-11/12'>
            <div>
                <Search className='mt-5' placeholder={'Поиск пользователя по логину'}/>
                <p className={`text-center w-[425px] vsm:w-[100%] m-auto mt-3 text-darkRed
                leading-6 text-lg ${user.found_user ? 'hidden' : ''}`}>
                    Пользователя с данным логином не существует. Повторите попытку снова.
                </p>
            </div>

            <div>
                <img className='w-28 h-28 mt-6 bg-black rounded-full
                m-auto text-center' 
                src={mainInformation.avatar_url} alt="" />
                <p className='text-center mt-1.5'>{mainInformation.login}</p>
            </div>

            <>
                {state &&
                    <Table arr={dataUser} login={mainInformation.login}/>
                }
            </>
        </div>
    );
})

export default Projects;
