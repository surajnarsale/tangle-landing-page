import { PropsWithChildren, useEffect } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/atoms/Container'
import { FooterLinkButton } from '@/components/atoms/FooterLinkButton'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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
  const [ref, inView] = useInView()
  const socialanimation = useAnimation()
  const [ref1, inViewone] = useInView({
    threshold: 1,
  })
  const linkanimation = useAnimation()

  useEffect(() => {
    console.log('list capability', inView)
    if (inView) {
      socialanimation.start({
        opacity: 1,
        scale: 1,
        visibility: 'visible',
        transition: {
          duration: 1,
        },
      })
    }
    if (!inView) {
      socialanimation.start({
        opacity: 0,
        visibility: 'hidden',
        scale: 0,
        transition: {
          duration: 0.7,
        },
      })
    }

    if (inViewone) {
      linkanimation.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 5,
        },
      })
    }
  }, [inView, inViewone])

  return (
    <div className={clsx('bg-primary-200 py-10', props.className)}>
      <div className="mx-auto max-w-[1110px] px-5 pb-5 text-dark-500 lg:flex  lg:flex-col-reverse ">
        <div className=" grid grid-cols-2 gap-4 md:flex md:justify-between">
          {links.map((link) => {
            return (
              <>
                <div ref={ref1}>
                  <motion.div animate={linkanimation}>
                    <p className="cursor-pointer text-xl font-medium ">{link.name}</p>
                  </motion.div>
                </div>
              </>
            )
          })}
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-4 lg:mb-10 lg:gap-0 -md:mt-10">
          {socialLinks.map((link) => {
            return (
              <>
                <div ref={ref}>
                  <motion.div animate={socialanimation}>
                    <FooterLinkButton className="mt-6" href={link.link}>
                      {link.name}
                    </FooterLinkButton>
                  </motion.div>
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
