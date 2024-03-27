<!-- script -->
<script setup>
// imports
import { RouterLink } from  "vue-router";
</script>


<template>
  <header>
    <nav class="container">
      <!-- logo image -->
      <div class="branding">
        <img src="../../assets/meepleLogo.png">
        <h1>Meet Your Meeples</h1>
      </div>
      <!-- page links -->
      <ul class="nav-routes">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About Us</router-link>
        <router-link to="/account" >Account</router-link>
        <router-link to="/account" data-bs-toggle="modal" data-bs-target="#logInModal">Login</router-link>
      </ul>
    </nav>
  </header>

  <!-- log in modal -->
  <div class="modal fade" id="logInModal" tabindex="-1" aria-labelledby="logInModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">

        <form class="mx-5">
          <div class="text-center">
            <img class="mt-5" src="../../assets/meepleLogo.png"
                 height="200" width="200" />
            <h1 class="h3 mt-2 font-weight-normal">Please Login</h1>
          </div>

          <label for="email" class="sr-only">Email</label>
          <input type="email" id="email" class="form-control" placeholder="jsmith@gmail.com" required autofocus>

          <label for="password" class="sr-only mt-3">Password</label>
          <input type="password" id="password" class="form-control" placeholder="Password" required autofocus>

          <div class="checkbox my-4">

            <input type="checkbox" value="rememeber-me" id="remember-me">
            <label for="remember-me" class="form-check-label mx-1">Rememeber Me</label>
          </div>

          <div class="text-center mb-2 mt-0">
            <router-link to="/account">
              <button class="btn btn-lg btn-warning">Login</button>
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<!-- style : scoped -->
<style lang="sass" scoped>
header
  background-color: #023859
  nav
    display: flex
    align-items: center
    padding: 14px 10px

    .branding
      display: flex
      align-items: center
      gap: 15px
      img
        max-width: 50px
      h1
        padding-top: 10px
        font-size: 24px
        color: #d2edfe

    .nav-routes
      padding-top: 20px
      display: flex
      flex: 1
      justify-content: flex-end
      gap: 30px
      list-style: none
      a
        text-decoration: none
        color: #d2edfe
#login-btn
  text-decoration: none
  color: black


</style>