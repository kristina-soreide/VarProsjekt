const boksEL = document.querySelector(".boks");
if (boksEL) {
  boksEL.addEventListener("click", makePink);
}

function makePink() {
  boksEL.classList.toggle("pinkclass");
}

function siHei() {
      const navn = document.getElementById("navnInput").value;
      alert("Hei, " + navn + "!");
}

/*js til test*/
const questions = [
  {
    question: "Hvem er du?",
    answers: [
      { text: "Lærer", correct: false },
      { text: "Elev", correct: true },
      { text: "Rektor", correct: false },
      { text: "Assistent", correct: false }
    ]
  },
  {
    question: "Hva er hovedstaden i Norge?",
    answers: [
      { text: "Bergen", correct: false },
      { text: "Oslo", correct: true },
      { text: "Stavanger", correct: false },
      { text: "Trondheim", correct: false }
    ]
  },
  {
    question: "Hva er 2 + 2?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "6", correct: false }
    ]
  }
];

const questionEL = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Neste";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionEL.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    button.addEventListener("click", () => selectAnswer(button, answer.correct));
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(button, isCorrect) {
  const correctButton = Array.from(answerButtons.children).find(btn => btn.innerHTML === questions[currentQuestionIndex].answers.find(ans => ans.correct).text);
  if (isCorrect) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("incorrect");
    correctButton.classList.add("correct");
  }
  Array.from(answerButtons.children).forEach(btn => btn.disabled = true);
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionEL.innerHTML = `Du fikk ${score} av ${questions.length} riktige!`;
  nextButton.innerHTML = "Spill igjen";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
