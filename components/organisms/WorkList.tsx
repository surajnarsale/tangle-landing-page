import { Container } from '@/components/atoms/Container'
import WorkCard from '../molecules/WorkCard'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const WorkList = () => {
  const works = [
    {
      id: 1,
      category: 'app & web',
      title: 'Phynart Smart Home',
      description:
        'At Tangle Design Studio, we help brands go beyond design by solving real digital problems to impact more lives.',
      image: '@/public/work_1.png',
    },
    {
      id: 2,
      category: 'WEB & BRAND REVAMP',
      title: 'Sociohub Media',
      description:
        'At Tangle Design Studio, we help brands go beyond design by solving real digital problems to impact more lives.',
      image: '@/public/work_1.png',
    },
  ]

  const [ref, inView] = useInView({
    threshold: 0.2,
  })
  const clientAnimation = useAnimation()
  useEffect(() => {
    console.log('client', inView)

    if (inView) {
      clientAnimation.start({
        visibility: 'visible',
        opacity: 1,
        transition: {
          duration: 3,
          bounce: 0.5,
        },
      })
    }
    if (!inView) {
      clientAnimation.start({
        visibility: 'hidden',
        opacity: 0,
        transition: {
          duration: 1.5,
        },
      })
    }
  }, [inView])
  return (
    <>
      <div className="bg-primary-200 ">
        <Container className="mx-auto max-w-[1110px] px-5 pb-5 text-dark-500  ">
          <p className=" mb-9 pt-16 text-3xl font-medium italic underline decoration-pink decoration-4 lg:pt-32">
            Recent Works
          </p>
          <div ref={ref}>
            {works.map((work) => {
              return (
                <>
                  <motion.div animate={clientAnimation}></motion.div>
                  <WorkCard
                    category={work.category}
                    description={work.description}
                    title={work.title}
                    key={work.id}
                    className="mb-10  md:mb-16"
                    image={work.image}
                  />
                </>
              )
            })}
          </div>
          {/* <p className="mx-auto  mb-10 text-center underline decoration-primary-500 decoration-4">
            Load more
          </p> */}
        </Container>
      </div>
    </>
  )
}

export default WorkList
