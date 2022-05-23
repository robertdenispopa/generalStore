<template>
    <div>
        <form class="signup-form" @submit.prevent="handleSubmit">
            
                <label for="username">Username</label>
                <input
                    id="signUp_username"
                    name="username"
                    type="text"
                    placeholder="Username"
                    required
                    v-model="toSend.username"
                />

                <label for="password">Password</label>
                <input
                    id="signUp_password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    v-model="toSend.password"
                />

                <label for="usertype">UserType</label>
                <select id="usertype" name="usertype" v-model="toSend.profile.usertype">
                    <option value="Buyer" selected >Buyer</option>
                    <option value="Seller">Seller</option>
                </select>

                <label for="fullname">Fullname</label>
                <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    placeholder="Fullname"
                    required
                    v-model="toSend.profile.address"
                />

                <label for="address">Address</label>
                <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Address"
                    required
                    v-model="toSend.profile.address"
                />

                <label for="phone">Phone</label>
                <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Phone"
                    required
                    v-model="toSend.profile.phone"
                />

                <button type="submit">Create Account</button>
        </form>
    </div>
</template>

<script>
import { Meteor } from 'meteor/meteor';
export default {
    name: "SignupForm",
    data() {
    return {
        toSend:{
            username: "",
            password: "",
            profile: {
                
                usertype: "",
                fullname:"",
                address: "",
                phone:"",
            }
        }
        };
    },
    
    methods: {
    handleSubmit(event) {
        Meteor.call('account.create', this.toSend);
    }
    },
}
</script>