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
type CapabilityWithId = Capability & { id: number }

const allCapabilities: CapabilityWithId[] = [
  {
    id: 1,
    icon: Branding,
    title: 'Digital Branding',
    description:
      'A strategic process to help your brand establish a platform-agnostic identity and presence.',
  },
  {
    id: 2,
    icon: UserExperience,
    title: 'User Experience Design (UX)',
    description:
      'Creating holistic, usable and well structured digital experiences that incorporate best design practices and standards.',
  },
  {
    id: 3,
    icon: UserInterface,
    title: 'User Interface Design (UI)',
    description:
      'Designing aesthetic, delightful and visually appealing products that are functional and enjoyable to use.',
  },
  {
    id: 4,
    icon: Prototype,
    title: 'Digital Prototyping',
    description:
      'Simplifying human computer interactions to yield intuitive, seamless and task-oriented outcomes.',
  },
  {
    id: 5,
    icon: Packaging,
    title: 'Packaging Design',
    description:
      'Designing aesthetic, delightful and visually appealing products that are functional and enjoyable to use.',
  },
  {
    id: 6,
    icon: Motion,
    title: 'Motion Graphics & Illustrations',
    description:
      'Simplifying human computer interactions to yield intuitive, seamless and task-oriented outcomes.',
  },
]

const CapabilitiesList = () => {
  return (
    <>
      <div className="">
        <Container className="mx-auto max-w-[1110px] px-5 pb-5 text-dark-500  ">
          <div className="pb-16">
            <p className=" mb-9 pt-16 text-3xl font-medium italic underline decoration-pink decoration-4 lg:pt-32">
              <span className="font-melodrama text-4xl font-bold"> Our</span> <br /> Capabilities
            </p>
            <p className=" text-2xl font-normal">
              We believe in delivering products beyond expectations. We put all the effort to build
              things which feel larger than life.
            </p>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-4">
            {allCapabilities.map((capability) => {
              return (
                <CapabilityCard
                  className="mb-16  md:py-8"
                  key={capability.id}
                  description={capability.description}
                  icon={capability.icon}
                  title={capability.title}
                />
              )
            })}
          </div>
          <NotSureBanner className="mt-5" />
        </Container>
      </div>
    </>
  )
}

export default CapabilitiesList
