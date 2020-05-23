<template lang="pug">
  form(@submit.stop.prevent="handleSubmit")
    div.form-group.mb-4
      label(for='text') 留下評論：
      textarea.form-control(
        v-model="text"
        rows="3"
        name="text")
    div.d-flex.align-items-center.justify-content-between
      button(
        type="button"
        class="btn btn-link"
        @click="$router.back()") 回上一頁
      button(
        type="submit"
        class="btn btn-primary mr-0") Submit
</template>

<script>
import { v4 as uuid } from "uuid";

export default {
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      text: ""
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("after-create-comment", {
        commentId: uuid(), // 尚未串接 API 暫時使用隨機的 id
        restaurantId: this.restaurantId,
        text: this.text
      });
      this.text = ""; // 將表單內的資料清空
    }
  }
};
</script>