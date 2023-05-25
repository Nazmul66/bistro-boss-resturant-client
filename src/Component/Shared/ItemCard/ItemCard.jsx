import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ items }) => {
    const {image, name, recipe} = items;
    return (
        <div className=''>
            <img src={image} alt="" className='w-full' />
            <div className='bg-[#f3f3f3] p-7'>
                <h3 className='mt-8 font-semibold text-[24px] text-[##151515] text-center mb-2'>{name}</h3>
                <p className='text-[#737373] text-[16px]'>{recipe}</p>
                <div className='text-center mt-8 mb-5'>
                   <Link className='px-6 py-[10px] rounded-md transition-all bg-[#e8e8e8] hover:bg-[#111827] text-[#BB8506] text-[16px] font-medium border-b-[2px] border-[#BB8506]'>ADD TO CARD</Link>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;