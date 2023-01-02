import react from "react"
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
          <button className=" p-2 text-white shadow-xl rounded-lg font-nunito duration-300 hover:-translate-y-1 hover:bg-gradient-to-r from-[#9a3682] to-[#3449ac] backdrop-blur-lg border border-[rgba(255,255,255,0.1)]">See more</button>
        </div>
      </div>
    </>
  )
}
