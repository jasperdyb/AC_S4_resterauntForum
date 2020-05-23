<template lang="pug">
  .card
    .card-header
      | 最新評論
    .card-body
      div(v-for="comment in comments" :key="comment.id")
        h4
          router-link(:to="{ name: 'restaurant', params: {id: comment.Restaurant.id}}") {{comment.Restaurant.name? comment.Restaurant.name:"餐廳不存在"}}
        p {{comment.text}}
        |             by 
        a(href=`#`) {{comment.User.name ? comment.User.name :"用戶不存在"}}
        |              {{comment.createdAt | fromNow}}     
        hr
</template>


<script>
import { fromNowFilter } from "../utils/mixins";

export default {
  mixins: [fromNowFilter],
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
};
</script>
  
<style scoped>
small {
  font-size: 10px;
}
</style>