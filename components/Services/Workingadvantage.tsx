import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/atoms/Container'
import Image from 'next/image'
import service3 from '@/public/Services3.png'
import Balancer from 'react-wrap-balancer'

type AboutWorkingWithUsProps = {
  className?: string
}

const WorkingAdvantage = (props: PropsWithChildren<AboutWorkingWithUsProps>): JSX.Element => {
  return (
    <>
      <div className={clsx('bg-dark-200 py-20', props.className)}>
        <Container className="mx-auto max-w-[1110px] px-5 pb-5 text-dark-500 md:grid md:grid-cols-2 md:gap-8 ">
          <div className={clsx('', props.className)}>
            <p className="font-melodrama text-4xl font-bold text-primary-100">
              About working <br />
              <span className="font-generalSans font-medium italic underline decoration-pink decoration-4">
                with us
              </span>
            </p>
          </div>
          <div className=" -md:mt-9 ">
            <p className=" text-2xl font-normal text-primary-100 md:text-xl">
              Its an immense pleasure to hear from those weve helped. While doing a project, we
              always put all the energy as if your brand is ours.
            </p>
          </div>
        </Container>
        <Container className=" mx-auto max-w-[1110px] px-5 pb-5 pt-20 text-dark-500 lg:pt-32 ">
          <div className=" mt-12 flex flex-row md:space-x-14 -sm:flex-col   ">
            <div className="  -md:h-[500px]">
              <Image
                className=" h-full object-cover"
                src={service3}
                width={427}
                height={460}
                alt="Picture of the author"
                placeholder="blur"
              />
            </div>
            <div className=" h-full text-2xl text-dusky md:self-end -sm:pt-6 -sm:pb-16 -sm:text-xl ">
              <Balancer>
                Tangle has helped us to go <br /> beyond our{' '}
                <span className="decoration-orange-500 font-medium italic text-orange decoration-4">
                  {' '}
                  vision for design.
                </span>
              </Balancer>
              <h1>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout.
              </h1>
              <hr className="h-7 w-16 text-pink" />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default WorkingAdvantage
