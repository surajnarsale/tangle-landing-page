import { PropsWithChildren } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import Arrow from '@/components/atoms/svgs/social-links-arrow.svg'

type FooterLinkButtonProps = {
  className?: string
  href: string
}

export function FooterLinkButton(props: PropsWithChildren<FooterLinkButtonProps>): JSX.Element {
  return (
    <Link href={props.href} target="_blank">
      <div
        className={clsx(
          'flex max-w-[220px] items-center justify-between  rounded-full bg-dark-500 px-7 py-3 text-light ',
          props.className
        )}
      >
        {props.children}
        <Arrow className="h-10 w-12 " />
      </div>
    </Link>
  )
}
