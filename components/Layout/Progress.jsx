import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Progress = () => {
  return (
    <motion.div
      initial={{ translateY: '-38rem' }}
      animate={{ translateY: '0rem' }}
      className='flex items-center justify-center mt-28 mb-20 p-2'
    >
      <Image
        className='shadow-2xl shadow-black rounded-xl'
        src='/progress.jpg'
        alt='progress'
        width={500}
        height={500}
      />
    </motion.div>
  )
}

export default Progress
