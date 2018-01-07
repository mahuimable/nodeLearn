import Vue from 'Vue'
import VueRouter from 'vue-router'
import storeConfig from '../store'
import routeConfig from '../routes'
import app from './app.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: routeConfig,
    linkActiveClass: 'active'
})

router.beforeEach((to, from ,next) => {
    document.title = to.meta.title
    next()
})

new Vue({
    el: '#app',
    router,
    store: storeConfig,
    render: h => h(app)
})