import react from "react"
import Link from "next/link"
import Meta from "../components/Meta"
import Hero from "../components/Hero"
import ShowTopPosts from "../components/ShowTopPosts"
import ShowRecentPosts from "../components/ShowRecentPosts"
import GoTop from "../components/GoTop"

export default function Home() {
  return (
    <>
      <Hero />
      <Meta />
      <ShowTopPosts />
      <ShowRecentPosts />
      <GoTop />
    </>
  )
}
