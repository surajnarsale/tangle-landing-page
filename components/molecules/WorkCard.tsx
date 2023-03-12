import Image from 'next/image'
import work1 from '@/public/work_1.png'
import { BaseButton } from '@/components/atoms/BaseButton'
import { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type WorkCardProps = {
  className?: string
  category: string
  title: string
  description: string
  image: string
}

const WorkCard = (props: PropsWithChildren<WorkCardProps>): JSX.Element => {
  return (
    <>
      <div className={clsx('flex w-full flex-col justify-center md:flex-row', props.className)}>
        <div className="flex justify-center bg-light md:w-1/2">
          {/* <Image
            className=" object-cover "
            src={props.image}
            alt="work_1"
            placeholder="blur"
            width={10}
            height={10}
          /> */}
        </div>
        <div className="bg-dark-300 p-10 font-medium text-primary-100 md:flex md:w-1/2 md:flex-col md:bg-light md:text-dark-500">
          <div className="mt-auto ">
            <p className="pb-3 text-xs uppercase tracking-[0.4em] ">{props.category}</p>
            <p className="pb-4 text-2xl">{props.title}</p>
            <p className="pb-4 text-sm font-normal leading-6 text-primary-200 md:text-dark-200">
              {props.description}
            </p>
            <div className="mb-11 h-[5px] w-[18px] bg-pink" />
            <BaseButton
              href="/id"
              className="w-fit -md:ml-auto -md:bg-primary-100 -md:text-dark-200"
            >
              Case study
            </BaseButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkCard
