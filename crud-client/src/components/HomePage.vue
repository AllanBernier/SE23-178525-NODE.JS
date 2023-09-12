<template>
    <div>
        <h1>This is home page</h1>
    </div>

    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product._id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.description }}</td>
                <td>{{ product.price }}</td>
                <th>
                    <router-link to="#">Update</router-link>
                    <button @click.prevent="deleteProduct(product._id)">Delete</button>
                </th>
            </tr>
        </tbody>
    </table>
</template>


<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'

    
const products = ref({})

const getAllProduct = () => {
    axios.get('http://localhost:3000/product')
    .then( result => products.value = result.data )
}

const deleteProduct = (id) => {

    products.value = products.value.filter(product => product._id)
    axios.delete(`http://localhost:3000/product/${id}/delete`)
    .then( result => products.value = result.data )
}


onMounted( () => {
    getAllProduct()
})

</script>