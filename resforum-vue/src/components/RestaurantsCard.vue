<template lang="pug">
  .col-md-6.col-lg-4
    .card.mb-4
      img.card-img-top( :src="restaurant.image", alt='Card image cap', width='286px', height='180px')
      .card-body
        p.card-text.title-wrap
          router-link(:to="{ name: 'restaurant', params: { id: restaurant.id }}")
            | {{restaurant.name}}
        span.badge.badge-secondary {{restaurant.Category.name}}
        p.card-text.text-truncate
          | {{restaurant.description}}
      .card-footer
        button.btn.btn-danger.btn-border.favorite.mr-2(type='button' v-if="restaurant.isFavorited" 
         @click.stop.prevent="deleteFavorite")
          | 移除最愛
        button.btn.btn-primary.btn-border.favorite.mr-2(type='button' v-else
         @click.stop.prevent="addFavorite")
          | 加到最愛
        button.btn.btn-danger.like.mr-2(type='button' v-if="restaurant.isLiked"
        @click.stop.prevent="deleteLike")
          | Unlike
        button.btn.btn-primary.like.mr-2(type='button' v-else
        @click.stop.prevent="addLike")
          | Like
</template>

<script>
export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      restaurant: this.initialRestaurant
    };
  },
  methods: {
    addFavorite() {
      this.restaurant = {
        ...this.restaurant, // 保留餐廳內原有資料
        isFavorited: true
      };
    },
    deleteFavorite() {
      this.restaurant = {
        ...this.restaurant, // 保留餐廳內原有資料
        isFavorited: false
      };
    },
    addLike() {
      this.restaurant = {
        ...this.restaurant, // 保留餐廳內原有資料
        isLiked: true
      };
    },
    deleteLike() {
      this.restaurant = {
        ...this.restaurant, // 保留餐廳內原有資料
        isLiked: false
      };
    }
  }
};
</script>