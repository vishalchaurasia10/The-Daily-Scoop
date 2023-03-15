import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Banner from '../../../components/Layout/Banner'
import Posts from '../../../components/Posts/PostsCard'

const Query = () => {

    const router = useRouter()
    const [blogs, setBlogs] = useState([])
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
        const response = await fetch(`http://localhost:3000/api/search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(searchString)
        })
        const json = await response.json();
        setBlogs(json);
    }

    useEffect(() => {
        getBlogs();
    }, [router.query.query])


    return (
        <>
            <Banner />
            <div id='allPosts' className="posts flex flex-col lg:flex-row pb-8 pt-16 px-4 text-white lg:px-20 bg-[#0F6292]">
                <div className="cards md:flex md:flex-wrap lg:my-7 w-full md:mx-auto ">
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

export default Query
