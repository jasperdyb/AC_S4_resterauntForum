<template lang="pug">
  .card
    .card-header
      | 最新餐廳
    .card-body
      div(v-for="restaurant in restaurants" :key="restaurant.id")
        h4
          a(href="#") {{restaurant.name}}
          small() {{ restaurant.Category.name ? restaurant.Category.name : '未分類'}}
        p {{restaurant.description}}
        |{{ restaurant.createdAt | fromNow }}
        hr
</template>


<script>
import moment from "moment";

export default {
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return "-";
      }
      // 使用 moment 提供的 fromNow 方法
      return moment(datetime).fromNow();
    }
  },
  props: {
    restaurants: {
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