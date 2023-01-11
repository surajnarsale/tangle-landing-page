import axios from '@/lib/axios'

export const fetchBlogPosts = async () => {
  const { data } = await axios.get('/posts?_embed')
  return data
}
