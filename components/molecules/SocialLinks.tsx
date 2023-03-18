import { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { FooterLinkButton } from '@/components/atoms/FooterLinkButton'

const links = [
  { name: 'Services' },
  { name: 'Privacy Policy' },
  // { name: 'Work' },
  { name: 'Cookies' },
  { name: 'About us' },
  { name: 'Career' },
]
const socialLinks = [
  { name: 'Linkedin', link: 'https://www.linkedin.com/company/tangledesignstudio/' },
  { name: 'Dribble', link: 'https://www.linkedin.com/company/tangledesignstudio/' },
  { name: 'Instagram', link: 'https://www.linkedin.com/company/tangledesignstudio/' },
  { name: 'Youtube', link: 'https://www.linkedin.com/company/tangledesignstudio/' },
  { name: 'Pinterest', link: 'https://www.linkedin.com/company/tangledesignstudio/' },
  { name: 'Behance', link: 'https://www.linkedin.com/company/tangledesignstudio/' },
]

type SocialLinksProps = {
  className?: string
}

const SocialLinks = (props: PropsWithChildren<SocialLinksProps>): JSX.Element => {
  return (
    <div className={clsx('bg-primary-200 py-10', props.className)}>
      <div className="mx-auto max-w-[1110px] px-5 pb-5 text-dark-500 lg:flex  lg:flex-col-reverse ">
        <div className=" grid grid-cols-2 gap-4 md:flex md:justify-between">
          {links.map((link) => {
            return (
              <>
                <div>
                  <div>
                    <p className="cursor-pointer text-xl font-medium ">{link.name}</p>
                  </div>
                </div>
              </>
            )
          })}
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-4 lg:mb-10 lg:gap-0 -md:mt-10">
          {socialLinks.map((link) => {
            return (
              <>
                <div>
                  <div>
                    <FooterLinkButton className="mt-6" href={link.link}>
                      {link.name}
                    </FooterLinkButton>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SocialLinks
