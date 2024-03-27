<script>
export default {
  data () {
    return {
      title: 'Title',
      content: 'No border card body text.',
    }
  },
}
</script>

<template>
  <div class="container">
    <div class="card">
      <!-- card header -->
      <div class="card-title mt-4 ms-4">
        <h2 class="fw-bold" id="title">
          <slot name="title">{{ title }}</slot>
        </h2>
      </div>
      <!-- card body -->
      <div class="card-body pt-0">
        <p class="fs-5 ms-2">
          <slot name="body">
            {{ content }}
          </slot>
        </p>
      </div>
    </div>
  </div>
</template>

<style land="scss" scoped>

.container{
  margin-top: 50px;
}

.card{
  border: none;
}

</style>