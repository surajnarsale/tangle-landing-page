import React from 'react'
import { Container } from '@/components/atoms/Container'

const Blogs = [
  {
    title: 'Can chatGPT create an entire app',
    date: '12 dec',
    owner: 'Chirag Kale',
    readTime: '3 min',
  },
  {
    title: 'Can chatGPT create an entire app',
    date: '12 dec',
    owner: 'Chirag Kale',
    readTime: '3 min',
  },
  {
    title: 'Can chatGPT create an entire app',
    date: '12 dec',
    owner: 'Chirag Kale',
    readTime: '3 min',
  },
  {
    title: 'Can chatGPT create an entire app',
    date: '12 dec',
    owner: 'Chirag Kale',
    readTime: '3 min',
  },
  {
    title: 'Can chatGPT create an entire app',
    date: '12 dec',
    owner: 'Chirag Kale',
    readTime: '3 min',
  },
  {
    title: 'Can chatGPT create an entire app',
    date: '12 dec',
    owner: 'Chirag Kale',
    readTime: '3 min',
  },
  {
    title: 'Can chatGPT create an entire app',
    date: '12 dec',
    owner: 'Chirag Kale',
    readTime: '3 min',
  },
  {
    title: 'Can chatGPT create an entire app',
    date: '12 dec',
    owner: 'Chirag Kale',
    readTime: '3 min',
  },
  {
    title: 'Can chatGPT create an entire app',
    date: '12 dec',
    owner: 'Chirag Kale',
    readTime: '3 min',
  },
]

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1)
  return (
    <Container className=" bg-skin mx-auto  max-w-[1330px]">
      <div className="flex">
        <div className="w-full">
          <ul className=" flex list-none flex-row  bg-opacity-0 ">
            <li className="-mb-px text-center last:mr-0">
              <a
                className={
                  'block  px-5 py-3 text-sm' +
<<<<<<< Updated upstream
                  (openTab === 1 ? ' text-orange italic underline' : '  text-black')
=======
                  (openTab === 1 ? ' italic text-primary-500 underline' : '  text-black')
>>>>>>> Stashed changes
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(1)
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                All
              </a>
            </li>
            <li className="-mb-px text-center last:mr-0">
              <a
                className={
                  'block px-5  py-3 text-sm' +
<<<<<<< Updated upstream
                  (openTab === 2 ? ' text-orange italic underline' : '  text-black')
=======
                  (openTab === 2 ? ' italic text-primary-500 underline' : '  text-black')
>>>>>>> Stashed changes
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Blogs
              </a>
            </li>
            <li className="-mb-px text-center last:mr-0">
              <a
                className={
                  'block  px-5 py-3 text-sm' +
<<<<<<< Updated upstream
                  (openTab === 3 ? ' text-orange italic underline' : ' text-black')
=======
                  (openTab === 3 ? ' italic text-primary-500 underline' : ' text-black')
>>>>>>> Stashed changes
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(3)
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Videos
              </a>
            </li>
            <li className="-mb-px text-center last:mr-0">
              <a
                className={
                  'block px-5 py-3 text-sm ' +
<<<<<<< Updated upstream
                  (openTab === 4 ? ' text-orange italic underline' : ' text-black')
=======
                  (openTab === 4 ? ' italic text-primary-500 underline' : ' text-black')
>>>>>>> Stashed changes
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(4)
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Figma Template
              </a>
            </li>
          </ul>
          <div className="break-wordsbg-opacity-0 relative">
            <div className=" bg-opacity-0 px-4 py-5">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <div className=".text-white mt-15 gap-4 md:grid md:grid-cols-3 md:gap-4">
                    {Blogs.map((e) => {
                      return (
                        <div key={e.id} className="m-4 cursor-pointer">
<<<<<<< Updated upstream
                          <div className="w-26 bg-grey text-skin h-full text-4xl font-medium leading-8 md:py-6 -sm:pt-6 -sm:pb-16 -sm:text-xl ">
=======
                          <div className="w-26 h-full bg-dark-200 text-4xl font-medium leading-8 text-primary-300 md:py-6 -sm:pt-6 -sm:pb-16 -sm:text-xl ">
>>>>>>> Stashed changes
                            <h1 className="h-15 w-61 text-500 text-culturetext mt-2 ml-4 text-2xl">
                              {e.title}
                            </h1>
                            <p className="text-dusky1 ml-4 mt-4 text-base">{e.date}</p>
                            <p className="text-dusky1  ml-4 text-base">{e.owner}</p>
                          </div>
                          <div className="flex justify-between">
                            <p className="cursor-pointer text-sm text-black">Read now {'→'}</p>
                            <p className="text-sm text-black">{e.readTime} read</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <p>Blog</p>
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <p>Videos</p>
                </div>
                <div className={openTab === 4 ? 'block' : 'hidden'} id="link4">
                  <p>Figma Template</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default function TabsRender() {
  return (
    <>
      <Tabs color="white" />;
    </>
  )
}
