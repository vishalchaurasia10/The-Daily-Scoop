import React, { useEffect, useState } from 'react'
import RecentPosts from './PostsCard'

const ShowRecentPosts = () => {

    const [blogs, setBlogs] = useState([])

    const getRecentBlogs = async () => {
        const response = await fetch(`https://the-daily-scoop-backend.onrender.com/api/blogs/getBlogs`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const json = await response.json();
        setBlogs(json.reverse().slice(0, 5));
    }

    useEffect(() => {
        getRecentBlogs();
    }, [])

    return (
        <>
            <div id='showRecentPosts' className="posts pb-12 pt-16 -top-12 lg:pt-48 relative  lg:-top-[15rem] px-4 text-white lg:px-20 flex flex-col bg-[#0F6292]">
                <h1 className='font-monserrat pb-4 lg:pb-0 flex items-center text-4xl lg:text-6xl font-semibold '>
                    Recent Posts
                    <span className='h-[0.1rem] ml-4 w-1/4 bg-white block'></span>
                </h1>
                <div className="cards md:flex md:flex-wrap lg:my-7 w-full md:mx-auto ">
                    {blogs.map((blog) => {
                        return (
                            <RecentPosts
                                key={blog._id}
                                title={blog.title}
                                category={blog.category}
                                tags={blog.tags}
                                author={blog.author}
                                content={blog.content}
                                preview={blog.preview}
                                slug={blog.slug}
                                width='lg:w-[32%]'
                                date={blog.createdAt}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ShowRecentPosts
