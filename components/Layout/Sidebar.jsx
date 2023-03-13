import { faCircle, faTags } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Sidebar = () => {
    return (
        <>
            <div className="sidebar rounded-xl border px-4 py-5 shadow-2xl shadow-black border-[rgba(255,255,255,0.1)]">
                <div className="categoriesHeading -mb-3">
                    <h1 className='font-bold font-jost text-4xl'>Categories</h1>
                    <span className='bg-white relative -top-3 w-full opacity-50 h-[0.1rem] inline-block'></span>
                </div>
                <ul className='pl-2 space-y-1'>
                    <li className='flex cursor-pointer w-fit px-3 items-center space-x-1 hover:bg-[rgba(255,255,255,0.3)] rounded-3xl transition-all duration-150'>
                        <FontAwesomeIcon className='text-[0.5rem]' icon={faCircle} /><span className='font-jost text-lg'>Business</span>
                    </li>
                    <li className='flex cursor-pointer w-fit px-3 items-center space-x-1 hover:bg-[rgba(255,255,255,0.3)] rounded-3xl transition-all duration-150'>
                        <FontAwesomeIcon className='text-[0.5rem]' icon={faCircle} /><span className='font-jost text-lg'>Technology</span>
                    </li>
                    <li className='flex cursor-pointer w-fit px-3 items-center space-x-1 hover:bg-[rgba(255,255,255,0.3)] rounded-3xl transition-all duration-150'>
                        <FontAwesomeIcon className='text-[0.5rem]' icon={faCircle} /><span className='font-jost text-lg'>Food</span>
                    </li>
                    <li className='flex cursor-pointer w-fit px-3 items-center space-x-1 hover:bg-[rgba(255,255,255,0.3)] rounded-3xl transition-all duration-150'>
                        <FontAwesomeIcon className='text-[0.5rem]' icon={faCircle} /><span className='font-jost text-lg'>Travel</span>
                    </li>
                    <li className='flex cursor-pointer w-fit px-3 items-center space-x-1 hover:bg-[rgba(255,255,255,0.3)] rounded-3xl transition-all duration-150'>
                        <FontAwesomeIcon className='text-[0.5rem]' icon={faCircle} /><span className='font-jost text-lg'>Fun</span>
                    </li>
                </ul>
                <div className="tagHeading pt-2 -mb-3">
                    <h1 className='font-bold font-jost text-4xl'>Tags</h1>
                    <span className='bg-white relative -top-3 w-full opacity-50  h-[0.1rem] inline-block'></span>
                </div>
                <ul className='pl-2 space-y-1 flex flex-wrap items-center'>
                    <li className='flex cursor-pointer px-3 items-center space-x-1 hover:bg-[rgba(255,255,255,0.3)] rounded-3xl transition-all duration-150 mr-1 text-sm font-jost'>
                        <FontAwesomeIcon className='' icon={faTags} /><span className='font-jost text-lg'>Tech</span>
                    </li>
                    <li className='flex cursor-pointer px-3 items-center space-x-1 hover:bg-[rgba(255,255,255,0.3)] rounded-3xl transition-all duration-150 mr-1 text-sm font-jost'>
                        <FontAwesomeIcon className='' icon={faTags} /><span className='font-jost text-lg'>IT</span>
                    </li>
                    <li className='flex cursor-pointer px-3 items-center space-x-1 hover:bg-[rgba(255,255,255,0.3)] rounded-3xl transition-all duration-150 mr-1 text-sm font-jost'>
                        <FontAwesomeIcon className='' icon={faTags} /><span className='font-jost text-lg'>ReactJS</span>
                    </li>
                    <li className='flex cursor-pointer px-3 items-center space-x-1 hover:bg-[rgba(255,255,255,0.3)] rounded-3xl transition-all duration-150 mr-1 text-sm font-jost'>
                        <FontAwesomeIcon className='' icon={faTags} /><span className='font-jost text-lg'>Lucknow</span>
                    </li>
                    <li className='flex cursor-pointer px-3 items-center space-x-1 hover:bg-[rgba(255,255,255,0.3)] rounded-3xl transition-all duration-150 mr-1 text-sm font-jost'>
                        <FontAwesomeIcon className='' icon={faTags} /><span className='font-jost text-lg'>Discovery</span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar
