import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='mt-28 px-2 flex flex-col items-center justify-center'>
        <Image className='rounded-2xl shadow-2xl shadow-black' src='/about.jpg' width={500} height={500} alt='about me' />
        <p className='text-6xl lg:text-7xl text-center font-Dancing-script my-10 text-white'>Still figuring out!</p>
    </div>
  )
}

export default About
