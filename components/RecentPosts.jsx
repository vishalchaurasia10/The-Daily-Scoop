import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const RecentPosts = () => {
    return (
        <>
            <div className={`text-white text-xl shadow-xl first:rounded-t-2xl last:rounded-b-2xl first:pt-0 lg:pl-2 lg:first:pt-4 py-4 lg:mx-72 lg:flex `}>
                <Image className='w-full lg:w-72 rounded-2xl lg:ml-2 cursor-pointer' width={300} height={300} src='/postimg.jpg' alt='postimg' />
                <div className="details pt-2 lg:pt-0">
                    <p className='category px-4 font-josefin text-md'>Life</p>
                    <Link href='/'><p className='px-4 font-Baloo hover:underline'>Learn to take your next project to internet</p></Link>
                    <p className='px-4 text-sm font-josefin font-semibold py-3'>9 hours ago</p>
                    <p className='px-4 text-sm font-josefin'>Written by : <span className='font-semibold'>Sneha Hiro</span></p>
                    <p className='px-4 text-sm font-josefin'>Published on : Sunday, 1 January 2023</p>
                </div>
            </div>
            <div className='horizontalRule h-[0.1rem] mx-auto relative w-[62%] bg-[rgba(255,255,255,0.1)]'></div>
        </>
    )
}

export default RecentPosts
