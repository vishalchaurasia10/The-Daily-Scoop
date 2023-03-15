import { faCircle, faTags } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const SingleBlog = () => {
  const router = useRouter()
  const { slug } = router.query
  const [blog, setBlog] = useState([])

  const searchBlog = async () => {
    const res = await fetch('http://localhost:3000/api/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ slug })
    })
    const data = await res.json()
    setBlog(data)
  }

  useEffect(() => {
    searchBlog()
  }, [])

  console.log(blog)
  function createMarkup() {
    return { __html: blog[0]?.content };
  }

  console.log(blog[0]?.title)

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
      <div className="blogWrapper text-white py-20 lg:py-32 px-3 space-y-5 lg:px-40">
        <h1 className='text-center text-4xl lg:text-6xl font-tilt-wrap tracking-wide font-bold'>{blog[0]?.title}</h1>
        <div className='author flex items-center justify-center  font-jost'>
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
      </div>
    </>
  )
}

export default SingleBlog
