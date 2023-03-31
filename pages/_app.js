import '../styles/globals.css'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'
import { useRouter } from 'next/router'
import GoTop from "../components/Layout/GoTop"
import Head from 'next/head'
import LoadingBar from 'react-top-loading-bar'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {

  const [progress, setProgress] = useState(0)

  const router = useRouter()

  useEffect(() => {
    const handleComplete = () => setProgress(100);
    const handleStart = () => setProgress(40);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeStart', handleStart);

  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="description" content="Stay informed and entertained with The Daily Scoop - your daily source for fresh and engaging content on a variety of topics. Join our community now!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Component {...pageProps} />
      <div className={`wrapper ${router.pathname === '/' ? '-mt-20 lg:mt-[-18rem]' : ''}  z-20 relative`}>
        <Footer />
      </div>
      <GoTop />
    </>
  )
}
