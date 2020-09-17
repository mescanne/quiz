<template>
  <div id="app">
    <Quiz :questions="questions"/>
  </div>
</template>

<script>
import Quiz from './components/Quiz.vue'
import Question from './quiz.js'

export default {
  name: 'App',
  components: {
    Quiz,
  },
  created() {
    //console.log('questoins: ', this.$data.questions)
  },
  data: function() {
    return {
      questions: Question.timesTableQuestions(5, true, true),
    };
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
