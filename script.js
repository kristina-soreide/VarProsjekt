const boksEL = document.querySelector(".boks")
boksEL.addEventListener("click", makePink)

function makePink() {
    boksEL.classList.toggle("pinkclass")
}


/*js til test*/
const question=[
    {
        question: "Hvem er du?",
        svar: [
            { text: "Lærer", correct:false},
            { text: "Lærer", correct:true},
            { text: "Lærer", correct:false},
            { text: "Lærer", correct:false},
        ]
    },
    {
         question: "Hvem er du?",
        svar: [
            { text: "Lærer", correct:false},
            { text: "Lærer", correct:true},
            { text: "Lærer", correct:false},
            { text: "Lærer", correct:false},
        ]
    },
    {
        question: "Hvem er du?",
        svar: [
            { text: "Lærer", correct:false},
            { text: "Lærer", correct:true},
            { text: "Lærer", correct:false},
            { text: "Lærer", correct:false},
        ]
    }
];

const questionEL= document.getElementById("question");