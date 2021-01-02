import Vue from 'vue'
import VueMeta from 'vue-meta'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/fr'
import Buefy from 'buefy'
import LocalForage from 'localforage'

import store from './store'
import App from './App.vue'
import router from './router'

import '@/assets/styles/index.scss' // global css
import './assets/images'

LocalForage.config({ driver: LocalForage.IndexedDB, name: 'Hand Me', version: 1.0, storeName: 'HandMe' })

Vue.config.productionTip = false

Vue.prototype.handleEvent = new Vue()
Vue.prototype.$localforage = LocalForage

Vue.use(Element, { locale })

Vue.use(Buefy, VueMeta)

new Vue({
  render: h => h(App),
  router,
  store,
  refreshOnceOnNavigation: true,
  created () {
    const userTheme = localStorage.getItem('user-theme')
    if (userTheme) {
      const theme = JSON.parse(userTheme)
      this.$store.commit('SET_USER_THEME', theme)
    }
  }
}).$mount('#app')
