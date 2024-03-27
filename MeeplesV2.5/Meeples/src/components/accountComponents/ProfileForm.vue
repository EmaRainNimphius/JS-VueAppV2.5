<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      nickname: ref('Click me')
    }
  }
}


</script>

<template>
  <!-- first & last-->
  <div class="row">
    <div class="col-md-3">
      <q-input borderless v-model="text" label="Jane" />
    </div>
    <div class="col-md-3">
      <q-input borderless v-model="text" label="Doe" />
    </div>
    <hr class="pb-3">
  </div>

  <!-- bio -->
  <div class="row">
    <label for="bio" class="fw-bold">Bio:</label>
    <textarea class="py-1" id="bio" style="border: none" v-model="text" type="text" placeholder="This is mock information. Example text so that it's clear that this is an example. There would be someones bio here. Example text so that it's clear that this is an example. There would be someones bio here. Example text so that it's clear that this is an example. There would be someones bio here. "></textarea>
  </div>



</template>

<style lang="scss" scoped>
#bio{
  min-height: 200px;
}
</style>