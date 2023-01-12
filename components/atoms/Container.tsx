import clsx from 'clsx'
import { PropsWithChildren } from 'react'

type ContainerProps = {
  className?: string
}

export function Container(props: PropsWithChildren<ContainerProps>): JSX.Element {
  return (
    <div className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', props.className)} {...props} />
  )
}
