<template lang="pug">
  .col-md-6
    h6 
      strong(v-if="followers.length") {{followers.length}} 追蹤中
      strong(v-else) 0 追蹤中
    hr
    .card-group
      .card.mx-1(v-for="follower in followers" style= 'max-width:100px')
        router-link(:to="{name:'user' ,params: { id: follower.id }}")
          img.card-img-top(v-if="follower.image" :src='follower.image')
          img.card-img-top(v-else :src= "emptyImage")
</template>

<script>
const emptyProfileImage = "https://i.imgur.com/Q14p2le.jpg";

export default {
  props: {
    followers: {
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