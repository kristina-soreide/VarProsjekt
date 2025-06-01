const boksEL = document.querySelector(".boks")
boksEL.addEventListener("click", makePink)

function makePink() {
    boksEL.classList.toggle("pinkclass")
}


/*js til test*/
const question=[
    {
        question: "Hvem er du?",
        answer: [
            { text: "Lærer", correct:false},
            { text: "Lærer", correct:true},
            { text: "Lærer", correct:false},
            { text: "Lærer", correct:false},
        ]
    },
    {
         question: "Hvem er du?",
        answer: [
            { text: "Lærer", correct:false},
            { text: "Lærer", correct:true},
            { text: "Lærer", correct:false},
            { text: "Lærer", correct:false},
        ]
    },
    {
        question: "Hvem er du?",
        answer: [
            { text: "Lærer", correct:false},
            { text: "Lærer", correct:true},
            { text: "Lærer", correct:false},
            { text: "Lærer", correct:false},
        ]
    }
];

const questionEL= document.getElementById("question");
const answerButtons= document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex= 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+ 1;
    questionEL.innerHTML = questionNo + "." + currentQuestion.
    question; 

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
         button.classList.add("btn");
         answerButtons.appendChild(button); 
         if(answer.correct){
            button.dataset.correct = answer.correct;
         }
         button.addEventListener("click", selectAnswer); 
    });
}

function resetState(){
    nextButton.style.display = "none";
     while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)

     }
}

function selectAnswer(){
    const selectedBtn= e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("inorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disable = true; 
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionEL.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});



startQuiz();