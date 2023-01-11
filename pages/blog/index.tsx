import { it } from 'node:test'
import { useEffect, useState } from 'react'

const Blog = () => {
  const [id, setId] = useState([])
  useEffect(() => {
    async function fetchMyAPi() {
      const getPosts = await fetch('http://tanglelandingbackend.local/wp-json/wp/v2/posts?_embed')
      const data = await getPosts.json()
      console.log('data', data)
      setId(data)
    }
    fetchMyAPi()
  }, [])
  return (
    <>
      {id.map((i, index) => {
        return <h1 key={index}>{i.slug}</h1>
      })}
    </>
  )
}

export default Blog
