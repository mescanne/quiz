<template>
  <div class="container">
    <b-checkbox v-model="timesTable" native-value="1">1</b-checkbox>
    <b-checkbox v-model="timesTable" native-value="2">2</b-checkbox>
    <b-checkbox v-model="timesTable" native-value="3">3</b-checkbox>
    <b-checkbox v-model="timesTable" native-value="4">4</b-checkbox>
    <b-checkbox v-model="timesTable" native-value="5">5</b-checkbox>
    <b-checkbox v-model="timesTable" native-value="6">6</b-checkbox>
    <b-checkbox v-model="timesTable" native-value="7">7</b-checkbox>
    <b-checkbox v-model="timesTable" native-value="8">8</b-checkbox>
    <b-checkbox v-model="timesTable" native-value="9">9</b-checkbox>
    <b-checkbox v-model="timesTable" native-value="10">10</b-checkbox>
    <b-checkbox v-model="timesTable" native-value="11">11</b-checkbox>
    <b-checkbox v-model="timesTable" native-value="12">12</b-checkbox>
    <b-switch v-model="withReorder">Reorder</b-switch>
    <b-switch v-model="withDivision">Division</b-switch>
  </div>
</template>

<script>

export default {
  name: 'QuizConfig',
  data: function() {
    return {
      timesTable: [],
    }
  },
  props: {
    questions: Array,
  },
  methods: {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
