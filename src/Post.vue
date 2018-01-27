<template>
  <v-ons-page>
    <!-- Header -->
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button @click="$router.go(-1)">Home</v-ons-back-button>
      </div>
      <div class="center">{{ $route.name }}</div>
    </v-ons-toolbar>

    <!-- Body -->
    <p style="text-align: center">
      {{$route.params.id}}
    </p>
  </v-ons-page>
</template>