import React from 'react'
import RecentPosts from './RecentPosts'

const ShowRecentPosts = () => {
    return (
        <>
            <div className='mb-8 mt-16'>
                <div className="heading w-full flex items-center justify-center space-x-4">
                    <div className='horizontalRule h-[0.1rem] relative w-[30%] bg-white'></div>
                    <h1 className='text-6xl text-white font-bangers text-center'>Recent Posts</h1>
                    <div className='horizontalRule h-[0.1rem] relative  w-[30%] bg-white'></div>
                </div>
            </div>
            <div>
                <RecentPosts />
                <RecentPosts />
                <RecentPosts />
                <RecentPosts />
                <RecentPosts />
            </div>
        </>
    )
}

export default ShowRecentPosts
