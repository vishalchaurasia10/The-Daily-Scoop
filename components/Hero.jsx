import React from 'react'
import Image from 'next/image'
import hero from '../public/hero2.jpg'


const Hero = () => {
  return (
    <>
    <div className='flex w-full h-screen flex-col items-center justify-center'>
      <p className='text-xl relative top-1/2 text-white font-bangers'>Our blog</p>
      <p className='text-8xl relative top-1/2 text-white font-bangers'>Stories & ideas</p>
      <p className='text-sm relative top-1/2 text-gray-300 font-lora italic'>Empowering individuals to live their best lives through the power of personal growth and self-discovery</p>
      <Image className='w-full h-screen relative -top-[4.5rem] -z-10' src={hero} alt='hero'  />
    </div>
    </>
  )
}

export default Hero
