import { Container } from '@/components/atoms/Container'
import Image from 'next/image'
import vector from '@/public/Vector.png'
import Balancer from 'react-wrap-balancer'

const Herothird = () => {
  return (
    <Container className=" mx-auto max-w-[1110px] px-5 pb-5 pt-20 text-dark-500 lg:pt-32 ">
      <div className="flex-start -sm:flex-col-reverse -md:flex-col-reverse">
        <Balancer className="w-221.5 .leading-16 -sm:leading-10.8375 h-65 mb-4 text-4xl font-medium leading-8 md:self-end -sm:w-80 -sm:pt-6 -sm:pb-16 -sm:text-xl -sm:font-medium -md:text-3xl ">
          Before being a Designers, engineers, managers, cinematographers, directors, and animators,
          <span className=" font-medium italic  underline decoration-orange -md:text-3xl -md:no-underline">
            {' '}
            we are kind humans who love to live life while we work.{' '}
          </span>
        </Balancer>

        <Image
          className="h-73 mt-4  mb-4 flex overflow-x-auto object-cover"
          src={vector}
          width={1087}
          height={418}
          alt="Clients discussing projects1"
          placeholder="blur"
        />
      </div>
    </Container>
  )
}

export default Herothird
