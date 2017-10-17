import { GET_PRODUCTS, ADD_TO_CART, DECREASE_INVENTORY, INCREASE_QUANTITY } from './action-types.js'

export default {
    [ADD_TO_CART](state, product){
        state.addedProducts.push(product)
    },
    [DECREASE_INVENTORY](state, product){
        const addedProduct = state.products.find(({ id }) => id === product.id)
        if (addedProduct.inventory > 0) {
            addedProduct.inventory--
        }
    },
    [INCREASE_QUANTITY](state, product){
        const addedProduct = state.addedProducts.find(({ id }) => id === product.id)
        const cartProduct = state.products.find(({ id }) => id === product.id)
        if (cartProduct.inventory) {
            addedProduct.quantity++
        }
    }

}