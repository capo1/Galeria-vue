import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

export default new Router({
    routes,
    mode: 'history',
    base: __dirname,
    props: (route) => ({
        to: route.query.to,
        stage: route.query.stage,
        bg: route.query.bg
    }),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }

        return {
            x: 0,
            y: 0
        }
    }
})