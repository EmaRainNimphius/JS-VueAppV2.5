<!-- script -->
<script setup>

import { RouterLink } from  "vue-router";

</script>

<!-- template -->
<template>
  <!-- footer -->
  <div class="container">
    <footer>
      <ul class="footer justify-content-center border-bottom pb-3 mb-3">
        <ul class="footer-routes">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About Us</router-link>
          <router-link to="/account">Account</router-link>
        </ul>
      </ul>
      <p id="copy" class="text-center text-body-secondary">&copy; 2023 Company, Inc</p>
    </footer>
  </div>
</template>

<!-- style -->
<style lang="sass" scoped>
.container
  padding-top: 100px
  margin-bottom: 100px
.footer-routes
  display: flex
  flex: 1
  justify-content: center
  gap: 30px
  list-style: none
  a
    text-decoration: none
    color: gray
#copy
  margin-left: 35px


</style>