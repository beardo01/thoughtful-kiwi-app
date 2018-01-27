<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">{{ title }}</div>
    </v-ons-toolbar>

    <v-ons-tabbar position="auto"
      :tabs="tabs"
      :visible="true"
      :index.sync="activeIndex"
    >
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
        activeIndex: 0,
        tabs: [
	  {
	    icon: this.md() ? null : 'ion-home',
	    label: 'Home',
	    page: homePage
	  },
	  {
	    icon: this.md() ? null : 'ion-location',
	    label: 'Explore',
	    page: explorePage
	  }
        ]
      };
    },
    methods: {
      md() {
        return this.$ons.platform.isAndroid();
      }
    },
    computed: {
      title() {
        return this.tabs[this.activeIndex].label;
      }
    },
    components: { homePage, explorePage }
  }
</script>
