import Hero from "../components/Layout/Hero"
import ShowTopPosts from "../components/Posts/ShowTopPosts"
import ShowRecentPosts from "../components/Posts/ShowRecentPosts"

export default function Home() {
  return (
    <>
      <Hero />
      <ShowTopPosts />
      <ShowRecentPosts />
    </>
  )
}
