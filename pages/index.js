import Hero from "../components/Layout/Hero"
import ShowTopPosts from "../components/Posts/ShowTopPosts"
import ShowRecentPosts from "../components/Posts/ShowRecentPosts"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | The Daily Scoop</title>
      </Head>
      <Hero />
      <ShowTopPosts />
      <ShowRecentPosts />
    </>
  )
}
