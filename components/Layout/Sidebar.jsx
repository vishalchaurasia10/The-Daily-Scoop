import { faCircle, faTags } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';
import React from 'react'

const Sidebar = (props) => {

    const categories = new Set();
    const tags = new Set();

    for (const blog of (props.blogs)) {
        categories.add(blog.category);
        tags.add(blog.tags);
    }

    return (
        <>
            <div className="sidebar rounded-xl border px-4 py-5 shadow-2xl shadow-black border-[rgba(255,255,255,0.1)]">
                <div className="categoriesHeading -mb-3">
                    <h1 className='font-bold font-jost text-4xl'>Categories</h1>
                    <span className='bg-white relative -top-3 w-full opacity-50 h-[0.1rem] inline-block'></span>
                </div>
                <ul className='pl-2 space-y-1'>
                    {Array.from(categories).map((category, index) => {
                        return (
                            <li key={index} className='cursor-pointer w-fit px-3 hover:bg-[rgba(255,255,255,0.3)] rounded-3xl transition-all duration-150'>
                                <Link className='flex items-center space-x-1' href={`/blogs/search/${category}?category=true`}>
                                    <FontAwesomeIcon className='text-[0.5rem]' icon={faCircle} /><span className='font-jost text-lg'>{category}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <div className="tagHeading pt-2 -mb-3">
                    <h1 className='font-bold font-jost text-4xl'>Tags</h1>
                    <span className='bg-white relative -top-3 w-full opacity-50  h-[0.1rem] inline-block'></span>
                </div>
                <ul className='pl-2 space-y-1 flex flex-wrap items-center'>
                    {Array.from(tags).map((tag, index) => {
                        return (
                            <li key={index} className='flex cursor-pointer px-3 items-center space-x-1 hover:bg-[rgba(255,255,255,0.3)] rounded-3xl transition-all duration-150 mr-1 text-sm font-jost'>
                                <Link className='flex items-center space-x-1' href={`/blogs/search/${tag}?tags=true`}>
                                    <FontAwesomeIcon icon={faTags} /><span className='font-jost text-lg'>{tag}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Sidebar
