<template>
    <div class="app">
        <div class="main">
            <div class ="title-page">
                <h2>Orders
                <span v-if="incompleteCount > 0">({{incompleteCount}})</span>
                </h2>
            </div>
            <div class="filter">
                <button
                    v-model="hideCompleted"
                    @click="toggleHideCompleted"
                    >
                <span v-if="hideCompleted">Show All</span>
                <span v-else>Hide Completed Orders</span>
                </button>
            </div>
            <div class="loading" v-if="!$subReady.orders">Loading...</div>
            <table class="products">
                <tr>
                    <th> Name </th>
                    <th> Description </th>
                    <th> Price </th>
                    <th> Address </th>
                    <th> Completed </th>
                </tr>
                <Order 
                class="product"
                v-for="order in orders"
                v-bind:key="order._id"
                v-bind:order="order" 
                />
                
            </table>
        </div>
    </div>
</template>