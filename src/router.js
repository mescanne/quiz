import VueRouter from 'vue-router';
//import Question from './quiz.js'
import Quiz from './components/Quiz.vue'
import QuizConfig from './components/QuizConfig.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: QuizConfig },
    { path: '/quiz', name: 'quiz', component: Quiz, props: true },
  ]
});

export default router;

//
//<template>
//  <div id="app" class="container">
//     <Menu/>
//     <router-view></router-view> 
//    <Quiz :questions="questions"/>
//    <QuizConfig/>
//-->
//  </div>
//</template>
//
//<script>
//import Vue from 'vue'
//import VueRouter from 'vue-router'
//
//Vue.use(VueRouter);
//
//export default {
//  name: 'App',
//  components: {
//    //Menu,
//    //Quiz,
//    //QuizConfig,
//  },
//  created() {
//    //console.log('questoins: ', this.$data.questions)
//  },
//  data: function() {
//    return {
//      questions: Question.timesTableQuestions(5, true, true).slice(0,2),
//    };
//  }
//}
//</script>
//
//<style>
//#app {
//  font-family: Avenir, Helvetica, Arial, sans-serif;
//  -webkit-font-smoothing: antialiased;
//  -moz-osx-font-smoothing: grayscale;
//  text-align: center;
//  color: #2c3e50;
//}
//</style>
