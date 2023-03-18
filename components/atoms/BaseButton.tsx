import Link from 'next/link'
import { PropsWithChildren } from 'react'
import clsx from 'clsx'

type ButtonProps = {
  className?: string
  href?: string
}

export function BaseButton(props: PropsWithChildren<ButtonProps>): JSX.Element {
  if (props.href) {
    return (
      <Link href={props.href!}>
        <div
          className={clsx(
            'flex items-center justify-center rounded-3xl bg-dark-500 px-4 py-2 text-sm text-light transition duration-300 ease-in-out hover:bg-dark-200 sm:px-7 sm:py-3',
            props.className
          )}
        >
          {props.children}
        </div>
      </Link>
    )
  } else {
    return (
      <div
        className={clsx(
          'flex cursor-pointer items-center justify-center rounded-3xl bg-dark-500 px-4 py-2 text-sm text-light transition duration-300 ease-in-out hover:bg-dark-200 sm:px-7 sm:py-3 ',
          props.className
        )}
      >
        {props.children}
      </div>
    )
  }
}
