<template>
  <div style="padding:5%; font-size:80px;">
    <div style="padding-bottom:20px; font-size:20px; text-align:center;">{{ questionCount }}</div>
    <div style="padding-bottom:20px; text-align:center;">{{ question }}</div>
    <div style="height: 100px; display:flex; justify-content:center;">
      <input ref="answer" v-bind:disabled="answerDisabled" class="no-spinners" style="width:5ch; height:100%; text-align:center; font-size:80px;" v-on:keyup.enter="onEnter" v-model.number="answer" type="number">
    </div>
    <div style="height: 60px; font-size:40px; display:flex; text-align:center; justify-content:center; margin-top:20px; font-style: italic; font-color:gray;">{{ statusMsg }}</div>
    <div style="height: 60px; font-size:40px; display:flex; text-align:center; justify-content:center; margin-top:20px; font-style: italic; font-color:gray;">{{ explanation }}</div>
  </div>
</template>

<script>

export default {
  name: 'Quiz',
  data: function() {
    return {
      answer: '',
      currentQuestion: 0,
      correct: 0,
      questionCount: '',
      question: '',
      statusMsg: '',
      explanation: '',
      answerDisabled: true,
    }
  },
  props: {
    questions: Array,
  },
  mounted() {
    this.nextQuestion(); 
  },
  methods: {
    onEnter: function() {
      this.$data.answerDisabled = true;
      window.speechSynthesis.cancel();
      let delay = 200;
      if (this.$data.answer == this.questions[this.$data.currentQuestion].answer) {
        this.showStatus('Correct!', '');
        this.$data.correct += 1;
      } else {
        delay = 1000;
        this.showStatus('Incorrect.',  this.questions[this.$data.currentQuestion].textQuestion + ' is ' + this.questions[this.$data.currentQuestion].answer);
      }
      this.currentQuestion += 1;
      this.delayAfterSpeaking(delay);
    },
    nextQuestion: function() {
      this.showStatus('', '');
      if (this.$data.currentQuestion < this.questions.length) {
        this.showQuestion();
      } else {
        let perc = this.$data.correct / this.questions.length;
	let msg = 'Practice more.';
        if (perc == 1.0) {
          msg = 'Fantastic.';
        } else if (perc >= 0.75) {
          msg = 'Good.';
        } 
        this.showStatus(this.$data.correct + ' of ' + this.questions.length + ' correct.', msg);
      }
    },
    showQuestion: function() {
      this.$data.statusMsg = '';
      this.$data.answer = '';
      this.$data.questionCount = 'Question ' + (this.$data.currentQuestion+1) + ' of ' + this.questions.length;
      this.$data.question = this.questions[this.$data.currentQuestion].textQuestion;
      this.sayMessage(this.questions[this.$data.currentQuestion].spokenQuestion);
      this.$data.answerDisabled = false;
      this.$nextTick(() => {
        this.$refs.answer.focus();
      });
    },
    showStatus: function(statusMsg, explanation) {
       this.$data.statusMsg = statusMsg;
       this.$data.explanation = explanation;
       if (statusMsg != '') {
         this.sayMessage(statusMsg);
       }
       if (explanation != '') {
         this.sayMessage(explanation);
       }
    },
    sayMessage: function(msg) {
       let nmsg = msg.replace('×', 'times');
       window.speechSynthesis.speak(new SpeechSynthesisUtterance(nmsg));
    },
    delayAfterSpeaking: function(delay) {
      if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
        let delayAgain = this.delayAfterSpeaking;
        setTimeout(function() {
          delayAgain(delay);
        }, 100);
        return;
      }
      setTimeout(this.nextQuestion, delay);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.no-spinners {
  -moz-appearance:textfield;
}

.no-spinners::-webkit-outer-spin-button,
.no-spinners::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

</style>
