<template lang="pug">
  .container.py-5
    RestaurantsNavTabs
    br
    h1 美食達人
    hr
    .row(style='text-align: center;')
      .col-3(v-for="user,index in users" :key="user.id")
        a(href=`#`)
          img(:src="user.image", width='140px', height='140px')
        h2 {{user.name}}
        span.badge.badge-secondary 追蹤人數：{{user.FollowerCount}}
        p
          button.btn.btn-danger(type='submit' v-if="user.isFollowed" @click.stop.prevent="deleteFollowed(index)") 
            |取消追蹤
          button.btn.btn-primary(type='submit' v-else @click.stop.prevent="addFollowed(index)") 
            |追蹤
</template>

<script>
import RestaurantsNavTabs from "./../components/RestaurantsNavTabs";

const dummy = {
  users: [
    {
      id: 5,
      name: "root1",
      email: "root@example.com",
      password: "$2a$10$GestzVLFK4EYHhySZZuFSO0hPfgLJX8k2HBHU5miHxHilPmGj97LS",
      isAdmin: true,
      image: "https://i.imgur.com/cOLLoWT.jpg",
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-06T08:01:50.000Z",
      Followers: [
        {
          id: 7,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$7skaojCFb9W65LqZvhmxz.yTjv0BgwLCP9/GAiL.G3B6t2chgQi0i",
          isAdmin: false,
          image: null,
          createdAt: "2020-05-05T07:57:39.000Z",
          updatedAt: "2020-05-16T14:02:03.000Z",
          Followship: {
            followerId: 7,
            followingId: 5,
            createdAt: "2020-05-08T01:12:24.000Z",
            updatedAt: "2020-05-08T01:12:24.000Z"
          }
        },
        {
          id: 6,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$BNPYTJZdpY0fXCVoZ/jeQOxwzMl0vXckwA7BTUReeGXBTgJX0wbVm",
          isAdmin: false,
          image: null,
          createdAt: "2020-05-05T07:57:39.000Z",
          updatedAt: "2020-05-05T07:57:39.000Z",
          Followship: {
            followerId: 6,
            followingId: 5,
            createdAt: "2020-05-09T10:56:44.000Z",
            updatedAt: "2020-05-09T10:56:44.000Z"
          }
        }
      ],
      FollowerCount: 2,
      isFollowed: false
    },
    {
      id: 6,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$BNPYTJZdpY0fXCVoZ/jeQOxwzMl0vXckwA7BTUReeGXBTgJX0wbVm",
      isAdmin: false,
      image: null,
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-05T07:57:39.000Z",
      Followers: [
        {
          id: 5,
          name: "root1",
          email: "root@example.com",
          password:
            "$2a$10$GestzVLFK4EYHhySZZuFSO0hPfgLJX8k2HBHU5miHxHilPmGj97LS",
          isAdmin: true,
          image: "https://i.imgur.com/cOLLoWT.jpg",
          createdAt: "2020-05-05T07:57:39.000Z",
          updatedAt: "2020-05-06T08:01:50.000Z",
          Followship: {
            followerId: 5,
            followingId: 6,
            createdAt: "2020-05-16T14:29:43.000Z",
            updatedAt: "2020-05-16T14:29:43.000Z"
          }
        }
      ],
      FollowerCount: 1,
      isFollowed: true
    },
    {
      id: 7,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$7skaojCFb9W65LqZvhmxz.yTjv0BgwLCP9/GAiL.G3B6t2chgQi0i",
      isAdmin: false,
      image: null,
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-16T14:02:03.000Z",
      Followers: [
        {
          id: 6,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$BNPYTJZdpY0fXCVoZ/jeQOxwzMl0vXckwA7BTUReeGXBTgJX0wbVm",
          isAdmin: false,
          image: null,
          createdAt: "2020-05-05T07:57:39.000Z",
          updatedAt: "2020-05-05T07:57:39.000Z",
          Followship: {
            followerId: 6,
            followingId: 7,
            createdAt: "2020-05-09T10:56:45.000Z",
            updatedAt: "2020-05-09T10:56:45.000Z"
          }
        }
      ],
      FollowerCount: 1,
      isFollowed: false
    }
  ],
  loginUserId: 5
};

export default {
  data() {
    return {
      users: []
    };
  },
  components: {
    RestaurantsNavTabs
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.users = dummy.users;
    },
    deleteFollowed(index) {
      this.users[index].isFollowed = false;
    },
    addFollowed(index) {
      this.users[index].isFollowed = true;
    }
  }
};
</script>
