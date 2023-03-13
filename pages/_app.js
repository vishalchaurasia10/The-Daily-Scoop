import '../styles/globals.css'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'
import { useRouter } from 'next/router'
import GoTop from "../components/Layout/GoTop"

export default function App({ Component, pageProps }) {

  const router = useRouter()
  
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <div className={`wrapper ${router.pathname === '/' ? '-mt-20 lg:mt-[-18rem]' : ''}  z-30 relative`}>
        <Footer />
      </div>
      <GoTop />
    </>
  )
}
