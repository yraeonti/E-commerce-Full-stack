import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
// import { products } from '../utils/data'
import {useProductContext} from '../context/ProductContext'



const ProductsScreen = () => {

const {state, getProducts} = useProductContext()
const {loader, products_error} = state
    return <>
    <section>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-8'>
                {state.products.map((product) => (
                <div className='mx-auto' key={product.id}>   
                  <div>
                  <Link to={`/product/${product.id}`} key={product.id}>
                      <div className=''>
                          <img className="" src={product.image} alt="product"/>
                      </div>
                    </Link>
                      <div className='pl-4 md:pl-0'>
                          <h4 className='text-sm italic text-slate-400 mb-0'>{product.brand}</h4>
                          <Link to={`/product/${product.id}`}>
                          <p className='text-gray-700 font-semibold text-md mt-0 hover:border-b overflow-hidden'>{product.name}</p>
                          </Link>
                          <h4 className='text-gray-700 font-semibold text-sm'>${product.price}</h4>
                      </div>
                  </div>
                
                </div>
                ))}
        </div>
    </section>
    </> 
}

export default ProductsScreen