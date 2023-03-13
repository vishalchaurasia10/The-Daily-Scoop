import React from 'react'
import TopPosts from './TopPosts'

const ShowTopPosts = () => {
  return (
    <>
      <div id='showTopPosts' className="posts relative z-20 pb-6 pt-[4.5rem] px-4 lg:px-20 flex flex-col bg-[#FFB84C]">
        <h1 className='font-monserrat flex items-center text-5xl lg:text-6xl font-semibold '>
          Top Posts
          <span className='h-[0.1rem] ml-4 w-1/4 bg-black block'></span>
        </h1>
        <div className="slider lg:flex w-full lg:space-x-4">
          <TopPosts direction='horizontal' slidesPerView={1} />
          <TopPosts direction='vertical' slidesPerView={2} />
        </div>
      </div>
      <svg className='relative z-10 lg:-top-24' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 224">
        <path fill="#FFB84C" fillOpacity="1" d="M0,224L1440,128L1440,0L0,0Z"></path>
      </svg>
    </>
  )
}

export default ShowTopPosts
