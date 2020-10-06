import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import './registerServiceWorker'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'
import router from './router'
import {config} from './firebaseConfig'

Vue.use(Buefy)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  created() {
    firebase.initializeApp(config);
    //firebase.auth().onAuthStateChanged((user) => {
    //  if(user) {
    //    this.$router.push('/success')
    //  } else {
    //    this.$router.push('/auth')
    //  }
    //});
  },
  render: h => h(App),
}).$mount('#app')
