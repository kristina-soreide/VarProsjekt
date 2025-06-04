// Hent elementet med klassen "boks"
const boksEL = document.querySelector(".boks");

// Sjekk om elementet finnes, og legg til klikk-lytter som kjører funksjonen makePink når det klikkes
if (boksEL) {
  boksEL.addEventListener("click", makePink);
}

// Funksjon som veksler (legger til/fjerner) klassen "pinkclass" på boksEL
function makePink() {
  boksEL.classList.toggle("pinkclass");
}

// Funksjon som henter verdien fra inputfeltet med id "navnInput" og viser en velkomstmelding
function siHei() {
  const navn = document.getElementById("navnInput").value;
  alert("Hei, " + navn + "!");
}

/* --- Quiz-spørsmål og svar lagret i et array av objekter --- */
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

// Hent HTML-elementer der spørsmål, svarknapper og neste-knapp vises
const questionEL = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Variabler for å holde styr på hvilken spørsmål vi er på og poengsum
let currentQuestionIndex = 0;
let score = 0;

// Starter quizen, nullstiller indeks og poeng, viser første spørsmål og oppdaterer knapptekst
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Neste";
  showQuestion();
}

// Viser spørsmål og svaralternativer basert på currentQuestionIndex
function showQuestion() {
  resetState(); // Nullstiller tidligere svar og skjuler neste-knapp
  const currentQuestion = questions[currentQuestionIndex];
  questionEL.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

  // Lag knapp for hvert svar og legg til klikk-lytter
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    button.addEventListener("click", () => selectAnswer(button, answer.correct));
  });
}

// Nullstiller svarområdet og skjuler neste-knappen før nytt spørsmål
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Håndterer brukerens svar når en knapp trykkes
function selectAnswer(button, isCorrect) {
  // Finn riktig knapp basert på svar som er markert som korrekt
  const correctButton = Array.from(answerButtons.children).find(btn => btn.innerHTML === questions[currentQuestionIndex].answers.find(ans => ans.correct).text);
  
  if (isCorrect) {
    button.classList.add("correct"); // Marker valgt knapp som riktig
    score++; // Øk poengsummen
  } else {
    button.classList.add("incorrect"); // Marker valgt knapp som feil
    correctButton.classList.add("correct"); // Marker riktig knapp også
  }
  
  // Deaktiver alle svarknapper etter valg
  Array.from(answerButtons.children).forEach(btn => btn.disabled = true);
  nextButton.style.display = "block"; // Vis neste-knappen
}

// Viser sluttresultatet når alle spørsmål er besvart
function showScore() {
  resetState();
  questionEL.innerHTML = `Du fikk ${score} av ${questions.length} riktige!`;
  nextButton.innerHTML = "Spill igjen";
  nextButton.style.display = "block";
}

// Håndterer klikk på neste-knappen, viser nytt spørsmål eller resultat
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

// Legg til klikk-lytter på neste-knappen for å gå videre i quizen
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

// Start quizen når siden lastes
startQuiz();