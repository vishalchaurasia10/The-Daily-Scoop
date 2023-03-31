import React, { useEffect, useState } from 'react'
import Banner from '../../components/Layout/Banner'
import Sidebar from '../../components/Layout/Sidebar'
import Posts from '../../components/Posts/PostsCard'
import constants from '../../constants/constants'
import Spinner from '../../components/Layout/Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import { motion } from 'framer-motion'

const BlogHome = () => {

  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [totalBlogs, setTotalBlogs] = useState(0)
  const [numberOfBlogs, setNumberOfBlogs] = useState(2)

  const getBlogs = async () => {
    const response = await fetch(`${constants.API_URL}/api/blogs/getBlogs?count=${numberOfBlogs}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const json = await response.json();
    setIsLoading(false);
    setBlogs(json.blogs);
    setTotalBlogs(json.totalBlogs);
  }

  useEffect(() => {
    getBlogs();

  }, [])

  const fetchMoreData = async () => {
    setTimeout(async () => {
      setNumberOfBlogs(numberOfBlogs + 2);
      const response = await fetch(`${constants.API_URL}/api/blogs/getBlogs?count=${numberOfBlogs + 2}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const json = await response.json();
      setBlogs(json.blogs);
      setTotalBlogs(json.totalBlogs);
    }, 500);
  };

  return (
    <>
      <Banner />
      {isLoading ?
        <div className="spinner py-40 w-full flex items-center justify-center">
          <Spinner />
        </div> :
        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={totalBlogs > numberOfBlogs}
          loader={<div className="spinner py-40 w-full flex items-center justify-center"><Spinner /></div>}
          endMessage={
            <p className='flex justify-center items-center my-8 text-center text-white text-4xl lg:text-6xl font-Dancing-script'>Thats it. Return on next Saturday to see new blogs.</p>
          }
        >
          <div id='allPosts' className="posts flex flex-col lg:flex-row pb-8 pt-16 px-4 text-white lg:px-20 bg-[#0F6292]">
            <div className="cards order-2 lg:order-1 lg:w-3/4 md:flex md:flex-wrap lg:my-7 ">
              {blogs.map((blog) => {
                return (
                  <Posts
                    key={blog._id}
                    title={blog.title}
                    category={blog.category}
                    tags={blog.tags}
                    author={blog.author}
                    content={blog.content}
                    preview={blog.preview}
                    slug={blog.slug}
                    width='lg:w-[46%]'
                    date={blog.createdAt}
                  />
                )
              })}
            </div>
            <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ duration: 0.7 }}
             className="sidebar lg:pt-12 pb-8 lg:pb-0 order-1 lg:order-2 lg:w-1/4">
              <Sidebar blogs={blogs} />
            </motion.div>
          </div>
        </InfiniteScroll>}
    </>
  )
}

export default BlogHome
