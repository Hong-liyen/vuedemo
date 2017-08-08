import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Form from '@/components/Form'
import Card from '@/components/Card'

Vue.use(Router)

export default new Router({
  mode: 'history',	
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    },
  ]
})
