<template lang="pug">
  .container.py-5
    div
      h1
        | {{ restaurant.name }}
      span.badge.badge-secondary.mt-1.mb-3
        | {{ restaurant.categoryName }}
    hr
    ul
      li
        | 評論數： {{ restaurant.commentsLength }}
      li
        | 瀏覽次數： {{ restaurant.viewCounts }}
    button.btn.btn-link(type='button', @click='$router.back()')
      | 回上一頁
</template>

<script>
const dummyData = {
  restaurant: {
    id: 57,
    name: "Gladyce Ryan",
    tel: "1-745-157-6469",
    address: "9258 Emard Cove",
    opening_hours: "08:00",
    description:
      "Non et autem voluptatem ipsum rerum repellendus. Est dolore quia suscipit quasi. Aut quia voluptas praesentium quibusdam necessitatibus voluptatem. Sequi fugiat sed alias nisi libero alias.\n \rEum aliquid aperiam veritatis omnis earum aut excepturi molestiae. Id quia excepturi magni aut velit doloremque. Occaecati provident quisquam ea officiis nihil adipisci deleniti reiciendis est.\n \rExpedita et distinctio est suscipit accusantium. Vitae beatae aut ut quisquam doloribus. Facilis saepe eum mollitia provident consequatur aut qui. Voluptas veniam nemo alias.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=29.31319227159377",
    viewCount: 1,
    createdAt: "2020-05-05T07:57:39.000Z",
    updatedAt: "2020-05-21T09:43:40.224Z",
    CategoryId: 4,
    Category: {
      id: 4,
      name: "墨西哥料理"
    },
    FavoritedUsers: [
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
        Favorite: {
          UserId: 5,
          RestaurantId: 57,
          createdAt: "2020-05-07T11:20:04.000Z",
          updatedAt: "2020-05-07T11:20:04.000Z"
        }
      }
    ],
    LikedUsers: [
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
        Like: {
          UserId: 5,
          RestaurantId: 57,
          createdAt: "2020-05-07T11:52:13.000Z",
          updatedAt: "2020-05-07T11:52:13.000Z"
        }
      }
    ],
    Comments: [
      {
        id: 7,
        text: "WWWWW",
        UserId: 5,
        RestaurantId: 57,
        createdAt: "2020-05-06T09:22:47.000Z",
        updatedAt: "2020-05-06T09:22:47.000Z",
        User: {
          id: 5,
          name: "root1"
        }
      }
    ]
  },
  isFavorited: true,
  isLiked: true
};

export default {
  data() {
    return {
      restaurant: {
        id: undefined,
        name: "",
        categoryName: "",
        viewCounts: "",
        commentsLength: undefined
      }
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId);

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        viewCounts: dummyData.restaurant.viewCount
      };

      this.restaurant.commentsLength = dummyData.restaurant.Comments.length;
    }
  }
};
</script>