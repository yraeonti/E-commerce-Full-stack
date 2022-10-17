import React from 'react'
import { Tab } from '@headlessui/react'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const LoginPage = () => {
    return (
    <div className='bg-gray-100 min-h-screen flex justify-center py-9'>

        <div className='bg-white lg:w-2/4 w-11/12 p-5 flex flex-col items-center'>
            <Tab.Group>
                <Tab.List className='w-11/12 lg:h-20 md:h-14 h-10 flex justify-evenly text-base tracking-wider'>
                    <Tab className={({selected}) =>
                        
                        selected ? 'w-full  border-b-2 border-b-orange-400 border-r border-r-gray-200' 
                                 : 'w-full border-b border-b-gray-400 border-r border-r-gray-200 hover:bg-gray-50'}>
                        JOIN
                    </Tab>
                    <Tab className={({selected}) => 
                        selected ? 'w-full border-b-2 border-b-orange-400' 
                                 : 'w-full border-b border-b-gray-400 hover:bg-gray-50'}>
                        LOGIN
                    </Tab>

                </Tab.List>


                <Tab.Panels className="w-full h-full mt-14 flex flex-col items-center">
                    <Tab.Panel className='w-full h-full flex flex-col items-center'>
                        <form className='2xl:w-1/2 lg:w-2/3 md:w-3/4 w-11/12 h-full'>
                            <label htmlFor='email' className='w-full text-left text-base text-gray-900 opacity-80 font-medium tracking-wider'> EMAIL ADDRESS</label>
                            <input type='email' id='email' className='w-full mt-4 mb-4 h-12 p-2 border-2 rounded border-gray-300 focus:border-black focus:outline-none' required/>

                            <label htmlFor='first_name' className='w-full text-left text-base text-gray-900 opacity-80 font-medium tracking-wider'> FIRST NAME</label>
                            <input type='text' id='first_name' className='w-full mt-4 mb-4 h-12 p-2 border-2 rounded border-gray-300 focus:border-black focus:outline-none' required/>

                            <label htmlFor='last_name' className='w-full text-left text-base text-gray-900 opacity-80 font-medium tracking-wider'> LAST NAME</label>
                            <input type='text' id='last_name' className='w-full mt-4 mb-4 h-12 p-2 border-2 rounded border-gray-300 focus:border-black focus:outline-none' required/>

                            <label htmlFor='password' className='w-full text-left text-base text-gray-900 opacity-80 font-medium tracking-wider'> PASSWORD</label>
                            <input type='password' id='password' className='w-full mt-4 mb-4 h-12 p-2 border-2 rounded border-gray-300 focus:border-black focus:outline-none' required/>

                            <input type='submit' className='w-full bg-slate-800 hover:bg-opacity-60 h-12 p-2 rounded text-white mt-5' value='JOIN'/>

                        </form>
                        
                    </Tab.Panel>

                    <Tab.Panel className='w-full h-full flex flex-col items-center'>
                    <form className='2xl:w-1/2 lg:w-2/3 md:w-3/4 w-11/12 h-full'>
                        <label htmlFor='email' className='w-full text-left text-base text-gray-900 opacity-80 font-medium tracking-wider'> EMAIL ADDRESS</label>
                        <input type='email' id='email' className='w-full mt-4 mb-4 h-12 p-2 border-2 rounded border-gray-300 focus:border-black focus:outline-none' required/>

                        <label htmlFor='password' className='w-full text-left text-base text-gray-900 opacity-80 font-medium tracking-wider'> PASSWORD</label>
                        <input type='password' id='password' className='w-full mt-4 mb-4 h-12 p-2 border-2 rounded border-gray-300 focus:border-black focus:outline-none' required/>


                        <input type='submit' className='w-full bg-slate-800 hover:bg-opacity-60 h-12 p-2 rounded text-white mt-5' value='LOGIN'/>

                        <h3 className='tracking-wide text-base mt-3 text-center hover:opacity-60 cursor-pointer'>Forgot password?</h3>

                    </form>
                    </Tab.Panel>

                </Tab.Panels>

            </Tab.Group>

        </div>

    </div>
        
    )
}

export default LoginPage