import React from 'react';

const Cover_section = ({ img, headTitle, headParams }) => {
    return (
        <div className='pt-[150px] pb-[60px] px-5' style={{ backgroundImage: `url("${img}")`, backgroundPosition: "center top", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
             <div className='max-w-[1140px] mx-auto'>
                <div className='max-w-[900px] mx-auto lg:py-[140px] py-[70px]' style={{background: "rgba(21, 21, 21, 0.6)"}}>
                    <h2 className='font-bold lg:text-[60px] text-[36px] text-white text-center'>{headTitle}</h2>
                    <p className='font-normal lg:text-[18px] text-[14px] leading-7 text-white text-center'>{headParams}</p>
                </div>
             </div>
        </div>
    );
};

export default Cover_section;