import React, { useEffect, useState } from 'react'
import TopPosts from './TopPosts'
import constants from '../../constants/constants'
import Spinner from '../Layout/Spinner';

const ShowTopPosts = () => {
  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getTopBlogs = async () => {
    const response = await fetch(`${constants.API_URL}/api/blogs/getBlogs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const json = await response.json();
    setIsLoading(false);
    setBlogs(json.slice(0, 5));
  }

  useEffect(() => {
    getTopBlogs();
  }, [])

  return (
    <>
      <div id='showTopPosts' className="posts relative z-20 pb-6 pt-[4.5rem] px-4 lg:px-20 flex flex-col bg-[#FFB84C]">
        <h1 className='font-monserrat flex items-center text-5xl lg:text-6xl font-semibold '>
          Top Posts
          <span className='h-[0.1rem] ml-4 w-1/4 bg-black block'></span>
        </h1>
        {isLoading && <div className="spinner py-40 w-full flex items-center justify-center">
          <Spinner />
        </div>}
        {!isLoading && <div className="slider lg:flex w-full lg:space-x-4">
          {blogs.length > 0 && (
            <>
              <TopPosts
                blogs={blogs}
                direction='horizontal'
                slidesPerView={1} />
              <TopPosts blogs={blogs} direction='vertical' slidesPerView={2} />
            </>
          )}
        </div>}
      </div>
      <svg className='relative z-10 lg:-top-24' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 224">
        <path fill="#FFB84C" fillOpacity="1" d="M0,224L1440,128L1440,0L0,0Z"></path>
      </svg>
    </>
  )
}

export default ShowTopPosts
