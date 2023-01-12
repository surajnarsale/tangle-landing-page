import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { BaseButton } from '@/components/atoms/BaseButton'
import { Container } from '@/components/atoms/Container'
import { Logo } from '@/components/atoms/Logo'

function MobileNavigation() {
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <Popover.Button className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none">
            <span className="sr-only">Toggle Navigation</span>
            <svg
              aria-hidden="true"
              className="stroke-slate-700 h-3.5 w-3.5 overflow-visible"
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
              <Popover.Overlay className="bg-slate-300/50 fixed inset-0" />
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
                className="bg-white text-slate-900 ring-slate-900/5 absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl p-6 text-lg tracking-tight shadow-xl ring-1"
              >
                <li>
                  <Link href="#features">
                    <div className="block w-full" onClick={() => close()}>
                      Features
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials">
                    <div className="block w-full" onClick={() => close()}>
                      Testimonials
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#pricing">
                    <div className="block w-full" onClick={() => close()}>
                      Pricing
                    </div>
                  </Link>
                </li>
                <li className="border-slate-300/40 border-t pt-4">
                  <Link href="/login">
                    <div className="block w-full">Sign in</div>
                  </Link>
                </li>
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </>
      )}
    </Popover>
  )
}

const Header = () => {
  return (
    <header className=" py-10">
      <Container>
        <nav className="relative z-50 text-sm">
          <ul className="flex items-center">
            <li>
              <Link href="#">
                <div className="">
                  <span className="sr-only">Home</span>
                  <Logo className="h-10 w-auto" />
                </div>
              </Link>
            </li>
            <li className="ml-12 hidden md:block">
              <Link href="#features">
                <div className="text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded-lg py-1 px-2">
                  Features
                </div>
              </Link>
            </li>
            <li className="ml-6 hidden md:block">
              <Link href="#testimonials">
                <div className="text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded-lg py-1 px-2">
                  Testimonials
                </div>
              </Link>
            </li>
            <li className="ml-6 hidden md:block">
              <Link href="#pricing">
                <div className="text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded-lg py-1 px-2">
                  Pricing
                </div>
              </Link>
            </li>
            <li className="ml-auto hidden md:block">
              <Link href="/login">
                <div className="text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded-lg py-1 px-2">
                  Sign in
                </div>
              </Link>
            </li>
            <li className="ml-auto md:ml-8">
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
