
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
    questions.push(Question(true, number + ' × ' + idx, number + ' times ' + idx, answer));
    if (withReorder) {
      questions.push(Question(true, idx + ' × ' + number, idx + ' times ' + number, answer));
    }
    if (withDivide) {
      questions.push(Question(true, answer + ' ÷ ' + number, answer + ' divided by ' + number, idx));
      if (withReorder && idx > 0) {
        questions.push(Question(true, answer + ' ÷ ' + idx, answer + ' divided by ' + idx, number));
      }
    }
    idx ++;
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
  shuffle,
}

