<template lang="pug">
  ul.nav.nav-pills.mb-4
    li.nav-item
      router-link.nav-link(:to="{ name: 'restaurants' }")
        | 全部
    li.nav-item(v-for='category in categories', :key='category.id')
      router-link.nav-link(:to="{ name: 'restaurants', query: { categoryId: category.id } }")
        | {{ category.name }}
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
};
</script>