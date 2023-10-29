const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";

    for (let option of questions[currentQuestion].options) {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectOption(option);
        optionsElement.appendChild(button);
    }
}

function selectOption(option) {
    if (option === questions[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `You scored ${score} out of ${questions.length}.`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const questionElement = document.getElementById("question");
    questionElement.innerHTML = "";
}

function checkAnswer() {
    const options = document.querySelectorAll("button");
    options.forEach(option => {
        option.disabled = true;
    });

    selectOption(null);
}

loadQuestion();
