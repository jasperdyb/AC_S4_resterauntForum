<template lang="pug">
  .container.py-5
    UserDetail(:initial-user='user')
    br
    .row
      UserFollowings(:followings ='user.Followings')
      UserFollowers(:followers='user.Followers')
    br
    .row
      UserCommented(:commented ='user.Comments')
      UserFavoritedRestaurants(:favorited-restaurants ='user.FavoritedRestaurants')
        //- h7 
          //- strong #{userData.FavoritedRestaurants.length} 已收藏的餐廳
        hr
        //favorited
        //- .card-group
        //-   each restaurant in userData.FavoritedRestaurants
        //-     .card.mx-1( style= 'max-width:100px')
        //-       a(href=`/restaurants/${restaurant.id}`)
        //-         img.card-img-top(:src='restaurant.image' )
</template>

<script>
import UserDetail from "../components/UserDetail";
import UserFollowings from "../components/UserFollowings";
import UserFollowers from "../components/UserFollowers";
import UserCommented from "../components/UserCommented";
import UserFavoritedRestaurants from "../components/UserFavoritedRestaurants";

const dummyUser = {
  user: {
    id: 5,
    name: "root1",
    email: "root@example.com",
    password: "$2a$10$GestzVLFK4EYHhySZZuFSO0hPfgLJX8k2HBHU5miHxHilPmGj97LS",
    isAdmin: true,
    image: "https://i.imgur.com/cOLLoWT.jpg",
    createdAt: "2020-05-05T07:57:39.000Z",
    updatedAt: "2020-05-06T08:01:50.000Z",
    Comments: [
      {
        id: 2,
        text: "AAA",
        UserId: 5,
        RestaurantId: 55,
        createdAt: "2020-05-06T01:53:20.000Z",
        updatedAt: "2020-05-06T01:53:20.000Z",
        Restaurant: {
          id: 27,
          name: "Penelope Mayert DDS",
          tel: "1-775-369-6229",
          address: "52148 Susan Pike",
          opening_hours: "08:00",
          description: "non nobis quo",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=77.93437663958767",
          viewCounts: null,
          createdAt: "2019-07-30T16:24:55.439Z",
          updatedAt: "2019-07-30T16:24:55.439Z",
          CategoryId: 1
        }
      },
      {
        id: 4,
        text: "SSS",
        UserId: 5,
        RestaurantId: 55,
        createdAt: "2020-05-06T02:44:40.000Z",
        updatedAt: "2020-05-06T02:44:40.000Z",
        Restaurant: {
          id: 27,
          name: "Penelope Mayert DDS",
          tel: "1-775-369-6229",
          address: "52148 Susan Pike",
          opening_hours: "08:00",
          description: "non nobis quo",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=77.93437663958767",
          viewCounts: null,
          createdAt: "2019-07-30T16:24:55.439Z",
          updatedAt: "2019-07-30T16:24:55.439Z",
          CategoryId: 1
        }
      },
      {
        id: 5,
        text: "QQQ",
        UserId: 5,
        RestaurantId: 56,
        createdAt: "2020-05-06T09:15:01.000Z",
        updatedAt: "2020-05-06T09:15:01.000Z",
        Restaurant: {
          id: 21,
          name: "Clovis Mayert",
          tel: "1-292-930-4113 x0577",
          address: "3255 Streich Inlet",
          opening_hours: "08:00",
          description:
            "Nihil occaecati consectetur explicabo sint nobis beatae numquam.\nOdit quo enim officiis est eaque et velit facilis.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=31.579240610126313",
          viewCounts: null,
          createdAt: "2019-07-30T16:24:55.436Z",
          updatedAt: "2019-07-30T16:24:55.436Z",
          CategoryId: 3
        }
      },
      {
        id: 6,
        text: "SSS",
        UserId: 5,
        RestaurantId: 56,
        createdAt: "2020-05-06T09:15:04.000Z",
        updatedAt: "2020-05-06T09:15:04.000Z",
        Restaurant: {
          id: 56,
          name: "Estel RomagueraYA",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=70.75963945388051"
        }
      },
      {
        id: 7,
        text: "WWWWW",
        UserId: 5,
        RestaurantId: 57,
        createdAt: "2020-05-06T09:22:47.000Z",
        updatedAt: "2020-05-06T09:22:47.000Z",
        Restaurant: {
          id: 57,
          name: "Gladyce Ryan",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=29.31319227159377"
        }
      },
      {
        id: 8,
        text: "XXXX",
        UserId: 5,
        RestaurantId: 61,
        createdAt: "2020-05-06T10:05:50.000Z",
        updatedAt: "2020-05-06T10:05:50.000Z",
        Restaurant: {
          id: 61,
          name: "Daisha Ullrich",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=22.289853582479502"
        }
      }
    ],
    FavoritedRestaurants: [
      {
        id: 57,
        name: "Gladyce Ryan",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=29.31319227159377",
        Favorite: {
          UserId: 5,
          RestaurantId: 57,
          createdAt: "2020-05-07T11:20:04.000Z",
          updatedAt: "2020-05-07T11:20:04.000Z"
        }
      },
      {
        id: 58,
        name: "Jena Doyle",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=3.8062295683188863",
        Favorite: {
          UserId: 5,
          RestaurantId: 58,
          createdAt: "2020-05-08T00:53:38.000Z",
          updatedAt: "2020-05-08T00:53:38.000Z"
        }
      },
      {
        id: 56,
        name: "Estel RomagueraYA",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=70.75963945388051",
        Favorite: {
          UserId: 5,
          RestaurantId: 56,
          createdAt: "2020-05-12T13:30:53.000Z",
          updatedAt: "2020-05-12T13:30:53.000Z"
        }
      },
      {
        id: 67,
        name: "Virginia Hegmann",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=88.27165316911525",
        Favorite: {
          UserId: 5,
          RestaurantId: 67,
          createdAt: "2020-05-16T14:29:34.000Z",
          updatedAt: "2020-05-16T14:29:34.000Z"
        }
      }
    ],
    Followers: [
      {
        id: 7,
        name: "user2",
        image: null,
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
        image: null,
        Followship: {
          followerId: 6,
          followingId: 5,
          createdAt: "2020-05-09T10:56:44.000Z",
          updatedAt: "2020-05-09T10:56:44.000Z"
        }
      }
    ],
    Followings: [
      {
        id: 6,
        name: "user1",
        image: null,
        Followship: {
          followerId: 5,
          followingId: 6,
          createdAt: "2020-05-16T14:29:43.000Z",
          updatedAt: "2020-05-16T14:29:43.000Z"
        }
      }
    ]
  },
  commentedRes: [
    {
      id: 56,
      name: "Estel RomagueraYA",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=70.75963945388051"
    },
    {
      id: 57,
      name: "Gladyce Ryan",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=29.31319227159377"
    },
    {
      id: 61,
      name: "Daisha Ullrich",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=22.289853582479502"
    }
  ]
};

export default {
  components: {
    UserDetail,
    UserFollowings,
    UserFollowers,
    UserCommented,
    UserFavoritedRestaurants
  },
  data() {
    return {
      user: undefined
    };
  },
  created() {
    this.fetchUserData();
  },
  methods: {
    fetchUserData() {
      this.user = dummyUser.user;
    }
  }
};
</script>