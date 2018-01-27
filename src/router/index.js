import Vue from 'vue'
import Router from 'vue-router'

import homePage from '../Home'
import explorePage from '../Explore'
import postPage from '../Post'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: homePage
        },
        {
            path: '/explore',
            name: 'Explore',
            component: explorePage
        },
        {
            path: '/post/:id',
            name: 'Post',
            component: postPage
        }
    ]
})