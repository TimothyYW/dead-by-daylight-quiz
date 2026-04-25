const questions = [
    {
        question: "Which survivor was added during the Curtain Call chapter?",
        answers: [
            { text: "Dwight Fairfield", correct: false },
            { text: "Kate Denson", correct: true },
            { text: "Nea Karlsson", correct: false },
            { text: "Felix Richter", correct: false },
        ]
    },
    {
        question: "Who has the power called Spencer's Last Breath?",
        answers: [
            { text: "The Doctor", correct: false },
            { text: "The Oni", correct: false },
            { text: "The Onryo", correct: false },
            { text: "The Nurse", correct: true },
        ]
    },
    {
        question: "Which survivor is based on a real person?",
        answers: [
            { text: "Nicolas Cage", correct: true },
            { text: "Nea Karlsson", correct: false },
            { text: "Claudette Morel", correct: false },
            { text: "Felix Richter", correct: false },
        ]
    },
    {
        question: "Who is the heaviest killer in Dead by Daylight?",
        answers: [
            { text: "The Executioner", correct: false },
            { text: "The Clown", correct: true },
            { text: "The Legion", correct: false },
            { text: "The Shape", correct: false },
        ]
    },
    {
        question: "Which survivor introduced the perk Boon: Circle of Healing?",
        answers: [
            { text: "David King", correct: false },
            { text: "Nea Karlsson", correct: false },
            { text: "Zarina Kassir", correct: false },
            { text: "Mikaela Reid", correct: true },
        ]
    },
    {
        question: "Which killer's real name is Susie?",
        answers: [
            { text: "The Legion", correct: true },
            { text: "The Cenobite", correct: false },
            { text: "The Oni", correct: false },
            { text: "The Wraith", correct: false },
        ]
    },
    {
        question: "Which killer has a backstory of being bullied?",
        answers: [
            { text: "The Plague", correct: false },
            { text: "The Onryo", correct: false },
            { text: "The Spirit", correct: true },
            { text: "The Oni", correct: false },
        ]
    },
    {
        question: "Which survivor has a connection to the killer known as The Trickster?",
        answers: [
            { text: "Yui Kimura", correct: false },
            { text: "Jake Park", correct: false },
            { text: "Yun-Jin Lee", correct: true },
            { text: "Feng Min", correct: false },
        ]
    },
    {
        question: "What is the real name of The Skull Merchant?",
        answers: [
            { text: "Herman Carter", correct: false },
            { text: "Adriana Imai", correct: true },
            { text: "Caleb Quinn", correct: false },
            { text: "Amanda Young", correct: false },
        ]
    },
    {
        question: "Which survivor has Lebanese origins?",
        answers: [
            { text: "Zarina Kassir", correct: true },
            { text: "Ada Wong", correct: false },
            { text: "Meg Thomas", correct: false },
            { text: "Gabriel Soma", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerOptions = document.getElementById("answer-option");
const nextButton = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");
const questionCounter = document.getElementById("question-counter");

let currentQuestionIndex = 0;
let score = 0;

startQuiz();

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

/**
 * Resets state and starts a fresh quiz run with shuffled questions.
 */
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    shuffleArray(questions);
    showQuestion();
}

/**
 * Renders the current question and its answer buttons.
 * Updates the progress bar and question counter on each call.
 */
function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;

    progressBar.style.width = ((currentQuestionIndex / questions.length) * 100) + "%";
    questionCounter.textContent = `QUESTION ${questionNo} / ${questions.length}`;

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    const letters = ["A", "B", "C", "D"];
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerHTML = `<span class="answer-letter">${letters[index]}.</span> ${answer.text}`;
        button.classList.add("btn");
        answerOptions.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = "true";
        }
        button.addEventListener("click", selectAnswer);
    });
}

/**
 * Hides the next button and clears all rendered answer buttons.
 */
function resetState() {
    nextButton.style.display = "none";
    while (answerOptions.firstChild) {
        answerOptions.removeChild(answerOptions.firstChild);
    }
}

/**
 * Handles an answer selection: applies correct/incorrect styling,
 * reveals the right answer, and disables all buttons.
 *
 * @param {Event} e - The click event from an answer button.
 */
function selectAnswer(e) {
    const selectedBtn = e.currentTarget;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerOptions.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

/**
 * Displays the final score and a tiered message based on performance.
 */
function showScore() {
    resetState();

    progressBar.style.width = "100%";
    questionCounter.textContent = "TRIAL COMPLETE";

    let message;
    if (score <= 2) {
        message = "The Entity claims your soul... You belong to the fog now.";
    } else if (score <= 4) {
        message = "You stumbled in the darkness. Return to the fog and try again.";
    } else if (score <= 6) {
        message = "Not bad, Survivor. But the fog still holds secrets from you.";
    } else if (score <= 8) {
        message = "The Entity takes notice... Your knowledge is formidable.";
    } else {
        message = "You are one with the fog. The Entity bows before your knowledge!";
    }

    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!<br><br><em>${message}</em>`;
    nextButton.innerHTML = "Return to the Fog?";
    nextButton.style.display = "block";
}

/**
 * Advances to the next question or shows the score screen when the quiz ends.
 */
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
