<template>
  <v-ons-page>

    <v-ons-card v-for="post in posts" :key="post.id">
      <!-- <img src="{{post.image}}" alt="Onsen UI" style="width: 100%"> -->
      <div class="title">
        {{post.title}}
      </div>
      <div class="content">
        <p>{{post.body}}</p>
      </div>
    </v-ons-card>

  </v-ons-page>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      apiUrl: 'https://api.thoughtful.kiwi/',
      posts: []
    }
  },
  methods: {
    getPosts() {
      axios.get(this.apiUrl + 'post/')
        .then(response => this.posts = response.data)
    }
  },
  created() {
    this.getPosts();
  }
  
}
</script>
