import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCircle, faTags } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const TopPosts = (props) => {
    const [blogs, setBlogs] = useState([])

    const getTopBlogs = async () => {
        const response = await fetch(`https://the-daily-scoop-backend.onrender.com/api/blogs/getBlogs`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const json = await response.json();
        setBlogs(json.slice(0, 5));
    }

    useEffect(() => {
        getTopBlogs();
    }, [])

    const reduceStringTo10Words = (str, max) => {
        const words = str.split(' ')
        if (words.length > max) {
            const reducedWords = words.slice(0, max)
            const reducedString = reducedWords.join(' ')
            return reducedString + '...'
        }
        else {
            return str
        }
    }

    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const options = {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };
        return date.toLocaleString('en-US', options);
    }

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
                {blogs.map((blog) => {
                    return (
                        <SwiperSlide key={blog._id}>
                            <div className="img bg-cover bg-center w-full h-full hover:scale-105 transition-all duration-500 bg-[url('/hero2.jpg')]">
                            </div>
                            <div className="data absolute bottom-0 text-white p-4">
                                <h2 className='text-3xl font-jost'>{blog.title}</h2>
                                <div>
                                    <span className="categories ">
                                        <FontAwesomeIcon className='text-[0.5rem] pb-[0.1rem] pr-1' icon={faCircle} /><span className='font-jost text-sm cursor-pointer font-light'>{blog.category} | </span>
                                    </span>
                                    <span className="tags">
                                        <FontAwesomeIcon className='text-sm pr-1' icon={faTags} /><span className='font-jost text-sm cursor-pointer font-light'>{blog.tags}</span>
                                    </span>
                                </div>
                                <span className='font-medium text-sm font-jost'>{blog.author} | </span><span className='text-xs font-light font-jost'>{formatDate(blog.date)}</span>
                                <p className='font-jost text-lg'>{reduceStringTo10Words(blog.preview, 10)}</p>
                                <Link href={`/blogs/${blog.slug}`}>
                                    <button className='flex pl-3 -ml-1 lg:ml-0 p-[0.4rem] my-2 mb-3 hover:bg-[rgba(255,255,255,0.3)] rounded-3xl items-center space-x-4 transition-all hover:-translate-y-[0.1rem] hover:shadow-2xl shadow-white duration-150'>Read more
                                        <FontAwesomeIcon className='w-4 h-4 pt-1' icon={faAngleRight} />
                                    </button>
                                </Link>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

export default TopPosts
