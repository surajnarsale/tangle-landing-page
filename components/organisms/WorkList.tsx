import Image from 'next/image'
import work1 from '@/public/work_1.png'
import { Container } from '@/components/atoms/Container'
import { BaseButton } from '@/components/atoms/BaseButton'

const WorkList = () => {
  return (
    <>
      <div className="bg-primary-200 pt-14">
        <Container className=" mx-auto max-w-[1110px] px-5 pb-5 text-dark-500 lg:pt-32 ">
          <p className=" mb-9 text-3xl font-medium italic underline decoration-pink decoration-4">
            Recent Works
          </p>
          <div className="flex w-full flex-col justify-center">
            <div className="flex justify-center bg-light">
              <Image className=" object-cover" src={work1} alt="work_1" placeholder="blur" />
            </div>
            <div className="bg-dark-300 p-10  font-medium text-primary-100">
              <p className="pb-3 text-xs uppercase tracking-[0.4em] ">app & web</p>
              <p className="pb-4 text-2xl   ">Phynart Smart Home</p>
              <p className="pb-4 text-sm font-normal leading-6 text-primary-200">
                At Tangle Design Studio, we help brands go beyond design by solving real digital
                problems to impact more lives.
              </p>
              <div className="mb-11 h-[5px] w-[18px] bg-pink" />
              <BaseButton href="/id" className="ml-auto w-fit bg-primary-100 text-dark-200">
                Case study
              </BaseButton>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default WorkList
