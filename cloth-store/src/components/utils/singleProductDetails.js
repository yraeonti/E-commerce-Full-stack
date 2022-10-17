import React from "react";
import { Disclosure, Transition} from '@headlessui/react'

const SingleProductDetails = ({care, details}) => {


    return (
        <>
        <div className='flex md:flex-row flex-col justify-between w-full md:gap-x-16 gap-y-3 px-4 md:px-0'>

            <Disclosure as="div" className="w-full md:w-1/2 border-t-2">
            {({ open }) => (
            <>
            <Disclosure.Button className="flex justify-between py-2 w-full">
                DETAILS <span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`${open ? 'rotate-180 transform': ''} h-6 w-6 `} 
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                </span>
            </Disclosure.Button>
            <Transition
                enter="transition-all duration-100 ease-out"
                enterFrom="transform opacity-0"
                enterTo=" transform opacity-100"
                leave="transition-all duration-100 ease-out"
                leaveFrom="transform opacity-100"
                leaveTo="transform opacity-0"
            >
            <Disclosure.Panel className="text-gray-500">
                {details }
            </Disclosure.Panel>
            </Transition>
            </>
            )}

            </Disclosure>

            <Disclosure as="div" className="w-full md:w-1/2 border-t-2">
            {({ open }) => (
            <>
            <Disclosure.Button className="flex justify-between py-2 w-full">
                CARE <span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`${open ? 'rotate-180 transform' : ''}h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                </span>
            </Disclosure.Button>
            <Transition
                 enter="transition-all duration-100 ease-out"
                 enterFrom="transform opacity-0"
                 enterTo=" transform opacity-100"
                 leave="transition-all duration-100 ease-out"
                 leaveFrom="transform opacity-100"
                 leaveTo="transform opacity-0"
            >
            <Disclosure.Panel className="text-gray-500">
                {care}
            </Disclosure.Panel>
            </Transition>
            </>
            )}
            </Disclosure>

     </div>
        </>
    )

}

export default SingleProductDetails