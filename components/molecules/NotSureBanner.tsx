import { BaseButton } from '@/components/atoms/BaseButton'
import { PropsWithChildren } from 'react'
import clsx from 'clsx'
import BookScheduleButton from '../atoms/BookScheduleButton'

type NotSureBannerProps = {
  className?: string
}

const NotSureBanner = (props: PropsWithChildren<NotSureBannerProps>): JSX.Element => {
  return (
    <div
      className={clsx(
        'flex w-full flex-col justify-between bg-dark-400 p-7 md:flex-row md:p-9',
        props.className
      )}
    >
      <p className=" text-2xl font-medium text-primary-100">Not sure what your business needs?</p>
      <BookScheduleButton />
    </div>
  )
}

export default NotSureBanner
