import Image from 'next/image'
import { BaseButton } from '@/components/atoms/BaseButton'
import { PropsWithChildren } from 'react'
import clsx from 'clsx'

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
      <div
        className={clsx(
          'flex h-[883px] w-full flex-col justify-center md:h-[635px] md:flex-row ',
          props.className
        )}
      >
        <div className="flex justify-center bg-light md:w-1/2">
          <img className=" object-contain" src={props.image} alt="work_1" />
        </div>
        <div className=" bg-dark-300 p-10 font-medium text-primary-100 md:flex md:w-1/2 md:flex-col md:bg-light md:text-dark-500">
          <div className="mt-auto ">
            <p className="pb-3 text-xs uppercase tracking-[0.4em] ">{props.category}</p>
            <p className="pb-4 text-[24px] sm:text-[42px]">{props.title}</p>
            <p className="pb-4 text-[14px] font-normal leading-6 text-primary-200 sm:text-[16px] md:text-dark-200">
              {props.description}
            </p>
            <div className="mb-11 h-[5px] w-[18px] bg-pink" />
            <BaseButton className="w-fit -md:ml-auto -md:bg-primary-100 -md:text-dark-200">
              Case study
            </BaseButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkCard
