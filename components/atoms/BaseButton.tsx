import Link from 'next/link'
import { PropsWithChildren } from 'react'

type ButtonProps = {
  className?: string
  href?: string
}

export function BaseButton(props: PropsWithChildren<ButtonProps>): JSX.Element {
  return (
    <Link href={props.href!}>
      <div className="rounded-3xl bg-dark-500 px-7 py-3 text-light">{props.children}</div>
    </Link>
  )
}
