

import {START_LOADING, 
        STOP_LOADING, 
        GET_PRODUCTS_ERROR, 
        GET_PRODUCTS, 
        GET_SINGLE_PRODUCT, 
        GET_SINGLE_PRODUCT_ERROR} from '../utils/actions'

const ProductReducer = (state, action) => {
      switch (action.type) {
          case GET_PRODUCTS:
            return {...state, products: action.payload}

          case START_LOADING:
            return {...state, loader: true, products_error: false}

          case STOP_LOADING:
            return {...state, loader: false}

          case GET_PRODUCTS_ERROR:
            return {...state, loader: false, products_error: true}

          case GET_SINGLE_PRODUCT:
            return {...state, loader: false, single_product: action.payload}

            
          default:
              return state;
      }
}

export default ProductReducer