import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Products from '../imports/ui/components/Products.vue';
import Orders from '../imports/ui/components/Orders.vue';
import History from '../imports/ui/components/Orders.vue';
import Profile from '../imports/ui/components/Profile.vue';

const routes = [
    {
    path: "/products",
    name: "Products",
    component: Products
    },
    {
    path: "/history",
    name: 'History',
    component: History
    }, 
    {
    path: "/orders",
    name: 'Orders',
    component: Orders
    },
    
    {
    path: "/profile",
    name: 'Profile',
    component: Profile
    },
    
]

const router = new VueRouter({
    routes
})

export default router