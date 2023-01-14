import { TalkToExpertCard } from '@/components/atoms/TalkToExpertCard'
import SocialLinks from '@/components/molecules/SocialLinks'

export default function Footer() {
  return (
    <footer className="lg:bg-primary-200">
      <div className="lg:flex lg:flex-row-reverse lg:justify-center lg:gap-10  ">
        <TalkToExpertCard className="" />
        <SocialLinks />
      </div>
    </footer>
  )
}
