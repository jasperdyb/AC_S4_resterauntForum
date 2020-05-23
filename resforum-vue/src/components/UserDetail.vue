<template lang="pug">
  .row  
    .col-md-4
      img.img-responsive.center-block(v-if='user.image' :src='user.image', style='width: 250px;margin-bottom: 25px;')
      img.img-responsive.center-block(v-else :src= "emptyImage" , style='width: 250px;margin-bottom: 25px;')
    .col-md-8
      h4  
        strong {{user.name}}
      p {{user.email}}
      a.btn.btn-primary(v-if='user.id === currentUser.id' herf='#') Edit
</template>


<script>
const emptyProfileImage = "https://i.imgur.com/OezkRwO.jpg";

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
  props: {
    initialUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      user: this.initialUser,
      emptyImage: emptyProfileImage,
      currentUser: dummyUser.currentUser
    };
  }
};
</script>