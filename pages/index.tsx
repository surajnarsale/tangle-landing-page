import Hero from '@/components/molecules/Hero'
import LandingPage from '@/components/templates/LandingPage'

export default function Home() {
  return (
    <div className="w-screen bg-primary-100 ">
      <LandingPage>
        <Hero />
      </LandingPage>
    </div>
  )
}
