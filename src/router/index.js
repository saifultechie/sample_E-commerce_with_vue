import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/pages/login'
import admin from '@/components/pages/admin/admin'
import Category from '@/components/pages/admin/Category'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: {path:'login'}
    },

     {
      path: '/login',
      name: 'login',
      component: login
    },

    {
      path: '/admin',
      name: 'admin',
      component: admin,

      redirect: { path: '/admin/category'},

      children:[

      	{

      	  path: 'category',
	      name: 'admin.category',
	      component: Category



      	}

	      


      ]
    }


  ],

  mode:"history"
})
