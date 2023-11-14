<template>
  <div class="container">
    <b-switch v-model="withSound">Sound</b-switch>
    <b-field label="Questions">
      <b-select v-model="questionCount" placeholder="10">
        <option value="10">10</option>
        <option value="20">20</option>
      </b-select>
    </b-field>

    <b-tabs>
      <b-tab-item v-for="(item, key) in questions" :label="key" :key="key">
        <div class="grid-row">
          <div v-for="questionSet in item" :key="questionSet">
            <div class="grid-item">
              <b-button class="card-footer-item is-primary" @click="launchQuestions(questionSet.questions, questionSet.singleDigit)">{{ questionSet.name }}</b-button>
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
      withSound: true,
      questionCount: 20,
      questions: Question.questionMix(),
    }
  },
  props: {
  },
  methods: {
    launchQuestions: function(questions, singleDigit) {
      router.push({ name: "quiz", params: { 'qCount': this.$data.questionCount, 'questions': questions.slice(0, this.$data.questionCount), 'withSound': this.$data.withSound, 'singleDigit': singleDigit } });
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
