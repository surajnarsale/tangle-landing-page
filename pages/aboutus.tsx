import LandingPage from '@/components/templates/LandingPage'
import CultureList from '@/components/Aboutus/CultureList'
import Herothird from '@/components/Aboutus/Herothird'
import Fourthsection from '@/components/Aboutus/Fourthsection'
import Heroabout from '@/components/Aboutus/HeroAboutus'
import Company from '@/components/Aboutus/Aboutus'

export default function Home() {
  return (
    <div className="max-w-screen">
      <LandingPage>
        <Company />
      </LandingPage>
    </div>
  )
}
