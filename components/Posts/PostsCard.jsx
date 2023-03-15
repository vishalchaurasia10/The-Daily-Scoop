import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faCircle, faTags } from '@fortawesome/free-solid-svg-icons'

const Posts = (props) => {

    const reduceStringTo10Words = (str, max) => {
        const words = str.split(' ')
        if (words.length > max) {
            const reducedWords = words.slice(0, max)
            const reducedString = reducedWords.join(' ')
            return reducedString + '...'
        }
        else {
            return str
        }
    }

    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const options = {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };
        return date.toLocaleString('en-US', options);
    }
    
    return (
        <>
            <div className={`card ${props.width} shadow-xl bg-[rgba(255,255,255,0.1)]  shadow-[#142c41] border border-[rgba(255,255,255,0.1)] rounded-lg md:mx-2 my-4 md:my-3 md:space-y-2`}>
                <div className="img overflow-hidden">
                    <Image className='rounded-t-lg w-full transition-all duration-500 hover:scale-105' width={500} height={500} src="/hero2.jpg" alt="post_image" />
                </div>
                <div className="details p-4 space-y-1">
                    <h2 title={props.title} className='title text-3xl font-jost'>{reduceStringTo10Words(props.title, 5)}</h2>
                    <div>
                        <span className="categories ">
                            <FontAwesomeIcon className='text-[0.5rem] pb-[0.1rem] pr-1' icon={faCircle} /><span className='font-jost text-sm cursor-pointer font-light'>{props.category} | </span>
                        </span>
                        <span className="tags">
                            <FontAwesomeIcon className='text-sm pr-1' icon={faTags} /><span className='font-jost text-sm cursor-pointer font-light'>{props.tags}</span>
                        </span>
                    </div>
                    <span className='font-medium text-sm font-jost'>{props.author} | </span><span className='text-xs font-light font-jost'>{formatDate(props.date)}</span>
                    <p title={props.preview} className='font-jost text-lg'>{reduceStringTo10Words(props.preview, 10)}</p>
                    <Link href={`/blogs/${props.slug}`}>
                        <button className='flex pl-3 -ml-1 lg:ml-0 p-[0.4rem] my-2 mb-3 hover:bg-[rgba(255,255,255,0.3)] rounded-3xl items-center space-x-4 transition-all hover:-translate-y-[0.1rem] hover:shadow-2xl shadow-white duration-150'>Read more
                            <FontAwesomeIcon className='w-4 h-4 pt-1' icon={faAngleRight} />
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Posts
