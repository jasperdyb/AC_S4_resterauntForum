<template lang="pug">
  .container.py-5
    RestaurantsNavTabs
    navtabs
      h1.mt-5
        | 最新動態
      hr
      .row
        .col-md-6
          h3 最新餐廳
          RestaurantsFeedsNewest( :restaurants="restaurants")
        .col-md-6
          RestaurantsFeedsComments(:comments="comments")
          h3 最新評論
</template>

<script>
import RestaurantsNavTabs from "./../components/RestaurantsNavTabs";
import RestaurantsFeedsNewest from "./../components/RestaurantsFeedsNewest";
import RestaurantsFeedsComments from "./../components/RestaurantsFeedsComments";

const dummy = {
  restaurants: [
    {
      id: 106,
      name: "DDDD",
      tel: "2222222",
      address: "adasdasdadasdasd",
      opening_hours: "14:22",
      description: "dfadffgfsfgsfgsfgsfgsfgsfgsfgsfgsfsdgsfgsfgsfg",
      image: "https://i.imgur.com/hxeEF8e.png",
      viewCount: 0,
      createdAt: "2020-05-16T01:56:15.000Z",
      updatedAt: "2020-05-16T01:56:15.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2020-05-05T07:57:39.000Z",
        updatedAt: "2020-05-05T07:57:39.000Z"
      }
    },
    {
      id: 56,
      name: "Estel RomagueraYA",
      tel: "223-345-3611",
      address: "04952 Joseph Trace",
      opening_hours: "08:00",
      description:
        "Soluta sed natus nihil molestiae provident sed est esse. Repellat enim non ut voluptatem. Esse quos corporis vel labore.",
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
      }
    },
    {
      id: 57,
      name: "Gladyce Ryan",
      tel: "1-745-157-6469",
      address: "9258 Emard Cove",
      opening_hours: "08:00",
      description:
        "Non et autem voluptatem ipsum rerum repellendus. Est dolore quia suscipit quasi. Aut quia voluptas praesentium quibusdam necessitatibus voluptatem. Sequi fugiat sed alias nisi libero alias.\n \rEum aliquid aperiam veritatis omnis earum aut excepturi molestiae. Id quia excepturi magni aut velit doloremque. Occaecati provident quisquam ea officiis nihil adipisci deleniti reiciendis est.\n \rExpedita et distinctio est suscipit accusantium. Vitae beatae aut ut quisquam doloribus. Facilis saepe eum mollitia provident consequatur aut qui. Voluptas veniam nemo alias.",
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
      }
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
      }
    },
    {
      id: 59,
      name: "Mr. Freddy Effertz",
      tel: "(692) 015-0468 x935",
      address: "01685 Renner Knolls",
      opening_hours: "08:00",
      description:
        "Qui reprehenderit aut voluptatem sunt. Dolorum cupiditate quia et architecto et totam necessitatibus. Atque dolore quia accusamus repudiandae dolorem dolorem qui molestiae dolores.",
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
      }
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
      }
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
      }
    },
    {
      id: 62,
      name: "Billie Harber I",
      tel: "1-725-498-9899 x6694",
      address: "755 Runte Crossroad",
      opening_hours: "08:00",
      description:
        "Recusandae labore eos omnis et vel eos. Beatae iure in. Eos quia cum saepe voluptates dolor modi quidem dolorem.",
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
      }
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
      }
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
      }
    }
  ],
  comments: [
    {
      id: 8,
      text: "XXXX",
      UserId: 5,
      RestaurantId: 61,
      createdAt: "2020-05-06T10:05:50.000Z",
      updatedAt: "2020-05-06T10:05:50.000Z",
      User: {
        id: 5,
        name: "root1",
        email: "root@example.com",
        password:
          "$2a$10$GestzVLFK4EYHhySZZuFSO0hPfgLJX8k2HBHU5miHxHilPmGj97LS",
        isAdmin: 1,
        image: "https://i.imgur.com/cOLLoWT.jpg",
        createdAt: "2020-05-05T07:57:39.000Z",
        updatedAt: "2020-05-06T08:01:50.000Z"
      },
      Restaurant: {
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
        CategoryId: 3
      }
    },
    {
      id: 7,
      text: "WWWWW",
      UserId: 5,
      RestaurantId: 57,
      createdAt: "2020-05-06T09:22:47.000Z",
      updatedAt: "2020-05-06T09:22:47.000Z",
      User: {
        id: 5,
        name: "root1",
        email: "root@example.com",
        password:
          "$2a$10$GestzVLFK4EYHhySZZuFSO0hPfgLJX8k2HBHU5miHxHilPmGj97LS",
        isAdmin: 1,
        image: "https://i.imgur.com/cOLLoWT.jpg",
        createdAt: "2020-05-05T07:57:39.000Z",
        updatedAt: "2020-05-06T08:01:50.000Z"
      },
      Restaurant: {
        id: 57,
        name: "Gladyce Ryan",
        tel: "1-745-157-6469",
        address: "9258 Emard Cove",
        opening_hours: "08:00",
        description:
          "Non et autem voluptatem ipsum rerum repellendus. Est dolore quia suscipit quasi. Aut quia voluptas praesentium quibusdam necessitatibus voluptatem. Sequi fugiat sed alias nisi libero alias.\n \rEum aliquid aperiam veritatis omnis earum aut excepturi molestiae. Id quia excepturi magni aut velit doloremque. Occaecati provident quisquam ea officiis nihil adipisci deleniti reiciendis est.\n \rExpedita et distinctio est suscipit accusantium. Vitae beatae aut ut quisquam doloribus. Facilis saepe eum mollitia provident consequatur aut qui. Voluptas veniam nemo alias.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=29.31319227159377",
        viewCount: 0,
        createdAt: "2020-05-05T07:57:39.000Z",
        updatedAt: "2020-05-05T07:57:39.000Z",
        CategoryId: 4
      }
    },
    {
      id: 6,
      text: "SSS",
      UserId: 5,
      RestaurantId: 56,
      createdAt: "2020-05-06T09:15:04.000Z",
      updatedAt: "2020-05-06T09:15:04.000Z",
      User: {
        id: 5,
        name: "root1",
        email: "root@example.com",
        password:
          "$2a$10$GestzVLFK4EYHhySZZuFSO0hPfgLJX8k2HBHU5miHxHilPmGj97LS",
        isAdmin: 1,
        image: "https://i.imgur.com/cOLLoWT.jpg",
        createdAt: "2020-05-05T07:57:39.000Z",
        updatedAt: "2020-05-06T08:01:50.000Z"
      },
      Restaurant: {
        id: 56,
        name: "Estel RomagueraYA",
        tel: "223-345-3611",
        address: "04952 Joseph Trace",
        opening_hours: "08:00",
        description:
          "Soluta sed natus nihil molestiae provident sed est esse. Repellat enim non ut voluptatem. Esse quos corporis vel labore.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=70.75963945388051",
        viewCount: 37,
        createdAt: "2020-05-05T07:57:39.000Z",
        updatedAt: "2020-05-16T14:16:26.000Z",
        CategoryId: 5
      }
    },
    {
      id: 5,
      text: "QQQ",
      UserId: 5,
      RestaurantId: 56,
      createdAt: "2020-05-06T09:15:01.000Z",
      updatedAt: "2020-05-06T09:15:01.000Z",
      User: {
        id: 5,
        name: "root1",
        email: "root@example.com",
        password:
          "$2a$10$GestzVLFK4EYHhySZZuFSO0hPfgLJX8k2HBHU5miHxHilPmGj97LS",
        isAdmin: 1,
        image: "https://i.imgur.com/cOLLoWT.jpg",
        createdAt: "2020-05-05T07:57:39.000Z",
        updatedAt: "2020-05-06T08:01:50.000Z"
      },
      Restaurant: {
        id: 56,
        name: "Estel RomagueraYA",
        tel: "223-345-3611",
        address: "04952 Joseph Trace",
        opening_hours: "08:00",
        description:
          "Soluta sed natus nihil molestiae provident sed est esse. Repellat enim non ut voluptatem. Esse quos corporis vel labore.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=70.75963945388051",
        viewCount: 37,
        createdAt: "2020-05-05T07:57:39.000Z",
        updatedAt: "2020-05-16T14:16:26.000Z",
        CategoryId: 5
      }
    },
    {
      id: 4,
      text: "SSS",
      UserId: 5,
      RestaurantId: 55,
      createdAt: "2020-05-06T02:44:40.000Z",
      updatedAt: "2020-05-06T02:44:40.000Z",
      User: {
        id: 5,
        name: "root1",
        email: "root@example.com",
        password:
          "$2a$10$GestzVLFK4EYHhySZZuFSO0hPfgLJX8k2HBHU5miHxHilPmGj97LS",
        isAdmin: 1,
        image: "https://i.imgur.com/cOLLoWT.jpg",
        createdAt: "2020-05-05T07:57:39.000Z",
        updatedAt: "2020-05-06T08:01:50.000Z"
      },
      Restaurant: {
        id: null,
        name: null,
        tel: null,
        address: null,
        opening_hours: null,
        description: null,
        image: null,
        viewCount: null,
        createdAt: null,
        updatedAt: null,
        CategoryId: null
      }
    },
    {
      id: 2,
      text: "AAA",
      UserId: 5,
      RestaurantId: 55,
      createdAt: "2020-05-06T01:53:20.000Z",
      updatedAt: "2020-05-06T01:53:20.000Z",
      User: {
        id: 5,
        name: "root1",
        email: "root@example.com",
        password:
          "$2a$10$GestzVLFK4EYHhySZZuFSO0hPfgLJX8k2HBHU5miHxHilPmGj97LS",
        isAdmin: 1,
        image: "https://i.imgur.com/cOLLoWT.jpg",
        createdAt: "2020-05-05T07:57:39.000Z",
        updatedAt: "2020-05-06T08:01:50.000Z"
      },
      Restaurant: {
        id: null,
        name: null,
        tel: null,
        address: null,
        opening_hours: null,
        description: null,
        image: null,
        viewCount: null,
        createdAt: null,
        updatedAt: null,
        CategoryId: null
      }
    }
  ]
};

export default {
  components: {
    RestaurantsNavTabs,
    RestaurantsFeedsNewest,
    RestaurantsFeedsComments
  },
  data() {
    return {
      restaurants: [],
      comments: []
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    fetchFeeds() {
      this.restaurants = dummy.restaurants;
      this.comments = dummy.comments;
    }
  }
};
</script>