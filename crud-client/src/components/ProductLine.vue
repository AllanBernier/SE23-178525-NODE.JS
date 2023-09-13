<template>
    <tr>
        <td>{{ product._id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.description }}</td>
        <td>{{ product.price }}</td>
        <th>
            <router-link :to="{name: 'EditProduct', params: { id : product._id} }">Update</router-link>
            <router-link :to="{name: 'ShowProduct', params: { id : product._id} }">Show</router-link>
            <button class="btn btn-danger" @click.prevent="$emit('delete', product._id)">Delete</button>
        </th>
    </tr>
</template>


<script setup>
import {defineProps} from 'vue'

defineProps({
    product : Object
})
</script>