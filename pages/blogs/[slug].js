import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const SingleBlog = () => {
    const router = useRouter()
    const { slug } = router.query

    const searchBlog = async () => {
        const res = await fetch('http://localhost:3000/api/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ slug })
        })
        const data = await res.json()
    }

    useEffect(() => {
        searchBlog()
    }, [])


  return (
    <div>
      {slug}
    </div>
  )
}

export default SingleBlog
