import React from 'react'
import { motion } from 'framer-motion'

const Banner = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="bannerImage flex items-center justify-center shadow-2xl shadow-black bg-cover bg-center h-[30rem] bg-[url('/banner.jpg')]">
            <h1 className='font-Dancing-script text-white text-6xl lg:text-8xl'>Our Blogs</h1>
        </motion.div>
    )
}

export default Banner
