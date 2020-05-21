<template lang="pug">
  ul.nav.nav-tabs.mb-4
    li.nav-item(v-for='tab in tabs', :key='tab.id')
      router-link.nav-link(:to='tab.path')
        | {{ tab.title }}
  </template>

<script>
import { v4 as uuid } from "uuid";

export default {
  data() {
    return {
      tabs: [
        {
          id: uuid(),
          title: "首頁",
          path: "/restaurants"
        },
        {
          id: uuid(),
          title: "最新動態",
          path: "/restaurants/feeds"
        },
        {
          id: uuid(),
          title: "TOP 10 人氣餐廳",
          path: "/restaurants/top"
        },
        {
          id: uuid(),
          title: "美食達人",
          path: "/users/top"
        }
      ]
    };
  }
};
</script>