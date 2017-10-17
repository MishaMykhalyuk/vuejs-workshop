import { GET_PRODUCTS, ADD_TO_CART, DECREASE_INVENTORY, INCREASE_QUANTITY, REMOVE_FROM_CART } from './action-types.js'

export default {
    [GET_PRODUCTS](store, payload) {
        console.log(store, '____', payload)
    },
    [ADD_TO_CART]({ commit, state }, payload) {
        const record = getRecord(state.addedProducts, payload)
        if (!record) {
            commit(ADD_TO_CART, {
                ...payload,
                quantity: 1
            })
        } else {
            commit(INCREASE_QUANTITY, record)
        }

        commit(DECREASE_INVENTORY, payload)
    }
}

function getRecord(products, product) {
    return products.find(({ id }) => id === product.id)
}