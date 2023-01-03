import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter,faFacebookSquare,faLinkedin,faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faPenToSquare, faSearch,faUser} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div>
      <nav className='backdrop-blur-md bg-[rgba(255,255,255,0.1)] text-gray-300 w-full bg-opacity-25 rounded-md shadow-xl py-3 flex fixed top-0 z-50 m-1 p-1 items-center'>
        <div className="topLeft flex space-x-6 ml-24 w-1/4">
        <FontAwesomeIcon className='w-6 h-6 hover:text-white' icon={faTwitter} />
        <FontAwesomeIcon className='w-6 h-6 hover:text-white' icon={faLinkedin} />
        <FontAwesomeIcon className='w-6 h-6 hover:text-white' icon={faFacebookSquare} />
        <FontAwesomeIcon className='w-6 h-6 hover:text-white' icon={faInstagram} />
        </div>
        <div className="topCenter flex justify-center w-1/2">
            <ul className='flex font-josefin font-bold text-2xl space-x-6 font'>
                <li className='hover:text-white'>Home</li>
                <li className='hover:text-white'>Blogs</li>
                <li className='hover:text-white'>About Us</li>
                <li className='hover:text-white'>Services</li>
                <li className='hover:text-white'>Contact Us</li>
            </ul>
        </div>
        <div className="topRight w-1/4 flex justify-end items-center mr-24 space-x-6">
          <FontAwesomeIcon className=' w-6 h-6 hover:text-white' icon={faSearch} />
          <FontAwesomeIcon className='w-6 h-6 hover:text-white' icon={faPenToSquare}/>
          <FontAwesomeIcon className='loginImage border border-white rounded-full p-1 w-6 h-6 hover:text-white' icon={faUser} />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
