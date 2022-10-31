import { observer } from 'mobx-react-lite';

import Search from '../../component/Search'
import user from '../../store/user';


const UserSearch = observer(() => {
    return (
        <>
            <h1 className='text-center mt-6 mb-4 font-semibold
            text-2xl vsm:text-xl'>
                Поиск пользователя github
            </h1>

            <Search/>

            <p className={`text-center w-[425px] vsm:w-[100%] m-auto mt-4 text-darkRed
            leading-6 text-lg ${user.found_user ? 'hidden' : ''}`}>
                Пользователя с данным логином не существует. Повторите попытку снова.
            </p>
        </>
    );
})

export default UserSearch;
