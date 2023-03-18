import { Container } from '@/components/atoms/Container'
import Branding from '@/components/atoms/svgs/DigitalBrandingIcon.svg'
import Prototype from '@/components/atoms/svgs/DigitalPrototypingIcon.svg'
import Motion from '@/components/atoms/svgs/MotionGraphicsIcon.svg'
import Packaging from '@/components/atoms/svgs/PackagingDesignIcon.svg'
import UserInterface from '@/components/atoms/svgs/UiIcon.svg'
import UserExperience from '@/components/atoms/svgs/UxdIcon.svg'
import Image from 'next/image'
import Culture from '@/public/Culture.png'
import Culture1 from '@/public/culture1.png'
import Culture2 from '@/public/culture2.png'
import { useInView } from 'react-intersection-observer'
import { useAnimation, motion } from 'framer-motion'
import { useEffect } from 'react'

const allCapabilities = [
  {
    id: 1,
    icon: Branding,
    title: 'Diversity & Inclusiveness',
    description1:
      'At Tangle Design Studio, we help brands go beyond design by solving real digital problems through our ',
    description2: 'data-driven research methods.',
  },
  {
    id: 2,
    icon: UserExperience,
    title: 'Humanity & Respect',
    description1:
      'At Tangle Design Studio, we help brands go beyond design by solving real digital problems through our ',
    description2: 'data-driven research methods.',
  },
  {
    id: 3,
    icon: UserInterface,
    title: 'Empathy & user first',
    description1:
      'At Tangle Design Studio, we help brands go beyond design by solving real digital problems through our',
    description2: 'data-driven research methods.',
  },
  {
    id: 4,
    icon: Prototype,
    title: 'Candour & Responsibility',
    description1:
      'At Tangle Design Studio, we help brands go beyond design by solving real digital problems through our',
    description2: 'data-driven research methods.',
  },
  {
    id: 5,
    icon: Packaging,
    title: 'Adaptibility & Innovation',
    description1:
      'At Tangle Design Studio, we help brands go beyond design by solving real digital problems through our ',
    description2: 'data-driven research methods.',
  },
  {
    id: 6,
    icon: Motion,
    title: 'Hardcore Learning',
    description1:
      'At Tangle Design Studio, we help brands go beyond design by solving real digital problems through our ',
    description2: 'data-driven research methods.',
  },
]

const CultureList = () => {
  const { ref, inView } = useInView({
    threshold: 1,
  })

  const capabilityanimation = useAnimation()
  useEffect(() => {
    if (inView) {
      capabilityanimation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        },
      })
    }
    if (!inView) {
      capabilityanimation.start({
        x: '-100vw',
      })
    }
  }, [inView, capabilityanimation])

  return (
    <div className="mx-auto w-full">
      <div className="w-full bg-dark-300 pb-14">
        <Container className=" mx-auto  max-w-[1110px] px-5 pb-4 ">
          <div className="pb-16 text-white">
            <p className=" lg:pt-30 mb-9 pt-16 font-melodrama text-3xl font-bold">
              Our Tangled{' '}
              <span className="font-general-sans text-4xl italic  underline decoration-pink">
                culture
              </span>{' '}
            </p>
          </div>
          <div className="">
            <Image
              className="hidden h-full object-cover md:block"
              src={Culture}
              width={884}
              height={442}
              alt="Clients discussing projects"
              placeholder="blur"
            />

            <Image
              className="h-73 mb-4 object-cover md:hidden"
              src={Culture2}
              width={550}
              height={649}
              alt="Clients discussing projects1"
              placeholder="blur"
            />
            <Image
              className=" h-73 mt-4 object-cover md:hidden"
              src={Culture1}
              width={550}
              height={649}
              alt="Clients discussing projects2"
              placeholder="blur"
            />
          </div>
          <div className=".text-white border-3 w-221 mt-28 md:grid md:grid-cols-2 md:gap-4">
            {allCapabilities.map((capability) => {
              return (
                <motion.div
                  ref={ref}
                  className="mb-2 font-medium  leading-8 text-dusky md:py-6 -sm:pt-3 -sm:pb-5 -sm:text-xl  -md:mt-11 -md:text-2xl"
                  key={capability.id}
                >
                  <h1 className=".leading-11 w-60  text-4xl text-primary-400">
                    {capability.title}
                  </h1>
                  <p className=".leading-8.67 w-80  pt-3  text-2xl text-primary-100 -sm:mt-2 -sm:w-80 -md:mt-3 -md:mb-4">
                    {capability.description1}{' '}
                    <span className=".leading-8.67 text-2xl italic">{capability.description2}</span>
                  </p>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </div>
    </div>
  )
}

export default CultureList
