import Link from 'next/link'
import { PropsWithChildren } from 'react'

type ButtonProps = {
  className?: string
  href?: string
}

export function BaseButton(props: PropsWithChildren<ButtonProps>): JSX.Element {
  return (
    <Link href={props.href!}>
      <div className="rounded-3xl bg-dark-500 px-4 py-2 text-light sm:px-7 sm:py-3 ">
        {props.children}
      </div>
    </Link>
  )
}
