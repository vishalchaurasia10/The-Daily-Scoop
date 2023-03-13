import React from 'react'
import RecentPosts from './Posts'

const ShowRecentPosts = () => {
    return (
        <>
            <div id='showRecentPosts' className="posts pb-12 pt-16 -top-12 lg:pt-48 relative  lg:-top-[15rem] px-4 text-white lg:px-20 flex flex-col bg-[#0F6292]">
                <h1 className='font-monserrat pb-4 lg:pb-0 flex items-center text-4xl lg:text-6xl font-semibold '>
                    Recent Posts
                    <span className='h-[0.1rem] ml-4 w-1/4 bg-white block'></span>
                </h1>
                <div className="cards md:flex md:flex-wrap lg:my-7 w-full md:mx-auto ">
                    <RecentPosts />
                    <RecentPosts />
                    <RecentPosts />
                    <RecentPosts />
                    <RecentPosts />
                </div>
            </div>
        </>
    )
}

export default ShowRecentPosts
