import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/atoms/Container'
import Google from '@/components/atoms/svgs/google.svg'
import Bajaj from '@/components/atoms/svgs/bajaj.svg'
import Dotpe from '@/components/atoms/svgs/dotpe.svg'
import Phynart from '@/components/atoms/svgs/phynart.svg'
import Sociohub from '@/components/atoms/svgs/sociohub.svg'

type ClientsBannerProps = {
  className?: string
}

const ClientsBanner = (props: PropsWithChildren<ClientsBannerProps>): JSX.Element => {
  const components = [
    <Google key={1} className="grid h-[60px] w-[100px]" />,
    <Bajaj key={2} className="grid h-[60px] w-[100px]" />,
    <Dotpe key={3} className="grid h-[60px] w-[100px]" />,
    <Phynart key={4} className="grid h-[60px] w-[100px]" />,
    <Sociohub key={5} className="grid h-[60px] w-[100px]" />,
  ]

  return (
    <div className={clsx('bg-dark-300 py-16', props.className)}>
      <Container className="mx-auto max-w-[1110px] px-5 pb-5 text-dark-500 ">
        <div>
          <p className="font-melodrama text-4xl font-bold text-primary-100">
            Delivered our craftsmanship to <br />
            <span className="font-generalSans font-medium italic underline decoration-pink decoration-4">
              30+ brands globally.
            </span>
          </p>
        </div>
        <div className=" mt-14 md:mt-20  md:flex md:justify-between -md:grid -md:grid-cols-2 -md:gap-8 ">
          {components.map((component) => {
            return (
              <>
                <div key={component.key}>{component}</div>
              </>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

export default ClientsBanner
