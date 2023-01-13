import Hero from '@/components/molecules/Hero'
import WorkList from '@/components/organisms/WorkList'
import LandingPage from '@/components/templates/LandingPage'

export default function Home() {
  return (
    <div className="max-w-screen">
      <LandingPage>
        <Hero />
        <WorkList />
      </LandingPage>
    </div>
  )
}
