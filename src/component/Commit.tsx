import React from 'react';
import { ICommit } from '../@types/interface';


interface ICommits {
    data: ICommit
}

const Commit = ({data}: ICommits) => {
    let date: string | Date = new Date(data.date)
    date = date.toJSON().substring(0,10)

    return (
        <div className='flex md:block justify-between hover:bg-lt_blue
        border-solid border-2 rounded mt-4 h-[74px] md:h-[154px] msm:h-[183px]
        md:w-9/12 md:ml-auto md:mr-auto msm:w-full'>
            <div className={`flex md:block md:mt-3 ml-4 md:ml-0 items-center 
            ${data.img === '' ? 'md:mt-8' : ''}`}>
                <img className={`w-12 h-12 rounded-full bg-black  md:m-auto
                ${data.img === '' ? 'hidden' : ''}`}
                src={data.img} alt="" />
                <p className='pl-2 text-lg lg:text-base md:text-center md:mt-1 md:pl-0'>
                    {data.name}
                </p>
            </div>

            <p className='text-lg flex items-center lg:text-base md:justify-center
            md:mt-1 msm:mt-0 msm:mr-2 msm:ml-2 msm:break-all msm:text-center'>
                {data.sha}
            </p>

            <p className='text-lg flex items-center mr-7 lg:text-base 
            md:justify-center md:mt-1 md:mr-0'>
                {date}
            </p>
        </div>
    );
}

export default Commit;
