<template lang="pug">
  .col-md-6
    h6
      strong(v-if="followings.length") {{followings.length}} 追蹤中
      strong(v-else) 0 追蹤中
    hr
    .card-group
      .card.mx-1(v-for="following in followings" style= 'max-width:100px')
        router-link(:to="{name:'user' ,params: { id: following.id }}")
          img.card-img-top(v-if="following.image" :src='following.image')
          img.card-img-top(v-else :src= "emptyImage")
</template>

<script>
const emptyProfileImage = "https://i.imgur.com/Q14p2le.jpg";

export default {
  props: {
    followings: {
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