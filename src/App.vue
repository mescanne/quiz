<template>
  <div id="app" class="container">
     <Menu/>
     <router-view></router-view> 
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from './components/Menu.vue'
import Question from './quiz.js'

Vue.use(VueRouter);

export default {
  name: 'App',
  components: {
    Menu,
  },
  created() {

    // Listen for our custom event from the service worker registration
    document.addEventListener('swUpdated', this.updateAvailable, { once: true })

    // Prevent multiple refreshes if there is a serviceWorker
    if (navigator.serviceWorker != undefined) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (this.refreshing) return
        this.refreshing = true

        // Here the actual reload of the page occurs
        window.location.reload()
      })
    }
  },
  data: function() {
    return {
      questions: Question.timesTableQuestions(5, true, true).slice(0,2),
    };
  },
  methods: {

    // Store the SW registration so we can send it a message
    // We use `updateExists` to control whatever alert, toast, dialog, etc we want to use
    // To alert the user there is an update they need to refresh for
    updateAvailable(event) {
      let registration = event.detail

      this.$buefy.snackbar.open({
        message: 'An update is available',
        actionText: 'Update',
        indefinite: true,
        onAction: () => {

          // Make sure we only send a 'skip waiting' message if the SW is waiting
          if (!registration || !registration.waiting) {
            return;
          }

          // send message to SW to skip the waiting and activate the new SW
          registration.waiting.postMessage({ type: 'SKIP_WAITING' })
        }
      })
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
