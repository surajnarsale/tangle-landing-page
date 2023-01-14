import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/atoms/Container'
import dayjs from 'dayjs'

type CopywrightFooterProps = {
  className?: string
}

const CopywrightFooter = (props: PropsWithChildren<CopywrightFooterProps>): JSX.Element => {
  return (
    <div className={clsx('flex border-t-2 border-light bg-primary-200', props.className)}>
      <Container className=" mx-auto flex max-w-[1110px] items-center justify-center  px-5 text-center  text-dark-500 ">
        <div className="py-2">© {dayjs().year()} Tangledesign Studio Llp. All rights reserved.</div>
      </Container>
    </div>
  )
}

export default CopywrightFooter
