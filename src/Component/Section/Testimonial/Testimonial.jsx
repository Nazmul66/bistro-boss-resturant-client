import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { FaQuoteLeft } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";


const Testimonial = () => {
    const [review, setReview] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:4000/review')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setReview(data)
        })
    },[])
    return (
        <div className='py-16'>
            <div className='max-w-[1140px] mx-auto'>
                 <SectionTitle
                    heading={"---What Our Clients Say---"}
                     subHeading={"TESTIMONIALS"}
                 ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {
                review.map((reviews, index) => <SwiperSlide
                    key={index}
                    >
                        <div className='px-20'>
                            <Rating
                               className='mx-auto mb-12'
                                style={{ maxWidth: 180 }}
                                value={reviews.rating}
                                readOnly
                            />
                           <FaQuoteLeft className='mx-auto text-[80px] text-[#151515] mb-12' />
                            <p className='text-[16px] text-center leading-7 text-[#444444] mb-2'>{reviews.details}</p>
                            <span className='block text-center text-[#CD9003] text-[28px]'>{reviews.name}</span>
                        </div>
                    </SwiperSlide>)
            }
      </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;