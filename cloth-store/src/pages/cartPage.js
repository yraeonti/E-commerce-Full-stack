import React from 'react' 
import {Link} from 'react-router-dom'
import {useCartContext} from '../context/cartContext'

const CartPage = () => {
    const {cart} = useCartContext()
    if(cart.length == 0) {
        return (
              <div className='flex flex-col items-center mt-20'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>

                  <h2 className='mt-4 font-medium tracking-wider'>
                    Your bag is empty
                  </h2>

                  <h3 className='mt-2 font-medium tracking-wide'>
                    You can shop for items. Click on the button below
                  </h3>

                  <Link to='/products' className='h-10 lg:w-1/4 md:w-2/4 w-3/4'>
                  <button type='button' className='h-full w-full bg-black text-white rounded-md mt-6'>Go to shop</button>
                  </Link>
            </div>
    ) 
    }
    return(
        <div>
            Full cart
        </div>
    )
}

export default CartPage