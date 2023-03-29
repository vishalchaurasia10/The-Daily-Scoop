import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faSearch, faT, faTags, } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useRouter } from 'next/router';

const Navbar = () => {

  const router = useRouter();
  const [navExpand, setNavExpand] = useState(false)
  const [expandSearch, setExpandSearch] = useState(false)
  const [query, setQuery] = useState('')
  const [filterCategory, setFilterCategory] = useState(false)
  const [filterTags, setFilterTags] = useState(false)
  const [filterTitle, setFilterTitle] = useState(false)
  const [placeholder, setPlaceholder] = useState('Start searching... ')

  const expandNav = () => {
    setNavExpand(!navExpand)
  }

  const handleExpand = () => {
    setNavExpand(!navExpand)
  }

  const handleSearch = () => {
    const input = document.getElementById('searchInput')
    if (!expandSearch) {
      input.focus()
      setExpandSearch(true)
    } else {
      input.blur()
      setExpandSearch(false)
      if (query === '') {
        return
      }
      else {
        router.push(`/blogs/search/${query}?${filterTitle?'search=true':(filterCategory?'category=true':'tags=true')}`)
        setQuery('')
      }
    }
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleFilterCategory = (e) => {
    setPlaceholder('Search by category... ')
    setFilterCategory(!filterCategory)
    setFilterTags(false)
    setFilterTitle(false)
  }

  const handleFilterTags = (e) => {
    setPlaceholder('Search by tags... ')
    setFilterTags(!filterTags)
    setFilterCategory(false)
    setFilterTitle(false)
  }

  const handleFilterTitle = (e) => {
    setPlaceholder('Search by title... ')
    setFilterTitle(!filterTitle)
    setFilterCategory(false)
    setFilterTags(false)
  }

  return (
    <>
      <nav className='p-3 px-4 lg:px-8 text-white flex items-center transition-all backdrop-blur-3xl bg-[rgba(255,255,255,0.1)] duration-500 fixed top-0 shadow-2xl w-full z-50'>
        <div className={`topleft ${expandSearch ? '-translate-x-[15rem] absolute' : 'w-3/4'} lg:static lg:translate-x-0  transition-all duration-300 lg:w-1/3`}>
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
        <div className={`topright ${expandSearch ? '' : 'justify-end w-1/4'} w-full flex items-center space-x-4  lg:w-1/3`}>
          <div className={`wrapper w-full flex transition-all duration-300 ${expandSearch ? '' : '-translate-y-16'}`}>
            <input value={query} onChange={handleChange} className={` w-full rounded-3xl text-black pl-4 p-[3px] bg-[rgba(255,255,255)] outline-none border border-[rgba(255,255,255,0.1)] shadow-2xl shadow-black`} placeholder={placeholder} type="text" name="search" id="searchInput" />
            <div className="filters flex space-x-2 pl-1 pr-2 relative -left-4 z-50 bg-white justify-center items-center rounded-l-none border-l border-black rounded-3xl">
              <FontAwesomeIcon id='category' title='Search with category' onClick={handleFilterCategory} className={`${filterCategory?'bg-blue-300':''} text-black transition-all duration-300 text-sm cursor-pointer hover:scale-105 p-1 rounded-sm hover:border hover:border-blue-400`} icon={faCircle} />
              <FontAwesomeIcon id='tags' title='Search with tags' onClick={handleFilterTags} className={`${filterTags?'bg-blue-300':''} text-black transition-all duration-300 cursor-pointer hover:scale-105 p-1 rounded-sm hover:border hover:border-blue-400`} icon={faTags} />
              <FontAwesomeIcon id='title' title='Search with title' onClick={handleFilterTitle} className={`${filterTitle?'bg-blue-300':''} text-black transition-all duration-300 cursor-pointer hover:scale-105 p-1 rounded-sm hover:border hover:border-blue-400`} icon={faT} />
            </div>
          </div>
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
