import { Container } from '@/components/atoms/Container'
import React from 'react'

const Perks = [
  {
    id: 1,
    title: 'We’re a remote-first',
    description:
      'organisation, offering a best-in-class remote experience. But it doesn’t stop you from coming to the studio.',
  },
  {
    id: 2,
    title: 'We work in small teams',
    description: 'to give our designers the power and responsibility to break the bar every time.',
  },
  {
    id: 3,
    title: 'Flexible paid time-off',
    description: 'to give our designers the power and responsibility to break the bar every time.',
  },
  {
    id: 4,
    title: 'Flexible paid time-off',
    description: 'to give our designers the power and responsibility to break the bar every time.',
  },
]

const Department = [
  { id: 0, dept: 'Design' },
  { id: 1, dept: 'Visual Media' },
  { id: 2, dept: 'Marketing' },
  { id: 3, dept: 'Business Development' },
  { id: 4, dept: 'Human Resource' },
  { id: 5, dept: 'Finance' },
]

const Design = [
  {
    id: 1,
    role: 'UX Designer',
    experience: '6 months',
    location: 'Hybrid',
    type: 'Intership',
    payStrucutre: 'paid',
  },
  {
    id: 2,
    role: 'Junior.UX Designer',
    experience: '6 months',
    location: 'Hybrid',
    type: 'Intership',
    payStrucutre: 'paid',
  },
  {
    id: 3,
    role: 'Sr.UI Designer',
    experience: '6 months',
    location: 'Hybrid',
    type: 'Intership',
    payStrucutre: 'paid',
  },
]

const Marketing = [
  {
    id: 1,
    role: 'Marketing Executive',
    experience: '6 months',
    location: 'Hybrid',
    type: 'Intership',
    payStrucutre: 'paid',
  },
  {
    id: 2,
    role: 'Business Development Executive',
    experience: '6 months',
    location: 'Hybrid',
    type: 'Intership',
    payStrucutre: 'paid',
  },
  {
    id: 3,
    role: 'Marketing Executive',
    experience: '6 months',
    location: 'Hybrid',
    type: 'Intership',
    payStrucutre: 'paid',
  },
]

