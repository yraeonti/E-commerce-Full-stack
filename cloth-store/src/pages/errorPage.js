import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
  <div className='flex flex-col justify-center items-center h-screen'>
    <div><img src="../images/error.png" alt="error image" className="w-20 h-20"/></div>
    <h1 className='text-black font-bold mt-4'>Oh No...</h1>
    <p className='text-black font-normal mt-2'>Sorry! The page you are looking for was not found.</p>
    <Link to='/'>
    <button className='bg-black text-white font-bold w-60 h-14 mt-4'>HOME</button>
    </Link>
  </div>
  );
};

export default ErrorPage