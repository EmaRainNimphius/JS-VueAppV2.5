<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref('first'),
      title: 'Slide One',
      content: 'Slide ONE content.',
      button: 'Learn More'

    }
  }
}
</script>

<template>
  <div class="q-pa-md">
    <q-carousel
        arrows
        animated
        v-model="slide"
        height="450px"
    >
      <q-carousel-slide name="first" img-src="../../assets/tre.jpg">
        <div class="absolute-bottom text-white m-5">
          <div class="text-h2">
            <slot name="oneTitle">
              {{ title }}
            </slot>
          </div>
          <div class="text-subtitle1 mt-3">
            <slot name="oneContent">
              {{ content }}
            </slot>
          </div>
          <div class="button mt-3">
            <slot name="oneButton">
              <router-link to="/about">
                <button class="btn btn-lg btn-warning">
                  {{ button }}
                </button>
              </router-link>
            </slot>
          </div>
        </div>
      </q-carousel-slide>


      <q-carousel-slide name="second" img-src="../../assets/wtr.jpg">
        <div class="absolute-bottom text-white m-5">
          <div class="text-h2">
            <slot name="twoTitle">
              {{ title }}
            </slot>
          </div>
          <div class="text-subtitle1 mt-3">
            <slot name="twoContent">
              {{ content }}
            </slot>
          </div>
          <div class="button mt-3">
            <slot name="twoButton">
              <router-link to="/about">
                <button class="btn btn-lg btn-warning">
                  {{ button }}
                </button>
              </router-link>
            </slot>
          </div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide name="third" img-src="../../assets/monts.jpg">
        <div class="absolute-bottom text-white m-5">
          <div class="text-h2">
            <slot name="threeTitle">
              {{ title }}
            </slot>
          </div>
          <div class="text-subtitle1 mt-3">
            <slot name="threeContent">
              {{ content }}
            </slot>
          </div>
          <div class="button mt-3">
            <slot name="threeButton">
              <router-link to="/about">
                <button class="btn btn-lg btn-warning">
                  {{ button }}
                </button>
              </router-link>
            </slot>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<style lang="scss" scoped>
.custom-caption{
  text-align: start;
  padding: 25px;
  color: white;
  background-color: rgba(0, 0, 0, .3);
}
</style>