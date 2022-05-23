<template>
        <tr v-bind:class="orderClassName">
            <td>{{ this.order.name}}</td>
            <td>{{ this.order.description}}</td>
            <td>{{ this.order.price}}</td>
            <td>{{ this.order.address}}</td>
            <td> <input
            type="checkbox"
            readOnly
            v-bind:checked="!!this.order.checked"
            @click="toggleChecked"
            /> </td>
        </tr>   
</template>

<script>
    import Vue from "vue";
    import { OrdersCollection } from "../../api/collections/OrdersCollection.js";
    export default {
    props: ["order"],
        data() {
        return {};
        },
    computed: {
        orderClassName: function() {
        return this.order.checked ? "checked" : "";
        }
    },
    methods: {
        toggleChecked() {
        Meteor.call('orders.setIsChecked', this.order._id, !this.order.checked);
        },
    }
};
</script>