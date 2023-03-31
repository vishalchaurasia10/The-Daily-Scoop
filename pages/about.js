import React from 'react'
import About from '../components/Layout/About'
import { motion } from 'framer-motion'

const about = () => {
    return (
        <motion.div
            initial={{ translateY: '-38rem' }}
            animate={{ translateY: '0rem' }}>
            <About />
        </motion.div>
    )
}

export default about
