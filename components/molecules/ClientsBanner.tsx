import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/atoms/Container'
import Phynart from '@/components/atoms/svgs/phynart.svg'
import Sociohub from '@/components/atoms/svgs/sociohub.svg'
import Avabodham from '@/components/atoms/svgs/avabodham.svg'
import Amity from '@/components/atoms/svgs/amity.svg'
import Dotline from '@/components/atoms/svgs/dotline.svg'

type ClientsBannerProps = {
  className?: string
}

const ClientsBanner = (props: PropsWithChildren<ClientsBannerProps>): JSX.Element => {
  const components = [
    <Phynart key={1} className="h-[60px] w-[200px]" />,
    <Sociohub key={2} className="h-[60px] w-[200px]" />,
    <Avabodham key={3} className="h-[60px] w-[200px]" />,
    <Amity key={4} className="h-[60px] w-[200px]" />,
    <Dotline key={5} className="h-[60px] w-[200px]" />,
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
                <div key={component.key} className="grid ">
                  {component}
                </div>
              </>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

export default ClientsBanner