const Fourthsection = () => {
  const [openSection, setSection] = React.useState(1)
  return (
    <div className="">
      <div className="bg-dark-200 pb-14">
        <Container className=" mx-auto max-w-[1110px] px-5 pb-4 ">
          <div className=" flex flex-col justify-between pt-12 pb-16 text-dusky md:flex-row">
            <div
              className=" font-melodrama text-6xl font-bold
 text-primary-100 md:w-3/6"
            >
              Join us and be the{' '}
              <span
                className="font-General Sans text-6xl
 font-medium italic underline  decoration-pink"
              >
                next tangler.
              </span>
            </div>
            <div className=" pt-10  text-xl font-normal text-primary-100 md:w-3/6">
              We always love to meet new interesting people. Help us by joining the team and making
              world a better place through design.
            </div>
          </div>
          <hr className="text-dark-100" />
          <div className=".text-white mt-15 grid-cols-3  md:grid md:gap-4 -md:grid-cols-2">
            {Perks.map((p) => {
              return (
                <div
                  className="w-65   mt-4 mb-4 h-full text-4xl font-medium leading-8 text-dusky -sm:pt-6 -sm:pb-16 -sm:text-xl -md:mt-10 -md:mb-10 "
                  key={p.id}
                >
                  <p className="text-2xl text-primary-200">
                    <span className="text-2xl italic  text-primary-400">{p.title} </span>
                    {p.description}
                  </p>
                </div>
              )
            })}
          </div>
          <hr className="text-dark-100" />

          <h2 className="mt-8 mb-4 h-9 text-3xl font-medium text-primary-200">Open Positions</h2>
        </Container>

        <Container className=" mx-auto max-w-[1110px]">
          <div className="flex">
            <div className="w-full">
              <ul className=" flex list-none flex-row  bg-opacity-0 -md:flex-col">
                <li className="-mb-px text-center last:mr-0">
                  <a
                    className={
                      'block  px-5 py-3 text-sm' +
                      (openSection === 1
                        ? ' italic text-primary-500 underline'
                        : '  text-primary-200')
                    }
                    onClick={(e) => {
                      e.preventDefault()
                      setSection(1)
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    Design
                  </a>
                </li>
                <li className="-mb-px text-center last:mr-0">
                  <a
                    className={
                      'block  px-5 py-3 text-sm' +
                      (openSection === 2
                        ? ' italic text-primary-500 underline'
                        : '  text-primary-200')
                    }
                    onClick={(e) => {
                      e.preventDefault()
                      setSection(2)
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    Visual Media
                  </a>
                </li>
                <li className="-mb-px text-center last:mr-0">
                  <a
                    className={
                      'block  px-5 py-3 text-sm' +
                      (openSection === 3
                        ? ' italic text-primary-500 underline'
                        : '  text-primary-200')
                    }
                    onClick={(e) => {
                      e.preventDefault()
                      setSection(3)
                    }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                  >
                    Marketing
                  </a>
                </li>
                <li className="-mb-px text-center last:mr-0">
                  <a
                    className={
                      'block  px-5 py-3 text-sm' +
                      (openSection === 4
                        ? ' italic text-primary-500 underline'
                        : '  text-primary-200')
                    }
                    onClick={(e) => {
                      e.preventDefault()
                      setSection(4)
                    }}
                    data-toggle="tab"
                    href="#link4"
                    role="tablist"
                  >
                    Business Development
                  </a>
                </li>
                <li className="-mb-px text-center last:mr-0">
                  <a
                    className={
                      'block  px-5 py-3 text-sm' +
                      (openSection === 5
                        ? ' italic text-primary-500 underline'
                        : '  text-primary-200')
                    }
                    onClick={(e) => {
                      e.preventDefault()
                      setSection(5)
                    }}
                    data-toggle="tab"
                    href="#link5"
                    role="tablist"
                  >
                    Human Resource
                  </a>
                </li>
                <li className="-mb-px text-center last:mr-0">
                  <a
                    className={
                      'block  px-5 py-3 text-sm' +
                      (openSection === 6
                        ? ' italic text-primary-500 underline'
                        : '  text-primary-200')
                    }
                    onClick={(e) => {
                      e.preventDefault()
                      setSection(6)
                    }}
                    data-toggle="tab"
                    href="#link6"
                    role="tablist"
                  >
                    Finance
                  </a>
                </li>
              </ul>
              <hr className="text-dark-100" />
              <div className="break-wordsbg-opacity-0 relative">
                <div className=" bg-opacity-0 px-4 py-5">
                  <div className="tab-content tab-space">
                    <div className={openSection === 1 ? 'block' : 'hidden'} id="link1">
                      <div className=".text-white mt-15 md:gap-4">
                        {Design.map((e) => {
                          return (
                            <div key={e.id} className="m-4 cursor-pointer">
                              <div className="w-244 h-19.25 flex h-full justify-between bg-dark-300 font-medium leading-8 text-skin md:py-6 -sm:pt-6 -sm:pb-16 -sm:text-xl ">
                                <div className="h-15 w-61 mt-2 ml-4 flex flex-row text-2xl  text-primary-200 -md:flex-col">
                                  {e.role}
                                  <div>
                                    <span className="ml-2 rounded-lg bg-dark-200 p-1 text-xs text-primary-400">
                                      {e.experience}
                                    </span>
                                    <span className="ml-2 rounded-lg bg-dark-200 p-1 text-xs text-primary-400">
                                      {e.type}
                                    </span>
                                    <span className="ml-2 rounded-lg bg-dark-200 p-1 text-xs text-primary-400">
                                      {e.payStrucutre}
                                    </span>
                                    <span className="ml-2 rounded-lg bg-dark-200 p-1 text-xs text-primary-400">
                                      {e.location}
                                    </span>
                                  </div>
                                </div>
                                <div className="mr-7 text-primary-500">
                                  Apply <span className="h-5 text-2xl"> → </span>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <div className={openSection === 2 ? 'block' : 'hidden'} id="link2">
                      <p>Visual Media</p>
                    </div>
                    <div className={openSection === 3 ? 'block' : 'hidden'} id="link3">
                      <div className=".text-white mt-15 md:gap-4">
                        {Marketing.map((e) => {
                          return (
                            <div key={e.id} w-244 className="m-4 cursor-pointer">
                              <div className="w-26 flex h-full justify-between bg-dark-300 font-medium leading-8 text-skin md:py-6 -sm:pt-6 -sm:pb-16 -sm:text-xl ">
                                <div className="h-15 w-61 mt-2 ml-4 flex flex-row text-2xl text-dusky text-primary-200 -md:flex-col">
                                  {e.role}
                                  <div>
                                    <span className="ml-2 rounded-lg bg-dark-200 p-1 text-xs text-primary-400">
                                      {e.experience}
                                    </span>
                                    <span className="ml-2 rounded-lg bg-dark-200 p-1 text-xs text-primary-400">
                                      {e.type}
                                    </span>
                                    <span className="ml-2 rounded-lg bg-dark-200 p-1 text-xs text-primary-400">
                                      {e.payStrucutre}
                                    </span>
                                    <span className="ml-2 rounded-lg bg-dark-200 p-1 text-xs text-primary-400">
                                      {e.location}
                                    </span>
                                  </div>
                                </div>
                                <div className="mr-7 text-primary-500">
                                  Apply <span className="h-5 text-2xl"> → </span>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <div className={openSection === 4 ? 'block' : 'hidden'} id="link4">
                      <p>Business Development</p>
                    </div>
                    <div className={openSection === 5 ? 'block' : 'hidden'} id="link5">
                      <p>Human Resource</p>
                    </div>
                    <div className={openSection === 6 ? 'block' : 'hidden'} id="link6">
                      <p>Finance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Fourthsection
