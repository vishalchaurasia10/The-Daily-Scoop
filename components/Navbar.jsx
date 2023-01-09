import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter,faLinkedin,faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faPenToSquare, faSearch, faUserCircle} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Navbar = () => {
  const user = true
  return (
    <div>
      <nav className='backdrop-blur-md bg-[rgba(255,255,255,0.1)] text-gray-300 w-full bg-opacity-25 rounded-md shadow-xl py-3 flex fixed top-0 z-50 m-1 p-1 items-center'>
        <div className="topLeft flex space-x-6 ml-24 w-1/4">
        <Link href='https://twitter.com/vishalstwt'><FontAwesomeIcon className='w-6 h-6 hover:text-white' icon={faTwitter} /></Link>
        <Link href='https://github.com/vishalchaurasia10'><FontAwesomeIcon className='w-6 h-6 hover:text-white' icon={faGithub} /></Link>
        <Link href=''><FontAwesomeIcon className='w-6 h-6 hover:text-white' icon={faLinkedin} /></Link>
        <Link href=''><FontAwesomeIcon className='w-6 h-6 hover:text-white' icon={faInstagram} /></Link>
        </div>
        <div className="topCenter flex justify-center w-1/2">
            <ul className='flex font-josefin font-bold text-2xl space-x-6 font'>
                <li className='hover:text-white'><Link href='/'>Home</Link></li>
                <li className='hover:text-white'><Link href='/blogs'>Blogs</Link></li>
                <li className='hover:text-white'><Link href='/aboutme'>About Me</Link></li>
                {/* <li className='hover:text-white'><Link href='/services'>Services</Link></li> */}
                <li className='hover:text-white'><Link href='/contactme'>Contact Me</Link></li>
            </ul>
        </div>
        <div className="topRight w-1/4 flex justify-end items-center mr-24 space-x-6">
          <FontAwesomeIcon className=' w-6 h-6 hover:text-white' icon={faSearch} />
          <Link href={user?'/write':'/login'}>
          <FontAwesomeIcon className='w-6 h-6 hover:text-white' icon={faPenToSquare}/>
          </Link>
          <Link href={user?'/settings':'/login'}>
          <FontAwesomeIcon className='loginImage w-6 h-6 hover:text-white' icon={faUserCircle} />
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
