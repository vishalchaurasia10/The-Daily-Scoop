import react from "react"
import Link from "next/link"
import Meta from "../components/Meta"
import Hero from "../components/Hero"
import ShowTopPosts from "../components/ShowTopPosts"
import ShowRecentPosts from "../components/ShowRecentPosts"

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-[url('/coolbg2.png')] bg-repeat-round pb-12">
        <Meta />
        <ShowTopPosts />
        <ShowRecentPosts />
        <div className="button flex justify-center my-8">
          <Link href='/blogs'><button className='py-2 hover:-translate-y-[0.1rem] hover:text-black  bg-red-50 duration-150 font-nunito font-semibold border rounded-md px-3 backdrop-blur-lg shadow-lg  border-[rgba(255,255,255,0.1)]'>See more</button></Link>
        </div>
      </div>
    </>
  )
}
