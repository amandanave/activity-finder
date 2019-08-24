import Vue from 'vue'
import Router from 'vue-router'
import ActivityFinder from '@/views/ActivityFinder'
import About from '@/views/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'activityfinder',
      component: ActivityFinder
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
