<template lang="pug">
  .container.py-5
    RestaurantsNavTabs
    navtabs
      h1.mt-5
        | 最新動態
      hr
</template>

<script>
import RestaurantsNavTabs from "./../components/RestaurantsNavTabs";


export default {
  components: {
    RestaurantsNavTabs,
  },
};
</script>