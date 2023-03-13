import LandingPage from '@/components/templates/LandingPage'
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

export default function Home() {
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
                        {Blogs.map((e) => {
                          return (
                            <div key={e.id} className="m-4 cursor-pointer">
                              <div className="w-26 h-full bg-grey text-4xl font-medium leading-8 text-skin md:py-6 -sm:pt-6 -sm:pb-16 -sm:text-xl ">
                                <h1 className="h-15 w-61 text-500 mt-2 ml-4 text-2xl text-culturetext">
                                  {e.title}
                                </h1>
                                <p className="ml-4 mt-4 text-base text-dusky1">{e.date}</p>
                                <p className="ml-4  text-base text-dusky1">{e.owner}</p>
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
