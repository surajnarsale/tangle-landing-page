import Header from '@/components/molecules/Header'
import { PropsWithChildren } from 'react'

const LandingPage = (props: PropsWithChildren): JSX.Element => {
  return (
    <div className="bg-primary-300 text-dark-500">
      <Header />
      <main>{props.children}</main>
    </div>
  )
}

export default LandingPage
