<template>
  <v-ons-page>

    <div>
      <v-ons-card v-for="post in posts" :key="post.id">
        <img :src="post.image" :alt="post.title" class="card-image">
        <div class="card-read-time">
            {{post.read_time}} min
        </div>
        <div class="card-tools">
            <i class="ion-share"></i>
        </div>
        <div class="card-type">
            {{post.business.type}}
        </div>
        <div class="card-title">
          {{post.title}}
        </div>
        <div class="card-content">
          <p>{{post.body}}</p>
        </div>
      </v-ons-card>
    </div>

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
  },
  updated() {
    console.log(this.posts);
  }
  
}
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-family: 'Yantramanav', sans-serif;
}

.card-read-time {
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px;
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.8);
}

.card-tools {
    position: absolute;
    right: 20px;
    top: 12px;
    font-size: 200%;
    color: rgba(255, 255, 255, 0.8);
}

.card-type {
    margin-top: 5px;
    font-weight: 600;
    color: #545454;
}

.card-title {
    font-size: 20px;
    font-weight: 800;
    margin-top: 5px;
}

.card-content {
    font-size: 15px;
    height: 50px;
    overflow: hidden;
    margin-top: -5px;
}

.card-image {
    width: 110%;
    margin: -16px 0 0 -16px;
    border-radius: 8px 8px 0px 0px;
}
</style>
