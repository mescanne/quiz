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
      <b-tab-item label="x ÷">
      <div class="grid-row">
        <div v-for="n in 11" :key="n">
          <div class="grid-item">
            <b-button class="card-footer-item is-primary" @click="launchTimesTable(n+1)">{{ n + 1 }}</b-button>
           </div>
        </div>
        <div class="grid-item">
          <b-button class="card-footer-item is-primary" @click="launchMultipleTimesTable([2,5,10])">2, 5, 10</b-button>
        </div>
      </div>
      </b-tab-item>
      <b-tab-item label="+">
      <div class="grid-row">
        <div v-for="n in addingList" :key="n">
          <div class="grid-item">
            <b-button class="card-footer-item is-primary" @click="launchAddingToSum(n)">{{ n }}</b-button>
          </div>
        </div>
      </div>
      </b-tab-item>
      <b-tab-item label="-">
      <div class="grid-row">
        <div v-for="n in addingList" :key="n">
          <div class="grid-item">
            <b-button class="card-footer-item is-primary" @click="launchSubtractionToSum(n)">{{ n }}</b-button>
           </div>
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
      addingList: [ 5, 10, 20, 50, 100 ],
      timesTable: [],
      withReorder: false,
      withDivision: false,
      withSound: true,
      questionCount: 20,
    }
  },
  props: {
    questions: Question.questionMix(),
  },
  methods: {
    launchMultipleTimesTable: function(lst) {
      let questions = [];
      for (let n of lst) {
        questions.push(...Question.timesTableQuestions(n, false, true));
      }
      Question.shuffle(questions);
      questions = questions.slice(0, this.$data.questionCount);
      router.push({ name: "quiz", params: { 'questions': questions, 'withSound': this.$data.withSound } });
    },
    launchTimesTable: function(n) {
      let questions = Question.timesTableQuestions(n, false, true).slice(0, this.$data.questionCount);
      router.push({ name: "quiz", params: { 'questions': questions, 'withSound': this.$data.withSound } });
    },
    launchAddingToSum: function(n) {
      let questions = Question.addingQuestions(Math.floor(n/2), n).slice(0, this.$data.questionCount);
      router.push({ name: "quiz", params: { 'questions': questions, 'withSound': this.$data.withSound } });
    },
    launchSubtractionToSum: function(n) {
      let questions = Question.subtractionQuestions(Math.floor(n/2), n).slice(0, this.$data.questionCount);
      router.push({ name: "quiz", params: { 'questions': questions, 'withSound': this.$data.withSound } });
    },
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.grid-row {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

.grid-item {
  padding: 10px 10px 10px 10px;
}

</style>
