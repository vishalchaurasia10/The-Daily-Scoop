import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const RecentPosts = () => {
    return (
        <>
            <div className="card lg:w-[32%] md:w-[47%] shadow-xl bg-[rgba(255,255,255,0.1)]  shadow-[#142c41] border border-[rgba(255,255,255,0.1)] rounded-lg md:mx-2 my-4 md:my-3 md:space-y-2">
                <div className="img overflow-hidden">
                    <Image className='rounded-t-lg w-full transition-all duration-500 hover:scale-105' width={500} height={500} src="/hero2.jpg" alt="post_image" />
                </div>
                <div className="details p-4 space-y-1">
                    <h2 className='text-3xl font-jost'>How to learn JavaScript</h2>
                    <p className="tag font-jost text-sm cursor-pointer font-light">#Tech</p>
                    <span className='font-medium text-sm font-jost'>Vishal Chaurasia | </span><span className='text-xs font-light font-jost'>1 Mar 2023, 1:58 am</span>
                    <p className='font-jost text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, neque!...</p>
                    <button className='flex pl-3 -ml-1 lg:ml-0 p-[0.4rem] my-2 mb-3 hover:bg-[rgba(255,255,255,0.3)] rounded-3xl items-center space-x-4 transition-all hover:-translate-y-[0.1rem] hover:shadow-2xl shadow-white duration-150'>Read more
                        <FontAwesomeIcon className='w-4 h-4 pt-1' icon={faAngleRight} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default RecentPosts
