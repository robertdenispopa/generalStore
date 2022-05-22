<template>
    <div class="app">
        
        <div class="main">
            <div class ="title-page">
                <h2>Products</h2>
            </div>
            <div v-if="this.currentUser.profile.usertype === 'Seller' ">
                <ProductForm/>
            </div>
            <table class="products">
                <tr>
                    <th> Name </th>
                    <th> Description </th>
                    <th> Price </th>
                    <th></th>
                </tr>
                <Product 
                class="product"
                v-for="product in products"
                v-bind:key="product._id"
                v-bind:product="product" 
                />
                
            </table>
            <ul >
                
            </ul>
        </div>
    </div>
</template>

import Vue from "vue";
import Product from "./Product.vue";
import ProductForm from "./ProductForm.vue";
import { ProductsCollection } from "../../api/collections/ProductsCollection.js";