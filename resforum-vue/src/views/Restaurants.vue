<template lang="pug">
  .container.py-5
    RestaurantsNavTabs
    navtabs
      RestaurantsNavPills(:categories ='categories')
      .row
        RestaurantsCard(
          v-for="restaurant in restaurants"
          :key="restaurant.id"
          :initial-restaurant="restaurant"
        )
        // 分頁標籤 RestaurantPagination
</template>


<script>
import RestaurantsNavTabs from "./../components/RestaurantsNavTabs";
import RestaurantsCard from "../components/RestaurantsCard";
import RestaurantsNavPills from "../components/RestaurantsNavPills";

const dummy = {
  restaurants: [
    {
      id: 56,
      name: "Estel RomagueraYA",
      tel: "223-345-3611",
      address: "04952 Joseph Trace",
      opening_hours: "08:00",
      description: "Soluta sed natus nihil molestiae provident sed est",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=70.75963945388051",
      viewCount: 37,
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-16T14:16:26.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2020-05-05T07:57:39.000Z",
        updatedAt: "2020-05-05T07:57:39.000Z"
      },
      categoryName: "素食料理",
      isFavorited: true,
      isLiked: true
    },
    {
      id: 57,
      name: "Gladyce Ryan",
      tel: "1-745-157-6469",
      address: "9258 Emard Cove",
      opening_hours: "08:00",
      description: "Non et autem voluptatem ipsum rerum repellendus. E",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=29.31319227159377",
      viewCount: 0,
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-05T07:57:39.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2020-05-05T07:57:39.000Z",
        updatedAt: "2020-05-05T07:57:39.000Z"
      },
      categoryName: "墨西哥料理",
      isFavorited: true,
      isLiked: true
    },
    {
      id: 58,
      name: "Jena Doyle",
      tel: "1-535-758-5852",
      address: "3684 Kirlin Springs",
      opening_hours: "08:00",
      description: "ex",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=3.8062295683188863",
      viewCount: 3,
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-16T13:48:16.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2020-05-05T07:57:39.000Z",
        updatedAt: "2020-05-05T07:57:39.000Z"
      },
      categoryName: "日本料理",
      isFavorited: true,
      isLiked: true
    },
    {
      id: 59,
      name: "Mr. Freddy Effertz",
      tel: "(692) 015-0468 x935",
      address: "01685 Renner Knolls",
      opening_hours: "08:00",
      description: "Qui reprehenderit aut voluptatem sunt. Dolorum cup",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=4.898823719579104",
      viewCount: 0,
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-05T07:57:39.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2020-05-05T07:57:39.000Z",
        updatedAt: "2020-05-05T07:57:39.000Z"
      },
      categoryName: "墨西哥料理",
      isFavorited: false,
      isLiked: false
    },
    {
      id: 60,
      name: "Kristopher Mante",
      tel: "099-216-7412 x0036",
      address: "927 Mossie Well",
      opening_hours: "08:00",
      description: "Itaque nostrum fugit dolorum magnam reiciendis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=72.08800247666409",
      viewCount: 0,
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-05T07:57:39.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2020-05-05T07:57:39.000Z",
        updatedAt: "2020-05-05T07:57:39.000Z"
      },
      categoryName: "墨西哥料理",
      isFavorited: false,
      isLiked: false
    },
    {
      id: 61,
      name: "Daisha Ullrich",
      tel: "661.326.6999 x661",
      address: "74322 Borer Spurs",
      opening_hours: "08:00",
      description: "cupiditate odit maxime",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=22.289853582479502",
      viewCount: 1,
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-09T11:12:38.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2020-05-05T07:57:39.000Z",
        updatedAt: "2020-05-05T07:57:39.000Z"
      },
      categoryName: "義大利料理",
      isFavorited: false,
      isLiked: false
    },
    {
      id: 62,
      name: "Billie Harber I",
      tel: "1-725-498-9899 x6694",
      address: "755 Runte Crossroad",
      opening_hours: "08:00",
      description: "Recusandae labore eos omnis et vel eos. Beatae iur",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=17.513536990711344",
      viewCount: 0,
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-05T07:57:39.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2020-05-05T07:57:39.000Z",
        updatedAt: "2020-05-05T07:57:39.000Z"
      },
      categoryName: "墨西哥料理",
      isFavorited: false,
      isLiked: false
    },
    {
      id: 63,
      name: "Lew Conroy",
      tel: "213-624-3176 x297",
      address: "527 Bettye Junction",
      opening_hours: "08:00",
      description: "molestiae",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=54.54776227626503",
      viewCount: 0,
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-05T07:57:39.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2020-05-05T07:57:39.000Z",
        updatedAt: "2020-05-05T07:57:39.000Z"
      },
      categoryName: "義大利料理",
      isFavorited: false,
      isLiked: false
    },
    {
      id: 64,
      name: "Caitlyn Weber",
      tel: "041.218.9423 x9422",
      address: "29002 Mitchell Plaza",
      opening_hours: "08:00",
      description: "Illo amet sint sit nam illum ut dolor vero.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=8.604656640801679",
      viewCount: 0,
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-05T07:57:39.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2020-05-05T07:57:39.000Z",
        updatedAt: "2020-05-05T07:57:39.000Z"
      },
      categoryName: "中式料理",
      isFavorited: false,
      isLiked: false
    },
    {
      id: 65,
      name: "Dayna Walsh",
      tel: "691-860-1030",
      address: "616 Krajcik Islands",
      opening_hours: "08:00",
      description: "Voluptates iste molestiae iure quas. Neque asperio",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.21568922605324",
      viewCount: 0,
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-05T07:57:39.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2020-05-05T07:57:39.000Z",
        updatedAt: "2020-05-05T07:57:39.000Z"
      },
      categoryName: "墨西哥料理",
      isFavorited: false,
      isLiked: false
    },
    {
      id: 67,
      name: "Virginia Hegmann",
      tel: "1-833-534-7814",
      address: "2471 VonRueden Haven",
      opening_hours: "08:00",
      description: "Laudantium temporibus est vel.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=88.27165316911525",
      viewCount: 0,
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-05T07:57:39.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2020-05-05T07:57:39.000Z",
        updatedAt: "2020-05-05T07:57:39.000Z"
      },
      categoryName: "中式料理",
      isFavorited: true,
      isLiked: true
    },
    {
      id: 68,
      name: "Wilson Murray",
      tel: "652.650.7479",
      address: "859 Alyson Loop",
      opening_hours: "08:00",
      description: "hic",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=28.560650354145256",
      viewCount: 0,
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-05T07:57:39.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2020-05-05T07:57:39.000Z",
        updatedAt: "2020-05-05T07:57:39.000Z"
      },
      categoryName: "中式料理",
      isFavorited: false,
      isLiked: false
    }
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-05T07:57:39.000Z"
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-05T07:57:39.000Z"
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-05T07:57:39.000Z"
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-05T07:57:39.000Z"
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-05T07:57:39.000Z"
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-05T07:57:39.000Z"
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-05T07:57:39.000Z"
    },
    {
      id: 8,
      name: "韓式料理",
      createdAt: "2020-05-05T09:52:35.000Z",
      updatedAt: "2020-05-05T09:52:44.000Z"
    }
  ],
  categoryId: "",
  currentPage: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2
};

export default {
  components: {
    RestaurantsNavTabs,
    RestaurantsCard,
    RestaurantsNavPills
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: undefined,
      currentPage: 1,
      totalPage: undefined,
      prev: undefined,
      next: undefined
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.restaurants = dummy.restaurants;
      this.categories = dummy.categories;
      this.categoryId = dummy.categoryId;
      this.currentPage = dummy.currentPage;
      this.totalPage = dummy.totalPage;
      this.prev = dummy.prev;
      this.next = dummy.next;
    }
  }
};
</script>