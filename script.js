const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffee", correct: false},
        ]

    },
    {
        question: "What does a caterpillar change into?",
        answers: [
            {text: "A Cat", correct: false},
            {text: "An Earthworm", correct: false},
            {text: "Butterfly", correct: true},
            {text: "Chick", correct: false},
        ]

    },
    {
        question: "What is the name of the gas in the air that keeps us alive?",
        answers: [
            {text: "Petrol", correct: false},
            {text: "Oxygen", correct: true},
            {text: "Carbon dioxide", correct: false},
            {text: "Nitrogen", correct: false},
        ]

    },
    {
        question: " How many planets are there in our solar system?",
        answers: [
            {text: "9", correct: false},
            {text: "10", correct: true},
            {text: "12 ", correct: false},
            {text: "8", correct: false},
        ]

    }
    
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex=0;
    score= 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    // resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    //     if(answer.correct){
    //         button.dataset.correct = answer.correct
    //     }
    //     button.addEventListener("click" , selectAnswer);
    });
}


// function resetState(){
//     nextButton.style.display = "none";
//     while(answerbuttons.firstChild){
//         answerbuttons.removeChild(answerbuttons.firstChild);
//     }
// }

// function selectAnswer(e){
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === "true";
//     if(isCorrect){
//         selectedBtn.classList.add("correct");
//         score++;
//     }else{
//         selectedBtn.classList.add("incorrect");
//     }
//     Array.from(answerbuttons.children).forEach(button =>{
//         if(button.dataset.correct === "true"){
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     });
//     nextButton.style.display = "block";
// }


// function showScore(){
//     resetState();
//     questionElement.innerHTML = `You have scored ${score} out of ${questions.length}`;
//     nextButton.innerHTML = "Play again";
//     nextButton.style.display = "block";
// }

// function handleNextButton(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex < questions.length){
//         showQuestion();
//     }else{
//         showScore();
//     }
// };
// nextButton.addEventListener("click" , ()=>{
//     if(currentQuestionIndex < questions.length){
//         handleNextButton();
//     }else{
//         startQuiz();
//     }
// });
startQuiz();