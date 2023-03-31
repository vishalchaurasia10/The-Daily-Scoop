import React from 'react'
import About from '../components/Layout/About'
import { motion } from 'framer-motion'
import Head from 'next/head'

const about = () => {
    return (
        <>
        <Head>
            <title>About Me | The Daily Scoop</title>
        </Head>
        <motion.div
            initial={{ translateY: '-38rem' }}
            animate={{ translateY: '0rem' }}>
            <About />
        </motion.div>
        </>
    )
}

export default about
