import React, { useEffect, useState } from 'react'
import Banner from '../../components/Layout/Banner'
import Sidebar from '../../components/Layout/Sidebar'
import Posts from '../../components/Posts/PostsCard'

const BlogHome = () => {

  const [blogs, setBlogs] = useState([])
  const getBlogs = async () => {
    const response = await fetch(`/api/getBlogs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const json = await response.json();
    setBlogs(json);
  }

  useEffect(() => {
    getBlogs();

  }, [])

  return (
    <>
      <Banner/>
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
        <div className="sidebar lg:pt-12 pb-8 lg:pb-0 order-1 lg:order-2 lg:w-1/4">
          <Sidebar blogs={blogs} />
        </div>
      </div>
    </>
  )
}

export default BlogHome
