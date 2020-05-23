<template lang="pug">
  div
    h2.my-1
      | 所有評論：
    div(v-for="comment in restaurantComments" :key="comment.id")
      blockquote.blockquote.mb-0
        button.btn.btn-danger.float-right(type='button'   
                v-if="currentUser.isAdmin"   
                @click.stop.prevent="handleDeleteButtonClick(comment.id)"
                )
          | Delete
        h3
          a(href='#')
            | {{comment.User.name}}
        p {{comment.text}}
        footer.blockquote-footer
          | {{comment.createdAt | fromNow}}
      hr
</template>

<script>
import { fromNowFilter } from "../utils/mixins";

const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true
  },
  isAuthenticated: true
};

export default {
  mixins: [fromNowFilter],
  data() {
    return {
      currentUser: dummyUser.currentUser
    };
  },
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleDeleteButtonClick(commentId) {
      console.log("handleDeleteButtonClick", commentId);
      // TODO: 請求 API 伺服器刪除 id 為 commentId 的評論
      // 觸發父層事件 - $emit( '事件名稱' , 傳遞的資料 )
      this.$emit("after-delete-comment", commentId);
    }
  }
};
</script>