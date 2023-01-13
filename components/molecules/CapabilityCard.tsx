import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { Capability } from '@/types/index'

type CapabilityCardProps = Capability & {
  className?: string
}

const CapabilityCard = (props: PropsWithChildren<CapabilityCardProps>): JSX.Element => {
  return (
    <>
      <div className={clsx('', props.className)}>
        <props.icon className="mb-3 h-[47px] w-[47px]" />
        <p className="mb-2 text-2xl font-medium">{props.title}</p>
        <p className="text-lg font-normal">{props.description}</p>
      </div>
    </>
  )
}

export default CapabilityCard
