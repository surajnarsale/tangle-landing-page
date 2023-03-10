import { Container } from '@/components/atoms/Container'
import Branding from '@/components/atoms/svgs/DigitalBrandingIcon.svg'
import Prototype from '@/components/atoms/svgs/DigitalPrototypingIcon.svg'
import Motion from '@/components/atoms/svgs/MotionGraphicsIcon.svg'
import Packaging from '@/components/atoms/svgs/PackagingDesignIcon.svg'
import UserInterface from '@/components/atoms/svgs/UiIcon.svg'
import UserExperience from '@/components/atoms/svgs/UxdIcon.svg'
import { Capability } from '@/types/index'
import CapabilityCard from '../molecules/CapabilityCard'
import NotSureBanner from '../molecules/NotSureBanner'
import Image from 'next/image'
import Culture from '@/public/Culture.png'
import Culture1 from '@/public/culture1.png'
import Culture2 from '@/public/culture2.png'

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
  return (
    <div className="mx-auto w-full bg-blue-500">
      <div className="w-full bg-dark-300 pb-14">
        <Container className=" mx-auto  max-w-[1110px] px-5 pb-4 ">
          <div className="pb-16 text-white">
            <p className=" lg:pt-30 mb-9 pt-16 text-3xl font-medium italic">
              Our Tangled{' '}
              <span className="font-melodrama text-4xl  underline decoration-pink">culture</span>{' '}
            </p>
          </div>
          <div className="">
            <Image
              className="hidden h-full object-cover md:block"
              src={Culture}
              width={550}
              height={649}
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
          <div className=".text-white mt-28 md:grid md:grid-cols-2 md:gap-4">
            {allCapabilities.map((capability) => {
              return (
                <div
                  className="w-100 mt-2 mb-2 h-full text-4xl font-medium leading-8 text-dusky md:py-6 -sm:pt-3 -sm:pb-5 -sm:text-xl "
                  key={capability.id}
                >
                  <h1 className=".leading-11 w-60 text-4xl text-culturetext">{capability.title}</h1>
                  <p className=".leading-8.67  text-2xl -sm:mt-2 -sm:w-80 -md:mt-3 -md:mb-4">
                    {capability.description1}{' '}
                    <span className=".leading-8.67 text-2xl italic">{capability.description2}</span>
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </div>
    </div>
  )
}

export default CultureList
