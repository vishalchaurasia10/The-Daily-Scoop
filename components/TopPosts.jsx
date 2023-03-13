import React from 'react'
import Image from 'next/image'
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const TopPosts = (props) => {
    return (
        <>
            <Swiper className='lg:w-1/2 h-[35rem] rounded-lg shadow-2xl shadow-[#382b16] mt-10'
                modules={[Autoplay]}
                direction={props.direction}
                spaceBetween={0}
                slidesPerView={props.slidesPerView}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide className=''>
                    <div className="img bg-cover bg-center w-full h-full hover:scale-105 transition-all duration-500 bg-[url('/hero2.jpg')]">
                    </div>
                    <div className="data absolute bottom-0 text-white p-4">
                        <h2 className='text-3xl font-jost'>How to learn JavaScript</h2>
                        <p className="tag font-jost text-sm cursor-pointer font-light">#Tech</p>
                        <span className='font-medium text-sm font-jost'>Vishal Chaurasia | </span><span className='text-xs font-light font-jost'>1 Mar 2023, 1:58 am</span>
                        <p className='font-jost text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, neque!...</p>
                        <button className='flex pl-3 p-[0.4rem] my-2 hover:border hover:bg-[rgba(255,255,255,0.3)] border-[rgba(255,255,255,0.1)] rounded-3xl items-center space-x-4 transition-all hover:shadow-2xl shadow-white duration-150'>Read more
                            <FontAwesomeIcon className='w-4 h-4 pt-1' icon={faAngleRight} />
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className="img bg-cover bg-center w-full h-full hover:scale-105 transition-all duration-500 bg-[url('/hero2.jpg')]">
                    </div>
                    <div className="data absolute bottom-0 text-white p-4">
                        <h2 className='text-3xl font-jost'>How to learn JavaScript</h2>
                        <p className="tag font-jost text-sm cursor-pointer font-light">#Tech</p>
                        <span className='font-medium text-sm font-jost'>Vishal Chaurasia | </span><span className='text-xs font-light font-jost'>1 Mar 2023, 1:58 am</span>
                        <p className='font-jost text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, neque!...</p>
                        <button className='flex pl-3 p-[0.4rem] my-2 hover:border hover:bg-[rgba(255,255,255,0.3)] border-[rgba(255,255,255,0.1)] rounded-3xl items-center space-x-4 transition-all hover:shadow-2xl shadow-white duration-150'>Read more
                            <FontAwesomeIcon className='w-4 h-4 pt-1' icon={faAngleRight} />
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className="img bg-cover bg-center w-full h-full hover:scale-105 transition-all duration-500 bg-[url('/hero2.jpg')]">
                    </div>
                    <div className="data absolute bottom-0 text-white p-4">
                        <h2 className='text-3xl font-jost'>How to learn JavaScript</h2>
                        <p className="tag font-jost text-sm cursor-pointer font-light">#Tech</p>
                        <span className='font-medium text-sm font-jost'>Vishal Chaurasia | </span><span className='text-xs font-light font-jost'>1 Mar 2023, 1:58 am</span>
                        <p className='font-jost text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, neque!...</p>
                        <button className='flex pl-3 p-[0.4rem] my-2 hover:border hover:bg-[rgba(255,255,255,0.3)] border-[rgba(255,255,255,0.1)] rounded-3xl items-center space-x-4 transition-all hover:shadow-2xl shadow-white duration-150'>Read more
                            <FontAwesomeIcon className='w-4 h-4 pt-1' icon={faAngleRight} />
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default TopPosts
