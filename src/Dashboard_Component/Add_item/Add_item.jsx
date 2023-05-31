import React from 'react';
import SectionTitle from '../../Component/Shared/SectionTitle/SectionTitle';
import ChangeTitle from '../../WebsiteTitle/WebsiteTitle';

const Add_item = () => {
    ChangeTitle("Dashboard/Add-item");

    return (
        <div className='py-10 px-5 bg-[#FFF]'>
            <div className='max-w-[850px] mx-auto'>
            <SectionTitle heading="---What's new?---" subHeading="ADD AN ITEM"></SectionTitle>
               <div className='bg-[#FFF] p-[30px]'>

                   <div className='p-[30px] bg-[#F6F6F6]'>
                       <form action="">
                            <div className='mb-7'>
                                <label htmlFor="" className='font-semibold text-[16px] mb-4 block text-[#444]'>Recipe name*</label>
                                <input type="text" name="email" placeholder='Recipe name'  className='block w-full outline-none  py-4 rounded-lg px-5 text-[16px] font-normal text-[#000]'  />
                            </div>
                     </form>
                 </div>
                
             </div>
         </div>
     </div>
    );
};

export default Add_item;