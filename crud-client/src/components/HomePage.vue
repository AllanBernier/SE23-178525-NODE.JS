<template>
    <div>
        <h1>This is home page</h1>
    </div>
    <div class="pt-5 d-flex justify-content-center">
        <table class="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>

            <tbody>
                <product-line v-for="product in products" :product="product" :key="product._id" @delete="deleteProduct"/>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import {ref, onMounted, defineEmits} from 'vue'
import axios from 'axios'
import ProductLine from './ProductLine.vue';


defineEmits(["delete"])

const products = ref({})

const getAllProduct = () => {
    axios.get('http://localhost:3000/product')
    .then( result => products.value = result.data )
}

const deleteProduct = (id) => {
    axios.delete(`http://localhost:3000/product/${id}/delete`)
    .then( () => products.value = products.value.filter(product => product._id !== id) )
}


onMounted( () => {
    getAllProduct()
})

</script>