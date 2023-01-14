import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/atoms/Container'
import { FooterLinkButton } from '@/components/atoms/FooterLinkButton'

const links = [
  { name: 'Services' },
  { name: 'Privacy Policy' },
  { name: 'Work' },
  { name: 'Cookies' },
  { name: 'About us' },
  { name: 'Career' },
]
const socialLinks = [
  { name: 'Linkedin' },
  { name: 'Dribble' },
  { name: 'Instagram' },
  { name: 'Youtube' },
  { name: 'Pinterest' },
  { name: 'Behance' },
]

type SocialLinksProps = {
  className?: string
}

const SocialLinks = (props: PropsWithChildren<SocialLinksProps>): JSX.Element => {
  return (
    <div className={clsx('bg-primary-200 py-10', props.className)}>
      <Container className="mx-auto max-w-[1110px] px-5 pb-5 text-dark-500 lg:flex  lg:flex-col-reverse ">
        <div className=" grid grid-cols-2 gap-4 md:flex md:justify-between">
          {links.map((link) => {
            return (
              <>
                <p className="cursor-pointer text-xl font-medium ">{link.name}</p>
              </>
            )
          })}
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-4 lg:mb-10 lg:gap-0 -md:mt-10">
          {socialLinks.map((link) => {
            return (
              <>
                <FooterLinkButton className="mt-6" href="#">
                  {link.name}
                </FooterLinkButton>
              </>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

export default SocialLinks
