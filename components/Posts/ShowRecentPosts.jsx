import React, { useEffect, useState } from 'react'
import RecentPosts from './PostsCard'
import constants from '../../constants/constants'
import Link from 'next/link'
import Spinner from '../Layout/Spinner';
import { motion } from 'framer-motion'

const ShowRecentPosts = () => {

    const [blogs, setBlogs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getRecentBlogs = async () => {
        const response = await fetch(`${constants.API_URL}/api/blogs/getBlogs?count=5`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const json = await response.json();
        setIsLoading(false);
        setBlogs(json.blogs.reverse().slice(0, 5));
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
                {isLoading && <div className="spinner py-40 w-full flex items-center justify-center">
                    <Spinner />
                </div>}
                {!isLoading &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="cards md:flex md:flex-wrap lg:my-7 w-full md:mx-auto ">
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
                        <div className={`wrapper py-10  ${blogs.length === 3 ? 'lg:w-full lg:py-10 ' : 'lg:w-[32%] lg:py-0'}  flex justify-center items-center`}>
                            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-md px-8 py-3 font-medium tracking-wide text-white text-xl shadow-2xl border border-slate-100/20 hover:scale-110 transition duration-300 ease-out  active:translate-y-1">
                                <span className="absolute inset-0 bg-gradient-to-r bg-[#42709a] opacity-0  transition duration-300 ease-out  group-hover:opacity-100  group-active:opacity-90"></span>
                                <Link href='/blogs'>
                                    <span className="relative font-jost">Read More</span>
                                </Link>
                            </button>
                        </div>
                    </motion.div>}
            </div>
        </>
    )
}

export default ShowRecentPosts
