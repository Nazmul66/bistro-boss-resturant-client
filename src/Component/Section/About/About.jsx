import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='py-10 px-5'>
            <div className='max-w-[1140px] mx-auto about-content py-20 px-3 lg:px-0'>
                <div className='lg:w-[900px] w-full mx-auto bg-white lg:py-24 py-10 lg:px-40 px-6 text-center'>
                   <h2 className='lg:text-[45px] text-[36px] text-[#151515] leading-15'>Bistro Boss</h2>
                   <p className='lg:text-[16px] text-[14px] text-[#151515] leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default About;