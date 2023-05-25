import React from 'react';
import { Link } from 'react-router-dom';
import MenuCard from '../MenuCard/MenuCard';

const MenuCategory = ({ item, title }) => {

    return (
        <div className='pt-16 pb-20 px-5'>
            <div className='max-w-[1140px] mx-auto'>

                <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10 mb-10'>
                    {
                        item.map(menu => <MenuCard
                            key={menu._id}
                            menu={menu}
                        ></MenuCard> )
                    }
                    </div>

                    <div className='text-center mt-16'>
                        <Link to={`/shop/${title}`} className='text-[#1F2937] uppercase lg:text-[20px] text-[16px] font-medium py-5 lg:px-10 px-5 rounded-lg border-b-[3px] border-[#1F2937]'>ORDER YOUR FAVOURITE FOOD</Link>
                    </div>
            </div>
        </div>
    );
};

export default MenuCategory;