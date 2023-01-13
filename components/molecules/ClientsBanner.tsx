import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/atoms/Container'

type ClientsBannerProps = {
  className?: string
}

const ClientsBanner = (props: PropsWithChildren<ClientsBannerProps>): JSX.Element => {
  return (
    <div className={clsx('bg-dark-300 pt-16', props.className)}>
      <Container className="mx-auto max-w-[1110px] px-5 pb-5 text-dark-500 ">
        <div className={clsx('', props.className)}>
          <p className="font-melodrama text-4xl font-bold text-primary-100">
            Delivered our craftsmanship to <br />
            <span className="font-generalSans font-medium italic underline decoration-pink decoration-4">
              30+ brands globally.
            </span>
          </p>
        </div>
      </Container>
    </div>
  )
}

export default ClientsBanner
