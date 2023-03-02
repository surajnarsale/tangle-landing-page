import React from 'react'
import { Container } from '@/components/atoms/Container'
import Heroabout from './HeroAboutus'
import CultureList from './CultureList'
import Herothird from './Herothird'
import Fourthsection from './Fourthsection'
import Footer from '../molecules/Footer'

const Company = () => {
  const [openTab, setOpenTab] = React.useState(1)
  return (
    <Container className="mx-auto bg-skin">
      <div className="flex">
        <div className="w-full">
          <ul className="mx-auto flex  max-w-[1350px] list-none flex-row bg-skin bg-opacity-0">
            <li className="-mb-px text-center last:mr-0">
              <a
                className={
                  'block  px-5 py-3 text-sm' +
                  (openTab === 1 ? ' italic text-orange underline' : '  text-black')
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(1)
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                About us
              </a>
            </li>
            <li className="-mb-px text-center last:mr-0">
              <a
                className={
                  'block px-5  py-3 text-sm' +
                  (openTab === 2 ? ' italic text-orange underline' : '  text-black')
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Careers
              </a>
            </li>
          </ul>
          <div className="break-wordsbg-opacity-0 relative">
            <div className=" bg-opacity-0 px-4 py-5">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <Heroabout />
                  <CultureList />
                  <Herothird />
                  <Fourthsection />
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <p>Careers</p>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default function Aboutus() {
  return (
    <>
      <Company />;
    </>
  )
}
