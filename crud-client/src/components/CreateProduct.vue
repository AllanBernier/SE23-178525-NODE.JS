<template>
    <div>
        <h1>Create product page</h1>
    </div>

    <form @submit.prevent="submit">
        <label for="name">Name</label>
        <input type="text" name="name" v-model="product_data.name">

        <label for="description">Description</label>
        <input type="text" name="description" v-model="product_data.description">

        <label for="price">Price</label>
        <input type="number" name="price" v-model="product_data.price">

        <input type="submit" :value="route.params.id ? 'Update' : 'Create'">
    </form>


</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute()

const product_data = ref({
    name : '',
    description : '',
    price : ''
})

const submit = () => {

    if (route.params.id){
        axios.put(`http://localhost:3000/product/${route.params.id}/edit`,product_data.value)
        .then( () => {
            router.push({name : 'HomePage'})
        })
    } else {
        axios.post('http://localhost:3000/product/create',product_data.value)
        .then( (res) => {
            router.push({name: 'EditProduct', params: { id : res.data._id}})
        });
    }

}

const getProduct = () => {
    if (route.params.id) {
        axios.get(`http://localhost:3000/product/${route.params.id}`)
        .then( (result) => {
            product_data.value = result.data
        })
    }
}

onMounted( ()=> {
    getProduct();
})

</script>