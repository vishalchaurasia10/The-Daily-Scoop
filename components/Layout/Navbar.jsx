import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useRouter } from 'next/router';

const Navbar = () => {

  const router = useRouter();
  const [navExpand, setNavExpand] = useState(false)
  const [expandSearch, setExpandSearch] = useState(false)
  const [query, setQuery] = useState('')

  const expandNav = () => {
    setNavExpand(!navExpand)
  }

  const handleExpand = () => {
    setNavExpand(!navExpand)
  }

  const handleSearch = () => {
    const input = document.getElementById('searchInput')
    if(!expandSearch){
      input.focus()
      setExpandSearch(true)
    }else
    {
      input.blur()
      setExpandSearch(false)
      if(query === ''){
        return
      }
      else
      {
        router.push(`/blogs/search/${query}?search=true`)
        setQuery('')
      }
    }
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <>
      <nav className='p-3 px-4 lg:px-8 text-white flex items-center transition-all backdrop-blur-3xl bg-[rgba(255,255,255,0.1)] duration-500 fixed top-0 shadow-2xl w-full z-50'>
        <div className={`topleft ${expandSearch?'-translate-x-[15rem] absolute':'w-3/4'} lg:static lg:translate-x-0  transition-all duration-300 lg:w-1/3`}>
          <h1 className={`logo transition-all duration-300 font-bold font-jost text-2xl`}><Link href="/">The Daily Scoop</Link></h1>
        </div>
        <div className={`hidden lg:block center lg:w-1/3`}>
          <ul className={`lg:flex lg:flex-row flex-col justify-center font-poppins text-lg items-center space-x-8`}>
            <li className='cursor-pointer'><Link href='/'>Home</Link></li>
            <li className='cursor-pointer'><Link href='/blogs'>Blogs</Link></li>
            <li className='cursor-pointer'><Link href='/about'>About Me</Link></li>
            <li className='cursor-pointer'><Link href='/contact'>Contact Me</Link></li>
          </ul>
        </div>
        <div className={`topright ${expandSearch?'':'justify-end w-1/4'} w-full flex items-center space-x-4  lg:w-1/3`}>
          <input value={query} onChange={handleChange} className={`${expandSearch?'':'-translate-y-16'} w-full rounded-3xl text-black pl-4 p-[3px] bg-[rgba(255,255,255)] outline-none border border-[rgba(255,255,255,0.1)] shadow-2xl shadow-black transition-all duration-300`} placeholder='Search with Title...' type="text" name="search" id="searchInput" />
          <FontAwesomeIcon onClick={handleSearch} className='w-5 h-5 cursor-pointer' icon={faSearch} />
          <div className="hamburger lg:hidden space-y-1">
            <div onClick={expandNav} className={`${navExpand ? '-rotate-45 translate-y-[0.45rem]' : ''} w-6 transition-all duration-300 rounded-full bg-white h-1`}></div>
            <div onClick={expandNav} className={`${navExpand ? 'scale-0' : ''} w-6 transition-all duration-300 rounded-full bg-white h-1`}></div>
            <div onClick={expandNav} className={`${navExpand ? 'rotate-45 -translate-y-2' : ''} w-6 transition-all duration-300 rounded-full bg-white h-1`}></div>
          </div>
        </div>
      </nav>
      <div className={`expanded lg:hidden w-full text-white z-40 h-screen flex items-center justify-center backdrop-blur-3xl fixed top-0 transition-all duration-500 ${navExpand ? '' : 'translate-x-[60rem]'}`}>
        <ul className={`flex text-2xl space-y-4 flex-col justify-center font-jost text-center items-center`}>
          <li onClick={handleExpand} className='cursor-pointer'><Link href='/'>Home</Link></li>
          <li onClick={handleExpand} className='cursor-pointer'><Link href='/blogs'>Blogs</Link></li>
          <li onClick={handleExpand} className='cursor-pointer'><Link href='/about'>About Me</Link></li>
          <li onClick={handleExpand} className='cursor-pointer'><Link href='/contact'>Contact Me</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
