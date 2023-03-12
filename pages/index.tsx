import WorkingAdvantage from '@/components/Services/Workingadvantage'
import AboutWorkingWithUs from '@/components/molecules/AboutWorkingWithUs'
import ClientsBanner from '@/components/molecules/ClientsBanner'
import EnquiryForm from '@/components/molecules/EnquiryForm'
import Hero from '@/components/molecules/Hero'
import CapabilitiesList from '@/components/organisms/CapabilitiesList'
import WorkList from '@/components/organisms/WorkList'
import LandingPage from '@/components/templates/LandingPage'

export default function Home() {
  return (
    <div className="max-w-screen">
      <LandingPage>
        <Hero />
        <WorkList />
        <CapabilitiesList />
        <ClientsBanner />
        <WorkingAdvantage />
        <EnquiryForm />
      </LandingPage>
    </div>
  )
}
