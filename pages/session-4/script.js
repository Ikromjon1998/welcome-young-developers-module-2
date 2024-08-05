// scripts.js

function checkAnswer() {
    let userAnswer = document.getElementById('answer').value;
    let feedback = document.getElementById('feedback');

    if (userAnswer == 15) {
        feedback.innerHTML = "🎉 Correct! Well done!";
        feedback.style.color = "#4caf50";
    } else {
        feedback.innerHTML = "😕 Try again!";
        feedback.style.color = "#d32f2f";
    }
}

function submitQuiz() {
    let score = 0;

    let question1 = document.querySelector('input[name="question1"]:checked');
    if (question1 && question1.value === "10") {
        score++;
    }

    let question2 = document.querySelector('input[name="question2"]:checked');
    if (question2 && question2.value === "20") {
        score++;
    }

    let finalFeedback = document.getElementById('final-feedback');
    if (score == 2) {
        finalFeedback.innerHTML = "🎉 You got all the answers correct! Great job!";
        finalFeedback.style.color = "#4caf50";
    } else {
        finalFeedback.innerHTML = "😕 You got " + score + " out of 2 correct. Keep practicing!";
        finalFeedback.style.color = "#d32f2f";
    }
}

function checkInteractiveQuiz() {
    let answers = {
        quiz1: "b",
        quiz2: "b",
        quiz3: "b"
    };

    let score = 0;
    let feedback = document.getElementById('interactive-feedback');

    for (let question in answers) {
        let selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    if (score === 3) {
        feedback.innerHTML = "🎉 You answered all questions correctly! Awesome job!";
        feedback.style.color = "#4caf50";
    } else {
        feedback.innerHTML = "😕 You got " + score + " out of 3 correct. Keep practicing and you'll get better!";
        feedback.style.color = "#d32f2f";
    }
}
