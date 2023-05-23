import React from 'react';
import './Footer.css'
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter,BsInstagram } from 'react-icons/bs';

const Footer = () => {
    return (
        <>
        <footer className='pt-10'>
            <div className='flex lg:flex-row flex-col justify-between'>
               <div className='lg:w-1/2 w-full bg-[#1f2937] py-10'>
                   <div className='lg:max-w-[250px] max-w-full text-center lg:ml-auto ml-0 lg:mr-[150px] mr-0 '>
                        <h3 className='text-[24px] font-medium text-white mb-5'>CONTACT US</h3>
                        <div className='footer-content ml-auto'>
                            <p className='text-center text-[14px] font-medium leading-7 text-white'>123 ABS Street, Uni 21, Bangladesh +88 123456789</p>
                            <p className='text-center text-[14px] font-medium leading-7 text-white'>Mon - Fri: 08:00 - 22:00</p>
                            <p className='text-center text-[14px] font-medium leading-7 text-white'>Sat - Sun: 10:00 - 23:00</p>
                        </div>
                   </div>
               </div>
               <div className='lg:w-1/2 w-full bg-[#111827] py-10'>
                   <div className='lg:max-w-[250px] max-w-full lg:ml-[150px] ml-0 text-center'>
                        <h3 className='text-[24px] font-medium text-white mb-5'>CONTACT US</h3>
                        <div className='footer-content ml-auto'>
                            <p className='text-center text-[14px] font-medium leading-7 text-white'>Join us on social media</p>
                        </div>
                        <div className='social-icon mt-8'>
                                <ul className='flex items-center justify-center'>
                                    <li className='text-[#e7e7e7] text-[24px] mr-6'><FaFacebookF /></li>
                                    <li className='text-[#e7e7e7] text-[24px] mr-6'><BsInstagram /></li>
                                    <li className='text-[#e7e7e7] text-[24px]'><BsTwitter /></li>
                                </ul>
                        </div>
                   </div>
               </div>
            </div>
        </footer>

        <div className='another-footer'>
           <p className='text-center text-[14px] bg-[#151515] py-4 font-medium leading-7 text-white'>Copyright © CulinaryCloud. All rights reserved.</p>
        </div>
    </>
    );
};

export default Footer;