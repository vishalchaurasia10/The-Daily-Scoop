import React from 'react'
import TopPosts from './TopPosts'

const ShowTopPosts = () => {
  return (
    <>
      <div id='showTopPosts' className="posts pb-12 pt-[4.5rem] px-4 lg:px-20 flex flex-col bg-gradient-to-r from-[#BAD0D9] to-[#F4A895]">
        <h1 className='font-monserrat text-5xl lg:text-6xl font-semibold '>Top Posts</h1>
        <div className="slider lg:flex w-full lg:space-x-4">
          <TopPosts direction='horizontal' slidesPerView={1} />
          <TopPosts direction='vertical' slidesPerView={2} />
        </div>
      </div>
    </>
  )
}

export default ShowTopPosts
