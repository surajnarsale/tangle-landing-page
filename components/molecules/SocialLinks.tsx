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
  { name: 'Services' },
  { name: 'Privacy Policy' },
  { name: 'Work' },
  { name: 'Cookies' },
  { name: 'About us' },
  { name: 'Career' },
]

type SocialLinksProps = {
  className?: string
}

const SocialLinks = (props: PropsWithChildren<SocialLinksProps>): JSX.Element => {
  return (
    <div className={clsx('bg-primary-200 py-10', props.className)}>
      <Container className="mx-auto max-w-[1110px] px-5 pb-5 text-dark-500 ">
        <div className="-md:grid -md:grid-cols-2 -md:gap-4">
          {links.map((link) => {
            return (
              <>
                <p className="text-xl font-medium ">{link.name}</p>
              </>
            )
          })}
        </div>
        <div className="mt-10">
          {links.map((link) => {
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
