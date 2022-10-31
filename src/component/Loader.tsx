import React from 'react';

import PacmanLoader from 'react-spinners/PacmanLoader';


interface ILoader {
    loading: boolean
}

const Loader = (props: ILoader) => {
    return (
        <div className={`fixed bg-transparent_gray w-full h-full top-0 left-0
        ${props.loading ? '' : 'hidden'}`}>
            <PacmanLoader className='inset-1/4 left-[45%]' loading={true}/>
        </div>
    );
}

export default Loader;
