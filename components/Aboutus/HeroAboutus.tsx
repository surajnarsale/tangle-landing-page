import { Container } from '@/components/atoms/Container'
import Image from 'next/image'
import heroImage2 from '@/public/heroImage-2.png'
import heroImage from '@/public/Hero-Section-mobile1.png'
import Balancer from 'react-wrap-balancer'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const Heroabout = () => {
  const [ref, inView] = useInView()
  const [ref1, inImg] = useInView()
  useEffect(() => {
    console.log('About section of hero is in view', inView)
    console.log('Left Image section of hero is in view', inImg)
  }, [inImg, inView])
  return (
    <Container className=" mx-auto max-w-[1110px] px-5 pb-5 pt-11 text-dark-500">
      <motion.h1
        animate={{ x: 1 }}
        initial={{ x: -1000 }}
        transition={{ duration: 2, type: 'spring', stiffness: 100, damping: 10 }}
        className="w-272.5 -sm:w-71.25 h-48.75 text-7xl -md:text-4xl"
      >
        <span className="mx-auto pb-5 font-melodrama  font-bold text-slate-900">
          Design is at the heart of{' '}
        </span>
        <span className="font-generalSans  italic underline decoration-orange decoration-4">
          everything we do at Tangle.
        </span>
      </motion.h1>
      <div className="mt-12 flex flex-row  md:space-x-14 -sm:flex-col -md:flex-col">
        <motion.div
          ref={ref1}
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          transition={{ duration: 1, bounce: 0.3 }}
          className=""
        >
          <Image
            className=" hidden h-full object-cover md:block"
            src={heroImage2}
            width={500}
            height={649}
            alt="Clients discussing projects"
            placeholder="blur"
          />
          <Image
            className="object-cover md:hidden"
            src={heroImage}
            width={320}
            height={415}
            alt="Clients discussing projects"
            placeholder="blur"
          ></Image>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 1.2, bounce: 0.3 }}
          className=" w-full self-end  text-2xl md:self-end -sm:pt-3 -sm:text-xl "
        >
          <div>
            Tangle is based in Pune, India. From the way a website looks and functions to the{' '}
            packaging for a new product, we believe that{' '}
            <span className="font-medium italic underline decoration-orange decoration-4 -md:no-underline">
              {' '}
              good design has the power to transform and elevate{' '}
            </span>
            any business.
          </div>
          <div>
            Our team of talented designers are experts in their field, are based throughout the
            globe, and has a passion for creating visually stunning and effective designs that{' '}
            <span className="font-medium italic underline decoration-orange decoration-4 -md:no-underline">
              tell a story and drive results.
            </span>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, bounce: 0.3 }}
        className=" w-272.75 mt-1 h-full text-2xl md:self-end -sm:w-80 -sm:pt-3 -sm:pb-12 -sm:text-xl"
      >
        <Balancer className="mt-3.5">
          We work closely with our clients to understand their goals and create custom designs that
          perfectly align with their vision. Whether it&apos;s a brand refresh or a complete
          redesign,{' '}
          <span className="font-medium italic underline decoration-orange decoration-4 -md:no-underline">
            we take pride in helping our clients stand out in a crowded market.
          </span>{' '}
        </Balancer>
        <Balancer className="mt-3.5">
          At Tangle Design Studio,
          <span className="font-medium italic underline decoration-orange decoration-4 -md:no-underline">
            we believe that design has the power to change the world.{' '}
          </span>
          It&apos;s why we come to work every day, and it&apos;s what drives us to push the
          boundaries of what&apos;s possible. We can&apos;t wait to see what we&apos;ll create
          next.&apos;
        </Balancer>
      </motion.div>
    </Container>
  )
}

export default Heroabout
