<template>
  <div>
    <h2>Shopping Cart</h2>
    <products-list :products="allProducts" @addToCart="addToCart"></products-list>
    <added-products-list :products="addedProducts"></added-products-list>
    <p>Total price: {{ totalPrice }} $</p>
  </div>
</template>

<script>
  import AddedProductsList from './AddedProductsList.vue'
  import ProductsList from './ProductsList.vue'
  import { GET_PRODUCTS, ADD_TO_CART } from '../store/action-types.js'

  export default {
    name: 'app',
    data: function () {
      return {}
    },
    components: {
      ProductsList,
      AddedProductsList
    },
    computed: {
      allProducts(){
        return this.$store.state.products //TODO: to getter
      },
      addedProducts(){
        return this.$store.state.addedProducts //TODO: to getter
      },
      totalPrice(){
        return this.$store.state.addedProducts
          .reduce((total, { price, quantity }) => {
            return total + price * quantity
          }, 0)
      }
    },
    methods: {
      addToCart(product){
        this.$store.dispatch(ADD_TO_CART, product)
      }
    },
    created(){
      // this.$store.dispatch(GET_PRODUCTS)
    }
  }
</script>

<style>

</style>
