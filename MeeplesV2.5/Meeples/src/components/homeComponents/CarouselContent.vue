<script>
import CarouselComponent from "@/components/homeComponents/CarouselComponent.vue"

export default {
  components: {
    CarouselComponent,
  },
  data () {
    return{
      slideOne: {
        title: 'About Us',
        content: 'About us filler content. This is example text.',
      },
      slideTwo: {
        title: 'Our Purpose',
        content: 'Our purpose filler content. This is example text.',
      },
      slideThree: {
        title: 'What is DID?',
        content: 'What is DID filler content. This is example text.',
      },
    }
  }
}
</script>

<template>
  <carousel-component>
    <!-- slide 1 -->
    <template v-slot:oneTitle> {{ slideOne.title }} </template>
    <template v-slot:oneContent> {{ slideOne.content }} </template>
    <!-- slide 2 -->
    <template v-slot:twoTitle> {{ slideTwo.title }} </template>
    <template v-slot:twoContent> {{ slideTwo.content }} </template>
    <!-- slide 3 -->
    <template v-slot:threeTitle> {{ slideThree.title }} </template>
    <template v-slot:threeContent> {{ slideThree.content }} </template>
  </carousel-component>
</template>

<style lang="scss" scoped>

</style>