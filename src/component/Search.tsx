import React from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import Loader from './Loader';

import cross from '../assets/img/cross.svg'
import search from '../assets/img/search.svg'

import { ISearch } from '../@types/interface';

import user from '../store/user';

import user_search_redirect from '../method/user_search_redirect';



const Search = observer(({className, placeholder = 'Введите логин'}: ISearch) => {

    let navigate = useNavigate();
    
    React.useEffect(() => {
        function pressing_enter(e: KeyboardEvent) {
            if(e.key ===  'Enter') {
                user_search_redirect(navigate)
            }
        }

        document.removeEventListener('keyup', pressing_enter)
        document.addEventListener('keyup', pressing_enter)
    }, []);
    

    return (
        <div className={`flex justify-center ${className}`}>
            <input className='w-[425px] vsm:w-full rounded-l-2xl text-lg
            pr-11 pb-1.5 pl-3.5'
            value={user.login} onChange={e => user.updateLogin(e.target.value)}
            type="text" maxLength={32} placeholder={placeholder}/>

            <button className={`w-10 ml-[-40px] ${user.login === '' ? 'hidden' : ''}`}
            onClick={() => user.updateLogin('')}>
                <img className='w-9 mt-1' src={cross} alt="закрыть" />
            </button>

            <button className='w-14 bg-black mt-[3px] ml-[-3px]
            rounded-r-2xl' onClick={() => user_search_redirect(navigate)}>
                <img className='bg-black h-6 m-auto' src={search} alt="поиск" />
            </button>

            <Loader loading={user.loading}/>
        </div>
    );
})

export default Search;
