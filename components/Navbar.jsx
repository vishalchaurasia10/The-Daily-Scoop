import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSearch, faSun, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Navbar = () => {

  return (
    <>
      <nav className='p-3 px-8 flex items-center transition-all backdrop-blur-3xl bg-[rgba(255,255,255,0.1)] duration-300 fixed top-0 shadow-2xl w-full z-50'>
        <div className="topleft w-1/3">
          <h1 className='logo font-bold font-jost text-2xl'><Link href="/">The Daily Scoop</Link></h1>
        </div>
        <div className="center w-1/3">
          <ul className='flex justify-center font-poppins text-lg items-center space-x-8'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Blogs</li>
            <li className='cursor-pointer'>About Me</li>
            <li className='cursor-pointer'>Contact Me</li>
          </ul>
        </div>
        <div className="topright flex items-center justify-end space-x-4 w-1/3">
          <FontAwesomeIcon className='w-5 h-5 cursor-pointer' icon={faSearch} />
          <div className="modes h-5 space-y-4 cursor-pointer flex flex-col overflow-hidden">
            <FontAwesomeIcon className='w-5 h-5' icon={faMoon} />
            <FontAwesomeIcon className='w-4 h-4 pl-[0.1rem] transition-all duration-500' icon={faSun}/>
          </div>
          <FontAwesomeIcon className='w-5 h-5 cursor-pointer' icon={faUserCircle}/>
        </div>
      </nav>
    </>
  )
}

export default Navbar
