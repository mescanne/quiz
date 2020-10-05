<template>
  <div class="container">
    <b-switch v-model="withSound">Sound</b-switch>
    <b-field label="Questions">
      <b-select v-model="questionCount" placeholder="10">
        <option value="2">2</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </b-select>
    </b-field>

    <b-tabs>
      <b-tab-item label="Adding">
      <div class="columns is-multiine is-centered is-multiline">
        <div class="column is-narrow" v-for="n in 7" :key="n">
          <div class="column is-narrow"><div class="card"><div class="card-content"><div class="title">{{ n + 3 }}</div></div><footer class="card-footer"><b-button class="card-footer-item is-primary" @click="launchAddingToSum(n+3)">Launch</b-button></footer></div></div>
        </div>
      </div>
      </b-tab-item>
      <b-tab-item label="Times Table">
      <div class="columns is-multiine is-centered is-multiline">
        <div class="column is-narrow" v-for="n in 11" :key="n">
          <div class="column is-narrow"><div class="card"><div class="card-content"><div class="title">{{ n+1 }}</div></div><footer class="card-footer"><b-button class="card-footer-item is-primary" @click="launchTimesTable(n+1)">Launch</b-button></footer></div></div>
        </div>
      </div>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>

import Question from '../quiz.js'
import router from '../router'

export default {
  name: 'QuizConfig',
  data: function() {
    return {
      questionSets: ['a', 'b', 'c'],
      timesTable: [],
      withReorder: false,
      withDivision: false,
      withSound: true,
      questionCount: 10,
    }
  },
  props: {
    questions: Array,
  },
  methods: {
    launchTimesTable: function(n) {
      let questions = Question.timesTableQuestions(n, false, true).slice(0, this.$data.questionCount);
      router.push({ name: "quiz", params: { 'questions': questions, 'withSound': this.$data.withSound } });
    },
    launchAddingToSum: function(n) {
      let questions = Question.addingQuestions(Math.floor(n/2), n).slice(0, this.$data.questionCount);
      router.push({ name: "quiz", params: { 'questions': questions, 'withSound': this.$data.withSound } });
    },
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.c {
	margin: 10px 10px 10px 10px;
}
</style>
