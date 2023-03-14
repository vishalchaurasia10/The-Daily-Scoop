import React from 'react'
import Sidebar from '../../components/Layout/Sidebar'
import Posts from '../../components/Posts/PostsCard'

const BlogHome = () => {
  return (
    <>
      <div className="bannerImage flex items-center justify-center shadow-2xl shadow-black bg-cover bg-center h-[30rem] bg-[url('/banner.jpg')]">
        <h1 className='font-Dancing-script text-white text-6xl lg:text-8xl'>Our Blogs</h1>
      </div>
      <div id='allPosts' className="posts flex flex-col lg:flex-row pb-8 pt-16 px-4 text-white lg:px-20 bg-[#0F6292]">
        <div className="cards order-2 lg:order-1 lg:w-3/4 md:flex md:flex-wrap lg:my-7 ">
          <Posts width={46}/>
          <Posts width={46}/>
          <Posts width={46}/>
          <Posts width={46}/>
          <Posts width={46}/>
        </div>
        <div className="sidebar lg:pt-12 pb-8 lg:pb-0 order-1 lg:order-2 lg:w-1/4">
          <Sidebar/>
        </div>
      </div>
    </>
  )
}

export default BlogHome
