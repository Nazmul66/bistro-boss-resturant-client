import React from 'react';
import Cover_section from '../../Shared/Cover_section/Cover_section';
import ban_img from '../../../../public/assets/contact/banner.jpg'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { AiFillClockCircle } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BiPhoneCall } from 'react-icons/bi';
import { BsFillSendFill } from 'react-icons/bs';

const Contact_Us = () => {
    return (
        <>
           <Cover_section img={ban_img} headTitle={"CONTACT US"} headParams={"Would you like to try a dish?"} ></Cover_section>
            <div className='py-12 px-5'>
                <div className='max-w-[1140px] mx-auto'>

                    <div className=''>
                        <SectionTitle heading={"---Visit Us---"} subHeading={"OUR LOCATION"}></SectionTitle>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                            <div className='border-[1px] border-[#E8E8E8]'>
                                <div className='bg-[#D1A054] py-4'>
                                <BiPhoneCall className='text-[#FFF] mx-auto text-[30px]' />
                                </div>
                                <div className='text-center pr-[30px] pl-[30px] pb-[30px]'>
                                    <div className='bg-[#F3F3F3] pb-16 pt-9'>
                                    <h3 className='font-medium text-[24px] text-[#151515] mb-3'>PHONE</h3>
                                        <p className='text-[#444] font-normal'>+38 (012) 34 56 789</p>
                                    </div>
                                </div>
                            </div>

                            <div className='border-[1px] border-[#E8E8E8]'>
                                <div className='bg-[#D1A054] py-4'>
                                <FaMapMarkerAlt className='text-[#FFF] mx-auto text-[30px]' />
                                </div>
                                <div className='text-center pr-[30px] pl-[30px] pb-[30px]'>
                                    <div className='bg-[#F3F3F3] pb-16 pt-9'>
                                    <h3 className='font-medium text-[24px] text-[#151515] mb-3'>ADDRESS</h3>
                                        <p className='text-[#444] font-normal'>+38 (012) 34 56 789</p>
                                    </div>
                                </div>
                            </div>

                            <div className='border-[1px] border-[#E8E8E8]'>
                                <div className='bg-[#D1A054] py-4'>
                                <AiFillClockCircle className='text-[#FFF] mx-auto text-[30px]' />
                                </div>
                                <div className='text-center pr-[30px] pl-[30px] pb-[30px]'>
                                    <div className='bg-[#F3F3F3] pb-10 pt-9'>
                                        <h3 className='font-medium text-[24px] text-[#151515] mb-3'>WORKING HOURS</h3>
                                        <p className='text-[#444] font-normal'>Mon - Fri: 08:00 - 22:00</p>
                                        <p className='text-[#444] font-normal'>Sat - Sun: 10:00 - 23:00</p>
                                    </div>
                                </div>
                            </div>

                        </div> 
                    </div>
               </div>
            </div>

            <div className='py-10 px-5'>
               <div className='max-w-[1140px] mx-auto'>
                   <SectionTitle heading={"---Send Us a Message---"} subHeading={"CONTACT FORM"}></SectionTitle>

                   <div className='bg-[#F3F3F3] lg:p-16 p-4'>
                       <form action="">
                          <div className='flex lg:flex-row flex-col gap-7 mb-6'>
                            <div className='w-full lg:w-[50%]'>
                                <label for="" className="font-semibold text-[20px] mb-4 block text-[#444]">Name*</label>
                                <input type="text" name="name" placeholder="Enter Your name" className="block w-full outline-none border-[2px] border-[#E8E8E8] py-4 rounded-lg px-5 text-[16px] font-normal text-[#000]" />
                            </div>
                            <div className='w-full lg:w-[50%]'>
                                <label for="" className="font-semibold text-[20px] mb-4 block text-[#444]">Email*</label>
                                <input type="email" name="email" placeholder="Enter Your Email" className="block w-full outline-none border-[2px] border-[#E8E8E8] py-4 rounded-lg px-5 text-[16px] font-normal text-[#000]" />
                            </div>
                          </div>

                          <div className='w-full mb-6'>
                                <label for="" className="font-semibold text-[20px] mb-4 block text-[#444]">Phone*</label>
                                <input type="text" name="phone" placeholder="Enter Your Phone Number" className="block w-full outline-none border-[2px] border-[#E8E8E8] py-4 rounded-lg px-5 text-[16px] font-normal text-[#000]" />
                            </div>

                            <div className='w-full'>
                                <label for="" className="font-semibold text-[20px] mb-4 block text-[#444]">Message*</label>
                                <textarea type="text" name="phone" placeholder="Enter Your Phone Number" className="block w-full outline-none border-[2px] border-[#E8E8E8] py-4 rounded-lg px-5 text-[16px] h-[300px] font-normal text-[#000]"></textarea>
                            </div>

                               <button className='flex items-center mx-auto font-bold text-[20px] text-white bg-gradient-to-r from-[#835D23] to-[#B58130] px-6 py-2'>Send Message    <BsFillSendFill className="text-[#fff] ml-3" /></button>
                       </form>
                   </div>
               </div>
            </div>
     </>
    );
};

export default Contact_Us;