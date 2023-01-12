import Navbar from '@/components/molecules/Navbar'
import { PropsWithChildren } from 'react'

const LandingPage = (props: PropsWithChildren): JSX.Element => {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
    </>
  )
}

export default LandingPage
