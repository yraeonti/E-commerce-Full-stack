import React from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Link, Outlet} from 'react-router-dom';
import { navigation } from '../utils/constants';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-white">
    {({ open }) => (
      <>
        <div className="max-w-mainwidth mx-auto px-2 sm:px-6">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </Disclosure.Button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <div className="block lg:hidden h-8 w-auto">
                  <Link to='/'>
                  <h2 className="font-extrabold text-4xl tracking-wide italic"> FARFETCH</h2>
                  </Link>
                  
                </div>
                <div className="hidden lg:block h-8 w-auto">
                <Link to='/'>
                  <h2 className="font-extrabold text-4xl tracking-wide italic"> FARFETCH</h2>
                  </Link>
                </div>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-5">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className='uppercase font-medium text-gray-900 text-sm p-2 hover:bg-gray-200 hover:rounded transition ease-in duration-300'
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link to='/cart'>
              <button
                type="button"
                className=" p-1 rounded-full text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
              </button>
              </Link>

              
              <Link to='/login'>
              <button
                type="button"
                className="p-1 hidden sm:flex rounded-full text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Login</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                 </svg>
              </button>
              </Link>

              
            </div>
          </div>
        </div>
        <Transition
        enter="transition-opacity ease-in-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-in-out duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Disclosure.Panel className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 h-screen">
            {navigation.map((item) => (
              <Disclosure.Button key={item.name} className='block p-2 font-medium rounded text-left bg-gray-100 w-full hover:bg-gray-400 transition ease-in duration-300'>
              <Link to={item.href}
              >
                {item.name}
                </Link>
              </Disclosure.Button>
            ))}
            <Disclosure.Button className='block p-2 sm:hidden font-medium rounded text-left bg-gray-100 w-full hover:bg-gray-400 transition ease-in duration-300'>
              <Link to='/login'
              >
                Sign in
                </Link>
              </Disclosure.Button>
          </div>
        </Disclosure.Panel>
        </Transition>
      </>
    )}
  </Disclosure>
  );
};

export default Navbar


