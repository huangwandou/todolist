import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import todolist from '@/components/todolist'
import VuexDemo from '@/components/VuexDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: todolist
    },
    {
      path: '/vuexdemo',
      name: 'VuexDemo',
      component: VuexDemo
    }
  ]
})
