<template>
    <div>
        <h2>Added products</h2>
        <ul>
            <li v-for="product in products">
            {{ product.title }} - {{ product.price }} x {{ product.quantity }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'added-products-list',
        props: {
            products: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>