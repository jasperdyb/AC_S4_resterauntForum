<template lang="pug">
  .col-md-6
    h6 
      strong(v-if="favoritedRestaurants.length") {{favoritedRestaurants.length}} 已收藏的餐廳
      strong(v-else) 0 已收藏的餐廳
    hr
    .card-group
      .card.mx-1(v-for="restaurant in favoritedRestaurants" :key='restaurant.id' style= 'max-width:100px')
        router-link(:to="{name:'restaurant' ,params: { id: restaurant.id }}")
          img.card-img-top(v-if="restaurant.image" :src='restaurant.image')
          img.card-img-top(v-else :src= "emptyImage")
</template>

<script>
const emptyProfileImage = "https://i.imgur.com/Q14p2le.jpg";

export default {
  props: {
    favoritedRestaurants: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      emptyImage: emptyProfileImage
    };
  }
};
</script>