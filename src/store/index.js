import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [
            {
                "id": 1,
                "title": "iPad 4 Mini",
                "price": 500,
                "inventory": 20
            },
            {
                "id": 2,
                "title": "iPhone 7",
                "price": 750,
                "inventory": 10
            },
            {
                "id": 3,
                "title": "MacBook Air",
                "price": 1300,
                "inventory": 5
            },
            {
                "id": 4,
                "title": "MacBook Pro",
                "price": 1900,
                "inventory": 5
            }
        ],
        addedProducts: []
    },
    actions,
    mutations,
    getters: {
        cartProducts(state) {
            return state.addedProducts.map(({ id, quantity }) => {
                const record = state.products.find(product => product.id === id)
                return {
                    title: record.title,
                    price: record.price,
                    quantity
                }
            })
        }
    }
})