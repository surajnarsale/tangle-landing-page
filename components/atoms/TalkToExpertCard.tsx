import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import BookScheduleButton from '@/components/atoms/BookScheduleButton'
import { Container } from '@/components/atoms/Container'

type TalkToExpertCardProps = {
  className?: string
}

export function TalkToExpertCard(props: PropsWithChildren<TalkToExpertCardProps>): JSX.Element {
  return (
    <div className={clsx('bg-primary-100 py-10', props.className)}>
      <Container className="mx-auto max-w-[1110px] px-5 pb-5 text-dark-500 ">
        <p className="text-sm font-semibold">Need any help?</p>
        <p className="mt-2 text-3xl font-medium">Talk to our design expert</p>
        <BookScheduleButton className="mx-0" />
      </Container>
    </div>
  )
}
