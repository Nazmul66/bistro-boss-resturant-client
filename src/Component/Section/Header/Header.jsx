import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <header className='py-5 lg:px-0 px-5'>
        <div className='max-w-[1140px] mx-auto '>
            <div className='flex justify-between items-center'>
                <div className='lg:w-[25%] w-[50%]'>
                    <h2 className='text-white font-black lg:text-[28px] text-[20px]'>BISTRO BOSS</h2>
                    <h4 className='text-white font-bold lg:text-[20px] text-[16px] tracking-[0.38em]'>Restaurant</h4>
                </div>
                
                <nav className={`w-[75%] flex lg:flex-row flex-col lg:justify-end justify-center items-center ${toggle ? "navbar active" : "navbar" }`} >
                    <div className='menubar'>
                        <ul className='flex lg:flex-row flex-col items-center'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/AllToy">All Toys</Link></li>
                            <li><Link to="/AddToy">Add Toy</Link></li>
                            <li><Link to="/MyToys">My Toys</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </div>
                </nav>
                   {
                      toggle ? <RxCross2 onClick={() => setToggle(!toggle) } className='lg:hidden block text-[30px] z-40 text-yellow-500' /> :
                      <HiMenuAlt3 onClick={() => setToggle(!toggle) } className='lg:hidden block text-[30px] z-40 text-yellow-500' />
                   }
            </div>
        </div>
    </header>
    );
};

export default Header;