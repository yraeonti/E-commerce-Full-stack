import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../context/ProductContext'
import {Loading, LoadingError} from '../components'
import {useCartContext} from '../context/cartContext'
import {ProductsCarousel, SingleProductDetails, ProductStars} from '../components/utils'



const SingleProduct = () => {

    const {state, getSingleProduct} = useProductContext()
    
    const {addToCart} = useCartContext()

    const {single_product, loader, products_error} = state
    const { name, price, details, care, img, stars} = single_product

    const carousel = {img, name}

    console.log(img);



    const {id} = useParams()

    useEffect(() => {
     getSingleProduct(id)
    },[id])


    return (
        <>
        <main className='p-2 xl:mx-36 lg:mx-20 md:p-10 min-h-screen'>
        <div className='flex flex-col justify-center lg:justify-start gap-y-8'>
            <div className="flex md:flex-row flex-col md:gap-x-10 gap-y-9">
            <ProductsCarousel img={img} name={name}/>
            
            <div className='md:mt-10 space-y-5 px-4 md:px-0'>
            <h4 className='text-xl '>{name}</h4>

             <h4 className='text-xl font-bold tracking-wider'>${price}</h4>

            <ProductStars stars={stars}/>

             <h4 className='text-base font-bold text tracking-wide'>Colour: <span className='text-lg font-light ml-3'>White </span></h4>

             <h4 className='text-base font-bold tracking-wide'>Size: <span className='text-lg font-light ml-3'> Pick me </span></h4>

             <div className='flex items-center md:justify-start justify-between space-x-4 w-full'>
             <button type='button' onClick={() => {
                console.log(id, single_product);
                return addToCart(id, single_product)}} className='md:w-9/12 w-5/6 h-11 bg-gray-700 text-white hover:bg-zinc-900'> add to bag</button>

             <div className='border-2 p-2 border-solid border-black'>

             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:fill-gray-900 transition ease-in-out duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
             </div>

             </div>
             
            </div>
            
            </div>

            <SingleProductDetails care={care} details={details}/>

           
        
        </div>

        </main>
        </>

    )
}

export default SingleProduct