import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/atoms/Container'

type AboutWorkingWithUsProps = {
  className?: string
}

const AboutWorkingWithUs = (props: PropsWithChildren<AboutWorkingWithUsProps>): JSX.Element => {
  return (
    <>
      <div className={clsx('bg-dark-200 py-28', props.className)}>
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
      </div>
    </>
  )
}

export default AboutWorkingWithUs
