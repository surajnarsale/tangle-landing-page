import type { PropsWithChildren } from 'react'

import clsx from 'clsx'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { Container } from '../atoms/Container'
import { BaseButton } from '@/components/atoms/BaseButton'

const serviceOptions = [
  { id: 1, name: 'UX Design', unavailable: false },
  { id: 2, name: 'Web Development', unavailable: false },
  { id: 3, name: 'UI Design', unavailable: false },
]

type EnquiryFormProps = {
  className?: string
}

const EnquiryForm = (props: PropsWithChildren<EnquiryFormProps>): JSX.Element => {
  const [selectedService, setSelectedService] = useState(serviceOptions[0])

  return (
    <div className={clsx('bg-primary-300 py-12', props.className)}>
      <Container className="mx-auto max-w-[1110px] px-5 pb-5 text-dark-500 ">
        <p className=" text-xl ">Have a project on mind?</p>
        <p className="mt-3 font-melodrama text-5xl font-semibold -md:text-2xl">hey@tangle.co.in</p>

        <Listbox value={selectedService} onChange={setSelectedService}>
          <div className="mt-10">
            <Listbox.Button className="focus-visible:ring-offset-orange-300 relative w-full cursor-default rounded-full  border border-dark-400 px-7 py-5  pl-3  text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 sm:text-sm">
              <span className="block truncate">{selectedService.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon className="h-10 w-10 text-dark-500" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full max-w-[21rem] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm md:max-w-screen-lg">
                {serviceOptions.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
        <input
          type="text"
          placeholder="Your Name"
          className="mt-7 w-full cursor-default rounded-full border border-dark-400  bg-transparent px-7 py-5 pl-3  text-left  text-dark-500 placeholder-dark-500 focus:outline-none focus-visible:bg-primary-300 focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-400 sm:text-sm"
        />
        <input
          type="text"
          placeholder="Your Email"
          className="mt-7 w-full cursor-default rounded-full border border-dark-400  bg-transparent px-7 py-5 pl-3  text-left  text-dark-500 placeholder-dark-500 focus:outline-none focus-visible:bg-primary-300 focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-400 sm:text-sm"
        />

        <textarea
          className="mt-7 h-60 w-full cursor-default resize-y rounded-[35px] border border-dark-400  bg-transparent px-7 py-5 pl-3  text-left  text-dark-500 placeholder-dark-500 focus:outline-none focus-visible:bg-primary-300 focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-400 sm:text-sm"
          placeholder="How may we help you?"
        ></textarea>

        <BaseButton href="/submit" className="mt-10 h-12 text-center ">
          Submit
        </BaseButton>
      </Container>
    </div>
  )
}

export default EnquiryForm
