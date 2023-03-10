import { Container } from '@/components/atoms/Container'
import Image from 'next/image'
import heroImage from '@/public/heroImage.png'
import Balancer from 'react-wrap-balancer'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const Hero = () => {
  // const [ref, inView] = useInView()
  // const [ref1, inHeroleft] = useInView()
  // const [ref2, inHeroright] = useInView()

  // useEffect(() => {
  //   console.log('my Hero section title is visible?', inView)
  //   console.log('heroleft?', inView)
  //   console.log('heroright?', inView)
  // })

  return (
    <Container className=" mx-auto max-w-[1110px] px-5 pb-5 pt-20 text-dark-500 lg:pt-32 ">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
        className="mx-auto mb-3  text-sm sm:text-lg"
      >
        from India to the world
      </motion.p>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
        className="  mx-auto pb-5 font-melodrama text-4xl font-bold text-slate-900 sm:text-7xl"
      >
        Bringing beauty & <br />
        functionality <br /> to your{' '}
        <span className="relative whitespace-nowrap ">
          <span className="decoration-orange-500 relative font-generalSans font-medium italic underline decoration-4">
            digital products.
          </span>
        </span>
      </motion.h1>
      <div className=" mt-12 flex flex-row md:space-x-14 -sm:flex-col   ">
        <motion.div
          // ref={ref1}
          initial={{ y: '100vw' }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5 }}
          className="  -md:h-[500px]"
        >
          <Image
            className=" h-full object-cover"
            src={heroImage}
            width={800}
            height={800}
            alt="Picture of the author"
            placeholder="blur"
          />
        </motion.div>
        <motion.div
          // ref={ref2}
          initial={{ visibility: 'hidden' }}
          animate={{ visibility: 'visible' }}
          transition={{ duration: 2.5 }}
          className=" h-full text-2xl md:self-end -sm:pt-6 -sm:pb-16 -sm:text-xl "
        >
          <Balancer>
            At Tangle Design Studio, we help brands go beyond design by solving real digital
            problems through our{' '}
            <span className="decoration-orange-500 font-medium italic underline decoration-4">
              {' '}
              data-driven research methods.
            </span>
          </Balancer>
        </motion.div>
      </div>
    </Container>
  )
}

export default Hero
