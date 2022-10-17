import { useContext, useReducer, createContext } from "react";
import {ADD_TO_CART} from '../utils/actions'

import cartReducer from "../reducers/cartReducer";

const CartContext = createContext()

const initialState = {
    cart: [],
    total_items: 0,
    total_amount: 0,
    shipping_fee: 500
}

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addToCart = (id, single_product) => {
      dispatch({type: ADD_TO_CART, payload:{id, single_product}})
    }


    return <CartContext.Provider value={{
                    ...state,
                    addToCart}}>

        {children}
    </CartContext.Provider>
}

export const useCartContext = () => {
    return useContext(CartContext)
}