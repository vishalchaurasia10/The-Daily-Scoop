import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter,faLinkedin,faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faPenToSquare, faSearch, faUserCircle} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Navbar = () => {
  const user = false
  const [expand,setExpand] = useState(0)

  const changeExpand = () => {
    if(expand === 0)
    {
      setExpand(1)
    }
    else setExpand(0)
  }

  return (
    <div>
      <nav className='backdrop-blur-md bg-[rgba(255,255,255,0.1)] text-gray-500 w-full bg-opacity-25 rounded-md shadow-xl py-3 flex fixed top-0 z-50 m-1 p-1 items-center'>
        <div className="topLeft flex items-center lg:ml-24 w-1/2 lg:w-1/4">
          <h1 className='text-2xl font-extrabold '>The Daily Scoop</h1>
        </div>
        <div className={`topCenter hidden lg:flex lg:flex-row lg:h-7 lg:static justify-center lg:w-1/2`}>
            <ul className={`flex font-josefin font-bold text-2xl z-10 space-x-6 `}>
                <li className='transition-all duration-300 hover:text-pink-500'><Link href='/'>Home</Link></li>
                <li className='transition-all duration-300 hover:text-pink-500'><Link href='/blogs'>Blogs</Link></li>
                <li className='transition-all duration-300 hover:text-pink-500'><Link href='/aboutme'>About Me</Link></li>
                {/* <li className='hover:text-white'><Link href='/services'>Services</Link></li> */}
                <li className='transition-all duration-300 hover:text-pink-500'><Link href='/contactme'>Contact Me</Link></li>
            </ul>
        </div>
        <div className="topRight w-1/2 lg:w-1/4 flex justify-end items-center mr-1 lg:mr-24 space-x-2 lg:space-x-6">
          <FontAwesomeIcon className=' w-6 h-6 hover:text-black' icon={faSearch} />
          <Link href={user?'/write':'/login'}>
          <FontAwesomeIcon className='hidden lg:block w-6 h-6 hover:text-black' icon={faPenToSquare}/>
          </Link>
          <Link href={user?'/settings':'/login'}>
          <FontAwesomeIcon className='loginImage w-6 h-6 hover:text-black' icon={faUserCircle} />
          </Link>
          <ul onClick={changeExpand} id='expandNav' className="expand lg:hidden pb-1 flex flex-col space-y-1">
            <li className={`bar transition-all relative duration-300 ${expand === 1 ? 'rotate-45 top-[0.45rem]' : 'rotate-0'} w-6 h-[0.2rem] bg-gray-500 rounded-xl`}></li>
            <li className={`bar transition-all relative duration-300 ${expand === 1 ? 'scale-0' : 'scale-100'} w-6 h-[0.2rem] bg-gray-500 rounded-xl`}></li>
            <li className={`bar transition-all relative duration-300 ${expand === 1 ? '-rotate-45 -top-[0.45rem]' : 'rotate-0'} w-6 h-[0.2rem] bg-gray-500 rounded-xl`}></li>
          </ul>
        </div>
      </nav>
      <div className={`backdrop-blur-md ${expand === 0 ? '-left-[25rem]' : 'left-0'} bg-[rgba(255,255,255,0.1)] fixed z-40 bg-opacity-25 rounded-md shadow-xl transition-all duration-300 topCenter h-screen w-screen flex items-center text-center lg:hidden justify-center`}>
            <ul className={`flex text-gray-500 flex-col space-y-4 font-josefin font-bold text-3xl z-10`}>
                <li className='transition-all duration-300 hover:text-pink-500'><Link href='/'>Home</Link></li>
                <li className='transition-all duration-300 hover:text-pink-500'><Link href='/blogs'>Blogs</Link></li>
                <li className='transition-all duration-300 hover:text-pink-500'><Link href='/aboutme'>About Me</Link></li>
                {/* <li className='hover:text-white'><Link href='/services'>Services</Link></li> */}
                <li className='transition-all duration-300 hover:text-pink-500'><Link href='/contactme'>Contact Me</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
