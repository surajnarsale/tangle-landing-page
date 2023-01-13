import Hero from '@/components/molecules/Hero'
import LandingPage from '@/components/templates/LandingPage'

export default function Home() {
  return (
    <div className="max-w-screen">
      <LandingPage>
        <Hero />
      </LandingPage>
    </div>
  )
}
