import type { PropsWithChildren } from 'react'
import TangleLogo from '@/components/atoms/svgs/TangleLogo.svg'
import clsx from 'clsx'

type LogoProps = {
  className?: string
}

export function Logo(props: PropsWithChildren<LogoProps>): JSX.Element {
  return (
    <>
      <TangleLogo className={clsx('w-30 h-16', props.className)} />
    </>
  )
}
