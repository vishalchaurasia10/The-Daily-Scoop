import Head from 'next/head'
import React from 'react'
import Contact from '../components/Layout/Contact'

const contact = () => {
  return (
    <>
    <Head>
      <title>Contact | The Daily Scoop</title>
    </Head>
      <div>
        <Contact />
      </div>
    </>
  )
}

export default contact
