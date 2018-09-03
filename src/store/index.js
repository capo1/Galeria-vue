import Vue from 'vue'
import Vuex from 'vuex'
import ui from './modules/ui.js'
import albums from './modules/albums.js'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({

    modules: {
        ui,
        albums
    },
    strict: debug
})