// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

function addRootElement () {
  let root = document.querySelector('html')
  if (!root) return false

  let oldEl = root.querySelector('#__inject_page__')
  if (oldEl != null) {
    return false
  }

  let el = document.createElement('div')
  el.id = '__inject_page__'
  root.appendChild(el)
  return true
}

function init () {
  const EnablePages = {
    'buyertrade.taobao.com': '/',
    localhost: '/'
  }
  const location = EnablePages[window.location.hostname]
  if (!location || !addRootElement()) return

  library.add(faPlay)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  Vue.config.productionTip = false
  /* eslint-disable no-new */
  new Vue({
    el: '#__inject_page__',
    router,
    components: { App },
    template: '<App/>'
  })
  router.replace(location).catch(err => err)
  console.log('inject page inited')
}

init()
