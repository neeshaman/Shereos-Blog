// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


import Header from './components/Header.vue'

import Home from './components/Home.vue'

import Footer from './components/Footer.vue'

import Login from './components/Login.vue'

import Register from './components/Register.vue'

import SinglePage from './components/SinglePage.vue'

const routes=[
  {
    path:'/header',component:Header
  },
  {
    path:'/',component:Home
  },
  {
    path:'/footer',component:Footer
  },
  {
    path:'/login',component:Login
  },
  {
    path:'/Register',component:Register
  },
  {
    path:'/SinglePage',component:SinglePage
  }
  
];

const router=new VueRouter({routes:routes})

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
