import Head from 'next/head'
import Footer from '@/components/molecules/Footer'
import { getPostByUri } from '@/lib/graphql/posts'
import { client } from '@/lib/apollo'

export default function SlugPage({ post }: { post: any }) {
  return (
    <div>
      <Head>
        <title>Headless WP Next Starter</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

      <main>
        <div className="siteHeader">
          <h1 className="title">{post.title}</h1>
          <p>
            ✍️ &nbsp;&nbsp;{`${post.author.node.firstName} ${post.author.node.lastName}`} | 🗓️
            &nbsp;&nbsp;{new Date(post.date).toLocaleDateString()}
          </p>
        </div>
        <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
      </main>

      <Footer></Footer>
    </div>
  )
}

export async function getStaticProps({ params }: { params: any }) {
  const response = await client.query({
    query: getPostByUri,
    variables: {
      id: params.uri,
    },
  })

  const post = response?.data?.post
  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const paths: any = []
  return {
    paths,
    fallback: 'blocking',
  }
}
