<template lang="pug">
  .container.py-5
    RestaurantDetail(:initial-restaurant = 'restaurant')
    hr
    RestaurantComment(:restaurant-comments ='restaurantComments' @after-delete-comment="afterDeleteComment")
    RestaurantCreateComment(:restaurant-id='restaurant.id' @after-create-comment='afterCreateComment')
</template>

<script>
import RestaurantDetail from "../components/RestaurantDetail";
import RestaurantComment from "../components/RestaurantComment";
import RestaurantCreateComment from "../components/RestaurantCreateComment";

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
  components: {
    RestaurantDetail,
    RestaurantComment,
    RestaurantCreateComment
  },
  data() {
    return {
      restaurant: {
        id: undefined,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: [],
      currentUser: dummyUser.currentUser
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
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked
      };

      this.restaurantComments = dummyData.restaurant.Comments;
    },
    afterDeleteComment(commentId) {
      // 以 filter 保留未被選擇的 comment.id
      this.restaurantComments = this.restaurantComments.filter(
        comment => comment.id !== commentId
      );
    },
    afterCreateComment(payload) {
      console.log(payload);
      const { commentId, restaurantId, text } = payload;
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        createdAt: new Date()
      });
    }
  }
};
</script>