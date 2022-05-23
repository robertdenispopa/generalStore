<template>
    <form class="product-form" @submit.prevent="handleSubmit">
    <input
        type="text"
        placeholder="Name..."
        v-model="newName"
    />
    <input
        type="text"
        placeholder="Description..."
        v-model="newDescription"
    />
    <input
        type="text"
        placeholder="Price..."
        v-model="newPrice"
    />
    <button type="submit">Add Product</button>
    </form>
</template>

<script>

    export default {
    data() {
        return {
        newName: "",
        newDescription:"",
        newPrice: ""
        }
    },
    methods: {
    handleSubmit(event) {
            if (this.newName.length === 0) return;
            var toSend = {
                name:this.newName,
                description:this.newDescription,
                price:this.newPrice,
            };
            Meteor.call('products.insert', toSend);
        // Clear form
            this.newName = "";
            this.newDescription = "";
            this.newPrice = "";
}
},
}
</script>