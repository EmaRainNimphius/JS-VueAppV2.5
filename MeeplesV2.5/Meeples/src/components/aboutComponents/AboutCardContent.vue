<script>
import BorderedCard from "@/components/BorderedCard.vue";
import NoBorderCard from "@/components/NoBorderCard.vue";

export default {
  components:{
    BorderedCard,
    NoBorderCard,
  },
  data () {
    return{
      ourPurpose: {
        title: 'Our Purpose',
        content: 'We are on the hunt to provide individuals with DID a way of tracking their alters along with daily activity. ' +
            'This not only allows individuals to feel more confident in their DID journey, but allows ' +
            'self reflection and the tracking of possible hosts and alter activity. With the forever developing' +
            'and altering inner world, we hope to provide a form of guidance while on your development journey.' +
            'Practice alter recognition and bring attention to keeping track of their activity.',
      },
      aboutUs: {
        title: 'About Us',
        content: 'About Us filler content. This is example text. About Us filler content. This is example text.' +
            'About Us filler content. This is example text. About Us filler content. This is example text.' +
            'About Us filler content. This is example text. About Us filler content. This is example text.' +
            'About Us filler content. This is example text. About Us filler content. This is example text.',
      },
      meetHooman: {
        title: 'This is Hooman',
        content: 'Hooman is a unique individual. However, their uniqueness makes them that much more special! ' +
            'Hooman, has different parts of themselves called *MEEPLES*!\n' +
            'These Meeples help Hooman do and manage daily tasks. So we need to make ' +
            'keeping track of meeples easy peasy!\n',
      },
      meepleContent: {
        title: 'What Are Meeples?',
        content: '*Meeples* are Hooman\'s friends! They are all made with the purpose of helping Hooman. ' +
            'This is done through helping in school, making new friends, dealing with big feelings, ' +
            'or even having a lazy day. Meeples have a...\n' +
            'More filler lol... More filler lol... More filler lol...\n' +
            'Name, Age, Role (what they were made to do), Location they were found, ' +
            'different strengths and weaknesses.',
      },
    }
  }
}
</script>

<template>
  <!-- bordered card 1 : our purpose -->
  <bordered-card>
    <template v-slot:title >
      {{ ourPurpose.title }}
    </template>
    <template v-slot:body>
      {{ ourPurpose.content }}
    </template>
  </bordered-card>
  <!-- non bordered card 2 : about us -->
  <no-border-card>
    <template v-slot:title >
      {{ aboutUs.title }}
    </template>
    <template v-slot:body>
      {{ aboutUs.content }}
    </template>
  </no-border-card>
  <!-- bordered card 3 : meet hooman-->
  <bordered-card>
    <!-- you can either do v-slot:title or #title -->
    <template v-slot:title >
      {{ meetHooman.title }}
    </template>
    <template v-slot:body>
      {{ meetHooman.content }}
    </template>
  </bordered-card>
  <!-- bordered card 4 : what are meeples-->
  <no-border-card>
    <template v-slot:title >
      {{ meepleContent.title }}
    </template>
    <template v-slot:body>
      {{ meepleContent.content }}
    </template>
  </no-border-card>
</template>

<style land="scss" scoped>

</style>