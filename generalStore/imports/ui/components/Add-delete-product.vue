<template>
        <tr>
<td v-if="currentUser.profile.usertype === 'Seller'">
<button class="delete" @click="deleteThisProduct">×</button>
            </td>
            <td v-if="currentUser.profile.usertype === 'Buyer'">
                <button class="add" @click="addThisProduct" >Add</button>
            </td>
        </tr>   
</template>