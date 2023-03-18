import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { useEffect } from 'react'
import { Capability } from '@/types/index'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { log } from 'console'

type CapabilityCardProps = Capability & {
  className?: string
}

const CapabilityCard = (props: PropsWithChildren<CapabilityCardProps>): JSX.Element => {
  // const { ref, inView } = useInView()
  // const boxanimation = useAnimation()

  // useEffect(() => {
  //   console.log('list capability', inView)
  //   if (inView) {
  //     boxanimation.start({
  //       opacity: 1,
  //       scale: 1,
  //       transition: {
  //         duration: 2,
  //       },
  //     })
  //   }
  //   if (!inView) {
  //     boxanimation.start({
  //       opacity: 0,
  //       scale: 0,
  //       transition: {
  //         duration: 0.7,
  //       },
  //     })
  //   }
  // }, [inView])

  return (
    <>
      <div>
        <div className={clsx('', props.className)}>
          <props.icon className="mb-3 h-[47px] w-[47px]" />
          <p className="mb-2 text-2xl font-medium">{props.title}</p>
          <p className="text-lg font-normal">{props.description}</p>
        </div>
      </div>
    </>
  )
}

export default CapabilityCard
