<template>
  <div>
    <h3>Products</h3>
     <ul>
        <li v-for="product in products">
            {{ product.title }} - {{ product.price }}
            <p>Left: {{ product.inventory }}</p>
            <button :disabled="!product.inventory" @click="addToCart(product)">Add to cart</button>
        </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'products-list',
        props: {
            products: {
                type: Array,
                default(){
                    return []
                }
            }
        },
        methods: {
            addToCart(product) {
                this.$emit('addToCart', product)
            }
        }
    }
</script>

<style>

</style>
