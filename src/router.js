import Vue from 'vue'
import Router from 'vue-router'
import ActivityFinder from '@/views/ActivityFinder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'activityfinder',
      component: ActivityFinder
    }
  ]
})
