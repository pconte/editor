import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Files from '@/components/Files'
import FileForm from '@/components/FileForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/files',
      name: 'Files',
      component: Files
    },
    {
      path: '/files/:fileName',
      name: 'FileForm',
      component: FileForm
    },
    {
      path: '/file',
      name: 'File',
      component: FileForm
    }
  ]
})
