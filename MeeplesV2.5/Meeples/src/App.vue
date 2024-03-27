<script setup>
import { RouterView } from 'vue-router'
import MeepleNavbar from "./components/shared/AppNavbar.vue";
import MeepleFooter from "@/components/shared/AppFooter.vue";

</script>

<template>
  <MeepleNavbar /> <!-- navbar will display on each page -->
  <RouterView />
  <MeepleFooter/>
</template>

<!-- over all styling -->
<!-- Note: it is NOT 'scoped' -->
<style lang="scss">

* {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container{
  max-width: 1100px;
  margin: 0 auto;
}

meeple-footer{
  float: bottom;
}

</style>