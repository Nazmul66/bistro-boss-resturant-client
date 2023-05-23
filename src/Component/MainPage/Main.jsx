import React from 'react';
import Header from '../Section/Header/Header';
import Footer from '../Section/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
               <div className='min-h-[50vh]'>
                  <Outlet></Outlet>
               </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;