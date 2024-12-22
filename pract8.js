const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: 0
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1
    },
    {
        question: "Who wrote 'To be or not to be'?",
        options: ["Shakespeare", "Hemingway", "Tolkien", "Dickens"],
        correctAnswer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const question = document.getElementById('question');
    const options = document.getElementsByClassName('option-btn');

    question.textContent = questions[currentQuestionIndex].question;
    for (let i = 0; i < options.length; i++) {
        options[i].textContent = questions[currentQuestionIndex].options[i];
    }
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedOption === correctAnswer) {
        score++;
        alert('Correct!');
    } else {
        alert('Wrong!');
    }
    
    document.getElementById('score-display').textContent = `Score: ${score}`;
    document.getElementById('next-question-btn').style.display = 'block';
}

function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById('next-question-btn').style.display = 'none';
    } else {
        alert(`Quiz finished! Your final score is: ${score}`);
        
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('score-display').textContent = `Score: ${score}`;
    loadQuestion();
}

window.onload = function() {
    
    document.querySelector('.restart').style.display='block'
    document.querySelector('.restart').addEventListener('click', resetQuiz);

    // Hide the restart button on load
    document.querySelector('.restart').style.display = 'none';

    // Load the first question
    loadQuestion();
};
