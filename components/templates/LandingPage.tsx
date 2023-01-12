import Header from '@/components/molecules/Header'
import { PropsWithChildren } from 'react'

const LandingPage = (props: PropsWithChildren): JSX.Element => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
    </div>
  )
}

export default LandingPage
