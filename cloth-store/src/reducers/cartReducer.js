import {ADD_TO_CART} from '../utils/actions'


const cartReducer = (state, action) => {
    switch (action.type) {
          case ADD_TO_CART:
            console.log(action);
            const product = state.cart.find((item) => action.payload.id === item.id)
            if(product) {
               const tempCart = state.cart.map((item) => {
                 if(item.id === action.payload.id) {
                    let newAmount = item.amount + 1
                    return {...item, amount: newAmount}
                 }else {
                    return item
                 }
               })
               return {...state, cart: tempCart}
            }
            else {
                const newItem = {
                    id: action.payload.id,
                    amount: 1,
                    product: action.payload.single_product
                }
                return {...state, cart: [...state.cart, newItem]}
            }

        default:
            return state
    }
}

export default cartReducer