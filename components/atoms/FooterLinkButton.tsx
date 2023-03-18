import { PropsWithChildren } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'

type FooterLinkButtonProps = {
  className?: string
  href: string
}

export function FooterLinkButton(props: PropsWithChildren<FooterLinkButtonProps>): JSX.Element {
  return (
    <Link href={props.href} target="_blank">
      <div
        className={clsx(
          'flex max-w-[220px] items-center justify-between  rounded-full bg-dark-500  py-4 px-8 px-4 py-2 text-2xl text-sm text-light sm:px-7 sm:py-3 ',
          props.className
        )}
      >
        {props.children}
        <ArrowTopRightOnSquareIcon className="h-8 w-8" aria-hidden="true" />
      </div>
    </Link>
  )
}
