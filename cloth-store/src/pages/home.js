import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/image.png'
import image2 from '../assets/image2.jpg'
import { shop } from '../utils/data';
import { Outlet } from "react-router-dom";
import { Loading } from '../components';
// import { useProductContext } from '../context/ProductContext';

const Home = () => {

  // const {state} = useProductContext()



  return (
  <>
  <main className='pt-6'>
    <div className='grid max-w-mainwidth mx-auto'>
    <div>
      <Link to=''> 
        <img className="w-full" src={image} alt="image"/>
      </Link>
    </div>

    <div className='mt-8'>
      <Link to=''>
        <div className='relative flex justify-center'>
        <img className=" sm:w-3/4" src={image2} alt="image"/>
        <div className='absolute top-1/2 bottom-1/2 '>
            <h1 className='text-white bg-opacity-50 text-3xl border-4 hover:bg-neutral-300'>Shop Women's</h1>
        </div>
        </div>
      </Link>
    </div>
    <div className='mt-8 grid sm:grid-cols-4'>
      {shop.map((item => {
        return (
          <Link to={item.url} key={item.id}>
           <div className='overflow-hidden'>
         <img className="hover:scale-105 transition ease-in-out duration-500 hover:object-contain" src={item.image} alt="image"/>
         </div>
       </Link>
        )
      }))}
    </div>
    </div>
  </main>
  <Outlet/>
  </>
  );
};


export default Home