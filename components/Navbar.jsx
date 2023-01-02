import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter,faFacebookSquare,faLinkedin,faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faSearch,faUser} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div>
      <nav className='backdrop-blur-md w-full bg-opacity-25 rounded-md shadow-xl py-3 flex fixed top-0 z-50 m-1 p-1 items-center'>
        <div className="topLeft text-white flex space-x-6 ml-24 w-1/4">
        <FontAwesomeIcon className='w-6 h-6' icon={faTwitter} />
        <FontAwesomeIcon className='w-6 h-6' icon={faLinkedin} />
        <FontAwesomeIcon className='w-6 h-6' icon={faFacebookSquare} />
        <FontAwesomeIcon className='w-6 h-6' icon={faInstagram} />
        </div>
        <div className="topCenter flex justify-center w-1/2">
            <ul className='flex text-white font-josefin font-bold text-2xl space-x-6 font'>
                <li>Home</li>
                <li>Blogs</li>
                <li>Write</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className="topRight text-white w-1/4 flex justify-end mr-24 space-x-6">
          <FontAwesomeIcon className=' w-6 h-6 ' icon={faSearch} />
          <FontAwesomeIcon className=' border border-white rounded-full p-1 w-6 h-6' icon={faUser} />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
