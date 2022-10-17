import React, { createContext, useReducer, useContext, useEffect } from "react"
import reducer from '../reducers/ProductReducer'
import { START_LOADING, STOP_LOADING, GET_PRODUCTS_ERROR, GET_PRODUCTS, GET_SINGLE_PRODUCT, GET_SINGLE_PRODUCT_ERROR } from "../utils/actions"
import axios from 'axios'

const ProductStore = createContext()
 
const initState = {
     loader: false,
     products_error: false,
     products : [],
     single_product: {}
}

 export const ProductProvider = ({children}) => {
      const [state, dispatch] = useReducer(reducer, initState)
      
      const getProducts = async () => {
           dispatch({type:START_LOADING})

           try {
               const result = await axios.get('/api/v1/products')
               dispatch({type: GET_PRODUCTS, payload: result.data})
               
               setTimeout(() => dispatch({type:STOP_LOADING}), 4000)
               
           } catch (error) {
               console.log(error) 
               dispatch({type:GET_PRODUCTS_ERROR})
           }
         
      }

      useEffect(() => {
          getProducts()
      }, [])

      const getSingleProduct = async (id) => {
          dispatch({type:START_LOADING})
          try {
               const result = await axios.get(`/api/v1/products/${id}`)
               console.log(result)

               dispatch({type: GET_SINGLE_PRODUCT, payload: result.data })

               dispatch({type:STOP_LOADING})
          } catch (error) {
               console.log(error)

               dispatch({type:GET_PRODUCTS_ERROR})
          }
      }

    return <ProductStore.Provider value={{state, getProducts, getSingleProduct}}>
           {children}
          </ProductStore.Provider>
}

export const useProductContext = () => {
     return useContext(ProductStore)
}
