
function QuestionSet(name, questions) {
  return {
    name: name,
    questions: questions,
  }
}

function Question(isNumber, textQuestion, spokenQuestion, answer) {
  return {
    isNumber: isNumber,
    textQuestion: textQuestion,
    spokenQuestion: spokenQuestion,
    answer: answer,
  }
}

const minTimesTable = 0;
const maxTimesTable = 12;
function timesTableQuestions(number, withReorder, withDivide) {
  let idx = minTimesTable;
  let questions = [];
  while (idx <= maxTimesTable) {
    let answer = number * idx;
    questions.push(Question(true, idx + ' × ' + number, idx + ' times ' + number, answer));
    if (withReorder) {
      questions.push(Question(true, number + ' × ' + idx, number + ' times ' + idx, answer));
    }
    if (withDivide) {
      questions.push(Question(true, answer + ' ÷ ' + number, answer + ' divided by ' + number, idx));
    }
    idx ++;
  }
  shuffle(questions);
  return questions;
}

function subtractionQuestions(minSum, maxSum) {
  let questions = [];
  for (let sum = minSum; sum < maxSum; sum++) {
    for (let i = 0; i < sum; i++) {
      let j = sum - i;
      questions.push(Question(true, sum + ' - ' + i, sum + ' minus ' + i, j));
      questions.push(Question(true, sum + ' - ' + j, sum + ' minus ' + j, i));
    }
  }
  shuffle(questions);
  return questions;
}

function addingQuestions(minSum, maxSum) {
  let questions = [];
  for (let sum = minSum; sum < maxSum; sum++) {
    for (let i = 0; i < sum; i++) {
      let j = sum - i;
      questions.push(Question(true, i + ' + ' + j, i + ' plus ' + j, sum));
      questions.push(Question(true, j + ' + ' + i, j + ' plus ' + i, sum));
    }
  }
  shuffle(questions);
  return questions;
}

function shuffle(questions) {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}

let addingList = [ 5, 10, 20, 50, 100 ];
function addingQuestionSet() {
  let set = [];
  for (let n of addingList) {
      set.push(QuestionSet(n, addingQuestions(Math.floor(n/2), n)));
  }
  return set;
}

function subtractionQuestionSet() {
  let set = [];
  for (let n of addingList) {
      set.push(QuestionSet(n, subtractionQuestions(Math.floor(n/2), n)));
  }
  return set;
}

function timesTableQuestionSet() {
  let set = [];
  for (let n = 2; n <= 12; n++) {
      set.push(QuestionSet(n, timesTableQuestions(n, false, true)));
  }
  return set;
}

function questionMix() {
  let r = {
    'x ÷': timesTableQuestionSet(),
    '+': addingQuestionSet(),
    '-': subtractionQuestionSet(),
  };
  console.log('question mix', r);
  return r;
}

export default {
  Question,
  timesTableQuestions,
  addingQuestions,
  subtractionQuestions,
  shuffle,
  questionMix,
}

