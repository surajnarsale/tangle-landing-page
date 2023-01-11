import Head from 'next/head'
import Footer from '@/components/molecules/Footer'
import PostCard from '@/components/molecules/PostCard'
import { client } from '@/lib/apollo'
import { getAllPosts } from '@/lib/graphql/posts'

export default function HomePage({ posts }: { posts: any }) {
  return (
    <div className="container">
      <Head>
        <title>Headless WP Next Starter</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

      <main>
        <h1 className="title">Headless WordPress Next.js Starter</h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          {posts.map((post: any) => {
            return <PostCard key={post.uri} post={post}></PostCard>
          })}
        </div>
      </main>

      <Footer></Footer>
    </div>
  )
}

export async function getStaticProps() {
  const response = await client.query({
    query: getAllPosts,
  })

  const posts = response?.data?.posts?.nodes

  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}
