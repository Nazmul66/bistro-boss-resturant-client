import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import MenuCard from '../../Shared/MenuCard/MenuCard';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [menus, setMenus] = useState([])

    useEffect(() =>{
        fetch("menu.json")
        .then(res => res.json())
        .then(data => setMenus(data))
    },[])

    return (
        <div className='py-16 px-5'>
            <div className='max-w-[1140px] mx-auto'>
                <SectionTitle 
                      heading={"---Check it out---"} 
                      subHeading={"FROM OUR MENU"}
                ></SectionTitle>

                <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10 mb-10'>
                  {
                     menus.slice(0,6).map(menu => <MenuCard
                        key={menu._id}
                        menu={menu}
                     ></MenuCard> )
                 }
                </div>

                <div className='text-center'>
                   <Link className='text-[#1F2937] uppercase text-[20px] font-medium py-5 px-5 rounded-lg border-b-[3px] border-[#1F2937]'>View Full  Menu</Link>
                </div>
            </div>
        </div>
    );
};

export default Menu;