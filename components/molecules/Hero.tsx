import { Container } from '@/components/atoms/Container'
import Image from 'next/image'
import heroImage from '@/public/heroImage.png'
import Balancer from 'react-wrap-balancer'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import AnimatedText from '@/components/molecules/AnimateText'

const Hero = () => {
  // const [ref, inView] = useInView()
  // const [ref1, inHeroleft] = useInView()
  // const [ref2, inHeroright] = useInView()

  // useEffect(() => {
  //   console.log('my Hero section title is visible?', inView)
  //   console.log('heroleft?', inView)
  //   console.log('heroright?', inView)
  // })

  const Heading = [
    { type: 'heading1', text: 'Bringing beauty &' },
    {
      type: 'heading1',
      text: 'functionality to your',
    },
    {
      type: 'heading1',
      text: 'digital products.',
      class:
        'relative font-generalSans font-medium text italic underline decoration-primary-500 decoration-4  ',
    },
  ]
  const caption = [{ type: 'paragraph', text: 'from India to the world' }]
  const subheading = [
    {
      type: 'paragraph',
      text: 'At Tangle Design Studio, we help brands go beyond design by solving real digital problems through our data-driven research methods.',
    },
  ]

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  }

  return (
    <Container className="  mx-auto max-w-[1110px] px-5 pb-[68px] pt-20 text-dark-500 sm:pb-[150px] lg:pt-32">
      {/* <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
        
      >
        from India to the world
      </motion.p> */}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="mx-auto mb-3  text-sm sm:text-lg"
      >
        <div className="container">
          {caption.map((item, index) => {
            return <AnimatedText {...item} key={index} />
          })}
        </div>
      </motion.div>

      {/* <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
        className="  mx-auto pb-5 font-melodrama text-4xl font-bold text-slate-900 sm:text-7xl"
      >
        Bringing beauty & <br />
        functionality <br /> to your{' '}
        <span className="relative whitespace-nowrap ">
          <span className="relative font-generalSans font-medium italic underline decoration-orange decoration-4">
            digital products.
          </span>
        </span>
      </motion.h1> */}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className=" text  mx-auto pb-5 font-melodrama  text-[38px] font-bold leading-[46px] text-slate-900 sm:text-7xl sm:leading-[88px]  "
      >
        <div className="container">
          {Heading.map((item, index) => {
            return <AnimatedText {...item} key={index} className={item?.class} />
          })}
        </div>
      </motion.div>
      <div className=" mt-12 flex flex-row md:space-x-14 -sm:flex-col   ">
        <motion.div
          // ref={ref1}
          initial={{ y: '100vw' }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="  -md:h-[500px]"
        >
          <Image
            className=" h-full w-[2000px] object-cover"
            src={heroImage}
            width={800}
            height={800}
            alt="Picture of the author"
            placeholder="blur"
          />
        </motion.div>
        {/* <motion.div
          // ref={ref2}
          initial={{ visibility: 'hidden' }}
          animate={{ visibility: 'visible' }}
          transition={{ duration: 2.5 }}
          className=" h-full text-2xl md:self-end -sm:pt-6 -sm:pb-16 -sm:text-xl "
        >
          <Balancer>
            At Tangle Design Studio, we help brands go beyond design by solving real digital
            problems through our{' '}
            <span className="font-medium italic underline decoration-orange decoration-4">
              data-driven research methods.
            </span>
          </Balancer>
        </motion.div> */}

        <div className=" h-full text-[28px] md:self-end -sm:pt-6 -sm:pb-16 -sm:text-3xl ">
          {/* {subheading.map((item, index) => {
              return <AnimatedText {...item} key={index} />
            })} */}
          At Tangle Design Studio, we help brands go beyond design by solving real digital problems
          through our{' '}
          <span className="font-generalSans font-medium italic underline decoration-primary-500 decoration-4  ">
            data-driven research methods.
          </span>
        </div>
      </div>
    </Container>
  )
}

export default Hero
