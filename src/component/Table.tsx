import React from 'react';
import { Link } from 'react-router-dom';

import { ISubscriptions } from '../@types/interface';

import star from '../assets/img/star.svg'


interface ITable {
    arr: ISubscriptions[]
    login: string
}

const Table = ({arr, login}: ITable) => {
    return (
        <div className='mt-6 rounded-[7px] overflow-x-auto'>

            {arr.length == 0 
            
                ?  (
                    <div className='text-center text-2xl font-semibold text-darkRed'>
                        У данного пользователя отсутствуют репозитории
                    </div>
                )
                
                : (
                    <table className='m-auto'>
                        <thead className='bg-lt_blue h-11'>
                            <tr className='sm:small'>
                                <th className='sm:p-0 sm:text-sm'>Название</th>
                                <th className='sm:p-0 sm:text-sm'>Язык программирования</th>
                                <th className='sm:p-0 sm:text-sm'>Описание</th>
                                <th className='sm:p-0 sm:text-sm'>Количество звезд</th>
                            </tr>
                        </thead>
    
                        <tbody>
                            {arr.map((element) => {
                                return (
                                    <tr className='hover:bg-lt_blue sm:small' key={'tr' + element.id}>
                                        <td className='cursor-pointer hover:text-blue 
                                        sm:p-0 sm:text-sm'>
                                            <Link to={`/commits/${element.full_name}/${login}`}>
                                                {element.name}
                                            </Link>
                                        </td>
                                        <td className='sm:p-0 sm:text-sm'>{element.language}</td>
                                        <td className='w-[40%] pt-5 sm:p-0 sm:pt-2 sm:pb-2 sm:text-sm'>
                                            {element.description}
                                        </td>
                                        <td className='table-cell align-middle pt-5 sm:p-0 sm:m-auto'>
                                            <div className='flex justify-center mb-4'>
                                                <img className='w-8 h-8' src={star} alt="" />
                                                <p className='pt-1 pl-1 sm:text-sm'>
                                                    {element.stargazers_count}
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                )

            }

        </div>
    );
}

export default Table;
