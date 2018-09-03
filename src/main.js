import Vue from 'vue'
import App from './App'


import router from './router'
import store from './store/'

import {
    i18n
} from '@/plugins/i18n.js'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './sass/index.scss'
import VueClazyLoad from 'vue-clazy-load'
import VueCarousel from 'vue-carousel'
import polishdeclinationnumbers from '@/plugins/misc/PolishDeclinationsNumbers'
import './registerServiceWorker'


//Vue.use(axios)
Vue.use(BootstrapVue)
Vue.use(VueClazyLoad)
Vue.use(VueCarousel)
Vue.use(polishdeclinationnumbers)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    i18n,
    template: '<App/>',
    components: {
        App
    },
    methods: {},
    render: h => h(App)
})