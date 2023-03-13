import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSearch, faSun, } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Navbar = () => {

  const [navExpand, setNavExpand] = useState(false)

  const expandNav = () => {
    setNavExpand(!navExpand)
  }

  return (
    <>
      <nav className='p-3 px-4 lg:px-8 text-white flex items-center transition-all backdrop-blur-3xl bg-[rgba(255,255,255,0.1)] duration-300 fixed top-0 shadow-2xl w-full z-50'>
        <div className="topleft w-3/4 lg:w-1/3">
          <h1 className='logo font-bold font-jost text-2xl'><Link href="/">The Daily Scoop</Link></h1>
        </div>
        <div className={`hidden lg:block center lg:w-1/3`}>
          <ul className={`lg:flex lg:flex-row flex-col justify-center font-poppins text-lg items-center space-x-8`}>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Blogs</li>
            <li className='cursor-pointer'>About Me</li>
            <li className='cursor-pointer'>Contact Me</li>
          </ul>
        </div>
        <div className="topright flex items-center justify-end space-x-4 w-1/4 lg:w-1/3">
          <FontAwesomeIcon className='w-5 h-5 cursor-pointer' icon={faSearch} />
          <div className="mode flex flex-col h-5 overflow-hidden">
            <div className={`flex flex-col transition-all duration-500 space-y-4`}>
              <FontAwesomeIcon className={`w-5 h-5 cursor-pointer`} id='moon' icon={faMoon} />
              <FontAwesomeIcon className={` w-5 h-5 pl-[0.1rem] cursor-pointer transition-all duration-500`} id='sun' icon={faSun} />
            </div>
          </div>
          <div className="hamburger lg:hidden space-y-1">
            <div onClick={expandNav} className={`${navExpand ? '-rotate-45 translate-y-[0.45rem]' : ''} w-6 transition-all duration-300 rounded-full bg-white h-1`}></div>
            <div onClick={expandNav} className={`${navExpand ? 'scale-0' : ''} w-6 transition-all duration-300 rounded-full bg-white h-1`}></div>
            <div onClick={expandNav} className={`${navExpand ? 'rotate-45 -translate-y-2' : ''} w-6 transition-all duration-300 rounded-full bg-white h-1`}></div>
          </div>
        </div>
      </nav>
      <div className={`expanded lg:hidden w-full text-white z-40 h-screen flex items-center justify-center backdrop-blur-3xl fixed top-0 transition-all duration-500 ${navExpand ? '' : 'translate-x-[60rem]'}`}>
        <ul className={`flex text-2xl space-y-4 flex-col justify-center font-jost text-center items-center`}>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Blogs</li>
          <li className='cursor-pointer'>About Me</li>
          <li className='cursor-pointer'>Contact Me</li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
