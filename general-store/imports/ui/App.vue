<template>
  <div class="app">
  <template v-if="currentUser">
    <header>
      <div class="app-bar">
        <div class="app-header">
          <h1>GeneralStore</h1>
        </div>
        
        <div class="app-menu">
          <router-link to="/products" class="item">Products</router-link>
          <div v-if="currentUser.profile.usertype === 'Seller'"> 
            <router-link to="/orders" class="item" >Orders</router-link>
          </div>
          <div>
            <router-link to="/cart" class="item" v-if="currentUser.profile.usertype === 'Buyer'">Cart</router-link>
          </div>
          
          <router-link to="/profile" class="item">Profile</router-link>
        </div>
        <div class="login">
          <div class="item">
          <div class="user" v-on:click="logout"> {{currentUser.username}} 🔒</div> 
          </div>
        </div>
      </div>
    </header>
    <div>
      <router-view></router-view>
    </div>
    </template>
    <template v-else>
      <div id="login"> 
        <LoginForm />
      </div>
      <div >
        <center><button class="register" @click="switchFunction()" >Register</button></center>
      </div>  
      <div id="register" class="HideForm"> 
        <SignupForm />
      </div>
      
    </template>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";
import SignupForm from "./components/SignupForm.vue";
export default {
  components: {
    LoginForm,
    SignupForm
  },
  methods:{
    switchFunction(){
        var x = document.getElementById("register");
        //var y = document.getElementById("register");
        if (x.style.display === "none" ) {
        x.style.display = "block";
        } else {
        x.style.display = "none";
        }
    }, 
    logout() {
            Meteor.logout();
          }
  },
  meteor: {
    currentUser() {
    return Meteor.user();
}
  }
}
</script>

<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
</style>