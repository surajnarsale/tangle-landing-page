import TabsRender from '@/components/Blog/Home'
import Footer from '@/components/molecules/Footer'
import LandingPage from '@/components/templates/LandingPage'

export default function Home() {
  return (
    <div className="max-w-screen">
      <LandingPage>
        <TabsRender />
      </LandingPage>
    </div>
  )
}
