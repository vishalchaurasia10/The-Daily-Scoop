import { faCircle, faTags } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import constants from '../../constants/constants'
import Spinner from '../../components/Layout/Spinner';

const SingleBlog = () => {
  const router = useRouter()
  const { slug } = router.query
  const [blog, setBlog] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const searchBlog = async () => {
    const res = await fetch(`${constants.API_URL}/api/blogs/search/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ slug })
    })
    const data = await res.json()
    setIsLoading(false);
    setBlog(data)
  }

  useEffect(() => {
    searchBlog()
  }, [])

  function createMarkup() {
    return { __html: blog[0]?.content };
  }


  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const options = {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
    return date.toLocaleString('en-US', options);
  }


  return (
    <>
      {isLoading ?
        <div className="spinner py-40 w-full flex items-center justify-center">
          <Spinner />
        </div> :
        <div className="blogWrapper text-white py-24 lg:py-32 px-3 space-y-5 lg:px-40">
          <h1 className='text-center text-4xl lg:text-6xl font-tilt-wrap tracking-wide font-bold'>{blog[0]?.title}</h1>
          <div className='author flex flex-col lg:flex-row items-center justify-center  font-jost'>
            <h2> <span className='font-bold text-xl'>Written by : </span><span className='text-lg'>{blog[0]?.author}</span> | </h2>
            <h2>&nbsp;{formatDate(blog[0]?.createdAt)}</h2>
          </div>
          <div className='tags flex items-center justify-center'>
            <span className="categories ">
              <FontAwesomeIcon className='text-[0.5rem] pb-[0.1rem] pr-1' icon={faCircle} /><span className='font-jost text-sm cursor-pointer font-light'>{blog[0]?.category} | </span>
            </span>
            <span className="tags">
              &nbsp;<FontAwesomeIcon className='text-sm pr-1' icon={faTags} /><span className='font-jost text-sm cursor-pointer font-light'>{blog[0]?.tags}</span>
            </span>
          </div>
          <div className='content ' dangerouslySetInnerHTML={createMarkup()} >
          </div>
        </div>}
    </>
  )
}

export default SingleBlog
