<template>
        <tr>
            <td>{{ this.product.name}}</td>
            <td>{{ this.product.description}}</td>
            <td>{{ this.product.price}}</td>
        <td v-if="currentUser.profile.usertype === 'Seller'">
        <button class="delete" @click="deleteThisProduct">×</button>
            </td>
            <td v-if="currentUser.profile.usertype === 'Buyer'">
                <button class="add" @click="addThisProduct" >Add</button>
            </td>
        </tr>   
</template>

<script>
    import Vue from "vue";
    export default {
    props: ["product"],
        data() {
        return {};
        },
    methods: {
        deleteThisProduct() {
        Meteor.call('products.remove', this.product._id);
    },
        addThisProduct() {
            var toSend = {
                    name:this.product.name,
                    description:this.product.description,
                    price:this.product.price,
                    userOfItem:this.product.userId
                };
        
            Meteor.call('history.insert', toSend);
        },
    },
    meteor:{
        currentUser() {
            return Meteor.user(); 
            }
    }
};
</script>