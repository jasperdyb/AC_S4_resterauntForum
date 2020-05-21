<template lang="pug">
  nav(aria-label='Page navigation example')
    ul.pagination
      li.page-item(v-show="currentPage !== 1")
        router-link.page-link(aria-label='Previous' :to="{ name: 'restaurants', query: { categoryId, page: previousPage }}")
          span(aria-hidden='true') «
      li.page-item(v-for="page in totalPage" :key="page" :class="[{ active: currentPage === page }]")
          router-link.page-link(:to="{name: 'restaurants', query: { categoryId, page }}") {{page}}
      li.page-item(v-show='currentPage !== totalPage.length')
        router-link.page-link(:to="{ name: 'restaurants', query: { categoryId, page: nextPage } }", aria-label='Next')
          span(aria-hidden='true') »
</template>

<script>
export default {
  props: {
    categoryId: {
      type: [String, Number],
      default: ""
    },
    currentPage: {
      type: Number,
      default: 1
    },
    totalPage: {
      type: Array,
      required: true
    },
    previousPage: {
      type: Number,
      required: true
    },
    nextPage: {
      type: Number,
      required: true
    }
  }
};
</script>