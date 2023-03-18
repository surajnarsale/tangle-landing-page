import LandingPage from '@/components/templates/LandingPage'
import ServicesList from '@/components/Services/OurServices'
import ServicesHero from '@/components/Services/Hero'
import WorkingAdvantage from '@/components/Services/Workingadvantage'
import EnquiryForm from '@/components/molecules/EnquiryForm'
import ClientsBanner from '@/components/molecules/ClientsBanner'

export default function Home() {
  return (
    <div className="max-w-screen">
      <LandingPage>
        <ServicesHero />
        <ServicesList />
        <ClientsBanner />
        <WorkingAdvantage />
        <EnquiryForm />
      </LandingPage>
    </div>
  )
}
