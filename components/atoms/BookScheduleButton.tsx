import { BaseButton } from '@/components/atoms/BaseButton'
import clsx from 'clsx'
import { PropsWithChildren } from 'react'

type BookScheduleButtonProps = {
  className?: string
}

const BookScheduleButton = (props: PropsWithChildren<BookScheduleButtonProps>): JSX.Element => {
  return (
    <BaseButton
      href="#"
      className={clsx(
        'mx-auto w-fit bg-dark-500  px-8  text-base text-primary-100  -sm:mt-5',
        props.className
      )}
    >
      Book a schedule. <span className="italic text-pink">Its free</span>
    </BaseButton>
  )
}

export default BookScheduleButton
