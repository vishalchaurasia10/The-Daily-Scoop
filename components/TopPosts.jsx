import React from 'react'
import Image from 'next/image'

const TopPosts = () => {
    return (
        <>
            <div className="mainblock w-full space-y-12">
                <div className="heading w-full flex items-center justify-center space-x-4">
                <div className='horizontalRule h-[0.1rem] relative  w-[30%] bg-white'></div>
                <h1 className='text-6xl text-center font-bangers text-white'>Top Posts</h1>
                <div className='horizontalRule h-[0.1rem] relative  w-[30%] bg-white'></div>
                </div>
                <div className="posts mx-auto flex bg-opacity-80 border border-[rgba(255,255,255,0.1)] shadow-lg backdrop-blur-[25px] z-30 relative w-[85%]">
                    <div className="mainpost relative inline-block w-[71%] p-2 h-full">
                        <div className="postimg flex">
                            <Image className='w-full block' src='/hero1.jpg' width={300} height={200} alt='postimg' />
                            <div className="postinfo top-1/2 left-1/2 text-center -translate-x-2/4 -translate-y-2/4 absolute text-white p-2">
                                <div className="category">
                                    <span className='mx-2 font-josefin'>Music</span>
                                    <span className='mx-2 font-josefin'>Life</span>
                                    <span className='mx-2 font-josefin'>1 hour ago</span>
                                </div>
                                <div className="title text-lg ml-2 font-Baloo font-medium">
                                    Learn to take your next project to internet
                                </div>
                                <div className=" font-josefin ">
                                    Vishal Chaurasia
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="otherposts relative inline-block w-[37%]">
                        <div className="p-2 pl-0 postimg">
                            <Image className='w-full' src='/postimg.jpg' width={300} height={200} alt='postimg' />
                            <div className="postinfo top-1/4 left-1/2 text-center -translate-x-2/4 -translate-y-2/4 absolute text-white p-2">
                                <div className="category">
                                    <span className='mx-2 font-josefin'>Music</span>
                                    <span className='mx-2 font-josefin'>Life</span>
                                    <span className='mx-2 font-josefin'>1 hour ago</span>
                                </div>
                                <div className="title text-lg ml-2 font-Baloo font-medium">
                                    Learn to take your next project to internet
                                </div>
                                <div className=" font-josefin ">
                                    Vishal Chaurasia
                                </div>
                            </div>
                        </div>

                        <div className="p-2 pl-0 pt-0 postimg">
                            <Image className='w-full' src='/postimg.jpg' width={300} height={200} alt='postimg' />
                            <div className="postinfo top-3/4 left-1/2 text-center -translate-x-2/4 -translate-y-2/4 absolute text-white p-2">
                                <div className="category">
                                    <span className='mx-2 font-josefin'>Music</span>
                                    <span className='mx-2 font-josefin'>Life</span>
                                    <span className='mx-2 font-josefin'>1 hour ago</span>
                                </div>
                                <div className="title text-lg ml-2 font-Baloo font-medium">
                                    Learn to take your next project to internet
                                </div>
                                <div className=" font-josefin ">
                                    Vishal Chaurasia
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopPosts
