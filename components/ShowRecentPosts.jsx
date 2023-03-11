import React from 'react'
import RecentPosts from './RecentPosts'

const ShowRecentPosts = () => {
    return (
        <>
            <div id='showRecentPosts' className="posts pb-12 pt-6 px-4 lg:px-20 flex flex-col bg-gradient-to-r from-[#BAD0D9] to-[#F4A895]">
                <h1 className='font-monserrat flex items-center text-4xl lg:text-6xl font-semibold '>
                    Recent Posts
                    <span className='h-[0.1rem] ml-4 w-1/4 bg-black block'></span>
                </h1>
                <div className="cards lg:flex lg:flex-wrap lg:my-7 w-full">
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
