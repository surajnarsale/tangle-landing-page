import { Container } from '@/components/atoms/Container'
import Image from 'next/image'
import heroImage2 from '@/public/heroImage-2.png'
import heroImage from '@/public/Hero-Section-mobile1.png'
import Balancer from 'react-wrap-balancer'

const Heroabout = () => {
  return (
    <Container className=" mx-auto max-w-[1110px] px-5 pb-5 pt-20 text-dark-500 lg:pt-32 ">
      <h1 className="w-272.5 -sm:w-71.25 h-48.75 text-4xl">
        <span className="mx-auto pb-5 font-melodrama text-4xl font-bold text-slate-900">
          Design is at the heart of{' '}
        </span>
        <span className="font-generalSans text-4xl font-bold italic underline decoration-orange decoration-4">
          everything we do at Tangle.
        </span>
      </h1>
      <div className=" mt-12 flex flex-row md:space-x-14 -sm:flex-col -md:flex-col">
        <div className="  -md:h-[500px]">
          <Image
            className=" hidden h-full object-cover md:block"
            src={heroImage2}
            width={500}
            height={649}
            alt="Clients discussing projects"
            placeholder="blur"
          />
          <Image
            className="object-cover md:hidden"
            src={heroImage}
            width={320}
            height={415}
            alt="Clients discussing projects"
            placeholder="blur"
          />
        </div>
        <div className=" h-full w-full pb-16 text-2xl md:self-end -sm:pt-3 -sm:text-xl ">
          <Balancer>
            Tangle is based in Pune, India. From the way a website looks and functions to the
            packaging for a new product, we believe that{' '}
            <span className="font-medium italic underline decoration-orange decoration-4 -md:no-underline">
              {' '}
              good design has the power to transform and elevate{' '}
            </span>
            any business.
          </Balancer>
          <Balancer className=" mt-3.5">
            Our team of talented designers are experts in their field, are based throughout the
            globe, and has a passion for creating visually stunning and effective designs that{' '}
            <span className="font-medium italic underline decoration-orange decoration-4 -md:no-underline">
              tell a story and drive results.
            </span>
          </Balancer>
        </div>
      </div>
      <div className=" w-272.75 mt-1 h-full text-2xl md:self-end -sm:w-80 -sm:pt-3 -sm:pb-12 -sm:text-xl">
        <Balancer className="mt-3.5">
          We work closely with our clients to understand their goals and create custom designs that
          perfectly align with their vision. Whether it's a brand refresh or a complete redesign,{' '}
          <span className="font-medium italic underline decoration-orange decoration-4 -md:no-underline">
            we take pride in helping our clients stand out in a crowded market.
          </span>{' '}
        </Balancer>
        <Balancer className="mt-3.5">
          At Tangle Design Studio,
          <span className="font-medium italic underline decoration-orange decoration-4 -md:no-underline">
            we believe that design has the power to change the world.{' '}
          </span>
          It's why we come to work every day, and it's what drives us to push the boundaries of
          what's possible. We can't wait to see what we'll create next."
        </Balancer>
      </div>
    </Container>
  )
}

export default Heroabout
