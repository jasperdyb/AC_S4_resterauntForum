<template lang="pug">
  .container.py-5
    RestaurantsNavTabs
    h1.mt-5
      | 人氣餐廳
    hr
    .card.mb-3(style='max-width: 540px;margin: auto;' v-for="restaurant,index in restaurants" :key='restaurant.id')
      .row.no-gutters
        .col-md-4
          router-link(:to="{ name: 'restaurant', params: { id: restaurant.id }}")
            img.card-img(:src='restaurant.image')
        .col-md-8
          .card-body
            h5.card-title
              | {{restaurant.name}}
            span.badge.badge-secondary 收藏數：{{restaurant.favorite_count}}
            p.card-text
              | {{restaurant.description}}
            router-link.btn.btn-primary.mr-2(:to="{ name: 'restaurant', params: { id: restaurant.id }}") Show
            button.btn.btn-danger.mr-2(type='button' v-if="restaurant.isFavorited" @click.stop.prevent='deleteFavorited(index)')
              | 移除最愛
            button.btn.btn-primary(type='button' v-else @click.stop.prevent='addFavorited(index)')
              | 加到最愛
</template>

<script>
import RestaurantsNavTabs from "./../components/RestaurantsNavTabs";

const dummyData = {
  restaurants: [
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
      favorite_count: 3,
      isFavorited: true,
      isLiked: true
    },
    {
      id: 56,
      name: "Estel RomagueraYA",
      tel: "223-345-3611",
      address: "04952 Joseph Trace",
      opening_hours: "08:00",
      description: "Soluta sed natus nihil molestiae provident sed est",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=70.75963945388051",
      viewCount: 38,
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-21T09:50:26.000Z",
      CategoryId: 5,
      favorite_count: 2,
      isFavorited: true,
      isLiked: true
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
      favorite_count: 1,
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
      viewCount: 1,
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-21T09:43:40.000Z",
      CategoryId: 4,
      favorite_count: 1,
      isFavorited: true,
      isLiked: true
    },
    {
      id: 75,
      name: "Norene Tillman",
      tel: "(044) 077-8277",
      address: "034 Elvie Skyway",
      opening_hours: "08:00",
      description: "culpa",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=82.68870941100792",
      viewCount: 0,
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-05T07:57:39.000Z",
      CategoryId: 4,
      favorite_count: 0,
      isFavorited: false,
      isLiked: false
    },
    {
      id: 83,
      name: "Maybell Leuschke",
      tel: "(063) 332-9916",
      address: "9863 Bins Parks",
      opening_hours: "08:00",
      description: "Sit quidem qui mollitia dolorum non.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=19.85041334564763",
      viewCount: 0,
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-05T07:57:39.000Z",
      CategoryId: 2,
      favorite_count: 0,
      isFavorited: false,
      isLiked: false
    },
    {
      id: 91,
      name: "Natalie Conn",
      tel: "(267) 098-6091 x760",
      address: "144 Jarrod Rue",
      opening_hours: "08:00",
      description: "doloribus tenetur veritatis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=0.3885707668937366",
      viewCount: 0,
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-05T07:57:39.000Z",
      CategoryId: 1,
      favorite_count: 0,
      isFavorited: false,
      isLiked: false
    },
    {
      id: 99,
      name: "Zackery Williamson",
      tel: "1-804-136-8601",
      address: "83058 Cassin Rapids",
      opening_hours: "08:00",
      description: "Et omnis totam. Consequuntur tempora beatae ullam ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=21.56790345292665",
      viewCount: 0,
      createdAt: "2020-05-05T07:57:39.000Z",
      updatedAt: "2020-05-05T07:57:39.000Z",
      CategoryId: 2,
      favorite_count: 0,
      isFavorited: false,
      isLiked: false
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
      favorite_count: 0,
      isFavorited: false,
      isLiked: false
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
      favorite_count: 0,
      isFavorited: false,
      isLiked: false
    }
  ]
};

export default {
  data() {
    return {
      restaurants: []
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
      this.restaurants = dummyData.restaurants;
    },
    deleteFavorited(index) {
      this.restaurants[index].isFavorited = false;
    },
    addFavorited(index) {
      this.restaurants[index].isFavorited = true;
    }
  }
};
</script>