import React from 'react';

import {Products as ProductsScreen} from '../components'
import {ProductsFilter} from '../components/utils'
import {Loading, LoadingError} from '../components'
import {useProductContext} from '../context/ProductContext'

const Products = () => {

 const {state} = useProductContext()
 const {loader, products_error} = state
 
 if (loader) {
  return (
      <>
      <Loading/>
      </>
  )
}
if (products_error) {
  return (
      <>
      <LoadingError/>
      </>
  )
}
  return (
    <>
       <section className='md:p-10'>
          <ProductsFilter/>
          <ProductsScreen/>

      </section>
      
    </>
  
  );
};


export default Products