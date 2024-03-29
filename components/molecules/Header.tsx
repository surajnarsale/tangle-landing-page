import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { BaseButton } from '@/components/atoms/BaseButton'
import { Container } from '@/components/atoms/Container'
import { Logo } from '@/components/atoms/Logo'
import { handleScrollToSection } from '@/utils/hadle-scroll-to-section'
import { useRouter } from 'next/router'

function MobileNavigation() {
  const router = useRouter()

  return (
    <Popover>
      {({ open, close }) => (
        <>
          <Popover.Button className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none ">
            <span className="sr-only">Toggle Navigation</span>
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': open,
                })}
              />
              <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': !open,
                })}
              />
            </svg>
          </Popover.Button>
          <Transition.Root>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                as="ul"
                className="absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
              >
                <li>
                  <Link href="/services">
                    <div className="block w-full" onClick={() => close()}>
                      Services
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/aboutus">
                    <div
                      className="block w-full"
                      onClick={() => {
                        close()
                      }}
                    >
                      Company
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials">
                    <div
                      className="block w-full"
                      onClick={async () => {
                        close()
                        if (router.route === '/') {
                          handleScrollToSection('work')
                        } else {
                          await router.push('/')
                          handleScrollToSection('work')
                        }
                      }}
                    >
                      Work
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/blogs">
                    <div className="block w-full" onClick={() => close()}>
                      Resources
                    </div>
                  </Link>
                </li>
                {/* <li className="border-t border-slate-300/40 pt-4">
                  <BaseButton href="/register">Lets Talk</BaseButton>
                </li> */}
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </>
      )}
    </Popover>
  )
}

const Header = () => {
  const router = useRouter()

  return (
    <header className=" sticky top-0  z-50 w-full  font-medium sm:mx-auto">
      <Container className="flex justify-center -sm:px-0">
        <nav className="relative z-50 h-[63px] w-screen bg-primary-100 py-4 px-2 text-sm sm:mx-[67px] sm:h-[113px]  sm:py-8 sm:px-7">
          <ul className="flex items-center">
            <li>
              <Link href="/">
                <div className="">
                  <span className="sr-only">Home</span>
                  <Logo className="h-10 w-[117px] -md:h-[33px] " />
                </div>
              </Link>
            </li>

            <li className="ml-12 hidden md:block">
              <Link href="/services">
                <div
                  className={`rounded-lg py-1 px-2 text-slate-700   hover:underline hover:decoration-orange hover:decoration-1 ${
                    router.pathname === '/services'
                      ? 'underline decoration-orange decoration-1'
                      : ''
                  }`}
                >
                  Services
                </div>
              </Link>
            </li>

            <li className="ml-6 hidden md:block">
              <Link href="/aboutus">
                <div
                  className={`rounded-lg py-1 px-2 text-slate-700  hover:underline hover:decoration-orange hover:decoration-1 ${
                    router.pathname === '/aboutus' ? 'underline decoration-orange decoration-1' : ''
                  }`}
                >
                  Company
                </div>
              </Link>
            </li>

            <li className="ml-6 hidden md:block">
              <div
                onClick={async () => {
                  if (router.route === '/') {
                    handleScrollToSection('work')
                  } else {
                    await router.push('/')
                    handleScrollToSection('work')
                  }
                }}
                className={`cursor-pointer rounded-lg py-1 px-2 text-slate-700   hover:underline hover:decoration-orange hover:decoration-1 ${
                  router.pathname === '/#work' ? 'underline decoration-orange decoration-1' : ''
                }`}
              >
                Work
              </div>
            </li>

            <li className="ml-6 hidden md:block">
              <Link href="/blogs">
                <div
                  className={`rounded-lg py-1 px-2 text-slate-700   hover:underline hover:decoration-orange hover:decoration-1 ${
                    router.pathname === '/blogs' ? 'underline decoration-orange decoration-1' : ''
                  }`}
                >
                  Resources
                </div>
              </Link>
            </li>

            <li className="ml-auto md:block">
              <BaseButton href="/register">Lets Talk</BaseButton>
            </li>

            <li className="ml-5 -mr-1 md:hidden">
              <MobileNavigation />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
