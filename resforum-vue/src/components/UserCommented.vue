<template lang="pug">
  .col-md-6
    h6 
      strong(v-if="commented.length") {{commented.length}} 已評論餐廳
      strong(v-else) 0 已評論餐廳
    hr
    .card-group
      .card.mx-1(v-for="comment in commented" :key='comment.id' style= 'max-width:100px')
        router-link(:to="{name:'restaurant' ,params: { id: comment.Restaurant.id }}")
          img.card-img-top(v-if="comment.Restaurant.image" :src='comment.Restaurant.image')
          img.card-img-top(v-else :src= "emptyImage")
</template>

<script>
const emptyProfileImage = "https://i.imgur.com/Q14p2le.jpg";

export default {
  props: {
    commented: {
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