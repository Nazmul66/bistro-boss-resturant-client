import React from 'react';
import Header from '../Section/Header/Header';
import Footer from '../Section/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Main = () => {
    const location = useLocation();
    // console.log(location)
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/register')

    return (
        <div>
            { noHeaderFooter || <Header></Header>}
               <div className='min-h-[50vh]'>
                  <Outlet></Outlet>
               </div>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;