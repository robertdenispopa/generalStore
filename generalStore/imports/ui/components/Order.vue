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