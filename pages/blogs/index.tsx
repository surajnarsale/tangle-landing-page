import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { fetchBlogPosts } from 'pages/api/apis'

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['blogs'], fetchBlogPosts)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 10,
  }
}

const Blogs = () => {
  const { data } = useQuery({ queryKey: ['blogs'], queryFn: fetchBlogPosts })

  return (
    <>
      <h1> HELLO </h1>

      {data.map((i, index) => {
        return <h1 key={index}>{JSON.stringify(i)}</h1>
      })}
    </>
  )
}

export default Blogs
