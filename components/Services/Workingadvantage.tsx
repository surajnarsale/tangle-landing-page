/* eslint-disable react/no-unescaped-entities */
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
      <div className={clsx('bg-dark-200 py-[60px] md:py-[150px]', props.className)}>
        <Container className="mx-auto flex max-w-[1110px] justify-between  px-5 text-dark-500 -md:flex-col -md:gap-8  ">
          <div className="">
            <p className="font-melodrama text-[38px] font-bold text-primary-100 md:text-[60px] -md:w-80 -md:text-4xl">
              About working <br />
              <span className="font-generalSans font-medium italic underline decoration-pink decoration-4">
                with us
              </span>
            </p>
          </div>
          <div className=" max-w-[424px] self-end  text-[24px]  text-primary-200 md:text-[20px] -sm:pt-6 -sm:pb-16 -sm:text-xl  -md:self-end">
            <p className="">
              Its an immense pleasure to hear from those we've helped. While doing a project, we
              always put all the energy as if your brand is ours.
            </p>
          </div>
        </Container>
        <Container className=" mx-auto max-w-[1110px] px-5 pt-20 text-dark-500 lg:pt-32  ">
          <div className=" mt-12 flex flex-row md:space-x-14 -sm:flex-col -md:flex-col  ">
            <div className="  -md:h-[500px]">
              <Image
                className=" -md-h-106 h-full object-cover "
                src={service3}
                width={427}
                height={460}
                alt="Picture of the author"
                placeholder="blur"
              />
            </div>
            <div className="h-full self-end text-4xl text-primary-200 -sm:pt-6 -sm:pb-16 -sm:text-xl -md:self-end ">
              <Balancer>
                Tangle has helped us to go <br /> beyond our{' '}
                <span className="font-medium italic text-primary-400  decoration-4">
                  vision for design.
                </span>
              </Balancer>
              <h1 className="mt-4 w-96 text-xl text-duskyfont ">
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout.
              </h1>

              <div className="mt-4 h-[4px] w-[72px] bg-pink " />

              <p className="h-15 mt-12 text-2xl">
                Ashish Sharma <br />
                <span className="text-base text-servicegray">CEO, Phynart Technologies</span>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default WorkingAdvantage
