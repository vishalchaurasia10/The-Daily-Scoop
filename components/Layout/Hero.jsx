import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import Image from 'next/image';
import { motion } from 'framer-motion'

const Hero = () => {

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`bg-center bg-cover bg-no-repeat bg-[url('/hero1.jpg')] py-11 lg:py-0 lg:h-screen transition-all duration-1000 w-full lg:pr-32 my-auto space-y-2 lg:space-y-0 lg:pt-0 pt-12 lg:flex lg:flex-row flex-col items-center justify-center`}>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="profile lg:w-[40%] pt-20 pb-10 lg:pb-0 lg:pt-0 lg:h-full order-1 flex justify-center items-center">
          <Image
            className={` w-60 lg:w-72 hover:scale-110 shadow-2xl shadow-black rounded-full transition-all duration-1000`}
            src='https://pbs.twimg.com/profile_images/1627792365162487810/--yk_MYq_400x400.jpg'
            width={500}
            height={500}
            alt='profile' title='Web wizard crafting innovative solutions with full-stack expertise'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className={`intro text-white lg:w-[60%] order-2 transition-all duration-1000 px-4 text-center font-Dancing-script text-5xl lg:text-7xl`}
        >
          Welcome to our blogging site, where We share stories, insights, and ideas about the things that matter most to us.
          {/* <span className='h-[0.1rem] my-2 w-1/2 bg-white block'></span> */}

        </motion.div>

        <Link className='lg:hidden' to='showTopPosts' smooth={true} duration={500}>
          <FontAwesomeIcon className='items-end w-6 h-6 text-black cursor-pointer relative bg-[rgba(255,255,255,0.7)] rounded-full p-2 my-4 top-6 left-[45%] lg:left-1/2 animate-bounce' icon={faArrowDown} />
        </Link>

      </motion.div>

      <Link className='hidden lg:block' to='showTopPosts' smooth={true} duration={500}>
        <FontAwesomeIcon className='items-end w-6 h-6 text-black cursor-pointer bg-[rgba(255,255,255,0.7)] rounded-full p-2 left-[45%] absolute lg:left-1/2 bottom-8 animate-bounce' icon={faArrowDown} />
      </Link>

    </>
  )
}

export default Hero
