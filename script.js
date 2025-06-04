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
    question: "Hva brukes < ol > -elementet til?",
    answers: [
      { text: "Lage punktliste", correct: true },
      { text: "Lage nummerert liste", correct: false },
      { text: "Lage tabell", correct: false },
      { text: "Lage overskrift", correct: false }
    ]
  },
  {
    question: "Hvordan skriver man en kommentar i HTML?",
    answers: [
      { text: "//Kommentar", correct: false },
      { text: "/*Kommentar*/", correct: false },
      { text: "&lt;!-- Kommentar --&gt;", correct: true },
      { text: "#Kommentar", correct: false }
    ]
  },
  {
    question: "Hvor i HTML-dokumentet bør du plassere linken til JavaScript-filen?",
    answers: [
      { text: "Ingen link, og JS filen ligger i en annen mappe", correct: false },
      { text: "I head", correct: false },
      { text: "Trenger ikke linke", correct: false },
      { text: "Nederst i body", correct: true }
    ]
  },
  {
    question: "Hvis et HTML-element har både en class og en id, hvilken CSS-regel vil ha høyest prioritet?",
    answers: [
      { text: "stylingen som kommer først", correct: false },
      { text: "Id", correct: false },
      { text: "feilmelding", correct: false },
      { text: "class", correct: true }
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
