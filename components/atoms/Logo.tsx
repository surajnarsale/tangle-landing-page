import { PropsWithChildren } from 'react'
import TangleLogo from '@/components/atoms/svgs/TangleLogo.svg'

type LogoProps = {
  className?: string
}

export function Logo(props: PropsWithChildren<LogoProps>): JSX.Element {
  return (
    <>
      <TangleLogo className="text-8xl" />
    </>
  )
}
