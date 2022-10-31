import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import axios from 'axios';

import user from '../../store/user';

import Commit from '../../component/Commit';
import Loader from '../../component/Loader';

import path from '../../assets/img/path.svg';

import { GitUrl } from '../../@types/enum';
import { ICommit } from '../../@types/interface';
import { IUserCommits } from '../../@types/interface_git_json';


const Commits = observer(() => {
    // 3 переменные получаем из адресной строки
    // Логин пользователя
    let login = useParams().login
    // Имя проекта
    let name = useParams().name
    // Полное имя коммита
    let full_name = useParams().full_name

    // Адрес коммитов пользователя
    let url_commits: string = GitUrl.Repository + login + '/' 
    + name + '/' + 'commits'

    const [commits, setCommits] = React.useState<ICommit[]>([])

    React.useEffect(() => {
        async function getting_commits() {
            // Отображаем loader
            user.updateLoading(true)

            let data_intermediate = await axios.get(url_commits)
            let data = data_intermediate.data

            let arr_commits: ICommit[] = []

            data.map((element: IUserCommits) => {
                arr_commits.push({
                    name: element?.author?.login || element?.commit?.author?.name || '',
                    img: element?.author?.avatar_url || '',
                    sha: element?.sha || '',
                    date: element?.commit?.committer?.date || '',
                })
            })

            setCommits(arr_commits)

            // Скрываем loader
            user.updateLoading(false)
        }

        getting_commits()
    }, [])

    return (
        <div className='max-w-[900px] mr-auto ml-auto pt-0 pb-0 pr-3.5 pl-3.5'>
            <p className='text-center text-2xl font-semibold mt-6'>
                Коммиты по проекту {name}
            </p>

            <div className='mt-7'>
                <div className='flex'>
                    <img src={path} alt="" />
                    <Link to={`/projects/${full_name}`} className='text-lg mb-2 ml-2 cursor-pointer hover:text-blue'>
                        {full_name}
                    </Link>
                    /
                    <p className='text-lg'>
                        {name}
                    </p>
                </div>

                {commits 
                    ? (
                        commits.map((element) => (
                            <Commit data={element} key={'commit' + element.sha}/>
                        ))
                    )
                
                    : (
                        <p className='text-center text-2xl text-darkRed'>
                            Коммиты не найдены
                        </p>
                    )
                }
            </div>

            <div className='flex justify-center'>
                <Link to={`/projects/${full_name}`} 
                className='block text-white bg-black text-center
                pt-1.5 pb-2 mt-6 mb-6 w-[160px] rounded text-lg'>
                    Назад
                </Link>
            </div>

            <Loader loading={user.loading}/>
        </div>
    );
})

export default Commits;