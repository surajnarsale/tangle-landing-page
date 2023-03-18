import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'
import LandingPage from '@/components/templates/LandingPage'
import { Container } from '@/components/atoms/Container'

const Home = ({ posts }) => {
  return (
    <div className="max-w-screen">
      <LandingPage>
        <Container className=" mx-auto max-w-[1330px]  bg-skin">
          <div className="flex">
            <div className="w-full">
              <div className="break-wordsbg-opacity-0 relative">
                <div className=" bg-opacity-0 px-4 py-5">
                  <div className="tab-content tab-space">
                    <div>
                      <div className=".text-white mt-15 gap-4 md:grid md:grid-cols-3 md:gap-4">
                        {posts.map((post, index) => (
                          <Link href={'/blogs/' + post.slug} passHref key={index}>
                            <div className="m-4 cursor-pointer">
                              <div className="w-26 h-full min-h-[200px] bg-grey text-4xl font-medium leading-8 text-skin md:py-6 -sm:pt-6 -sm:pb-16 -sm:text-xl ">
                                <h1 className="h-15 w-61 text-500 mt-2 ml-4 text-2xl text-culturetext">
                                  {post.frontMatter.title}
                                </h1>
                                <p className="ml-4 mt-4 text-base text-dusky1">
                                  {post.frontMatter.date}
                                </p>
                                <p className="ml-4  text-base text-dusky1">
                                  {post.frontMatter.author}
                                </p>
                              </div>
                              <div className="flex justify-between">
                                <p className="cursor-pointer text-sm text-black">Read now {'→'}</p>
                                <p className="text-sm text-black">
                                  {post.frontMatter.readingTime} read
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </LandingPage>
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0],
    }
  })

  return {
    props: {
      posts,
    },
  }
}

export default Home
