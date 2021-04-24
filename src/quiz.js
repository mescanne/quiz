
function QuestionSet(name, questions) {
  return {
    name: name,
    questions: questions,
  }
}

function Question(isNumber, textQuestion, spokenQuestion, answer, weight) {
  return {
    isNumber: isNumber,
    textQuestion: textQuestion,
    spokenQuestion: spokenQuestion,
    answer: answer,
    weight: weight,
  }
}

function pullTopQuestions(questions, num) {

	//console.log('questions:', JSON.parse(JSON.stringify(questions)));
	
	// Re-apply weight times a random number.
	for (let i = 0; i < questions.length; i++) {
		questions[i].weight = questions[i].weight * Math.random();
	}

	// Sort by weighted random order
	questions.sort((a, b) => b.weight - a.weight);

	//console.log('questions by weight:', JSON.parse(JSON.stringify(questions)));

	// Slice by the number we want.
	questions = questions.slice(0, num);

	// Re-apply weights for a pure random order
	for (let i = 0; i < questions.length; i++) {
		questions[i].weight = Math.random();
	}

	// Sort again by random weights
	questions.sort((a, b) => b.weight - a.weight);

	//console.log('questions randomly:', JSON.parse(JSON.stringify(questions)));

	return questions;
}

const minTimesTable = 0;
const maxTimesTable = 12;
function timesTableQuestions(number, withReorder, withDivide) {
  let questions = [];
  if (!Array.isArray(number)) {
    number = [number]
  }
  for (let n of number) {
    let idx = minTimesTable;
    while (idx <= maxTimesTable) {
      // from 3 to 100 it's 1 to apx 4.6.
      let answer = n * idx;
      let boost = 0;
      if (answer > 3) {
          boost = Math.log(answer);
      }
      questions.push(Question(true, idx + ' × ' + n, idx + ' times ' + n, answer, 8.0 + boost));
      if (withReorder) {
        questions.push(Question(true, n + ' × ' + idx, n + ' times ' + idx, answer, 8.0 + boost));
      }
      if (withDivide) {
        questions.push(Question(true, answer + ' ÷ ' + n, answer + ' divided by ' + n, idx, 10.0 + boost));
      }
      idx ++;
    }
  }
  shuffle(questions);
  return questions;
}

function subtractionQuestions(minSum, maxSum) {
  let questions = [];
  for (let sum = minSum; sum < maxSum; sum++) {
    for (let i = 0; i < sum; i++) {
      let j = sum - i;
      questions.push(Question(true, sum + ' - ' + i, sum + ' minus ' + i, j, 1.0));
      questions.push(Question(true, sum + ' - ' + j, sum + ' minus ' + j, i, 1.0));
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
      questions.push(Question(true, i + ' + ' + j, i + ' plus ' + j, sum, 1.0));
      questions.push(Question(true, j + ' + ' + i, j + ' plus ' + i, sum, 1.0));
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
  set.push(QuestionSet('1-5, 8, 10', timesTableQuestions([1,2,3,4,5,8,10], false, true)));
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
  timesTableQuestions,
  addingQuestions,
  subtractionQuestions,
  shuffle,
  pullTopQuestions,
  questionMix,
}

