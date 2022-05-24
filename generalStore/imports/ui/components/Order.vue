<template>
        <tr v-bind:class="orderClassName">
            <td>{{ this.order.name}}</td>
            <td>{{ this.order.description}}</td>
            <td>{{ this.order.price}}</td>
            <td v-if="currentUser.profile.usertype === 'Seller'">{{ this.order.address}}</td>
            <td v-if="currentUser.profile.usertype === 'Seller'"> <input
            type="checkbox"
            readOnly
            v-bind:checked="!!this.order.checked"
            @click="toggleChecked"
            /> </td>
            <td v-if="currentUser.profile.usertype === 'Buyer' && this.order.checked"> Order Accepted! </td>
            <td v-if="currentUser.profile.usertype === 'Buyer' && !this.order.checked"> Not accepted yet! </td>
        </tr>   
</template>

<script>

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
    },
    meteor: {
    currentUser() {
    return Meteor.user();
}
  }
};
</script>