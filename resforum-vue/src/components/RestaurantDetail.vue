<template lang="pug">
  .row
    .col-md-12.mb-3
      h1 {{restaurant.name}}
      p.badge.badge-secondary.mt-1.mb-3 {{restaurant.categoryName}}
    .col-lg-4
      img.img-responsive.center-block(:src="restaurant.image", style='width: 250px;margin-bottom: 25px;')
      .contact-info-wrap
        ul.list-unstyled
          li
            strong Opening Hour:
            |             {{restaurant.opening_hours}}
          li
            strong Tel:
            |             {{restaurant.tel}}
          li
            strong Address:
            |             {{restaurant.address}}
    .col-lg-8
      p {{ restaurant.description }}
      a.btn.btn-primary.btn-border.mr-2(href='#') Dashboard
      button.btn.btn-danger.btn-border.mr-2(type='button')
        | 移除最愛
      button.btn.btn-primary.btn-border.mr-2(type='button')
        | 加到最愛
      button.btn.btn-danger.like.mr-2(type='button')
        | Unlike
      button.btn.btn-primary.like.mr-2(type='button')
        | Like

</template>

<script>
export default {
  props: {
    initialRestaurant: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      restaurant: this.initialRestaurant
    };
  }
};
</script>