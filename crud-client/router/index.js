import HelloWorld from "@/components/HelloWorld.vue";
import HomePage from "@/components/HomePage.vue"
import CreateProduct from "@/components/CreateProduct.vue"
import ShowProduct from "@/components/ShowProduct.vue"
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Welcome",
        component: HelloWorld
    },
    {
        path: "/home",
        name: "HomePage",
        component: HomePage
    },
    {
        path: "/product/:id/edit",
        name: "EditProduct",
        component: CreateProduct
    },
    {
        path: "/product/:id/show",
        name: "ShowProduct",
        component: ShowProduct
    },
    {
        path: "/product",
        name: "CreateProduct",
        component: CreateProduct
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
}) 
export default router;