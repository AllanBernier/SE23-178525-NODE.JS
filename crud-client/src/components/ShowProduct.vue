<template>
    <div class="pt-5 d-flex justify-content-center">
        <div class=" card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">{{ product.description }}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Id : {{ product._id }}</li>
                <li class="list-group-item">price : {{ product.price }}</li>
            </ul>
            <div class="card-body">
                <my-router-link :to="{name: 'HomePage'}" color="btn-primary">
                    Home
                </my-router-link>
                <my-router-link :to="{name: 'EditProduct', params: { id : route.params.id} }" color="btn-success">
                    Update
                </my-router-link>



            </div>
        </div>
    </div>
</template>

<script setup>

import MyRouterLink from './MyRouterLink.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute  } from 'vue-router';

const route = useRoute()

const product = ref({})

const getProduct = () => {
    if (route.params.id) {
        axios.get(`http://localhost:3000/product/${route.params.id}`)
        .then( (result) => {
            product.value = result.data
        })
    }
}
onMounted( ()=> {
    getProduct();
})
</script>