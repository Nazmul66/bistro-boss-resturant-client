import React from 'react';
import gif404 from './../../public/assets/404.gif'
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='py-0'>
            <div className='max-w-[1140px] mx-auto '>
                <img src={gif404} alt="" className='mx-auto w-[60%]' />
                <Link to="/">
                    <button className="flex items-center mx-auto font-bold text-[16px] text-white bg-gradient-to-r from-[#835D23] to-[#B58130] px-6 py-2">Send Review <BsFillRocketTakeoffFill className='ml-3' /></button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;