import Header from '@/components/molecules/Header'
import { PropsWithChildren } from 'react'
import Footer from '@/components/molecules/Footer'

const LandingPage = (props: PropsWithChildren): JSX.Element => {
  return (
    <div className="bg-primary-300 text-dark-500">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default LandingPage
