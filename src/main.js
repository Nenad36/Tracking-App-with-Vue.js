import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase/app'

Vue.config.productionTip = false

let app = null;

firebase.auth().onAuthStateChanged(() => {
if (!app){
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    render: h => h(App)
  })

  }

});

