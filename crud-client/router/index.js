import HelloWorld from "@/components/HelloWorld.vue";
import HomePage from "@/components/HomePage.vue"
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
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
}) 
export default router;