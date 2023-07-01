
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from '../../../../public/assets/home/slide1.jpg';
import slide2 from '../../../../public/assets/home/slide2.jpg';
import slide3 from '../../../../public/assets/home/slide3.jpg';
import slide4 from '../../../../public/assets/home/slide4.jpg';
import slide5 from '../../../../public/assets/home/slide5.jpg';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className='lg:py-16 py-8 px-5'>
            <div className='max-w-[1140px] mx-auto'> 
                <SectionTitle heading={"---What Our Clients Say---"}
                    subHeading={"ORDER ONLINE"}
                ></SectionTitle>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                        320: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        577: {
                          slidesPerView: 3,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 50,
                        },
                      }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='relative'>
                           <img src={slide1} alt="" className='w-full mb-10' />
                           <h4 className='text-white font-normal text-[24px] text-center absolute bottom-4 left-[50%] translate-x-[-50%] uppercase'>Salads</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className='relative'>
                           <img src={slide2} alt="" className='w-full mb-10' />
                           <h4 className='text-white font-normal text-[24px] text-center absolute bottom-4 left-[50%] translate-x-[-50%] uppercase'>Soups</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className='relative'>
                           <img src={slide3} alt="" className='w-full mb-10' />
                           <h4 className='text-white font-normal text-[24px] text-center absolute bottom-4 left-[50%] translate-x-[-50%] uppercase'>pizzas</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='relative'>
                           <img src={slide4} alt="" className='w-full mb-10' />
                           <h4 className='text-white font-normal text-[24px] text-center absolute bottom-4 left-[50%] translate-x-[-50%] uppercase'>desserts</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className='relative'>
                           <img src={slide5} alt="" className='w-full mb-10' />
                           <h4 className='text-white font-normal text-[24px] text-center absolute bottom-4 left-[50%] translate-x-[-50%] uppercase'>Salads</h4>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Category;