import { TalkToExpertCard } from '@/components/atoms/TalkToExpertCard'
import SocialLinks from '@/components/molecules/SocialLinks'

export default function Footer() {
  return (
    <footer>
      <div className="bg-dark-300 ">
        <TalkToExpertCard />
        <SocialLinks />
      </div>
    </footer>
  )
}
