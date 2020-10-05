
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

export default {
  Question,
  timesTableQuestions,
  addingQuestions,
  shuffle,
}

