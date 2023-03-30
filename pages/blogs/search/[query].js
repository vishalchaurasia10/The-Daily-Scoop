import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Banner from '../../../components/Layout/Banner'
import Posts from '../../../components/Posts/PostsCard'
import constants from '../../../constants/constants'
import Spinner from '../../../components/Layout/Spinner';
import Image from 'next/image'

const Query = () => {

    const router = useRouter()
    const [blogs, setBlogs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    let searchString

    if (router.query.category) {
        searchString = { category: router.query.query };
    }
    else if (router.query.tags) {
        searchString = { tags: router.query.query };
    }
    else if (router.query.search) {
        let words = router.query.query.split(' ')
        let slug = words.join('-')
        searchString = { slug: slug };
    }

    const getBlogs = async () => {
        const response = await fetch(`${constants.API_URL}/api/blogs/search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(searchString)
        })
        const json = await response.json();
        setIsLoading(false);
        setBlogs(json);
    }

    useEffect(() => {
        getBlogs();
    }, [router.query.query])


    return (
        <>
            <Banner />
            {isLoading ?
                <div className="spinner py-40 w-full flex items-center justify-center">
                    <Spinner />
                </div> :
                <div id='allPosts' className="posts flex flex-col lg:flex-row pb-8 pt-16 px-4 text-white lg:px-20 bg-[#0F6292]">
                    <div className="cards md:flex md:flex-wrap lg:my-7 w-full md:mx-auto ">
                        {blogs.length > 0 ? blogs.map((blog) => {
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
                                    width='lg:w-[32%]'
                                    date={blog.createdAt}
                                />
                            )
                        }) :
                            <div className="notFound w-full font-Dancing-script text-4xl text-center lg:text-7xl flex flex-col items-center justify-center">
                                <div className="image bg-white rounded-xl">
                                    <Image src='/notFound.svg' width={500} height={500} alt='Result not found' />
                                </div>
                                <p className='mt-10 mb-2'>Nothing Found !</p>
                                <p>Try Searching something else...</p>
                            </div>}
                    </div>
                </div>}
        </>
    )
}

export default Query
