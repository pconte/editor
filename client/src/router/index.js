import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Items from '@/components/Items'
import Item from '@/components/Item'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/items',
      name: 'Items',
      component: Items
    },
    {
      path: '/item',
      name: 'item',
      component: Item
    }
  ]
})
