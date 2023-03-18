import { Container } from '@/components/atoms/Container'
import Image from 'next/image'
import service1 from '@/public/Services1.png'
import Balancer from 'react-wrap-balancer'

const ServicesHero = () => {
  return (
    <Container className=" mx-auto max-w-[1110px] px-5 pb-5 pt-20 text-dark-500 lg:pt-32 ">
      <h1 className=" w-[95%]  pb-5 font-melodrama text-7xl font-bold text-slate-900 -sm:text-4xl -md:text-4xl ">
        From data-driven decisions to problem solving designs.{' '}
        <span className="relative font-generalSans text-7xl font-medium italic underline decoration-primary-500 decoration-4 -md:text-4xl">
          We can help you go beyond design.
        </span>
      </h1>
      <div className=" mt-12 flex flex-row md:space-x-14 -sm:flex-col -md:flex-col   ">
        <div className="  -md:h-[500px]">
          <Image
            className=" h-full object-cover"
            src={service1}
            width={500}
            height={649}
            alt="Picture of the author"
            placeholder="blur"
          />
        </div>
        <div className=" h-full text-[28px] text-dark-700 md:self-end -sm:pt-6 -sm:pb-16 -sm:text-xl ">
          <Balancer className="w-[530px] leading-[40.48px]">
            We understand that great design is about more than just aesthetics, it&apos;s about
            creating a seamless and satisfying user journey. That&apos;s why our team of expert
            designers focus on user research, testing, and iteration to ensure that{' '}
            <span className="font-medium italic underline decoration-primary-500 decoration-2">
              {' '}
              every solution we deliver is tailored to the needs of your target audience and
              business.
            </span>
          </Balancer>
        </div>
      </div>
    </Container>
  )
}

export default ServicesHero
