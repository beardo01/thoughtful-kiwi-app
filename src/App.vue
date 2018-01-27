<template>
  <v-ons-page>
    <!-- Navigation -->
    <v-ons-tabbar>
      <router-view slot="pages"></router-view>
      <v-ons-tab v-for="tab in tabs"
        :icon="tab.icon"
        :label="tab.name"
        :active="$route.name === tab.name"
        :key="tab.name"
        @click="$router.push(tab.name)"
      ></v-ons-tab>
    </v-ons-tabbar>

  </v-ons-page>
</template>

<script>
  import homePage from 'Home';
  import explorePage from 'Explore';
  import postPage from 'Post';

  export default {
    data() {
      return {
        tabs: [
          {
            icon: this.md() ? null : 'ion-home',
            name: 'Home',
            page: homePage,
          },
          {
            icon: this.md() ? null : 'ion-location',
            name: 'Explore',
            page: explorePage,
          }
        ]
      };
    },
    methods: {
      md() {
        return this.$ons.platform.isAndroid();
      }
    }
  }
</script>
