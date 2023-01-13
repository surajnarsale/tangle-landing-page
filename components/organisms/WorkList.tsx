import { Container } from '@/components/atoms/Container'
import WorkCard from '../molecules/WorkCard'

const WorkList = () => {
  return (
    <>
      <div className="bg-primary-200 ">
        <Container className="mx-auto max-w-[1110px] px-5 pb-5 text-dark-500 lg:pt-32 ">
          <p className=" mb-9 text-3xl font-medium italic underline decoration-pink decoration-4">
            Recent Works
          </p>

          <WorkCard className="mb-10  md:mb-16" />
          <WorkCard className="mb-10  md:mb-16" />

          <p className="mx-auto  mb-10 text-center underline decoration-primary-500 decoration-4">
            Load more
          </p>
        </Container>
      </div>
    </>
  )
}

export default WorkList
